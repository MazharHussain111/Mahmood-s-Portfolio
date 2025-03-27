
import { motion } from "framer-motion";
import { 
  FileSearch, Ruler, Hammer, HardHat, 
  ClipboardCheck, MessageSquareText, FileCode
} from "lucide-react";

export function Timeline() {
  const workflowItems = [
    {
      id: 1,
      title: "Our Estimation Process",
      description: "We carefully review project plans and specifications provided by the client.Our team ensures accuracy by identifying key details and requirements",
      icon: "message-square-text",
    },
    {
      id: 2,
      title: "Digital Takeoff",
      description: "Using advanced takeoff software, we measure and quantify materials directly from the plans.This process ensures precision and eliminates manual errors.",
      icon: "file-code",
    },
    {
      id: 3,
      title: "Real-Time Pricing & Cost Analysis",
      description: "We apply real-time material and labor costs from our database and pricing tools.Our system automatically updates pricing based on market fluctuations and supplier rates.",
      icon: "ruler",
    },
    {
      id: 4,
      title: "Final Estimate & Report",
      description: "A detailed, accurate estimate is prepared, including a cost breakdown.The estimate is then shared with the client for review and approval.",
      icon: "hard-hat",
    },

  ];

  const getIconByName = (iconName: string) => {
    switch (iconName) {
      case "file-search": return <FileSearch className="h-6 w-6" />;
      case "ruler": return <Ruler className="h-6 w-6" />;
      case "hammer": return <Hammer className="h-6 w-6" />;
      case "hard-hat": return <HardHat className="h-6 w-6" />;
      case "clipboard-check": return <ClipboardCheck className="h-6 w-6" />;
      case "message-square-text": return <MessageSquareText className="h-6 w-6" />;
      case "file-code": return <FileCode className="h-6 w-6" />;
      default: return <FileSearch className="h-6 w-6" />;
    }
  };

  return (
    <section id="timeline" className="py-24 bg-gradient-to-br from-secondary/20 to-secondary/40 relative overflow-hidden">
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
              Our Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Estimation Process

            </h2>
            <p className="max-w-2xl mx-auto text-muted-foreground">
              Our streamlined workflow ensures efficiency and quality at every stage
            </p>
          </motion.div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline center line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-border rounded-full"></div>
          
          {/* Workflow items */}
          {workflowItems.map((item, index) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative mb-12 ${
                index % 2 === 0 ? "md:ml-auto md:pl-12 md:pr-0 md:text-left" : "md:mr-auto md:pr-12 md:pl-0 md:text-right"
              } md:w-1/2 px-4`}
            >
              {/* Timeline dot */}
              <div className="absolute left-1/2 md:left-auto transform -translate-x-1/2 md:translate-x-0 top-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center z-10 shadow-lg">
                <div className="text-primary-foreground ">
                  {getIconByName(item.icon)}
                </div>
              </div>
              
              {/* Timeline card */}
              <div className={`
                p-6 glass dark:glass-dark rounded-xl ml-12 md:ml-0 
                ${index % 2 === 0 ? "md:mr-6" : "md:ml-6"}
              `}>
                <span className="inline-block px-2 py-1 text-xs font-medium bg-secondary/50 rounded-full mb-2">
                  Step {item.id}
                </span>
                <h3 className="text-xl font-bold mb-2 text-left">{item.title}</h3>
                <p className="text-muted-foreground text-left">{item.description}</p>
              </div>
              
              {/* Connector line for desktop */}
              <div className={`
                hidden md:block absolute top-5 w-12 h-1 bg-border
                ${index % 2 === 0 ? "right-0" : "left-0"}
              `}></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
