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
    image: "https://d2xsxph8kpxj0f.cloudfront.net/114162150/9cq25HcAAqsxAnnXj75PoC/portfolio_residential_fe297f7a.jpg",
    location: "Yarralumla"
  },
  {
    id: 2,
    title: "Infinity Pool Surround",
    category: "garages",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/114162150/9cq25HcAAqsxAnnXj75PoC/portfolio_pool_deck_f98b6989.jpg",
    location: "Red Hill"
  },

  {
    id: 4,
    title: "Bespoke Concrete Basin",
    category: "artisanal",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/114162150/9cq25HcAAqsxAnnXj75PoC/artisanal_basin_d595354d.jpg",
    location: "Custom Commission"
  },
  {
    id: 5,
    title: "Polished Kitchen Island",
    category: "artisanal",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/114162150/9cq25HcAAqsxAnnXj75PoC/artisanal_benchtop_76878496.jpg",
    location: "Kingston"
  },
  {
    id: 6,
    title: "Garden Pathway",
    category: "residential",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/114162150/9cq25HcAAqsxAnnXj75PoC/portfolio_pathway_a7369dd8.jpg",
    location: "Deakin"
  },
  {
    id: 7,
    title: "Architectural Fireplace",
    category: "artisanal",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/114162150/9cq25HcAAqsxAnnXj75PoC/artisanal_fireplace_88277273.jpg",
    location: "Forrest"
  },
  {
    id: 8,
    title: "Outdoor Kitchen",
    category: "garages",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/114162150/9cq25HcAAqsxAnnXj75PoC/portfolio_outdoor_kitchen_86149060.jpg",
    location: "O'Malley"
  },
  {
    id: 9,
    title: "Custom Side Table",
    category: "artisanal",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/114162150/9cq25HcAAqsxAnnXj75PoC/portfolio_artisanal_furniture_01f5ac21.jpg",
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
                Explore our collection of premium concrete projects, showcasing our dedication to quality, durability, and aesthetic excellence.
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


          </div>
        </section>

        <CTASection />
      </div>
    </Layout>
  );
}
