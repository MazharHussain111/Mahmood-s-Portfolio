import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { motion } from "framer-motion";
import { Info } from "lucide-react";

export function AboutPopup() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-4 py-2 rounded-lg glass dark:glass-dark flex items-center space-x-2 border border-primary/10 text-sm hover:bg-primary/5"
        >
          <Info className="h-4 w-4" />
          <span>Read More About Us</span>
        </motion.button>
      </DialogTrigger>
      <DialogContent className="glass dark:glass-dark border-primary/10 max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          {/* <DialogTitle className="text-3xl font-bold text-center">About Me</DialogTitle> */}
        </DialogHeader>
        
        <div className="mt-6 space-y-8">
          {/* Introductory Text */}
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">
              Building Dreams Within Budgets: Your Estimation Engineer for Cost-Effective Construction Solutions
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Welcome to my portfolio! I'm a dedicated Civil Engineer driven by a passion for precision and a commitment to excellence in construction cost estimation. With a distinguished academic background, including a Gold Medal in Civil Engineering, I've embarked on a journey marked by innovation, diligence, and client satisfaction.
            </p>
          </div>

          {/* Specialties Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Specialties</h3>
            <div className="space-y-6">
              <div className="glass dark:glass-dark p-6 rounded-xl">
                <h4 className="font-medium mb-2 flex items-center">
                  🏆 <span className="ml-2">Gold Medal Civil Engineer</span>
                </h4>
                <p className="text-sm text-muted-foreground">
                  Recognized for academic excellence and dedication to the field of civil engineering.
                </p>
              </div>
              <div className="glass dark:glass-dark p-6 rounded-xl">
                <h4 className="font-medium mb-2 flex items-center">
                  💼 <span className="ml-2">Extensive Industry Experience</span>
                </h4>
                <p className="text-sm text-muted-foreground">
                  Seasoned professional with a proven track record in renowned companies, gaining valuable insights and expertise in construction cost estimation.
                </p>
              </div>
              <div className="glass dark:glass-dark p-6 rounded-xl">
                <h4 className="font-medium mb-2 flex items-center">
                  💰 <span className="ml-2">Cost-Effective Solutions</span>
                </h4>
                <p className="text-sm text-muted-foreground">
                  Specializing in providing cost-effective estimates for a diverse range of projects, including commercial and residential developments. Dedicated to maximizing value while ensuring project success.
                </p>
              </div>
              <div className="glass dark:glass-dark p-6 rounded-xl">
                <h4 className="font-medium mb-2 flex items-center">
                  🛠 <span className="ml-2">Proficient in Industry Software</span>
                </h4>
                <p className="text-sm text-muted-foreground">
                  Skilled in utilizing advanced software tools such as PlanSwift and Bluebeam for precise takeoffs and accurate estimates across all CSI divisions. This expertise enables thorough analysis and optimization of project costs.
                </p>
              </div>
              <div className="glass dark:glass-dark p-6 rounded-xl">
                <h4 className="font-medium mb-2 flex items-center">
                  🔍 <span className="ml-2">Precision and Efficiency</span>
                </h4>
                <p className="text-sm text-muted-foreground">
                  Committed to delivering estimates with the highest level of precision and efficiency. Meticulous attention to detail and streamlined processes ensure reliable results that meet client expectations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}