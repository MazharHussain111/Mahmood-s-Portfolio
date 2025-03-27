import { motion } from "framer-motion";
import { FileSpreadsheet, Calculator, HardHat } from "lucide-react";

export function Skills() {
  const skills = [
    {
      name: "Bluebeam",
      icon: <FileSpreadsheet className="h-12 w-12" />, // Larger icon size
      color: "from-blue-500 to-blue-700", // Gradient for Bluebeam
    },
    {
      name: "PlanSwift",
      icon: <Calculator className="h-12 w-12" />, // Larger icon size
      color: "from-green-500 to-green-700", // Gradient for PlanSwift
    },
    {
      name: "Microsoft Office",
      icon: <HardHat className="h-12 w-12" />, // Larger icon size
      color: "from-purple-500 to-purple-700", // Gradient for Microsoft Office
    },
  ];

  return (
    <section id="skills" className="py-24 bg-gradient-to-br from-secondary/10 to-secondary/20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="w-64 h-64 rounded-full bg-primary/5 absolute blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{ top: '20%', left: '10%' }}
        />
        <motion.div 
          className="w-96 h-96 rounded-full bg-primary/5 absolute blur-3xl"
          animate={{
            x: [0, -70, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{ bottom: '10%', right: '5%' }}
        />
      </div>

      <div className="container section-container relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-3 py-1 mb-4 text-xs font-medium uppercase tracking-wider border border-border rounded-full">
              Expertise
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Core Skills
            </h2>
            <p className="max-w-2xl mx-auto text-muted-foreground">
              Our proficiency in key tools that drive precision and efficiency in construction estimation.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              {/* 3D Card Effect */}
              <div className="absolute inset-0 bg-gradient-to-br rounded-xl transform group-hover:rotate-3 group-hover:scale-105 transition-all duration-300 opacity-0 group-hover:opacity-100" />
              <div className="glass dark:glass-dark rounded-xl p-8 relative overflow-hidden transform group-hover:-translate-y-2 transition-all duration-300 h-48 flex flex-col items-center justify-center">
                {/* Skill Icon */}
                <div className={`bg-gradient-to-br ${skill.color} p-4 rounded-lg w-16 h-16 flex items-center justify-center mb-4`}>
                  {skill.icon}
                </div>
                
                {/* Skill Name */}
                <h3 className="text-xl font-bold text-center">{skill.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}