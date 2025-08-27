'use client'

import { useState, useEffect, useCallback } from 'react'

// Tipos para el sistema de traducción
export type Language = 'es' | 'en'
export type TranslationKey = string
export type Translations = Record<TranslationKey, string>

interface UseTranslationReturn {
  t: (key: TranslationKey) => string
  language: Language
  changeLanguage: (lang: Language) => Promise<void>
  isLoading: boolean
  availableLanguages: Language[]
}

// Cache para las traducciones cargadas
const translationCache: Partial<Record<Language, Translations>> = {}

// Función para cargar traducciones desde el archivo JSON
async function fetchTranslations(lang: Language): Promise<Translations> {
  // Si ya está en cache, devolverla
  if (translationCache[lang]) {
    return translationCache[lang]
  }

  try {
    const response = await fetch(`/translations/${lang}.json`)
    if (!response.ok) {
      throw new Error(`Failed to load translations for ${lang}`)
    }
    
    const translations = await response.json()
    
    // Guardar en cache
    translationCache[lang] = translations
    
    return translations
  } catch (error) {
    console.error(`Error loading translations for ${lang}:`, error)
    
    // Fallback a español si falla cargar inglés
    if (lang === 'en') {
      return fetchTranslations('es')
    }
    
    // Si falla cargar español, devolver objeto vacío
    return {}
  }
}

// Función para detectar el idioma del navegador
function getBrowserLanguage(): Language {
  if (typeof window === 'undefined') return 'es'
  
  const browserLang = navigator.language.toLowerCase()
  
  // Si el navegador está en inglés, usar inglés
  if (browserLang.startsWith('en')) {
    return 'en'
  }
  
  // Por defecto, español
  return 'es'
}

// Función para obtener el idioma guardado en localStorage
function getSavedLanguage(): Language | null {
  if (typeof window === 'undefined') return null
  
  try {
    const saved = localStorage.getItem('selectedLanguage') as Language
    return saved === 'es' || saved === 'en' ? saved : null
  } catch {
    return null
  }
}

// Función para guardar el idioma en localStorage
function saveLanguage(lang: Language): void {
  if (typeof window === 'undefined') return
  
  try {
    localStorage.setItem('selectedLanguage', lang)
  } catch (error) {
    console.error('Error saving language to localStorage:', error)
  }
}

export function useTranslation(): UseTranslationReturn {
  const [language, setLanguage] = useState<Language>('es')
  const [translations, setTranslations] = useState<Translations>({})
  const [isLoading, setIsLoading] = useState(true)

  // Función para traducir una clave
  const t = useCallback((key: TranslationKey): string => {
    return translations[key] || key
  }, [translations])

  // Función para cambiar idioma
  const changeLanguage = useCallback(async (lang: Language) => {
    setIsLoading(true)
    
    try {
      const newTranslations = await fetchTranslations(lang)
      setTranslations(newTranslations)
      setLanguage(lang)
      saveLanguage(lang)
    } catch (error) {
      console.error('Error changing language:', error)
    } finally {
      setIsLoading(false)
    }
  }, [])

  // Inicialización del idioma
  useEffect(() => {
    const initializeLanguage = async () => {
      // Prioridad: localStorage > navegador > español por defecto
      const savedLang = getSavedLanguage()
      const browserLang = getBrowserLanguage()
      const initialLang = savedLang || browserLang
      
      await changeLanguage(initialLang)
    }

    initializeLanguage()
  }, [changeLanguage])

  return {
    t,
    language,
    changeLanguage,
    isLoading,
    availableLanguages: ['es', 'en']
  }
}
