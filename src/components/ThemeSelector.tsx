
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useThemeContext, ThemeColor } from '../contexts/ThemeContext';
import { ChevronDown, Check } from 'lucide-react';

const themes: { id: ThemeColor; name: string; color: string }[] = [
  { id: 'default', name: 'Default', color: '#333333' },
  { id: 'purple', name: 'Purple', color: '#8B5CF6' },
  { id: 'blue', name: 'Blue', color: '#0EA5E9' },
  { id: 'green', name: 'Green', color: '#10B981' },
  { id: 'red', name: 'Red', color: '#EF4444' },
  { id: 'orange', name: 'Orange', color: '#F97316' },
  { id: 'pink', name: 'Pink', color: '#EC4899' },
  { id: 'teal', name: 'Teal', color: '#14B8A6' },
  { id: 'amber', name: 'Amber', color: '#F59E0B' },
  { id: 'indigo', name: 'Indigo', color: '#6366F1' },
  { id: 'gray', name: 'Gray', color: '#71717A' }
];

export function ThemeSelector() {
  const { theme, setTheme } = useThemeContext();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const currentTheme = themes.find(t => t.id === theme) || themes[0];

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-full glass dark:glass-dark hover:bg-white/20 transition-all"
      >
        <span className="hidden sm:inline">Themes</span>
        <div 
          className="w-4 h-4 rounded-full" 
          style={{ backgroundColor: currentTheme.color }}
        />
        <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 w-56 rounded-md shadow-lg z-50 overflow-hidden glass dark:glass-dark"
          >
            <div className="py-2">
              {themes.map((themeOption) => (
                <button
                  key={themeOption.id}
                  onClick={() => {
                    setTheme(themeOption.id);
                    setIsOpen(false);
                  }}
                  className="flex items-center justify-between w-full px-4 py-2 text-sm hover:bg-white/20 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div 
                      className="w-4 h-4 rounded-full" 
                      style={{ backgroundColor: themeOption.color }}
                    />
                    <span>{themeOption.name}</span>
                  </div>
                  {theme === themeOption.id && (
                    <Check className="h-4 w-4" />
                  )}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
