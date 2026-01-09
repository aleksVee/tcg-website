import { Link } from "wouter";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border pt-20 pb-10">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="block mb-6">
              <img 
                src="/images/TCGLogoOnlyTransparent.png" 
                alt="The Concrete Guyz" 
                className="h-16 w-auto opacity-80 hover:opacity-100 transition-opacity" 
              />
            </Link>
            <p className="text-muted-foreground mb-6 max-w-xs">
              Building legacies in concrete. Canberra's premium concreters delivering architectural foundations and furniture-grade artistry.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-foreground hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div className="col-span-1">
            <h4 className="font-display font-bold text-lg mb-6 text-primary">Services</h4>
            <ul className="space-y-3">
              <li><Link href="/services/driveways" className="text-muted-foreground hover:text-primary transition-colors">Residential Driveways</Link></li>
              <li><Link href="/services/pool-decks" className="text-muted-foreground hover:text-primary transition-colors">Pool Decks & Surrounds</Link></li>
              <li><Link href="/services/commercial" className="text-muted-foreground hover:text-primary transition-colors">Commercial Projects</Link></li>
              <li><Link href="/services/artisanal" className="text-muted-foreground hover:text-primary transition-colors">Artisanal Concrete</Link></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="font-display font-bold text-lg mb-6 text-primary">Company</h4>
            <ul className="space-y-3">
              <li><Link href="/story" className="text-muted-foreground hover:text-primary transition-colors">Our Story</Link></li>
              <li><Link href="/portfolio" className="text-muted-foreground hover:text-primary transition-colors">Portfolio</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact Us</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Request Quote</Link></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="font-display font-bold text-lg mb-6 text-primary">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-primary shrink-0 mt-1" />
                <span className="text-muted-foreground">Canberra, ACT & Surrounding Regions</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-primary shrink-0" />
                <a href="tel:+61400000000" className="text-muted-foreground hover:text-primary transition-colors">0400 000 000</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-primary shrink-0" />
                <a href="mailto:info@theconcreteguyz.com.au" className="text-muted-foreground hover:text-primary transition-colors">info@theconcreteguyz.com.au</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} The Concrete Guyz. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
