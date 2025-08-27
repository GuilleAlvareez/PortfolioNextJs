'use client'

import React, { createContext, useContext, ReactNode } from 'react'
import { useTranslation, Language, TranslationKey } from '@/hooks/useTranslation'

// Tipos para el contexto
interface TranslationContextType {
  t: (key: TranslationKey) => string
  language: Language
  changeLanguage: (lang: Language) => Promise<void>
  isLoading: boolean
  availableLanguages: Language[]
}

// Crear el contexto
const TranslationContext = createContext<TranslationContextType | undefined>(undefined)

// Props del provider
interface TranslationProviderProps {
  children: ReactNode
}

// Provider del contexto
export function TranslationProvider({ children }: TranslationProviderProps) {
  const translation = useTranslation()

  return (
    <TranslationContext.Provider value={translation}>
      {children}
    </TranslationContext.Provider>
  )
}

// Hook para usar el contexto de traducción
export function useTranslationContext(): TranslationContextType {
  const context = useContext(TranslationContext)
  
  if (context === undefined) {
    throw new Error('useTranslationContext must be used within a TranslationProvider')
  }
  
  return context
}

// Hook simplificado para obtener solo la función de traducción
export function useT() {
  const { t } = useTranslationContext()
  return t
}
