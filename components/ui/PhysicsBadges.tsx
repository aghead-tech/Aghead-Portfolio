"use client";

import React, { useEffect, useRef, useState } from "react";
import Matter from "matter-js";

interface PhysicsBadgesProps {
  technologies: string[][];
}

export const PhysicsBadges: React.FC<PhysicsBadgesProps> = ({
  technologies,
}) => {
  const sceneRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const engineRef = useRef<Matter.Engine | null>(null);
  const renderRef = useRef<Matter.Render | null>(null);
  const runnerRef = useRef<Matter.Runner | null>(null);
  const bodiesRef = useRef<{ body: Matter.Body; element: HTMLElement }[]>([]);

  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!sceneRef.current || !containerRef.current || !hasStarted) return;

    // --- Matter JS Setup ---
    const engine = Matter.Engine.create();
    engineRef.current = engine;
    const world = engine.world;

    // Set gravity
    engine.gravity.y = 0.5;
    engine.enableSleeping = true;

    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;

    // Create Renderer
    const render = Matter.Render.create({
      element: sceneRef.current,
      engine: engine,
      options: {
        width,
        height,
        wireframes: false,
        background: "transparent",
      },
    });
    renderRef.current = render;

    // Boundaries
    const wallThickness = 100;
    const ground = Matter.Bodies.rectangle(
      width / 2,
      height + wallThickness / 2,
      width,
      wallThickness,
      { isStatic: true },
    );
    const ceiling = Matter.Bodies.rectangle(
      width / 2,
      -wallThickness / 2,
      width,
      wallThickness,
      { isStatic: true },
    );
    const leftWall = Matter.Bodies.rectangle(
      -wallThickness / 2,
      height / 2,
      wallThickness,
      height,
      { isStatic: true },
    );
    const rightWall = Matter.Bodies.rectangle(
      width + wallThickness / 2,
      height / 2,
      wallThickness,
      height,
      { isStatic: true },
    );

    Matter.World.add(world, [ground, ceiling, leftWall, rightWall]);

    // --- Create Badge Bodies ---
    const badgeElements = Array.from(
      containerRef.current.querySelectorAll(".physics-badge"),
    ) as HTMLElement[];
    const bodies: { body: Matter.Body; element: HTMLElement }[] = [];

    // const allTechs = technologies.flat(); // Unused

    badgeElements.forEach((el) => {
      const w = el.offsetWidth;
      const h = el.offsetHeight;

      // Initial random position within bounds
      const x = Math.random() * (width - w) + w / 2;
      const y = Math.random() * (height - h) + h / 2;

      const body = Matter.Bodies.rectangle(x, y, w, h, {
        chamfer: { radius: h / 2 },
        restitution: 0.5,
        friction: 0.05,
        density: 0.002,
        render: { visible: false },
      });

      // Clamp initial position
      Matter.Body.setPosition(body, {
        x: Math.max(w / 2, Math.min(width - w / 2, x)),
        y: Math.max(h / 2, Math.min(height - h / 2, y)),
      });

      bodies.push({ body, element: el });
      Matter.World.add(world, body);
    });

    bodiesRef.current = bodies;

    // --- Mouse Constraint ---
    const mouse = Matter.Mouse.create(sceneRef.current);
    const mouseConstraint = Matter.MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: { visible: false },
      },
    });

    Matter.World.add(world, mouseConstraint);

    // --- Scroll Fix ---
    // 1. Allow touch scrolling on the canvas
    if (render.canvas) {
      render.canvas.style.touchAction = "pan-y";
    }

    // 2. Remove Matter.js's internal listeners that block scrolling
    // Matter.js attaches these to mouse.element
    if (mouse.element) {
      const mouseData = mouse as any;
      mouse.element.removeEventListener("wheel", mouseData.mousewheel);
      mouse.element.removeEventListener("DOMMouseScroll", mouseData.mousewheel);

      // Remove touch listeners that call preventDefault
      mouse.element.removeEventListener("touchmove", mouseData.mousemove);
      mouse.element.removeEventListener("touchstart", mouseData.mousedown);
      mouse.element.removeEventListener("touchend", mouseData.mouseup);
    }

    // 3. Nullify preventDefault-calling handlers to be safe
    (mouse as any).mousewheel = null;
    // Note: We do NOT nullify mousemove because it doesn't block scroll and we want it for desktop.

    // --- Dynamic Cursor & Interaction Masking ---
    const canvas = render.canvas;
    const wrapper = wrapperRef.current;
    let isDragging = false;

    // Track when we start dragging
    Matter.Events.on(mouseConstraint, "startdrag", () => {
      isDragging = true;
      if (canvas) {
        canvas.style.cursor = "grabbing";
        canvas.style.pointerEvents = "auto";
      }
    });

    // Track when we stop dragging
    Matter.Events.on(mouseConstraint, "enddrag", () => {
      isDragging = false;
      if (canvas) canvas.style.cursor = "grab";
    });

    // Main interaction handler (attached to wrapper to catch all events)
    const handleInteraction = (e: MouseEvent | TouchEvent) => {
      if (!canvas) return;

      const rect = canvas.getBoundingClientRect();
      let clientX, clientY;
      let isTouch = false;

      if ("touches" in e) {
        isTouch = true;
        if (e.touches.length > 0) {
          clientX = e.touches[0].clientX;
          clientY = e.touches[0].clientY;
        } else {
          // Touch end - clear button
          mouse.button = -1;
          return;
        }
      } else {
        clientX = (e as MouseEvent).clientX;
        clientY = (e as MouseEvent).clientY;
      }

      const mouseX = clientX - rect.left;
      const mouseY = clientY - rect.top;
      const mousePosition = { x: mouseX, y: mouseY };

      // Manually update Matter.js mouse for Touch events (since we removed its listeners)
      if (isTouch) {
        mouse.position.x = mousePosition.x;
        mouse.position.y = mousePosition.y;
        // Also update absolute position to ensure physics calculations are correct
        // (If offset is 0, absolute == position, but good to be safe)
        if (mouse.offset) {
          mouse.absolute.x = mouse.position.x + mouse.offset.x;
          mouse.absolute.y = mouse.position.y + mouse.offset.y;
        } else {
          mouse.absolute.x = mouse.position.x;
          mouse.absolute.y = mouse.position.y;
        }

        // Determine button state based on event type
        if (e.type === "touchstart") {
          mouse.button = 0; // Left click
        } else if (e.type === "touchend" || e.type === "touchcancel") {
          mouse.button = -1;
        }
      }

      // Check if mouse is over any badge body using bounds
      let isOverBadge = false;
      for (const { body } of bodies) {
        const bounds = body.bounds;
        if (
          mousePosition.x >= bounds.min.x &&
          mousePosition.x <= bounds.max.x &&
          mousePosition.y >= bounds.min.y &&
          mousePosition.y <= bounds.max.y
        ) {
          isOverBadge = true;
          break;
        }
      }

      // Interaction Logic:
      // If dragging relative to a badge, or hovering a badge, enable interactions.
      // Otherwise, disable interactions to let scroll pass through.
      const shouldBeInteractive = isOverBadge || isDragging;

      canvas.style.pointerEvents = shouldBeInteractive ? "auto" : "none";
      canvas.style.cursor = shouldBeInteractive
        ? isDragging
          ? "grabbing"
          : "grab"
        : "auto";
    };

    if (wrapper) {
      wrapper.addEventListener("mousemove", handleInteraction);
      wrapper.addEventListener("touchstart", handleInteraction, {
        passive: true,
      });
      wrapper.addEventListener("touchmove", handleInteraction, {
        passive: true,
      });
      // Catch touchend on wrapper to release drag
      const handleEnd = (e: MouseEvent | TouchEvent) => {
        mouse.button = -1;
        handleInteraction(e);
      };
      wrapper.addEventListener("touchend", handleEnd, { passive: true });
      wrapper.addEventListener("touchcancel", handleEnd, { passive: true });
    }

    // Initial state
    if (canvas) {
      canvas.style.pointerEvents = "none";
    }

    // --- Resize Handler ---
    const handleResize = () => {
      if (!containerRef.current || !renderRef.current) return;
      const newWidth = containerRef.current.clientWidth;
      const newHeight = containerRef.current.clientHeight;

      render.options.width = newWidth;
      render.options.height = newHeight;
      if (render.canvas) {
        render.canvas.width = newWidth;
        render.canvas.height = newHeight;
      }

      // Update boundaries
      Matter.Body.setPosition(ground, {
        x: newWidth / 2,
        y: newHeight + wallThickness / 2,
      });
      Matter.Body.setVertices(
        ground,
        Matter.Bodies.rectangle(0, 0, newWidth, wallThickness).vertices,
      );

      Matter.Body.setPosition(ceiling, {
        x: newWidth / 2,
        y: -wallThickness / 2,
      });
      Matter.Body.setVertices(
        ceiling,
        Matter.Bodies.rectangle(0, 0, newWidth, wallThickness).vertices,
      );

      Matter.Body.setPosition(rightWall, {
        x: newWidth + wallThickness / 2,
        y: newHeight / 2,
      });
      Matter.Body.setVertices(
        rightWall,
        Matter.Bodies.rectangle(0, 0, wallThickness, newHeight).vertices,
      );

      Matter.Body.setPosition(leftWall, {
        x: -wallThickness / 2,
        y: newHeight / 2,
      });
      Matter.Body.setVertices(
        leftWall,
        Matter.Bodies.rectangle(0, 0, wallThickness, newHeight).vertices,
      );

      // Keep bodies within bounds
      bodies.forEach(({ body, element }) => {
        const w = element.offsetWidth;
        const h = element.offsetHeight;
        const x = Math.max(w / 2, Math.min(newWidth - w / 2, body.position.x));
        const y = Math.max(h / 2, Math.min(newHeight - h / 2, body.position.y));
        Matter.Body.setPosition(body, { x, y });
      });
    };

    window.addEventListener("resize", handleResize);

    // Sync loop
    const runner = Matter.Runner.create();
    runnerRef.current = runner;
    Matter.Runner.run(runner, engine);

    let animationId: number;
    const update = () => {
      if (!containerRef.current) return;
      const currentWidth = containerRef.current.clientWidth;
      const currentHeight = containerRef.current.clientHeight;

      bodies.forEach(({ body, element }) => {
        const w = element.offsetWidth;
        const h = element.offsetHeight;

        // Strict clamping
        let { x, y } = body.position;
        x = Math.max(w / 2, Math.min(currentWidth - w / 2, x));
        y = Math.max(h / 2, Math.min(currentHeight - h / 2, y));

        if (x !== body.position.x || y !== body.position.y) {
          Matter.Body.setPosition(body, { x, y });
          Matter.Body.setVelocity(body, { x: 0, y: 0 }); // Stop if they hit the edge hard
        }

        const angle = body.angle;
        element.style.transform = `translate(${x - w / 2}px, ${
          y - h / 2
        }px) rotate(${angle}rad)`;
        element.style.opacity = "1";

        // --- Keep text upright ---
        const textElement = element.querySelector("span");
        if (textElement) {
          // Normalize angle to [0, 2π]
          let normAngle = angle % (Math.PI * 2);
          if (normAngle < 0) normAngle += Math.PI * 2;

          // Upside down check: between 90° (π/2) and 270° (3π/2)
          const isUpsideDown =
            normAngle > Math.PI / 2 && normAngle < (Math.PI * 3) / 2;
          const targetRotation = isUpsideDown
            ? "rotate(180deg)"
            : "rotate(0deg)";

          if (textElement.style.transform !== targetRotation) {
            textElement.style.transform = targetRotation;
          }
        }
      });
      animationId = requestAnimationFrame(update);
    };

    animationId = requestAnimationFrame(update);

    // --- Cleanup ---
    return () => {
      window.removeEventListener("resize", handleResize);
      if (wrapper) {
        wrapper.removeEventListener("mousemove", handleInteraction);
      }
      cancelAnimationFrame(animationId);
      Matter.Render.stop(render);
      Matter.Runner.stop(runner);
      Matter.Engine.clear(engine);
      Matter.World.clear(world, false);
      if (render.canvas) render.canvas.remove();
    };
  }, [technologies, hasStarted]);

  return (
    <div ref={wrapperRef} className="relative w-full h-full overflow-hidden ">
      {/* Matter JS interaction area */}
      <div ref={sceneRef} className="absolute inset-0 z-20" />

      {/* DOM Elements */}
      <div
        ref={containerRef}
        className="absolute inset-0 pointer-events-none z-10"
      >
        {technologies.flat().map((tech, index) => {
          const isThemeColored = index % 2 === 0;
          return (
            <div
              key={`${tech}-${index}`}
              className={`physics-badge absolute opacity-0 whitespace-nowrap px-5 py-2.5 md:px-6 md:py-3 text-sm md:text-base lg:text-lg rounded-full w-fit pointer-events-auto ${
                isThemeColored
                  ? "bg-linear-to-r from-theme-start to-theme-end text-black font-semibold"
                  : "bg-primary text-primary-foreground font-semibold"
              }`}
              style={{ willChange: "transform" }}
            >
              <span className="inline-block  transition-transform duration-1 ">
                {tech}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
