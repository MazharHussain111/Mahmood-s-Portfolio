export interface Service {
    id: number;
    title: string;
    description: string;
    icon: string;
    image: string;
    longDescription: string;
    benefits: string[];
    process: {
      step: number;
      title: string;
      description: string;
    }[];
  }
  
  export const services: Service[] = [
    {
      id: 1,
      title: "Custom Home Building",
      description: "From concept to completion, we build custom homes tailored to your lifestyle and preferences.",
      icon: "home",
      image: "bg-gradient-to-br from-blue-200 to-blue-400",
      longDescription: "Our custom home building service transforms your dream home into reality. We handle everything from initial design concepts through construction to final walkthrough, ensuring every detail meets your vision. Our team works closely with you to understand your lifestyle needs, aesthetic preferences, and budget constraints to create a home that's uniquely yours.",
      benefits: [
        "Personalized design tailored to your needs",
        "High-quality craftsmanship and materials",
        "Energy-efficient building options",
        "Transparent communication throughout the process",
        "Strict adherence to timelines and budgets"
      ],
      process: [
        {
          step: 1,
          title: "Initial Consultation",
          description: "We meet to discuss your vision, needs, and budget for your custom home."
        },
        {
          step: 2,
          title: "Design Development",
          description: "Our architects create detailed plans based on your input and preferences."
        },
        {
          step: 3,
          title: "Material Selection",
          description: "Choose from high-quality materials and finishes for every aspect of your home."
        },
        {
          step: 4,
          title: "Construction",
          description: "Our skilled team builds your home with attention to detail and craftsmanship."
        },
        {
          step: 5,
          title: "Final Walkthrough",
          description: "We ensure everything meets your expectations before handing over the keys."
        }
      ]
    },
    {
      id: 2,
      title: "Home Renovation",
      description: "Transform your existing space with our comprehensive renovation services for any room in your home.",
      icon: "hammer",
      image: "bg-gradient-to-br from-amber-200 to-amber-400",
      longDescription: "Our renovation services breathe new life into your existing spaces. Whether you're looking to update a single room or transform your entire home, our team delivers exceptional results. We specialize in kitchen and bathroom remodels, basement renovations, home additions, and whole-house renovations. Our process minimizes disruption to your daily life while maximizing the impact of your renovation.",
      benefits: [
        "Increased property value",
        "Improved functionality and flow",
        "Updated aesthetics and modern features",
        "Energy efficiency improvements",
        "Enhanced comfort and livability"
      ],
      process: [
        {
          step: 1,
          title: "Assessment",
          description: "We evaluate your current space and discuss your renovation goals."
        },
        {
          step: 2,
          title: "Design Planning",
          description: "Our designers create detailed plans for your renovation project."
        },
        {
          step: 3,
          title: "Material Selection",
          description: "Choose finishes, fixtures, and materials that match your style and budget."
        },
        {
          step: 4,
          title: "Demolition and Construction",
          description: "We carefully remove unwanted elements and build according to plan."
        },
        {
          step: 5,
          title: "Final Touches",
          description: "We complete all details and ensure everything functions perfectly."
        }
      ]
    },
    {
      id: 3,
      title: "Architectural Design",
      description: "Expert architectural design services that combine functionality, aesthetics, and sustainability.",
      icon: "pencil-ruler",
      image: "bg-gradient-to-br from-green-200 to-green-400",
      longDescription: "Our architectural design services bring your vision to life through thoughtful planning and creative solutions. Our team of licensed architects works closely with you to create designs that reflect your personal style while optimizing functionality and flow. We incorporate sustainable design principles where possible, helping to create environmentally responsible buildings that also reduce long-term operating costs.",
      benefits: [
        "Tailored designs that reflect your style and needs",
        "Optimized space planning and functionality",
        "Sustainable design principles",
        "Innovative solutions to architectural challenges",
        "Detailed construction documents"
      ],
      process: [
        {
          step: 1,
          title: "Conceptual Design",
          description: "We develop initial concepts based on your requirements and preferences."
        },
        {
          step: 2,
          title: "Schematic Design",
          description: "Refining the concept into more detailed plans with preliminary materials and systems."
        },
        {
          step: 3,
          title: "Design Development",
          description: "Further refinement of layouts, materials, and building systems."
        },
        {
          step: 4,
          title: "Construction Documents",
          description: "Creating detailed drawings and specifications for construction."
        },
        {
          step: 5,
          title: "Construction Administration",
          description: "Overseeing the construction process to ensure design integrity."
        }
      ]
    },
    {
      id: 4,
      title: "Interior Design",
      description: "Comprehensive interior design services to create beautiful, functional spaces that reflect your personal style.",
      icon: "palette",
      image: "bg-gradient-to-br from-purple-200 to-purple-400",
      longDescription: "Our interior design services create cohesive, functional, and aesthetically pleasing spaces tailored to your lifestyle. We consider every element from space planning and color schemes to furniture selection and custom built-ins. Our designers stay current with the latest trends while focusing on timeless design principles that ensure your space remains stylish for years to come.",
      benefits: [
        "Personalized design reflecting your style and preferences",
        "Maximized functionality and efficient use of space",
        "Expert color and material coordination",
        "Access to trade-only resources and products",
        "Reduced decision fatigue during the design process"
      ],
      process: [
        {
          step: 1,
          title: "Design Consultation",
          description: "We discuss your style preferences, functional needs, and budget considerations."
        },
        {
          step: 2,
          title: "Concept Development",
          description: "Creating mood boards and preliminary design concepts."
        },
        {
          step: 3,
          title: "Design Refinement",
          description: "Finalizing color schemes, materials, furnishings, and fixtures."
        },
        {
          step: 4,
          title: "Procurement",
          description: "Ordering and tracking all items needed for the project."
        },
        {
          step: 5,
          title: "Installation",
          description: "Coordinating delivery and placement of all elements to complete the design."
        }
      ]
    },
    {
      id: 5,
      title: "Landscaping",
      description: "Create outdoor spaces that enhance your property's beauty and functionality with our landscaping services.",
      icon: "tree",
      image: "bg-gradient-to-br from-emerald-200 to-emerald-400",
      longDescription: "Our landscaping services transform outdoor spaces into beautiful, functional extensions of your home. We create custom landscape designs that consider your property's unique characteristics, your aesthetic preferences, and how you want to use your outdoor space. From hardscaping elements like patios and walkways to softscaping with plants and trees, we create cohesive outdoor environments that enhance your property's value and your quality of life.",
      benefits: [
        "Increased property value and curb appeal",
        "Expanded usable outdoor living space",
        "Sustainable and low-maintenance options",
        "Expert plant selection for your climate and soil conditions",
        "Improved outdoor entertainment areas"
      ],
      process: [
        {
          step: 1,
          title: "Site Analysis",
          description: "We assess your property's topography, soil, existing vegetation, and other factors."
        },
        {
          step: 2,
          title: "Design Concept",
          description: "Creating preliminary designs based on your preferences and property characteristics."
        },
        {
          step: 3,
          title: "Material and Plant Selection",
          description: "Choosing appropriate hardscaping materials and plants for your landscape."
        },
        {
          step: 4,
          title: "Installation",
          description: "Implementing the design with expertise and attention to detail."
        },
        {
          step: 5,
          title: "Maintenance Planning",
          description: "Providing guidance on caring for your new landscape."
        }
      ]
    },
    {
      id: 6,
      title: "Project Management",
      description: "Expert oversight of your construction project, ensuring quality, timeliness, and budget adherence.",
      icon: "clipboard-list",
      image: "bg-gradient-to-br from-pink-200 to-pink-400",
      longDescription: "Our project management services provide comprehensive oversight throughout the entire construction process. We coordinate all aspects of your project from initial planning through final completion, acting as your advocate and ensuring all work meets our high standards. With our experienced project managers at the helm, you can expect clear communication, proactive problem-solving, and strict adherence to timelines and budgets.",
      benefits: [
        "Single point of contact for all project aspects",
        "Rigorous quality control standards",
        "Efficient coordination of subcontractors",
        "Detailed tracking of project timeline and budget",
        "Regular progress updates and consultations"
      ],
      process: [
        {
          step: 1,
          title: "Project Planning",
          description: "Developing detailed project plans, timelines, and resource allocations."
        },
        {
          step: 2,
          title: "Team Coordination",
          description: "Assembling and coordinating the appropriate team of professionals."
        },
        {
          step: 3,
          title: "Construction Oversight",
          description: "Monitoring progress, quality, and adherence to specifications."
        },
        {
          step: 4,
          title: "Problem Resolution",
          description: "Promptly addressing any challenges that arise during construction."
        },
        {
          step: 5,
          title: "Project Completion",
          description: "Conducting final inspections and ensuring all details are completed properly."
        }
      ]
    }
  ];
  