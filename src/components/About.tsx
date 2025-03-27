import { motion } from "framer-motion";
import { AboutPopup } from "./AboutPopup";
import Image from './Mahmood_Image-removebg-preview.png'; // Ensure the path is correct

export function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden glassmorphism-section">
      <div className="container section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <span className="inline-block px-3 py-1 mb-4 text-xs font-medium uppercase tracking-wider border border-border rounded-full">
              About Me
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Building Dreams Within Budgets: Your Estimation Engineer for Cost-Effective Construction Solutions

            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
            Welcome to my portfolio! I'm a dedicated Civil Engineer driven by a passion for precision and a commitment to excellence in construction cost estimation. With a distinguished academic background, including a Gold Medal in Civil Engineering, I've embarked on a journey marked by innovation, diligence, and client satisfaction.

            </p>
       
            
            <div className="flex flex-wrap gap-3 mb-8">
              {["Excel", "Planswift", "Bluebeam"].map((skill) => (
                <span key={skill} className="px-3 py-1 text-sm rounded-full bg-secondary text-secondary-foreground">
                  {skill}
                </span>
              ))}
            </div>
            
            <AboutPopup />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <div className="relative z-10 transform hover:scale-105 transition-transform duration-300">
              <div className="absolute -inset-0.5 rounded-xl  blur opacity-75"></div>
              <div className="relative aspect-square overflow-hidden rounded-xl ">
                {/* Replace the placeholder with the image */}
                <img
                  src={Image}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}