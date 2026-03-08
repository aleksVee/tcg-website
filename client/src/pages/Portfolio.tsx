import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import CTASection from "@/components/CTASection";
import { Instagram } from "lucide-react";

// Local Portfolio Images
import portfolio1 from "@/assets/portfolio/portfolio1.jpg";
import portfolio3 from "@/assets/portfolio/portfolio3.jpg";
import portfolio4 from "@/assets/portfolio/portfolio4.jpg";
import portfolio6 from "@/assets/portfolio/portfolio6.jpg";
import portfolio8 from "@/assets/portfolio/portfolio8.jpg";
import drivewayImg from "@/assets/portfolio/modernResidenceDriveway.png";
import poolImg from "@/assets/portfolio/pool.jpg";
import pathwayImg from "@/assets/portfolio/gardenPathway.jpg";

// Portfolio Data
const projects = [
  {
    id: 1,
    title: "Modern Residence Driveway",
    category: "residential",
    image: drivewayImg,
    location: "Yarralumla"
  },
  {
    id: 2,
    title: "Infinity Pool Surround",
    category: "garages",
    image: poolImg,
    location: "Red Hill"
  },

  {
    id: 4,
    title: "Bespoke Concrete Basin",
    category: "artisanal",
    image: portfolio1,
    location: "Custom Commission"
  },
  {
    id: 5,
    title: "Polished Kitchen Island",
    category: "artisanal",
    image: portfolio3,
    location: "Kingston"
  },
  {
    id: 6,
    title: "Garden Pathway",
    category: "residential",
    image: pathwayImg,
    location: "Deakin"
  },
  {
    id: 7,
    title: "Architectural Fireplace",
    category: "artisanal",
    image: portfolio4,
    location: "Forrest"
  },
  {
    id: 8,
    title: "Outdoor Kitchen",
    category: "garages",
    image: portfolio6,
    location: "O'Malley"
  },
  {
    id: 9,
    title: "Custom Side Table",
    category: "artisanal",
    image: portfolio8,
    location: "Showroom Piece"
  }
];

const categories = [
  { id: "all", label: "All Projects" },
  { id: "residential", label: "Residential" },
  { id: "garages", label: "Garages & Shed Slabs" },

  { id: "artisanal", label: "Artisanal" }
];

export default function Portfolio() {
  // No filtering needed as requested
  const filteredProjects = projects;

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
                Explore our collection of concrete projects, showcasing our dedication to quality, durability, and aesthetic excellence.
              </p>
            </motion.div>
          </div>
        </section>

        {/* All Projects Heading */}
        <section className="py-10 border-b border-border bg-background">
          <div className="container text-center">
            <h2 className="font-display text-3xl font-bold text-foreground uppercase tracking-wide">
              All Projects
            </h2>
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
                    <div className="relative overflow-hidden aspect-[4/3] mb-4 bg-muted border border-border/50">
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
                        {/* <span className="text-white text-sm font-light">
                          {project.location}
                        </span> */}
                      </div>
                    </div>
                    <h3 className="font-display text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </motion.div>
                ))}

                {/* Instagram Tile - 9th Slot */}
                <motion.a
                  layout
                  href="https://www.instagram.com/theconcreteguyz?igsh=d3F1cm9mY3loMGxs"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="group cursor-pointer block"
                >
                  <div className="relative overflow-hidden aspect-[4/3] mb-4 bg-card border border-border group-hover:border-primary/50 transition-colors duration-500 flex flex-col items-center justify-center p-8 text-center ring-1 ring-border/5 shadow-sm group-hover:shadow-md">
                    <div className="mb-4 p-4 rounded-full bg-primary/5 group-hover:bg-primary/10 transition-colors">
                      <Instagram className="w-12 h-12 text-primary transition-transform duration-500 group-hover:scale-110" strokeWidth={1.5} />
                    </div>
                    <span className="text-primary text-xs font-bold uppercase tracking-[0.2em] mb-2">
                      Social Feed
                    </span>
                    <h3 className="font-display text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                      Follow on Instagram
                    </h3>
                    <p className="text-muted-foreground text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      @theconcreteguyz
                    </p>
                  </div>
                  {/* <h3 className="font-display text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                    Instagram
                  </h3> */}
                </motion.a>
              </AnimatePresence>
            </motion.div>


          </div>
        </section>

        <CTASection />
      </div>
    </Layout>
  );
}
