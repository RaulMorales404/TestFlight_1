import { useEffect, useRef } from 'react';

const useDebouncedSearch = (textInput: string, delay: number = 500, action: (text: string) => void) => {
  const handlerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Limpiar el temporizador anterior si existe
    if (handlerRef.current) {
      clearTimeout(handlerRef.current);
    }

    // Establecer un nuevo temporizador
    handlerRef.current = setTimeout(() => {
      action(textInput);
    }, delay);

    // Limpieza del efecto
    return () => {
      if (handlerRef.current) {
        clearTimeout(handlerRef.current);
      }
    };
  }, [textInput]);
};

export default useDebouncedSearch;
