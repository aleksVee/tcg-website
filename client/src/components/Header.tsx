import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Services", path: "/services" },
    { name: "Our Story", path: "/story" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        isScrolled ? "bg-background/95 backdrop-blur-sm border-border py-2" : "bg-transparent py-6"
      )}
    >
      <div className="container flex items-center justify-between">
        <Link href="/">
          <a className="flex items-center gap-2 group">
            {/* Logo used as-is without filters as requested */}
            <img 
              src="/images/TCGLogoOnlyTransparent.png" 
              alt="The Concrete Guyz" 
              className="h-12 w-auto transition-transform duration-300 group-hover:scale-105" 
            />
            <span className="font-display font-bold text-xl tracking-tight text-foreground hidden sm:block">
              THE CONCRETE GUYZ
            </span>
          </a>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.path} href={link.path}>
              <a
                className={cn(
                  "text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:bg-primary after:transition-all after:duration-300",
                  location === link.path 
                    ? "text-primary after:w-full" 
                    : "text-foreground/80 after:w-0 hover:after:w-full"
                )}
              >
                {link.name}
              </a>
            </Link>
          ))}
          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bold tracking-wider uppercase rounded-none border-2">
            Get a Quote
          </Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-background z-40 flex flex-col items-center justify-center gap-8 transition-all duration-500 md:hidden",
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        {navLinks.map((link) => (
          <Link key={link.path} href={link.path}>
            <a
              className={cn(
                "text-2xl font-display font-bold hover:text-primary transition-colors",
                location === link.path ? "text-primary" : "text-foreground"
              )}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          </Link>
        ))}
        <Button 
          size="lg" 
          className="mt-4 bg-primary text-primary-foreground hover:bg-primary/90 rounded-none font-bold tracking-wider uppercase"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Get a Quote
        </Button>
      </div>
    </header>
  );
}
