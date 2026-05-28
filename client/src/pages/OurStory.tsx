import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import CTASection from "@/components/CTASection";

export default function OurStory() {
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
              <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Our Heritage</span>
              <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-6">
                Our Story
              </h1>
            </motion.div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20">
          <div className="container max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="prose prose-lg md:prose-xl prose-stone mx-auto text-foreground/80"
            >
              <p className="lead text-2xl font-display text-foreground mb-8">
                The Concrete Guyz is a small, family-run business built on over 50 years of construction experience, passed down through three generations.
              </p>
              
              <p className="mb-6">
                Raised and taught by his grandfather and father, both highly experienced builders, Zac developed a strong foundation in construction from an early age.
              </p>
              
              <p className="mb-6">
                Choosing to specialise in concrete, Zac now leads the business, applying that knowledge to deliver high-quality work with a strong focus on detail, finish, and long-term performance.
              </p>
              
              <p className="mb-12">
                Today, that foundation is reflected in every project - combining practical construction knowledge with a clean, well-executed finish.
              </p>
            </motion.div>
          </div>
        </section>

        <CTASection />
      </div>
    </Layout>
  );
}
