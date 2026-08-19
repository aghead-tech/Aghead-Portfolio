//--====-- Theme Context --====--//
"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

type ThemeMode = "light" | "dark";
type ThemeColor = "luxurious" | "blue" | "red";

interface ThemeContextType {
  mode: ThemeMode;
  color: ThemeColor;
  toggleMode: () => void;
  setThemeColor: (color: ThemeColor) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<ThemeMode>("dark");
  const [color, setColor] = useState<ThemeColor>("luxurious");

  useEffect(() => {
    const savedMode = localStorage.getItem("theme-mode") as ThemeMode;
    const savedColor = localStorage.getItem("theme-color") as ThemeColor;

    if (savedMode) setMode(savedMode);
    if (savedColor) setColor(savedColor);
  }, []);

  useEffect(() => {
    const root = document.documentElement;

    // Toggle dark mode class
    if (mode === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    // Set theme color attribute
    root.setAttribute("data-theme", color);

    localStorage.setItem("theme-mode", mode);
    localStorage.setItem("theme-color", color);
  }, [mode, color]);

  const toggleMode = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  const setThemeColor = (newColor: ThemeColor) => {
    setColor(newColor);
  };

  return (
    <ThemeContext.Provider value={{ mode, color, toggleMode, setThemeColor }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
};
