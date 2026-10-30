import React, { createContext, useContext, useState, useEffect } from 'react';
import { PALETTES, getPaletteById } from '../data/palettesData';

const ThemeContext = createContext();

export const THEMES = PALETTES;

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('suhani_portfolio_theme');
    if (saved && PALETTES.some((p) => p.id === saved)) {
      return saved;
    }
    // Default to Midnight Luxury (#111318 / #C6A96B) for premium look
    return 'palette-01';
  });

  const activePalette = getPaletteById(theme);

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-theme', theme);
    localStorage.setItem('suhani_portfolio_theme', theme);
  }, [theme]);

  const changeTheme = (newThemeId) => {
    if (PALETTES.some((p) => p.id === newThemeId)) {
      setTheme(newThemeId);
    }
  };

  const nextTheme = () => {
    const currentIndex = PALETTES.findIndex((p) => p.id === theme);
    const nextIndex = (currentIndex + 1) % PALETTES.length;
    setTheme(PALETTES[nextIndex].id);
  };

  const prevTheme = () => {
    const currentIndex = PALETTES.findIndex((p) => p.id === theme);
    const prevIndex = (currentIndex - 1 + PALETTES.length) % PALETTES.length;
    setTheme(PALETTES[prevIndex].id);
  };

  const toggleTheme = () => {
    // Quick toggle between top dark theme (Palette 01) and top light theme (Palette 02)
    setTheme((prev) => (prev === 'palette-01' ? 'palette-02' : 'palette-01'));
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        activePalette,
        toggleTheme,
        changeTheme,
        nextTheme,
        prevTheme,
        themes: PALETTES,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export default ThemeContext;
