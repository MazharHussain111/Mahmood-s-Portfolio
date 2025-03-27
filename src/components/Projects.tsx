import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download } from "lucide-react";
import { Project, projects as allProjects, projectCategories } from "./data/ProjectsData";


export function Projects() {
  const [category, setCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(6);
  const filteredProjects = category === "All" 
    ? allProjects 
    : allProjects.filter(project => project.category === category);

  const visibleProjects = filteredProjects.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount(prev => Math.min(prev + 3, filteredProjects.length));
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none bg-black">
        <motion.div 
          className="w-64 h-64 rounded-full absolute blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{ top: '10%', left: '5%' }}
        />
        <motion.div 
          className="w-96 h-96 rounded-full bg-primary/5 absolute blur-3xl"
          animate={{
            x: [0, -70, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{ bottom: '5%', right: '10%' }}
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
            <span className="inline-block px-3 py-1 mb-4 text-xs font-medium uppercase tracking-wider border border-border rounded-full text-gray-500">
              Portfolio
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-700">
              Featured Projects
            </h2>
            <p className="max-w-2xl mx-auto text-muted-foreground">
              Browse our construction and renovation projects by category.
            </p>
          </motion.div>
        </div>

        {/* Category filters */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {projectCategories.map((cat, index) => (
            <button
              key={cat}
              onClick={() => {
                setCategory(cat);
                setVisibleCount(6);
              }}
              className={`px-4 py-2 rounded-full text-sm text-black font-medium transition-all ${
                category === cat 
                  ? "bg-primary text-primary-foreground" 
                  : "bg-secondary hover:bg-secondary/80"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {visibleProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass dark:glass-dark rounded-xl overflow-hidden group relative h-64"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                {/* Project image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${project.image})` }}
                >
                  {/* Overlay for better text visibility */}
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-6">
                    <span className="text-white font-bold text-lg mb-2">{project.title}</span>
                    
                    <div className="flex gap-3 mt-4">
                      <a 
                        href={project.download_link} // Use the download_link property
                        download="My.pdf" // Specify the file name for download
                        className="flex items-center backdrop-blur-sm rounded-full p-2 hover:bg-secondary/50 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                        aria-label="Download sample"
                      >
                        <Download className="h-5 w-5 text-white" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Load more button */}
        {visibleCount < filteredProjects.length && (
          <motion.div 
            className="flex justify-center mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <button
              onClick={handleLoadMore}
              className="flex items-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium transition-all hover:translate-y-[-2px] hover:shadow-lg"
            >
              Load More Projects
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}