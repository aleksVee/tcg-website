import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location, setLocation] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, link: { name: string, path: string, isScroll?: boolean }) => {
    if (link.isScroll) {
      e.preventDefault();

      // If we're not on the home page, navigate there first
      if (location !== "/") {
        setLocation("/");
        // Wait for navigation to complete then scroll
        setTimeout(() => {
          const element = document.getElementById(link.path.substring(2)); // remove /#
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      } else {
        // Already on home page, just scroll
        const element = document.getElementById(link.path.substring(2)); // remove /#
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
      setIsMobileMenuOpen(false);
    } else {
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Services", path: "/#services", isScroll: true },
    { name: "Our Story", path: "/story" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className="relative z-50 bg-background py-1 transition-all duration-300"
    >
      <div className=" lg:max-w-[91%] mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          {/* Local logo asset with clean transparency - resized for impact */}
          <img
            src={logo}
            alt="The Concrete Guyz"
            className="h-16 md:h-18 w-auto transition-transform duration-300 group-hover:scale-105"
          />
          <span className="font-display font-bold text-xl md:text-2xl tracking-tight text-foreground hidden sm:block">
            THE CONCRETE GUYZ
          </span>
        </Link>

        {/* Navigation Group (Desktop & Mobile Toggle) */}
        <div className="flex items-center">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.path}
                href={link.path}
                onClick={(e) => handleNavClick(e, link)}
                className={cn(
                  "text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:bg-primary after:transition-all after:duration-300 cursor-pointer",
                  location === link.path
                    ? "text-primary after:w-full"
                    : "text-foreground/80 after:w-0 hover:after:w-full"
                )}
              >
                {link.name}
              </a>
            ))}
            <Link href="/quote">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bold tracking-wider uppercase rounded-none border-2">
                Get a Quote
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-foreground p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-background z-40 flex flex-col items-center justify-center gap-8 transition-all duration-500 md:hidden",
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        {navLinks.map((link) => (
          <a
            key={link.path}
            href={link.path}
            onClick={(e) => handleNavClick(e, link)}
            className={cn(
              "text-2xl font-display font-bold hover:text-primary transition-colors cursor-pointer",
              location === link.path ? "text-primary" : "text-foreground"
            )}
          >
            {link.name}
          </a>
        ))}
        <Link href="/quote" onClick={() => setIsMobileMenuOpen(false)}>
          <Button
            size="lg"
            className="mt-4 bg-primary text-primary-foreground hover:bg-primary/90 rounded-none font-bold tracking-wider uppercase"
          >
            Get a Quote
          </Button>
        </Link>
      </div>
    </header>
  );
}
