
import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Projects } from "../components/Projects";
import { Services } from "../components/Services";
import { Timeline } from "../components/Timeline";
import { Skills } from "../components/Skills";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { motion, useScroll, useTransform } from "framer-motion";
// import { CustomCursor } from "../components/CustomCursor";
import { ParticlesBackground } from "../components/ParticlesBackground";
import { Helmet } from "react-helmet";
import { useIsMobile } from "../hooks/use-mobile";
import { useEffect } from "react";
import { useThemeContext } from "../contexts/ThemeContext";

const Index = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const isMobile = useIsMobile();
  const { theme, mode } = useThemeContext();

  // Initialize animations on scroll
  useEffect(() => {
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      
      elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        const isVisible = (elementTop < window.innerHeight - 100) && (elementBottom > 0);
        
        if (isVisible) {
          element.classList.add('is-visible');
        }
      });
    };
    
    window.addEventListener('scroll', animateOnScroll);
    // Initial check
    animateOnScroll();
    
    return () => window.removeEventListener('scroll', animateOnScroll);
  }, []);

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <Helmet>
        <title>Nexa Estimate - Building Your Vision From Ground Up</title>
        <meta name="description" content="We craft beautiful, functional, and sustainable buildings with attention to detail and a commitment to quality craftsmanship." />
        <meta name="keywords" content="construction, building, architecture, sustainable buildings, quality construction" />
        <meta property="og:title" content="Nexa Estimate - Building Your Vision" />
        <meta property="og:description" content="We craft beautiful, functional, and sustainable buildings with attention to detail." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nexaestimate.site" />
        <meta property="og:image" content="/og-image.png" />
        <link rel="canonical" href="https://nexaestimate.site" />
        <meta name="theme-color" content={mode === 'dark' ? '#000000' : '#ffffff'} />
        <meta name="color-scheme" content={mode} />
      </Helmet>
      
      {/* Custom cursor (desktop only) */}
      {/* {!isMobile && <CustomCursor />} */}
      
      {/* Particles background for the entire page with default effect */}
      {!isMobile && (
        <div className="hidden lg:block">
          <ParticlesBackground />
        </div>
      )}
      
      {/* Special particles for home section - works on all screen sizes */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <motion.div style={{ opacity }}>
          <ParticlesBackground id="homeParticles" variant="spider" />
        </motion.div>
      </div>
      
      <div className="relative z-10">
        <Navbar />
        
        {/* Hero section */}
        <div className="section-clip-bottom">
          <Hero />
        </div>
        
        {/* About section with overlap */}
        <div className="section-overlap bg-gradient-to-b from-background/90 to-background/80 section-clip-both glass dark:glass-dark">
          <About />
        </div>
        
        {/* Services section with overlap */}
        <div className="section-overlap-sm bg-gradient-to-b from-background/95 to-background/90 section-clip-both glass dark:glass-dark">
          <Services />
        </div>
        
        {/* Projects section with wave and overlap */}
        <div className="section-overlap-lg section-wave-top bg-gradient-to-b from-secondary/40 to-background/90 glass dark:glass-dark">
          <Projects />
        </div>
        
        {/* Timeline section with overlap */}
        <div className="section-overlap bg-gradient-to-b from-background/95 to-background/90 section-clip-both glass dark:glass-dark">
          <Timeline />
        </div>
        
        {/* Skills section with overlap */}
        <div className="section-overlap-sm bg-gradient-to-b from-background/90 to-secondary/40 section-wave-bottom glass dark:glass-dark">
          <Skills />
        </div>
        
        {/* Contact section with wave top and particles */}
        <div id="contact-section" className="section-wave-top relative">
          <div className="hidden lg:block absolute inset-0 z-0 pointer-events-none">
            <ParticlesBackground id="contactParticles" variant="spider" />
          </div>
          <div className="relative z-10">
            <Contact />
          </div>
        </div>
        
        <Footer />
      </div>
      
      {/* Scroll to top button */}
      <motion.a
        href="#home"
        className="fixed bottom-6 right-6 w-12 h-12 rounded-full glass dark:glass-dark flex items-center justify-center shadow-lg z-20 border border-white/20"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.2 }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </motion.a>
    </div>
  );
};

export default Index;
