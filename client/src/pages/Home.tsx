import Hero from "@/components/Hero";
import ServicesGrid from "@/components/ServicesGrid";
import ArtisanalShowcase from "@/components/ArtisanalShowcase";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <Layout>
      <Hero />
      
      {/* Value Proposition Section */}
      <section className="py-20 bg-card border-b border-border">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                  More Than Just Concrete. <br />
                  <span className="text-primary">It's a Foundation for Life.</span>
                </h2>
              </motion.div>
            </div>
            <div className="w-full md:w-1/2">
              <motion.p 
                className="text-muted-foreground text-lg leading-relaxed"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                At The Concrete Guyz, we believe that concrete is the silent backbone of architectural beauty. It's not just about pouring a slab; it's about creating a durable, aesthetically pleasing surface that enhances your property's value and stands the test of time. Our 40+ year legacy is built on this philosophy.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      <ServicesGrid />
      
      {/* Legacy Section */}
      <section className="py-20 bg-background border-b border-border">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Est. 1980s</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              A Family Legacy of Excellence
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
              For over four decades, our family has been shaping the landscape of Canberra. Our work speaks for itself - built with care, finished with precision, and trusted by homeowners who expect it done right.
            </p>
          </motion.div>
        </div>
      </section>

      <Testimonials />
      <CTASection />
    </Layout>
  );
}
