import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { toast } from "sonner"; // Import toast from sonner
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useForm, ValidationError } from "@formspree/react"; // Import Formspree

export function Contact() {
  const [state, handleSubmit] = useForm("mnnpnlaq"); // Replace with your Formspree form ID

  // Show toast notification on form submission
  if (state.succeeded) {
    toast.success("Thanks for contacting us! We'll get back to you soon.");
  } else if (state.errors) {
    toast.error("Your message could not be sent. Please try again later.");
  }

  return (
    <section id="contact" className="py-24 relative overflow-hidden glassmorphism-section">
      <Dialog>
        <DialogTrigger asChild>
          <motion.div 
            className="absolute top-10 right-10 cursor-pointer glass dark:glass-dark p-2 rounded-full z-20"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail className="h-5 w-5 text-primary" />
          </motion.div>
        </DialogTrigger>
        <DialogContent className="glass dark:glass-dark border-primary/10 max-w-md z-[100]">
          <DialogHeader>
            <DialogTitle className="text-center text-xl">Contact Information</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 p-4">
            <div className="flex items-center space-x-3">
              <Mail className="h-5 w-5 text-primary" />
              <p>info@nexaestimate.site</p>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="h-5 w-5 text-primary" />
              <p>+1 (555) 123-4567</p>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="h-5 w-5 text-primary" />
              <p>San Francisco, CA</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
      
      <div className="container section-container relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-3 py-1 mb-4 text-xs font-medium uppercase tracking-wider border border-border rounded-full">
              Get in Touch
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Contact Us
            </h2>
            <p className="max-w-2xl mx-auto text-muted-foreground">
              Have a project in mind or want to discuss potential opportunities? We'd love to hear from you.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-bold mb-6">Contact Information</h3>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <Mail className="h-5 w-5 mt-1 mr-3 text-primary" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-muted-foreground">info@nexaestimate.site</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="h-5 w-5 mt-1 mr-3 text-primary" />
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-muted-foreground">+923024308619</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mt-1 mr-3 text-primary" />
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-muted-foreground">Pakistan</p>
                </div>
              </div>
            </div>
            
            <div className="glass dark:glass-dark rounded-xl p-6">
              <h4 className="font-medium mb-2">Email Response</h4>
            
              <p className="text-sm text-muted-foreground">
                We usually respond to emails as will be possible.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <form onSubmit={handleSubmit} className="glass dark:glass-dark rounded-xl p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-2 rounded-lg border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                  />
                  <ValidationError prefix="Name" field="name" errors={state.errors} />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 rounded-lg border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>
              </div>
              
              <div className="mb-4">
                <label htmlFor="subject" className="block text-sm font-medium mb-1">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-2 rounded-lg border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                />
                <ValidationError prefix="Subject" field="subject" errors={state.errors} />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none"
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>
              
              <button
                type="submit"
                disabled={state.submitting}
                className={`w-full px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium transition-all flex items-center justify-center
                ${state.submitting ? 'opacity-70 cursor-not-allowed' : 'hover:translate-y-[-2px] hover:shadow-lg'}`}
              >
                {state.submitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4 mr-2" /> Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}