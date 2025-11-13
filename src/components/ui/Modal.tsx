"use client";
import { useEffect } from 'react';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export default function Modal({ isOpen, onClose, title, children }: ModalProps) {
  // Cerrar modal con tecla Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevenir scroll del body cuando el modal está abierto
      document.body.style.overflow = 'hidden';
    }

    // Función de limpieza que se ejecuta cuando el componente se desmonta
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  // ¡Esta es la línea más importante!
  // Si el modal no está abierto, no renderiza nada.
  if (!isOpen) {
    return null;
  }

  return (
    // Portal del modal: ocupa toda la pantalla
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-in fade-in-0 duration-300"
      aria-modal="true"
      role="dialog"
    >
      {/* Overlay: fondo oscuro que cierra el modal al hacer clic */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Contenedor del Modal: aquí aplicamos la animación de escala */}
      <div 
        className={`relative bg-gray-900 border border-gray-700 rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-in fade-in-0 zoom-in-95 transition-all duration-100 ease-in-out ${isOpen ? "scale-100" : "scale-0"}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-700">
          <h2 className="text-xl font-semibold text-white">
            {title}
          </h2>
          <button
            onClick={onClose}
            aria-label="Cerrar modal"
            className="text-gray-400 hover:text-white transition-colors p-1 rounded-md hover:bg-gray-800"
          >
            <X size={20} />
          </button>
        </div>
        
        {/* Contenido */}
        <div className="p-6">
          {children}
        </div>
      </div>
    </div>
  );
}