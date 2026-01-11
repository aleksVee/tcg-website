import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

interface PlaceholderPageProps {
  title: string;
  description: string;
}

export default function PlaceholderPage({ title, description }: PlaceholderPageProps) {
  return (
    <Layout>
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 bg-background relative overflow-hidden">
        {/* Subtle Grid Background */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.20] pointer-events-none"></div>
        
        <div className="relative z-10 flex flex-col items-center">
          <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Coming Soon</span>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-6">
            {title}
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mb-10">
            {description}
          </p>
          <div className="flex gap-4">
            <Link href="/">
              <Button variant="outline" className="rounded-none px-8 py-6 font-bold uppercase tracking-wider">
                Back Home
              </Button>
            </Link>
            <Link href="/contact">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none px-8 py-6 font-bold uppercase tracking-wider">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
