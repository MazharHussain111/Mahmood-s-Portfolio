import { useCallback, useEffect, useState } from "react";
import Particles from "react-particles";
import type { Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";
import { useThemeContext } from "../contexts/ThemeContext";

interface ParticlesBackgroundProps {
  id?: string;
  variant?: "default" | "spider";
}

export function ParticlesBackground({ id = "tsparticles", variant = "default" }: ParticlesBackgroundProps) {
  const { mode } = useThemeContext();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  // If not mounted yet, don't render to avoid SSR issues
  if (!mounted) return null;

  const getParticlesConfig = () => {
    const particleColor = mode === 'dark' ? "#ffffff" : "#000000";
    const linkColor = mode === 'dark' ? "#ffffff" : "#000000";
    const linkOpacity = mode === 'dark' ? 0.2 : 0.2;

    return {
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
          resize: true,
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 100,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: particleColor,
        },
        links: {
          color: linkColor,
          distance: 150,
          enable: true,
          opacity: linkOpacity,
          width: 1,
        },
        collisions: {
          enable: true,
        },
        move: {
          direction: "none" as const,
          enable: true,
          outModes: {
            default: "bounce" as const,
          },
          random: false,
          speed: 3,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 1110,
          },
          value: 51,
        },
        opacity: {
          value: 0.3,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 0, max: 3 },
        },
        position: {
          // Limit particles to the sides of the screen
          x: { min: 100, max: 100 }, // Spread particles horizontally across the screen
          y: { min: 100, max: 100 }, // Spread particles vertically across the screen
        },
      },
      detectRetina: true,
    };
  };

  return (
    <Particles
      id={id}
      init={particlesInit}
      className="fixed inset-0 z-0 pointer-events-none"
      options={getParticlesConfig()}
    />
  );
}