import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function ArtisanalShowcase() {
  return (
    <section className="py-24 bg-card border-y border-border overflow-hidden">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">
                Furniture-Grade Artistry
              </span>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8 leading-tight">
                Concrete Reimagined <br />
                <span className="italic text-muted-foreground">as Art</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Beyond structural foundations, we specialize in bespoke architectural pieces. From polished benchtops to custom basins and fireplace surrounds, we treat concrete as a premium material for luxury interiors.
              </p>
              <ul className="space-y-4 mb-10">
                {["Custom Kitchen Benchtops", "Architectural Basins", "Fireplace Surrounds and Exterior Benches", "Bespoke Furniture"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-foreground">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                    <span className="font-light tracking-wide">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/portfolio?category=artisanal">
                <Button className="bg-transparent border border-foreground text-foreground hover:bg-foreground hover:text-background rounded-none px-8 py-6 text-base font-bold tracking-wider uppercase transition-all">
                  View Artisanal Collection
                </Button>
              </Link>
            </motion.div>
          </div>

          <div className="w-full lg:w-1/2 relative">
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                className="col-span-2 h-64 md:h-80 bg-cover bg-center relative group overflow-hidden"
                style={{ backgroundImage: "url('https://d2xsxph8kpxj0f.cloudfront.net/114162150/9cq25HcAAqsxAnnXj75PoC/artisanal_benchtop_76878496.jpg')" }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500"></div>
              </motion.div>
              <motion.div
                className="col-span-1 h-48 md:h-64 bg-cover bg-center relative group overflow-hidden"
                style={{ backgroundImage: "url('https://d2xsxph8kpxj0f.cloudfront.net/114162150/9cq25HcAAqsxAnnXj75PoC/artisanal_basin_d595354d.jpg')" }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500"></div>
              </motion.div>
              <motion.div
                className="col-span-1 h-48 md:h-64 bg-cover bg-center relative group overflow-hidden"
                style={{ backgroundImage: "url('https://d2xsxph8kpxj0f.cloudfront.net/114162150/9cq25HcAAqsxAnnXj75PoC/artisanal_fireplace_88277273.jpg')" }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500"></div>
              </motion.div>
            </div>
            
            {/* Decorative border frame */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-primary/50 hidden lg:block"></div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-primary/50 hidden lg:block"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
