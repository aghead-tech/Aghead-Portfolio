/*--====-- GSAP Button Effects Hook --====--*/
import { useRef, useState, useCallback } from 'react';
import { gsap } from 'gsap';

/*--====-- Ripple Interface --====--*/
interface Ripple {
  id: string;
  x: number;
  y: number;
}

export function useButtonGsapEffects() {
  /*--====-- Refs for GSAP Animations --====--*/
  const buttonRef = useRef<HTMLButtonElement | HTMLAnchorElement | null>(null);
  const circleRef = useRef<HTMLDivElement>(null);
  const rippleCounterRef = useRef(0);
  
  /*--====-- Ripple State --====--*/
  const [ripples, setRipples] = useState<Ripple[]>([]);

  /*--====-- Helper: Get Relative Position --====--*/
  const getRelativePosition = (e: React.MouseEvent) => {
    if (!buttonRef.current) return { relX: 0, relY: 0 };
    const rect = buttonRef.current.getBoundingClientRect();
    return {
      relX: e.clientX - rect.left,
      relY: e.clientY - rect.top,
    };
  };

  /*--====-- Mouse Enter: Bubble Explode Effect --====--*/
  const handleMouseEnter = (e: React.MouseEvent, disabled: boolean, loading: boolean) => {
    if (disabled || loading || !circleRef.current) return;
    
    const { relX, relY } = getRelativePosition(e);
    
    /*--====-- Kill any existing animations on circle --====--*/
    gsap.killTweensOf(circleRef.current);
    
    /*--====-- Position circle at entry point --====--*/
    gsap.set(circleRef.current, {
      left: relX,
      top: relY,
      scale: 0,
      opacity: 0.5,
    });
    
    /*--====-- Animate explode --====--*/
    gsap.to(circleRef.current, {
      scale: 2.5,
      opacity: 0,
      duration: 0.6,
      ease: 'power2.out',
    });
  };

  /*--====-- Mouse Leave: Bubble Desplode Effect --====--*/
  const handleMouseLeave = (e: React.MouseEvent, disabled: boolean, loading: boolean) => {
    if (disabled || loading || !circleRef.current) return;
    
    const { relX, relY } = getRelativePosition(e);
    
    /*--====-- Kill any existing animations on circle --====--*/
    gsap.killTweensOf(circleRef.current);
    
    /*--====-- Position circle at exit point --====--*/
    gsap.set(circleRef.current, {
      left: relX,
      top: relY,
      scale: 2.5,
      opacity: 0,
    });
    
    /*--====-- Animate desplode --====--*/
    gsap.to(circleRef.current, {
      scale: 0,
      opacity: 0.5,
      duration: 0.4,
      ease: 'power2.in',
      onComplete: () => {
        if (circleRef.current) {
          gsap.to(circleRef.current, {
            opacity: 0,
            duration: 0.2,
          });
        }
      },
    });
  };

  /*--====-- Click Handler: Ripple Effect --====--*/
  const handleClick = (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>,
    disabled: boolean,
    loading: boolean,
    onClick?: (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void
  ) => {
    if (disabled || loading) return;
    
    const { relX, relY } = getRelativePosition(e);
    
    /*--====-- Generate unique ID for ripple --====--*/
    rippleCounterRef.current += 1;
    const rippleId = `ripple-${Date.now()}-${rippleCounterRef.current}`;
    
    /*--====-- Create new ripple --====--*/
    const newRipple: Ripple = {
      id: rippleId,
      x: relX,
      y: relY,
    };
    
    setRipples((prev) => [...prev, newRipple]);
    
    /*--====-- Remove ripple after animation --====--*/
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== rippleId));
    }, 650);
    
    /*--====-- Call parent onClick --====--*/
    onClick?.(e);
  };

  /*--====-- Ripple Ref Callback --====--*/
  const rippleRefCallback = useCallback((element: HTMLSpanElement | null, ripple: Ripple) => {
    if (element) {
      /*--====-- Kill any existing animations on this element --====--*/
      gsap.killTweensOf(element);
      
      /*--====-- Animate ripple when element is mounted --====--*/
      gsap.fromTo(
        element,
        {
          scale: 0,
          opacity: 0.8,
        },
        {
          scale: 4,
          opacity: 0,
          duration: 0.6,
          ease: 'power2.out',
        }
      );
    }
  }, []);

  return {
    buttonRef,
    circleRef,
    ripples,
    handleMouseEnter,
    handleMouseLeave,
    handleClick,
    rippleRefCallback,
  };
}
