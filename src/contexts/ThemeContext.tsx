
import React, { createContext, useContext, useState, useEffect } from 'react';

// Define all available color themes
export type ThemeColor = 
  | 'default'
  | 'purple'
  | 'blue'
  | 'green'
  | 'red'
  | 'orange'
  | 'pink'
  | 'teal'
  | 'amber'
  | 'indigo'
  | 'gray';

export type ThemeMode = 'light' | 'dark';

interface ThemeContextType {
  theme: ThemeColor;
  mode: ThemeMode;
  setTheme: (theme: ThemeColor) => void;
  toggleMode: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'default',
  mode: 'dark',
  setTheme: () => {},
  toggleMode: () => {},
});

export const useThemeContext = () => useContext(ThemeContext);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeColor>('default');
  const [mode, setMode] = useState<ThemeMode>('dark');

  // Initialize theme and mode from localStorage if available
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme-color') as ThemeColor;
    const savedMode = localStorage.getItem('theme-mode') as ThemeMode;
    
    if (savedTheme) {
      setTheme(savedTheme);
    }
    
    if (savedMode) {
      setMode(savedMode);
      document.documentElement.classList.toggle('dark', savedMode === 'dark');
    } else {
      // Default to dark mode
      localStorage.setItem('theme-mode', 'dark');
      document.documentElement.classList.add('dark');
    }
  }, []);

  // Apply theme color to the body data attribute
  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('theme-color', theme);
  }, [theme]);

  const toggleMode = () => {
    const newMode = mode === 'light' ? 'dark' : 'light';
    setMode(newMode);
    document.documentElement.classList.toggle('dark', newMode === 'dark');
    localStorage.setItem('theme-mode', newMode);
  };

  const handleSetTheme = (newTheme: ThemeColor) => {
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, mode, setTheme: handleSetTheme, toggleMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
