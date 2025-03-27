
export interface Project {
    id: number;
    title: string;
    description: string;
    category: string;
    image: string;
    liveLink: string;
    githubLink: string;
    tags: string[];
    details?: string;
  }
  
  export const projectCategories = [
    "All",
    "Renovation",
    "Single Story",
    "Double Story",
    "Triple Story",
    "Commercial"
  ];
  
  export const projects: Project[] = [
    // Renovation Projects
    {
      id: 1,
      title: "Modern Kitchen Renovation",
      description: "Complete kitchen renovation with modern appliances and custom cabinetry.",
      category: "Renovation",
      image: "bg-gradient-to-br from-amber-200 to-amber-400",
      tags: ["Kitchen", "Modern", "Custom"],
      liveLink: "#",
      githubLink: "#",
      details: "This project involved a complete overhaul of a dated kitchen, including custom cabinetry, quartz countertops, and high-end appliances."
    },
    {
      id: 2,
      title: "Bathroom Remodel",
      description: "Luxury bathroom remodel with custom tile work and walk-in shower.",
      category: "Renovation",
      image: "bg-gradient-to-br from-blue-200 to-blue-400",
      tags: ["Bathroom", "Luxury", "Tile"],
      liveLink: "#",
      githubLink: "#",
      details: "Transformed an outdated bathroom into a spa-like retreat with custom tilework, freestanding tub, and rainfall shower system."
    },
    {
      id: 3,
      title: "Basement Renovation",
      description: "Converting an unfinished basement into a multipurpose living space.",
      category: "Renovation",
      image: "bg-gradient-to-br from-purple-200 to-purple-400",
      tags: ["Basement", "Multipurpose", "Remodel"],
      liveLink: "#",
      githubLink: "#",
      details: "This project transformed an unfinished basement into a versatile living space with a home theater, gym area, and guest bedroom."
    },
  
    // Single Story Projects
    {
      id: 4,
      title: "Modern Bungalow",
      description: "Contemporary single-story home with open floor plan and energy-efficient features.",
      category: "Single Story",
      image: "bg-gradient-to-br from-green-200 to-green-400",
      tags: ["Contemporary", "Energy Efficient", "Open Plan"],
      liveLink: "#",
      githubLink: "#",
      details: "A 2,200 sq ft single-story home featuring an open concept layout, high ceilings, and sustainable building materials."
    },
    {
      id: 5,
      title: "Ranch Style Home",
      description: "Traditional ranch-style home with modern upgrades and large backyard.",
      category: "Single Story",
      image: "bg-gradient-to-br from-yellow-200 to-yellow-400",
      tags: ["Ranch", "Traditional", "Backyard"],
      liveLink: "#",
      githubLink: "#",
      details: "This 1,800 sq ft ranch home features a covered porch, extended patio, and landscaped garden with native plants."
    },
    {
      id: 6,
      title: "Minimalist Cottage",
      description: "Compact single-story cottage with minimalist design and smart home features.",
      category: "Single Story",
      image: "bg-gradient-to-br from-gray-200 to-gray-400",
      tags: ["Minimalist", "Smart Home", "Compact"],
      liveLink: "#",
      githubLink: "#",
      details: "A 1,200 sq ft cottage designed with simplicity in mind, featuring integrated smart home technology and multi-functional spaces."
    },
  
    // Double Story Projects
    {
      id: 7,
      title: "Colonial Revival",
      description: "Traditional two-story colonial home with modern amenities and finishes.",
      category: "Double Story",
      image: "bg-gradient-to-br from-red-200 to-red-400",
      tags: ["Colonial", "Traditional", "Family Home"],
      liveLink: "#",
      githubLink: "#",
      details: "A 3,400 sq ft colonial revival featuring a formal dining room, home office, and spacious bedrooms with en-suite bathrooms."
    },
    {
      id: 8,
      title: "Contemporary Duplex",
      description: "Modern two-story duplex with separate units and shared outdoor space.",
      category: "Double Story",
      image: "bg-gradient-to-br from-indigo-200 to-indigo-400",
      tags: ["Duplex", "Modern", "Multi-Family"],
      liveLink: "#",
      githubLink: "#",
      details: "This duplex features two 1,500 sq ft units, each with 2 bedrooms, 2 bathrooms, and open concept living areas."
    },
    {
      id: 9,
      title: "Craftsman Home",
      description: "Two-story craftsman-style home with detailed woodwork and covered porch.",
      category: "Double Story",
      image: "bg-gradient-to-br from-orange-200 to-orange-400",
      tags: ["Craftsman", "Woodwork", "Traditional"],
      liveLink: "#",
      githubLink: "#",
      details: "A 2,800 sq ft craftsman home featuring handcrafted woodwork, built-in cabinetry, and a spacious front porch."
    },
  
    // Triple Story Projects
    {
      id: 10,
      title: "Urban Townhouse",
      description: "Three-story townhouse with rooftop terrace and city views.",
      category: "Triple Story",
      image: "bg-gradient-to-br from-pink-200 to-pink-400",
      tags: ["Townhouse", "Urban", "Rooftop"],
      liveLink: "#",
      githubLink: "#",
      details: "This 2,500 sq ft townhouse includes a ground-floor garage, main living area, upper bedrooms, and a rooftop entertainment space."
    },
    {
      id: 11,
      title: "Luxury Villa",
      description: "Three-story luxury villa with pool, garden, and entertainment spaces.",
      category: "Triple Story",
      image: "bg-gradient-to-br from-cyan-200 to-cyan-400",
      tags: ["Luxury", "Villa", "Entertainment"],
      liveLink: "#",
      githubLink: "#",
      details: "A 5,200 sq ft villa featuring marble floors, custom lighting, home theater, wine cellar, and an infinity pool."
    },
    {
      id: 12,
      title: "Hillside Residence",
      description: "Three-story home built into hillside with panoramic views and multiple decks.",
      category: "Triple Story",
      image: "bg-gradient-to-br from-teal-200 to-teal-400",
      tags: ["Hillside", "Views", "Multi-Level"],
      liveLink: "#",
      githubLink: "#",
      details: "This 4,000 sq ft residence is designed to maximize views with floor-to-ceiling windows and multiple outdoor living spaces."
    },
  
    // Commercial Projects
    {
      id: 13,
      title: "Retail Complex",
      description: "Modern retail space with multiple storefronts and shared parking.",
      category: "Commercial",
      image: "bg-gradient-to-br from-emerald-200 to-emerald-400",
      tags: ["Retail", "Commercial", "Storefronts"],
      liveLink: "#",
      githubLink: "#",
      details: "A 15,000 sq ft retail complex with 5 separate units, featuring high visibility facades and customizable interiors."
    },
    {
      id: 14,
      title: "Office Building",
      description: "Contemporary office building with flexible workspaces and amenities.",
      category: "Commercial",
      image: "bg-gradient-to-br from-violet-200 to-violet-400",
      tags: ["Office", "Commercial", "Workspace"],
      liveLink: "#",
      githubLink: "#",
      details: "This 25,000 sq ft office building features open floor plans, meeting rooms, and employee recreation areas."
    },
    {
      id: 15,
      title: "Restaurant Conversion",
      description: "Converting an industrial space into a modern restaurant and bar.",
      category: "Commercial",
      image: "bg-gradient-to-br from-rose-200 to-rose-400",
      tags: ["Restaurant", "Conversion", "Industrial"],
      liveLink: "#",
      githubLink: "#",
      details: "A 3,200 sq ft restaurant conversion that preserved industrial elements while creating an inviting dining atmosphere."
    },
  ];
  