import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const addEventListeners = () => {
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseenter", onMouseEnter);
      document.addEventListener("mouseleave", onMouseLeave);
      document.addEventListener("mousedown", onMouseDown);
      document.addEventListener("mouseup", onMouseUp);
    };

    const removeEventListeners = () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
    };

    let animationFrameId: number;
    let lastX = 0;
    let lastY = 0;

    const onMouseMove = (e: MouseEvent) => {
      // Throttle updates using requestAnimationFrame
      if (!animationFrameId) {
        animationFrameId = requestAnimationFrame(() => {
          setPosition({ x: e.clientX, y: e.clientY });
          lastX = e.clientX;
          lastY = e.clientY;

          // Check for hovered elements only if the cursor has moved significantly
          const hoverElement = document.elementFromPoint(lastX, lastY);

          // Check if the hovered element is clickable
          const isLink =
            hoverElement instanceof HTMLAnchorElement ||
            hoverElement instanceof HTMLButtonElement ||
            hoverElement?.closest("a") ||
            hoverElement?.closest("button") ||
            window.getComputedStyle(hoverElement as Element).cursor === "pointer";

          setLinkHovered(!!isLink);

          animationFrameId = 0; // Reset the animation frame ID
        });
      }
    };

    const onMouseDown = () => {
      setClicked(true);
    };

    const onMouseUp = () => {
      setClicked(false);
    };

    const onMouseLeave = () => {
      setHidden(true);
    };

    const onMouseEnter = () => {
      setHidden(false);
    };

    addEventListeners();
    return () => {
      removeEventListeners();
      if (animationFrameId) cancelAnimationFrame(animationFrameId); // Clean up animation frame
    };
  }, []);

  // Don't render cursor if it's hidden
  if (hidden) return null;

  return (
    <>
      {/* Cursor dot */}
      <motion.div
        className="custom-cursor fixed top-0 left-0 w-5 h-5 bg-primary rounded-full mix-blend-difference pointer-events-none z-[9999] custom-cursor-dot"
        style={{
          transform: `translate(${position.x - 2.5}px, ${position.y - 2.5}px)`,
          willChange: "transform", // Enable hardware acceleration
          boxShadow:
            "0 0 10px rgba(255, 255, 255, 0.5), 0 0 20px rgba(255, 255, 255, 0.3), 0 0 30px rgba(255, 255, 255, 0.2)",
        }}
        animate={{
          scale: clicked ? 0.5 : linkHovered ? 1.5 : 1,
        }}
        transition={{
          scale: {
            type: "spring",
            stiffness: 300,
            damping: 15,
            mass: 0.1,
          },
        }}
      />

      {/* Cursor outline */}
      <motion.div
        className="custom-cursor fixed top-0 left-0 w-7 h-7 rounded-full border border-primary pointer-events-none z-[9998] custom-cursor-outline"
        style={{
          transform: `translate(${position.x - 3.5}px, ${position.y - 3.5}px)`,
          willChange: "transform", // Enable hardware acceleration
          boxShadow:
            "0 0 15px rgba(255, 255, 255, 0.3), 0 0 30px rgba(255, 255, 255, 0.1)",
        }}
        animate={{
          scale: clicked ? 0.5 : linkHovered ? 1.5 : 1,
        }}
        transition={{
          scale: {
            type: "spring",
            stiffness: 200,
            damping: 10,
            mass: 0.2,
          },
        }}
      />

      <style dangerouslySetInnerHTML={{
        __html: `
          body {
            cursor: none !important;
          }
          a, button, [role="button"], [type="button"] {
            cursor: none !important;
          }
          .custom-cursor-aware {
            z-index: 50 !important;
          }
        `,
      }} />
    </>
  );
}