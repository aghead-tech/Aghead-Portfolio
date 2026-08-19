"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

interface PreloadContextType {
  isPreloaded: boolean;
  setIsPreloaded: (value: boolean) => void;
}

const PreloadContext = createContext<PreloadContextType | undefined>(undefined);

export function PreloadProvider({ children }: { children: React.ReactNode }) {
  const [isPreloaded, setIsPreloaded] = useState(false);

  return (
    <PreloadContext.Provider value={{ isPreloaded, setIsPreloaded }}>
      {children}
    </PreloadContext.Provider>
  );
}

export function usePreload() {
  const context = useContext(PreloadContext);
  if (context === undefined) {
    throw new Error("usePreload must be used within a PreloadProvider");
  }
  return context;
}
