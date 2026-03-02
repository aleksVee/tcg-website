import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function CTASection() {
  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="container relative z-10 text-center">
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
          Ready to Elevate Your Space?
        </h2>
        <p className="text-primary-foreground/80 text-xl max-w-2xl mx-auto mb-10 font-light">
          Contact us today for a consultation on your residential project.
        </p>
        <Link href="/quote">
          <Button size="lg" className="bg-background text-foreground hover:bg-background/90 border-none rounded-none px-10 py-8 text-lg font-bold tracking-wider uppercase shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
            Request a Quote
          </Button>
        </Link>
      </div>
    </section>
  );
}
