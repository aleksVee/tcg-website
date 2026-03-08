import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import homeImg from "@/assets/homeImg.jpg";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col lg:flex-row overflow-hidden border-b border-border">
      {/* Left Content Side */}
      <div className="w-full lg:w-[45%] flex flex-col justify-center py-20 lg:py-0 bg-background relative z-10 container">
        {/* Subtle Grid Background */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.20] pointer-events-none"></div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block text-primary font-bold tracking-[0.2em] uppercase text-sm mb-6 border-b border-primary pb-2">
            Canberra's Trusted Concreters
          </span>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-8 text-foreground">
            Building <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60 italic">Legacies</span> <br />
            in Concrete
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-md mb-10 leading-relaxed font-light">
            We don't just pour concrete. We craft architectural foundations that elevate your home's value and aesthetic for decades.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/quote">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none px-8 py-6 text-base font-bold tracking-wider uppercase transition-all hover:translate-y-[-2px]">
                Request Consultation
              </Button>
            </Link>
            <Link href="/portfolio">
              <Button variant="outline" size="lg" className="border-foreground/20 text-foreground hover:bg-foreground hover:text-background rounded-none px-8 py-6 text-base font-bold tracking-wider uppercase group">
                View Portfolio
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Decorative elements */}
        <div className="absolute bottom-10 left-20 hidden lg:block">
          <div className="flex gap-8">
            <div className="flex flex-col">
              <span className="text-3xl font-display font-bold text-foreground">40+</span>
              <span className="text-xs text-muted-foreground uppercase tracking-widest">Years Experience through 3 generations</span>
            </div>
            <div className="w-[1px] h-12 bg-border"></div>
            <div className="flex flex-col">
              <span className="text-3xl font-display font-bold text-foreground">500+</span>
              <span className="text-xs text-muted-foreground uppercase tracking-widest">Projects Completed</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Image Side */}
      <div className="w-full lg:w-[55%] relative min-h-[50vh] lg:min-h-full bg-muted">
        <div className="absolute inset-0 bg-black/20 z-10"></div>
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${homeImg})` }}
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />

        {/* Floating Badge */}
        <motion.div
          className="absolute bottom-10 right-10 z-20 bg-background/90 backdrop-blur-md p-6 border border-border max-w-xs hidden md:block"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <h3 className="font-display font-bold text-xl mb-2 text-primary">Artisanal Quality</h3>
          <p className="text-sm text-muted-foreground">
            From luxury driveways to custom furniture pieces, every pour is a masterpiece.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
