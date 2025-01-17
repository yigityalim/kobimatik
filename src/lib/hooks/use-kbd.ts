import React, { useEffect } from 'react';

export function useKbd() {
  const [key, setKey] = React.useState<string | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key.toUpperCase();
      const el = document.querySelector(`[data-kbd="${key}"]`);
      if (el) {
        el.classList.add('kbd-active');
        setKey(key);
      }
    };
    const handleKeyUp = () => {
      const el = document.querySelector(`[data-kbd="${key}"]`);
      if (el) {
        el.classList.remove('kbd-active');
        setKey(null);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  return key;
}
