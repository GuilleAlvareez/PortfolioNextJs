"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot } from "lucide-react";

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "¡Hola! Soy el asistente virtual de Guillermo. ¿En qué puedo ayudarte? Puedes preguntarme sobre sus habilidades, proyectos, experiencia o cualquier cosa relacionada con su portfolio.",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now(),
      text: inputValue.trim(),
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

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

      const reader = response.body?.getReader();
      if (!reader) {
        throw new Error("No se pudo leer la respuesta");
      }

      const decoder = new TextDecoder();
      let accumulatedText = "";

      try {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          const chunk = decoder.decode(value);
          const lines = chunk.split("\n");

          for (const line of lines) {
            if (line.startsWith("data: ")) {
              try {
                const data = JSON.parse(line.slice(6));
                if (data.content) {
                  // Dividir el contenido en caracteres individuales
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
                    // Pausa de 50ms entre cada letra para hacer la escritura más fluida
                    await new Promise((resolve) => setTimeout(resolve, 20));
                  }
                }
              } catch (e) {
                // Ignorar líneas malformadas
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
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-10 right-12 z-50 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-lg hover:scale-110 transition-all duration-200 animate-pulse"
        aria-label="Abrir chat"
      >
        <MessageCircle size={24} />
      </button>

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
                    {formatTime(message.timestamp)}
                  </p>
                </div>
              </div>
            ))}

            {/* Indicador de carga solo puntitos */}
            {isLoading &&
              !messages.some(
                (msg) => msg.sender === "bot" && msg.text !== ""
              ) && (
                <div className="flex justify-start">
                  <div className="bg-gray-700 text-gray-100 rounded-lg px-4 py-2">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                      <div
                        className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.1s" }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.2s" }}
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
