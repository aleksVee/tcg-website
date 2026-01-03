import { motion } from "framer-motion";
import { ArrowUpRight, Home, Layers, Building2, Palette } from "lucide-react";
import { Link } from "wouter";

const services = [
  {
    id: 1,
    title: "Residential Driveways",
    description: "Premium exposed aggregate and polished finishes that create a stunning first impression for your home.",
    icon: Home,
    link: "/portfolio?category=residential"
  },
  {
    id: 2,
    title: "Pool Decks & Surrounds",
    description: "Slip-resistant, luxury surfaces designed to enhance your outdoor living and entertainment areas.",
    icon: Layers,
    link: "/portfolio?category=pool"
  },
  {
    id: 3,
    title: "Commercial Projects",
    description: "Large-scale architectural concrete solutions for public spaces, entries, and commercial developments.",
    icon: Building2,
    link: "/portfolio?category=commercial"
  },
  {
    id: 4,
    title: "Artisanal Concrete",
    description: "Bespoke furniture-grade pieces including benchtops, basins, and fireplaces crafted with precision.",
    icon: Palette,
    link: "/portfolio?category=artisanal"
  }
];

export default function ServicesGrid() {
  return (
    <section className="py-24 bg-background relative">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-2xl">
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Our Expertise</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
              Mastery in Every Pour
            </h2>
          </div>
          <Link href="/services">
            <a className="hidden md:flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors uppercase tracking-widest text-sm font-bold mt-6 md:mt-0">
              View All Services <ArrowUpRight size={16} />
            </a>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-l border-border">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group border-r border-b border-border p-8 md:p-10 hover:bg-card transition-colors duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ArrowUpRight className="text-primary" />
              </div>
              
              <div className="mb-6 text-primary">
                <service.icon size={40} strokeWidth={1.5} />
              </div>
              
              <h3 className="font-display text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed mb-8">
                {service.description}
              </p>
              
              <Link href={service.link}>
                <a className="inline-block text-sm font-bold uppercase tracking-widest text-foreground border-b border-transparent group-hover:border-primary pb-1 transition-all">
                  Explore
                </a>
              </Link>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
          <Link href="/services">
            <a className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-sm">
              View All Services <ArrowUpRight size={16} />
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}
