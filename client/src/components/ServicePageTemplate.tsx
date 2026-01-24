import Layout from "@/components/Layout";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

interface ServiceFeature {
  title: string;
  description: string;
}

interface ServicePageTemplateProps {
  title: string;
  subtitle: string;
  description: string;
  heroImage: string;
  features: ServiceFeature[];
  galleryImages: string[];
  benefits: string[];
}

export default function ServicePageTemplate({
  title,
  subtitle,
  description,
  heroImage,
  features,
  galleryImages,
  benefits
}: ServicePageTemplateProps) {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${heroImage}')` }}
        ></div>
        
        <div className="container relative z-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block text-primary font-bold tracking-[0.2em] uppercase text-sm mb-4 bg-black/50 px-4 py-2 backdrop-blur-sm border border-primary/30">
              {subtitle}
            </span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-lg">
              {title}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-background border-b border-border">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="w-full lg:w-1/2">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Premium Quality, <br />
                <span className="text-primary">Built to Last.</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                {description}
              </p>
              <div className="flex flex-col gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                      <Check size={14} className="text-primary" />
                    </div>
                    <span className="text-foreground font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
              <div className="mt-10">
                <Link href="/quote">
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none px-8 py-6 font-bold uppercase tracking-wider">
                    Get a Quote
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2 grid grid-cols-1 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-card border border-border p-8 hover:border-primary/50 transition-colors">
                  <h3 className="font-display text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-card">
        <div className="container">
          <div className="text-center mb-12">
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Visual Excellence</span>
            <h2 className="font-display text-4xl font-bold text-foreground">Recent Projects</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((img, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="aspect-[4/3] overflow-hidden relative group bg-muted"
              >
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500 z-10"></div>
                <img 
                  src={img} 
                  alt={`${title} project example ${index + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/portfolio">
              <Button variant="outline" className="border-foreground/20 text-foreground hover:bg-foreground hover:text-background rounded-none px-8 py-6 font-bold uppercase tracking-wider group">
                View Full Portfolio
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
}
