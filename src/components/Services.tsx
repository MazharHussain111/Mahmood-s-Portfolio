import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Home, Hammer, PencilRuler, Palette, Trees, ClipboardList, 
  ArrowRight, X, Check
} from "lucide-react";
import { services, Service } from "./data/ServicesData";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";

export function Services() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  
  const openServiceDetails = (service: Service) => {
    setSelectedService(service);
    setDialogOpen(true);
  };
  
  const getIconByName = (iconName: string) => {
    switch (iconName) {
      case "home": return <Home className="h-6 w-6" />;
      case "hammer": return <Hammer className="h-6 w-6" />;
      case "pencil-ruler": return <PencilRuler className="h-6 w-6" />;
      case "palette": return <Palette className="h-6 w-6" />;
      case "tree": return <Trees className="h-6 w-6" />;
      case "clipboard-list": return <ClipboardList className="h-6 w-6" />;
      default: return <Home className="h-6 w-6" />;
    }
  };

  const getCardGradient = (iconName: string) => {
    switch (iconName) {
      case "home": return "from-blue-500/20 to-blue-600/30";
      case "hammer": return "from-orange-500/20 to-red-500/30";
      case "pencil-ruler": return "from-purple-500/20 to-indigo-500/30";
      case "palette": return "from-pink-500/20 to-rose-500/30";
      case "tree": return "from-green-500/20 to-emerald-500/30";
      case "clipboard-list": return "from-yellow-500/20 to-amber-500/30";
      default: return "from-gray-500/20 to-gray-600/30";
    }
  };

  const getIconBgColor = (iconName: string) => {
    switch (iconName) {
      case "home": return "bg-blue-500/20 text-blue-600";
      case "hammer": return "bg-orange-500/20 text-orange-600";
      case "pencil-ruler": return "bg-purple-500/20 text-purple-600";
      case "palette": return "bg-pink-500/20 text-pink-600";
      case "tree": return "bg-green-500/20 text-green-600";
      case "clipboard-list": return "bg-yellow-500/20 text-yellow-600";
      default: return "bg-primary/10 text-primary";
    }
  };

  const getServiceHeaderColor = (iconName: string) => {
    switch (iconName) {
      case "home": return "bg-gradient-to-r from-blue-500 to-blue-700";
      case "hammer": return "bg-gradient-to-r from-orange-500 to-red-600";
      case "pencil-ruler": return "bg-gradient-to-r from-purple-500 to-indigo-600";
      case "palette": return "bg-gradient-to-r from-pink-500 to-rose-600";
      case "tree": return "bg-gradient-to-r from-green-500 to-emerald-600";
      case "clipboard-list": return "bg-gradient-to-r from-yellow-500 to-amber-600";
      default: return "bg-gradient-to-r from-gray-500 to-gray-700";
    }
  };

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="w-96 h-96 rounded-full bg-primary/5 absolute blur-3xl"
          animate={{
            x: [0, 70, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{ top: '5%', right: '10%' }}
        />
        <motion.div 
          className="w-80 h-80 rounded-full bg-primary/5 absolute blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, 80, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{ bottom: '15%', left: '5%' }}
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
              What We Offer
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
              Our Construction Services
            </h2>
            <p className="max-w-2xl mx-auto text-muted-foreground">
              We provide comprehensive construction services with attention to detail and a focus on quality.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`glass dark:glass-dark rounded-xl p-6 group cursor-pointer border border-white/20 bg-gradient-to-br ${getCardGradient(service.icon)}`}
              onClick={() => openServiceDetails(service)}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className={`mb-4 p-3 rounded-full ${getIconBgColor(service.icon)} inline-block`}>
                {getIconByName(service.icon)}
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-4">
                {service.description}
              </p>
              <button
                className={`flex items-center text-sm font-medium transition-colors group-hover:translate-x-1 ${getIconBgColor(service.icon).split(' ')[1]}`}
                onClick={(e) => {
                  e.stopPropagation();
                  openServiceDetails(service);
                }}
              >
                Learn More <ArrowRight className="ml-1 h-4 w-4" />
              </button>
            </motion.div>
          ))}
        </div>
        
        {/* Service details dialog */}
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogContent className="sm:max-w-4xl max-h-[90vh] overflow-y-auto glass dark:glass-dark backdrop-blur-lg border border-white/20">
            {selectedService && (
              <>
                <DialogHeader>
                  <DialogTitle className="flex items-center text-2xl">
                    <div className={`mr-2 p-2 rounded-full ${getIconBgColor(selectedService.icon)}`}>
                      {getIconByName(selectedService.icon)}
                    </div>
                    <span className="ml-2">{selectedService.title}</span>
                  </DialogTitle>
                </DialogHeader>
                
                <div className={`h-64 ${selectedService.image} rounded-md mb-6 flex items-center justify-center ${getServiceHeaderColor(selectedService.icon)}`}>
                  <span className="text-white font-bold text-xl drop-shadow-lg">{selectedService.title}</span>
                </div>
                
                <div className="space-y-6">
                  {/* Benefits section with tick marks */}
                  <div className="glass dark:glass-dark p-6 rounded-xl">
                    <ul className="space-y-3">
                      {selectedService.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start">
                          <div className={`mr-2 mt-1 ${getIconBgColor(selectedService.icon).split(' ')[1]}`}>
                            <Check className="h-5 w-5" />
                          </div>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="pt-4">
                    <button
                      onClick={() => setDialogOpen(false)}
                      className={`px-6 py-3 rounded-lg ${getServiceHeaderColor(selectedService.icon)} text-primary-foreground font-medium float-right`}
                    >
                      Close Details
                    </button>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}