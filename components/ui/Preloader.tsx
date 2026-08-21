"use client";

import React, { useEffect } from "react";
import { usePreload } from "@/hooks/usePreloadContext";

export function Preloader() {
  const { setIsPreloaded } = usePreload();

  useEffect(() => {
    setIsPreloaded(true);
  }, [setIsPreloaded]);

  return null;
}