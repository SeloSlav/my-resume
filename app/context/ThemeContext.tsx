'use client';

import { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { ContentMode } from '../config/content';

interface ThemeContextType {
  mode: ContentMode;
  toggleMode: () => void;
  isSimpleMode: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<ContentMode>('simple');

  const toggleMode = useCallback(() => {
    const newMode = mode === 'tech' ? 'simple' : 'tech';
    setMode(newMode);
    
    if (newMode === 'simple') {
      document.body.classList.add('light-mode');
    } else {
      document.body.classList.remove('light-mode');
    }
  }, [mode]);

  const isSimpleMode = mode === 'simple';

  return (
    <ThemeContext.Provider value={{ mode, toggleMode, isSimpleMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
