import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Hammer, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Artisanal() {
  return (
    <Layout>
      <div className="min-h-screen bg-background flex items-center justify-center relative overflow-hidden pt-20">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-primary z-10"></div>
        
        <div className="container max-w-3xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-8 inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary/10 text-primary mx-auto"
          >
            <Hammer size={48} strokeWidth={1.5} />
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="font-display text-5xl md:text-7xl font-bold text-foreground mb-6"
          >
            In-Situ & <br className="hidden md:block" /> Bespoke Pieces
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-card border border-border px-4 py-2 rounded-full mb-8 shadow-sm">
              <Clock size={16} className="text-primary" />
              <span className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Coming Soon</span>
            </div>
            
            <p className="text-xl text-muted-foreground leading-relaxed mb-10 max-w-2xl mx-auto">
              We are currently curating a gallery of our finest custom architectural work. 
              From floating steps to fireplace hearths, our bespoke concrete pieces are worth the wait.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/">
                <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bold tracking-wider uppercase">
                  Return Home
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold tracking-wider uppercase">
                  Enquire Now
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}
