
import { Moon, Sun } from "lucide-react";
import { useThemeContext } from "../contexts/ThemeContext";
import { motion } from "framer-motion";

export function ThemeToggle() {
  const { mode, toggleMode } = useThemeContext();

  return (
    <button
      className="relative overflow-hidden rounded-full p-2 glass dark:glass-dark hover:bg-white/20 transition-all"
      onClick={toggleMode}
      aria-label="Toggle theme"
    >
      <div className="relative z-10">
        {mode === 'light' ? (
          <Sun className="h-5 w-5 transition-all" />
        ) : (
          <Moon className="h-5 w-5 transition-all" />
        )}
      </div>
      <motion.div
        initial={false}
        animate={{ 
          scale: mode === 'dark' ? 1 : 0,
          x: mode === 'dark' ? 0 : 20,
          y: mode === 'dark' ? 0 : -20
        }}
        transition={{ type: "spring", damping: 20, stiffness: 300 }}
        className="absolute inset-0 bg-secondary rounded-full"
      />
    </button>
  );
}
