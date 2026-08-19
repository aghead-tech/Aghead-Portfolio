# GSAP Animation Hooks

Reusable GSAP animation hooks for creating smooth, scroll-triggered animations throughout your application.

## Available Hooks

### 1. `useGsapFadeIn`

Animates a single element with fade-in effect and optional directional movement.

**Usage Example:**

```tsx
import { useGsapFadeIn } from "@/hooks";

function MyComponent() {
  const elementRef = useGsapFadeIn<HTMLDivElement>({
    direction: "up", // 'up' | 'down' | 'left' | 'right' | 'none'
    distance: 20, // Distance to travel (pixels)
    duration: 0.8, // Animation duration (seconds)
    delay: 0, // Delay before animation starts
    ease: "power2.out", // GSAP easing function
    useScrollTrigger: true, // Enable scroll trigger
    scrollStart: "top 80%", // When to trigger animation
  });

  return <div ref={elementRef}>Animated content</div>;
}
```

### 2. `useGsapStagger`

Animates child elements with a staggered effect.

**Usage Example:**

```tsx
import { useGsapStagger } from "@/hooks";

function NavigationLinks() {
  const listRef = useGsapStagger<HTMLUListElement>({
    direction: "left", // 'up' | 'down' | 'left' | 'right' | 'none'
    distance: 20, // Distance to travel
    duration: 0.6, // Duration per item
    stagger: 0.1, // Delay between each child
    ease: "power2.out",
    useScrollTrigger: true,
    scrollStart: "top 80%",
  });

  return (
    <ul ref={listRef}>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>
  );
}
```

### 3. `useGsapTimeline`

Creates a sequence of animations with precise timing control.

**Usage Example:**

```tsx
import { useGsapTimeline } from "@/hooks";
import { useRef } from "react";

function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useGsapTimeline(
    [
      {
        ref: titleRef,
        from: { opacity: 0, y: 30 },
        to: { opacity: 1, y: 0, duration: 0.8 },
      },
      {
        ref: subtitleRef,
        from: { opacity: 0, y: 20 },
        to: { opacity: 1, y: 0, duration: 0.6 },
        position: "-=0.4", // Overlap with previous animation
      },
      {
        ref: buttonRef,
        from: { opacity: 0, scale: 0.9 },
        to: { opacity: 1, scale: 1, duration: 0.5 },
        position: "-=0.3",
      },
    ],
    {
      ease: "power2.out",
      useScrollTrigger: true,
      scrollStart: "top 80%",
      triggerRef: containerRef,
    }
  );

  return (
    <div ref={containerRef}>
      <h1 ref={titleRef}>Hero Title</h1>
      <p ref={subtitleRef}>Subtitle text</p>
      <button ref={buttonRef}>CTA Button</button>
    </div>
  );
}
```

## Common Options

| Option             | Type                                            | Default            | Description                   |
| ------------------ | ----------------------------------------------- | ------------------ | ----------------------------- |
| `direction`        | `'up' \| 'down' \| 'left' \| 'right' \| 'none'` | `'up'` or `'left'` | Direction of movement         |
| `distance`         | `number`                                        | `20`               | Movement distance in pixels   |
| `duration`         | `number`                                        | `0.8` or `0.6`     | Animation duration in seconds |
| `delay`            | `number`                                        | `0`                | Delay before animation starts |
| `ease`             | `string`                                        | `'power2.out'`     | GSAP easing function          |
| `useScrollTrigger` | `boolean`                                       | `false`            | Enable scroll-based trigger   |
| `scrollStart`      | `string`                                        | `'top 80%'`        | ScrollTrigger start position  |
| `stagger`          | `number`                                        | `0.1`              | Delay between stagger items   |

## Real-World Example: Footer Component

See `components/layout/Footer.tsx` for a complete implementation using all hooks.

```tsx
// Brand name fades in from bottom
const brandNameRef = useGsapFadeIn<HTMLSpanElement>({
  direction: "up",
  useScrollTrigger: true,
  triggerRef: footerRef,
  duration: 0.8,
});

// Navigation links stagger from left
const navLinksRef = useGsapStagger<HTMLUListElement>({
  direction: "left",
  useScrollTrigger: true,
});

// Newsletter form items fade in (no movement)
const newsletterFormRef = useGsapStagger<HTMLFormElement>({
  direction: "none",
  useScrollTrigger: true,
  stagger: 0.15,
});
```

## Tips

1. **Performance**: Always set `useScrollTrigger: true` for below-the-fold content
2. **Timing**: Use `delay` for simple delays, `position` in timeline for complex sequences
3. **Direction**: Use `'none'` for pure fade-in without movement
4. **Stagger**: Smaller values (0.05-0.1) feel snappier, larger (0.15-0.3) more dramatic
5. **ScrollStart**: `'top 80%'` triggers when element is 80% down the viewport

## TypeScript Support

All hooks are fully typed with TypeScript. Pass the element type as a generic:

```tsx
useGsapFadeIn<HTMLDivElement>();
useGsapStagger<HTMLUListElement>();
```
