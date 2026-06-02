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
                Backed by more than 40 years of family construction experience, we approach every project with a focus on quality workmanship, attention to detail and long-term durability. From residential driveways to bespoke architectural concrete, our goal is simple: build it properly, build it beautifully and build it to last.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      <ServicesGrid />

      <Testimonials />
      <CTASection />
    </Layout>
  );
}
