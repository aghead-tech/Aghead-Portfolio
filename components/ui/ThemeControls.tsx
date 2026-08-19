/*--====-- Theme Controls Component --====--*/
"use client";
import React, { useState } from "react";
import { Sun, Moon, Palette } from "lucide-react";
import { useTheme } from "./ThemeContext";
import { themeColors, ThemeColor } from "../../data/themeData";

interface ThemeControlsProps {
  themes?: ThemeColor[];
}

export function ThemeControls({
  themes = themeColors,
}: ThemeControlsProps = {}) {
  const [isThemeMenuOpen, setIsThemeMenuOpen] = useState(false);
  const { mode, color, toggleMode, setThemeColor } = useTheme();

  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-2 bg-card/90 backdrop-blur-lg border border-border rounded-lg p-2 shadow-lg">
      {/* Theme Mode Toggle */}
      <button
        onClick={toggleMode}
        className="p-2 rounded-lg hover:bg-accent transition-colors"
        aria-label="Toggle theme mode"
        title={`Switch to ${mode === "dark" ? "light" : "dark"} mode`}
      >
        {mode === "dark" ? (
          <Sun className="w-5 h-5" />
        ) : (
          <Moon className="w-5 h-5" />
        )}
      </button>

      {/* Theme Color Picker */}
      <div className="relative">
        <button
          onClick={() => setIsThemeMenuOpen(!isThemeMenuOpen)}
          className="p-2 rounded-lg hover:bg-accent transition-colors"
          aria-label="Change theme color"
          title="Change theme color"
        >
          <Palette className="w-5 h-5" />
        </button>

        {isThemeMenuOpen && (
          <>
            {/* Backdrop to close menu when clicking outside */}
            <div
              className="fixed inset-0 z-[-1]"
              onClick={() => setIsThemeMenuOpen(false)}
            />

            {/* Theme Color Menu */}
            <div className="absolute right-full mr-2 top-0 w-48 bg-card border border-border rounded-lg shadow-lg py-2">
              {themes.map((theme) => (
                <button
                  key={theme.value}
                  onClick={() => {
                    setThemeColor(theme.value);
                    setIsThemeMenuOpen(false);
                  }}
                  className={`w-full px-4 py-2 text-left hover:bg-accent transition-colors ${
                    color === theme.value ? "bg-accent font-semibold" : ""
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span
                      className={`w-3 h-3 rounded-full ${
                        theme.value === "luxurious"
                          ? "bg-linear-to-r from-[#ec9a48] to-[#edae4d]"
                          : theme.value === "blue"
                          ? "bg-linear-to-r from-[#00d4ff] to-[#1e5eff]"
                          : "bg-linear-to-r from-[#ed213a] to-[#93291e]"
                      }`}
                    />
                    {theme.name}
                  </span>
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
