import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import CTASection from "@/components/CTASection";

// Portfolio Data
const projects = [
  {
    id: 1,
    title: "Modern Residence Driveway",
    category: "residential",
    image: "/images/portfolio_residential.jpg",
    location: "Yarralumla"
  },
  {
    id: 2,
    title: "Infinity Pool Surround",
    category: "pool",
    image: "/images/portfolio_pool_deck.jpg",
    location: "Red Hill"
  },
  {
    id: 3,
    title: "Corporate Plaza Entrance",
    category: "commercial",
    image: "/images/portfolio_commercial.jpg",
    location: "Civic"
  },
  {
    id: 4,
    title: "Bespoke Concrete Basin",
    category: "artisanal",
    image: "/images/artisanal_basin.jpg",
    location: "Custom Commission"
  },
  {
    id: 5,
    title: "Polished Kitchen Island",
    category: "artisanal",
    image: "/images/artisanal_benchtop.jpg",
    location: "Kingston"
  },
  {
    id: 6,
    title: "Garden Pathway",
    category: "residential",
    image: "/images/portfolio_pathway.jpg",
    location: "Deakin"
  },
  {
    id: 7,
    title: "Architectural Fireplace",
    category: "artisanal",
    image: "/images/artisanal_fireplace.jpg",
    location: "Forrest"
  },
  {
    id: 8,
    title: "Outdoor Kitchen",
    category: "pool",
    image: "/images/portfolio_outdoor_kitchen.jpg",
    location: "O'Malley"
  },
  {
    id: 9,
    title: "Custom Side Table",
    category: "artisanal",
    image: "/images/portfolio_artisanal_furniture.jpg",
    location: "Showroom Piece"
  }
];

const categories = [
  { id: "all", label: "All Projects" },
  { id: "residential", label: "Residential" },
  { id: "pool", label: "Pool Decks" },
  { id: "commercial", label: "Commercial" },
  { id: "artisanal", label: "Artisanal" }
];

export default function Portfolio() {
  const [filter, setFilter] = useState("all");
  const [location] = useLocation();

  // Handle query params for filtering
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const category = params.get("category");
    if (category && categories.some(c => c.id === category)) {
      setFilter(category);
    }
  }, [location]);

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <Layout>
      <div className="bg-background min-h-screen">
        {/* Header Section */}
        <section className="py-20 border-b border-border bg-card relative overflow-hidden">
          {/* Subtle Grid Background */}
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.20] pointer-events-none"></div>
          
          <div className="container text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Our Work</span>
              <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-6">
                Portfolio
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Explore our collection of premium concrete projects, showcasing our dedication to quality, durability, and aesthetic excellence.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filter Controls */}
        <section className="py-10 border-b border-border sticky top-20 z-30 bg-background/95 backdrop-blur-sm">
          <div className="container overflow-x-auto">
            <div className="flex flex-nowrap md:flex-wrap justify-center gap-4 min-w-max md:min-w-0 px-4 md:px-0">
              {categories.map((cat) => (
                <Button
                  key={cat.id}
                  variant={filter === cat.id ? "default" : "outline"}
                  onClick={() => setFilter(cat.id)}
                  className={`rounded-none px-6 py-2 font-bold tracking-wider uppercase transition-all ${
                    filter === cat.id 
                      ? "bg-primary text-primary-foreground hover:bg-primary/90 border-primary" 
                      : "bg-transparent text-foreground border-border hover:border-primary hover:text-primary"
                  }`}
                >
                  {cat.label}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-20">
          <div className="container">
            <motion.div 
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project) => (
                  <motion.div
                    layout
                    key={project.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                    className="group cursor-pointer"
                  >
                    <div className="relative overflow-hidden aspect-[4/3] mb-4 bg-muted">
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500 z-10"></div>
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20">
                        <span className="text-primary text-xs font-bold uppercase tracking-widest block mb-1">
                          {categories.find(c => c.id === project.category)?.label}
                        </span>
                        <span className="text-white text-sm font-light">
                          {project.location}
                        </span>
                      </div>
                    </div>
                    <h3 className="font-display text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {filteredProjects.length === 0 && (
              <div className="text-center py-20">
                <p className="text-muted-foreground text-lg">No projects found in this category.</p>
                <Button 
                  variant="link" 
                  onClick={() => setFilter("all")}
                  className="text-primary mt-4"
                >
                  View all projects
                </Button>
              </div>
            )}
          </div>
        </section>

        <CTASection />
      </div>
    </Layout>
  );
}
