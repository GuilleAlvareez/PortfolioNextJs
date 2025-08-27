"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot, Sparkles } from "lucide-react";
import { useT, useTranslationContext } from '@/contexts/TranslationContext';

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

export default function Chatbot() {
  const t = useT();
  const { isLoading: translationsLoading, language } = useTranslationContext();
  // Controla si la ventana del chat está abierta o cerrada
  const [isOpen, setIsOpen] = useState(false);
  // Almacena todos los mensajes de la conversación
  const [messages, setMessages] = useState<Message[]>([]);
  // Controla el valor del input de texto
  const [inputValue, setInputValue] = useState("");
  // Indica si se está enviando un mensaje
  const [isLoading, setIsLoading] = useState(false);
  // Indica si el bot está "pensando" (procesando respuesta)
  const [isThinking, setIsThinking] = useState(false);
  // Referencias para scroll automático y focus del input
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const welcomeInitialized = useRef(false);

  // Hace scroll automático al final de los mensajes
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Scroll automático cuando se añaden nuevos mensajes
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Focus automático en el input cuando se abre el chat
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Inicializa el mensaje de bienvenida cuando las traducciones están listas
  useEffect(() => {
    const welcomeText = t('chatbot_welcome');
    // Solo inicializar una vez cuando las traducciones están cargadas
    if (!translationsLoading && !welcomeInitialized.current && welcomeText !== 'chatbot_welcome') {
      setMessages([
        {
          id: 1,
          text: welcomeText,
          sender: "bot",
          timestamp: new Date(),
        },
      ]);
      welcomeInitialized.current = true;
    }
  }, [t, translationsLoading]);

  // Actualiza el mensaje de bienvenida cuando cambia el idioma
  useEffect(() => {
    const welcomeText = t('chatbot_welcome');
    if (welcomeInitialized.current && !translationsLoading && welcomeText !== 'chatbot_welcome') {
      setMessages(prevMessages => {
        if (prevMessages.length > 0 && prevMessages[0].sender === 'bot' && prevMessages[0].text !== welcomeText) {
          return [
            {
              ...prevMessages[0],
              text: welcomeText,
            },
            ...prevMessages.slice(1)
          ];
        }
        return prevMessages;
      });
    }
  }, [language, t, translationsLoading]);

  // Maneja el envío de mensajes del usuario y la respuesta del bot
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    // Crear mensaje del usuario
    const userMessage: Message = {
      id: Date.now(),
      text: inputValue.trim(),
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);
    setIsThinking(true);

    // Crear mensaje del bot vacío para streaming
    const botMessageId = Date.now() + 1;
    const botMessage: Message = {
      id: botMessageId,
      text: "",
      sender: "bot",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, botMessage]);

    try {
      // Enviar conversación completa a la API del chatbot
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: [...messages, userMessage].map((msg) => ({
            role: msg.sender === "user" ? "user" : "assistant",
            content: msg.text,
          })),
        }),
      });

      if (!response.ok) {
        throw new Error("Error en la respuesta del servidor");
      }

      // Ocultar la animación de pensando cuando comienza a recibir la respuesta
      setIsThinking(false);

      // Procesar respuesta streaming del bot
      const reader = response.body?.getReader();
      if (!reader) {
        throw new Error("No se pudo leer la respuesta");
      }

      const decoder = new TextDecoder();
      let accumulatedText = "";

      try {
        // Leer el stream de datos en tiempo real
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          const chunk = decoder.decode(value);
          const lines = chunk.split("\n");

          // Procesar cada línea del stream SSE
          for (const line of lines) {
            if (line.startsWith("data: ")) {
              try {
                const data = JSON.parse(line.slice(6));
                if (data.content) {
                  // Dividir el contenido en caracteres individuales para efecto de escritura
                  const characters = data.content.split("");
                  for (const char of characters) {
                    accumulatedText += char;
                    setMessages((prev) =>
                      prev.map((msg) =>
                        msg.id === botMessageId
                          ? { ...msg, text: accumulatedText }
                          : msg
                      )
                    );
                    // Pausa entre caracteres para simular escritura en tiempo real
                    await new Promise((resolve) => setTimeout(resolve, 20));
                  }
                }
              } catch (e) {
                // Ignorar líneas malformadas del stream
              }
            }
          }
        }
      } finally {
        reader.releaseLock();
      }
    } catch (error) {
      console.error("Error al enviar mensaje:", error);
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === botMessageId
            ? {
                ...msg,
                text: "Lo siento, ha ocurrido un error. Por favor, inténtalo de nuevo más tarde.",
              }
            : msg
        )
      );
    } finally {
      setIsLoading(false);
      setIsThinking(false);
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("es-ES", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };
  
  return (
    <>
      {/* Botón flotante */}
      <div className="fixed bottom-8 right-8 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative"
        aria-label="Abrir chat inteligente"
      >
        {/* Ondas de energía animadas */}
        <div className="absolute inset-0 rounded-full">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/30 to-teal-400/30 animate-ping"></div>
          <div className="absolute inset-2 rounded-full bg-gradient-to-r from-cyan-400/20 to-teal-400/20 animate-ping animation-delay-200"></div>
          <div className="absolute inset-4 rounded-full bg-gradient-to-r from-cyan-400/10 to-teal-400/10 animate-ping animation-delay-500"></div>
        </div>
        
        {/* Botón principal con gradiente y glassmorphism */}
        <div className="relative w-16 h-16 bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl rounded-full flex items-center justify-center border border-cyan-400/30 shadow-2xl group-hover:shadow-cyan-400/20 transition-all duration-500 group-hover:scale-110">
          {/* Brillo interno */}
          <div className="absolute inset-1 rounded-full bg-gradient-to-br from-cyan-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          {/* Icono con animación */}
          <div className="relative z-10">
            <Sparkles
              size={24}
              className="text-cyan-400 group-hover:text-cyan-300 transition-all duration-300 group-hover:rotate-12"
            />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-full opacity-75 group-hover:opacity-100 animate-pulse"></div>
          </div>
        </div>
      </button>
    </div>

      {/* Ventana del chat */}
      <div className={`floatWindow ${isOpen ? "visible" : ""}`}>
        {/* Ventana del chat */}
        <div className="relative w-full max-w-md h-[500px] bg-gray-800/60 backdrop-blur-xl rounded-xl shadow-2xl border border-gray-700 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-700 bg-gray-900/60 backdrop-blur-xl rounded-t-lg">
            <div className="flex items-center space-x-2">
              <Bot size={20} className="text-blue-400" />
              <h3 className="text-white font-semibold">Asistente IA</h3>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Cerrar chat"
            >
              <X size={20} />
            </button>
          </div>

          {/* Mensajes */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              (message.sender === 'user' || (message.sender === 'bot' && message.text.trim() !== '')) && (
              <div
                key={message.id}
                className={`flex ${
                  message.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] rounded-lg px-4 py-2 ${
                    message.sender === "user"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-700 text-gray-100"
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                  <p
                    className={`text-xs mt-1 ${
                      message.sender === "user"
                        ? "text-blue-200"
                        : "text-gray-400"
                    }`}
                  >
                  </p>
                </div>
              </div> 
            )))}

            {/* Animación de pensando */}
            {isThinking && (
              <div className="flex justify-start">
                <div className="bg-gray-700 text-gray-100 rounded-lg px-4 py-3">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                    <div 
                      className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"
                      style={{ animationDelay: "0.2s" }}
                    ></div>
                    <div 
                      className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"
                      style={{ animationDelay: "0.4s" }}
                    ></div>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form
            onSubmit={handleSubmit}
            className="p-4 border-t border-gray-700"
          >
            <div className="flex space-x-2">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Escribe tu mensaje..."
                disabled={isLoading}
                className="flex-1 bg-gray-700 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={!inputValue.trim() || isLoading}
                className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 text-white rounded-lg px-4 py-2 transition-colors"
              >
                <Send size={16} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

