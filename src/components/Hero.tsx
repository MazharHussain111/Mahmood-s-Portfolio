
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden glassmorphism-section">
      {/* Content */}
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-3 py-1 mb-6 text-xs font-medium uppercase tracking-wider border border-white/20 rounded-full glass dark:glass-dark">
              Excellence in Estimation
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-gradient"
          >
            Accurate Estimates
            <br className="hidden sm:block" />  Built from Your Blueprint
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-10 glass dark:glass-dark p-4 rounded-lg"
          >
         Turning Vision into Reality with Precision, Trust, and Cost-Effective Construction Solutions
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-4"
          >
            <a
              href="#projects"
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-primary to-primary/80 text-primary-foreground font-medium transition-all hover:translate-y-[-2px] hover:shadow-lg"
            >
              View Our Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-lg border border-white/20 glass dark:glass-dark hover:bg-white/20 transition-all"
            >
              Get a Free Quote
            </a>
          </motion.div>
        </div>
      </div>
      
      <motion.a
        href="#about"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
      >
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </motion.a>
    </section>
  );
}
