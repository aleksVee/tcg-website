import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    text: "Zac is so professional.. it is refreshing to know there are still people like him on this planet. Would i recommend him to someone I know. 100% ! As far as I am concerned he has my business for life.",
    author: "Phil",
    location: "Canberra"
  },
  {
    id: 2,
    text: "Couldnt be happier with the service from Zac and team at The Concrete Guyz. The team took care of everything from removal of old driveways, to sourcing all materials and delivering a beautiful finish. From the time of my initial enquiry Zac gave me detailed explanations of the process and kept me updated throughout until completion while answering all my queries. They are a quality local business who i would recommend to anyone around Canberra. Cheers Concrete Guyz.",
    author: "Josh M",
    location: "Canberra"
  },
  {
    id: 3,
    text: "Zac is very professional and knowledgeable, he quickly understood our requirements an delivered and excellent result. Hihgly recommend Zac and his team to anyone requiring quality concreting job.",
    author: "Alastair M",
    location: "Canberra"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background texture/pattern could go here */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: "radial-gradient(#EAEAEA 1px, transparent 1px)", backgroundSize: "20px 20px" }}>
      </div>

      <div className="container relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Client Stories</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Trusted by Canberra's Best
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="bg-card border border-border p-8 md:p-10 relative group hover:border-primary/50 transition-colors duration-300"
            >
              <Quote className="text-primary/20 w-12 h-12 mb-6 group-hover:text-primary/40 transition-colors" />
              <p className="text-muted-foreground text-lg italic mb-8 leading-relaxed">
                "{item.text}"
              </p>
              <div>
                <h4 className="font-display font-bold text-foreground text-lg">{item.author}</h4>
                <span className="text-primary text-sm uppercase tracking-wider font-bold">{item.location}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <a 
            href="https://www.google.com/search?sca_esv=d866c615fc56355b&rlz=1C5OZZY_enAU1127AU1127&sxsrf=ANbL-n53eZv-wjX3L7Sq9SUwNmLb4uDm0Q:1769242414962&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOdnUsZPaRVEAtT5A9yTq5t1fySh6uPQBEeLbBd5t0Yp7wocNThXv3hWUY18sSbFBXjo8jEQxwSNhHK1doO4NTRFAoFw2E_xrVPWJ5JDC6tn3SJwbCw%3D%3D&q=The+Concrete+Guyz+Reviews&sa=X&ved=2ahUKEwjni6nN3aOSAxUSwzgGHbU4KhoQ0bkNegQIMRAF&biw=1512&bih=827&dpr=2&aic=0" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center h-12 px-8 bg-transparent border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-300 font-bold tracking-wider uppercase text-sm"
          >
            See what others are saying about our work
          </a>
        </div>
      </div>
    </section>
  );
}
