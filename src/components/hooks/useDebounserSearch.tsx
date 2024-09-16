import { useEffect } from 'react';

const useDebouncedSearch = (textInput: string, delay: number = 500, action: (text: string) => void) => {
  useEffect(() => {
    if (textInput.trim() === '') {
      // No hacer nada si textInput está vacío
      return;
    }

    const handler = setTimeout(() => {
      action(textInput);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [textInput, delay, action]);
};

export default useDebouncedSearch;
