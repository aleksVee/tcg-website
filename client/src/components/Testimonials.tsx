import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    text: "The Concrete Guyz transformed our home entrance completely. The exposed aggregate finish is flawless, and the team's attention to detail was impressive. Truly premium workmanship.",
    author: "James & Sarah M.",
    location: "Yarralumla"
  },
  {
    id: 2,
    text: "We commissioned a custom concrete benchtop for our kitchen renovation. It's now the centerpiece of our home. The craftsmanship is undeniable - smooth, durable, and beautiful.",
    author: "Michael T.",
    location: "Kingston"
  },
  {
    id: 3,
    text: "Professional from start to finish. They understood our vision for the pool deck and executed it perfectly. The finish is exactly what we wanted - safe but sophisticated.",
    author: "Elena R.",
    location: "Red Hill"
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
      </div>
    </section>
  );
}
