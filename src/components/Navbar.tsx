import { useState, useEffect } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { ThemeSelector } from "./ThemeSelector";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Services", href: "#services" },
    { name: "Timeline", href: "#timeline" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 rounded-full px-4 w-auto max-w-[95%] md:max-w-[90%] ${
        isScrolled 
          ? "py-2 glass dark:glass-dark shadow-lg backdrop-blur-lg" 
          : "py-3 bg-background/50 backdrop-blur-md"
      }`}
    >
      <div className="flex justify-between items-center w-full">
        {/* Logo or Brand Name (always visible) */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-lg font-bold"
        >
          NexaEstimate
        </motion.div>

        {/* Desktop Navigation */}
        <motion.nav 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="hidden md:flex items-center space-x-6 px-4"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium transition-colors hover:text-primary relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full"
            >
              {link.name}
            </a>
          ))}
        </motion.nav>

        {/* Right side controls - Theme Selector, Theme Toggle, and Hamburger Menu */}
        <div className="flex items-center space-x-2">
          <ThemeSelector className="hidden md:block" /> {/* Hide on mobile */}
          <ThemeToggle className="hidden md:block" /> {/* Hide on mobile */}
          <button
            className="md:hidden p-1 rounded-md"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glass dark:glass-dark mt-2 rounded-lg overflow-hidden"
          >
            <div className="px-4 py-4 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-base font-medium py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              {/* Add Theme Selector and Theme Toggle to mobile menu */}
              <div className="flex items-center justify-between">
                <ThemeSelector />
                <ThemeToggle />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}