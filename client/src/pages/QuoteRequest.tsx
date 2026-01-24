import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Upload, CheckCircle2, Loader2, ShieldCheck, Star } from "lucide-react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(8, "Valid phone number is required"),
  location: z.string().min(2, "Job location is required"),
  finishType: z.string().optional(),
  description: z.string().min(10, "Please provide a brief description of the job"),
});

type FormData = z.infer<typeof formSchema>;

const finishOptions = [
  {
    id: "exposed",
    name: "Exposed Aggregate",
    image: "/images/textures/exposed_aggregate.jpg",
    description: "Textured, durable, non-slip"
  },
  {
    id: "honed",
    name: "Honed Concrete",
    image: "/images/textures/honed_concrete.jpg",
    description: "Smooth matte finish, outdoor friendly"
  },
  {
    id: "polished",
    name: "Polished Concrete",
    image: "/images/textures/polished_concrete.jpg",
    description: "High-gloss, premium indoor finish"
  }
];

export default function QuoteRequest() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [selectedFinish, setSelectedFinish] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleFinishSelect = (finishId: string) => {
    setSelectedFinish(finishId);
    setValue("finishType", finishId);
  };

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    console.log("Form Data:", data);
    console.log("Attached File:", selectedFile?.name);
    
    setIsSubmitting(false);
    setIsSuccess(true);
    toast.success("Quote request submitted successfully!");
    reset();
    setSelectedFile(null);
    setSelectedFinish(null);
  };

  return (
    <Layout>
      <div className="bg-background min-h-screen pt-32 pb-20">
        <div className="container max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 relative"
          >
            {/* Grid Pattern Background for Heading */}
            <div className="absolute inset-0 bg-grid-pattern opacity-[0.30] pointer-events-none"></div>
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">
              Start your project
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Request a Quote
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Tell us about your vision, we're here to bring it to life.
            </p>
          </motion.div>

          <div className="bg-card border border-border p-8 md:p-12 shadow-sm relative overflow-hidden">
            {/* Gold Top Border Accent */}
            <div className="absolute top-0 left-0 w-full h-1 bg-primary"></div>
            {/* Subtle Warm Background Tint */}
            <div className="absolute inset-0 bg-primary/5 pointer-events-none"></div>
            {/* Grid Pattern Background */}
            <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none bg-grid-pattern"></div>

            {isSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-16"
              >
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10 text-primary" />
                </div>
                <h3 className="font-display text-3xl font-bold text-foreground mb-4">
                  Request Received!
                </h3>
                <p className="text-muted-foreground text-lg mb-8 max-w-md mx-auto">
                  Thank you for reaching out. Our team will review your details and get back to you within 24-48 hours to discuss your project.
                </p>
                <Button
                  onClick={() => setIsSuccess(false)}
                  className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold tracking-wider uppercase px-8 py-6"
                >
                  Submit Another Request
                </Button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground font-bold uppercase tracking-wider text-xs">Full Name</Label>
                    <Input
                      id="name"
                      placeholder="John Doe"
                      {...register("name")}
                      className="bg-background/80 border-input focus:border-primary focus:bg-background h-12 transition-all duration-300"
                    />
                    {errors.name && (
                      <p className="text-destructive text-sm">{errors.name.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground font-bold uppercase tracking-wider text-xs">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      {...register("email")}
                      className="bg-background/80 border-input focus:border-primary focus:bg-background h-12 transition-all duration-300"
                    />
                    {errors.email && (
                      <p className="text-destructive text-sm">{errors.email.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-foreground font-bold uppercase tracking-wider text-xs">Phone Number</Label>
                    <Input
                      id="phone"
                      placeholder="0428 728 123"
                      {...register("phone")}
                      className="bg-background/80 border-input focus:border-primary focus:bg-background h-12 transition-all duration-300"
                    />
                    {errors.phone && (
                      <p className="text-destructive text-sm">{errors.phone.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="location" className="text-foreground font-bold uppercase tracking-wider text-xs">Job Location</Label>
                    <Input
                      id="location"
                      placeholder="Suburb or Address"
                      {...register("location")}
                      className="bg-background/80 border-input focus:border-primary focus:bg-background h-12 transition-all duration-300"
                    />
                    {errors.location && (
                      <p className="text-destructive text-sm">{errors.location.message}</p>
                    )}
                  </div>
                </div>

                {/* Interactive Finish Selector */}
                <div className="space-y-4">
                  <Label className="text-foreground font-bold uppercase tracking-wider text-xs">Preferred Finish Style (Optional)</Label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                    {finishOptions.map((finish) => (
                      <div 
                        key={finish.id}
                        onClick={() => handleFinishSelect(finish.id)}
                        className={cn(
                          "relative group cursor-pointer rounded-lg overflow-hidden border-2 transition-all duration-300 h-20 md:h-24",
                          selectedFinish === finish.id 
                            ? "border-primary ring-2 ring-primary/20" 
                            : "border-transparent hover:border-primary/50"
                        )}
                      >
                        <div className="absolute inset-0">
                          <img 
                            src={finish.image} 
                            alt={finish.name}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className={cn(
                            "absolute inset-0 bg-black/40 transition-opacity duration-300 flex flex-col items-center justify-center p-1 md:p-2 text-center",
                            selectedFinish === finish.id ? "bg-black/60" : "group-hover:bg-black/50"
                          )}>
                            {selectedFinish === finish.id && (
                              <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-primary mb-0.5 md:mb-1" />
                            )}
                            <span className="text-white font-bold font-display text-xs md:text-sm drop-shadow-md leading-tight">{finish.name}</span>
                            <span className="text-white/80 text-[10px] mt-0.5 drop-shadow-md hidden sm:block">{finish.description}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <input type="hidden" {...register("finishType")} />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description" className="text-foreground font-bold uppercase tracking-wider text-xs">Project Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Describe your project (e.g., exposed aggregate driveway, approx 50sqm...)"
                    {...register("description")}
                    className="bg-background/80 border-input focus:border-primary focus:bg-background min-h-[150px] resize-y transition-all duration-300"
                  />
                  {errors.description && (
                    <p className="text-destructive text-sm">{errors.description.message}</p>
                  )}
                </div>

                <div className="space-y-4 flex flex-col items-center justify-center py-4">
                  <Label className="text-foreground font-bold uppercase tracking-wider text-xs">Upload Photo (Optional)</Label>
                  <div 
                    className="w-28 h-28 rounded-full border-2 border-dashed border-border hover:border-primary/50 transition-all duration-300 cursor-pointer bg-background/50 flex flex-col items-center justify-center gap-1 group relative overflow-hidden"
                    onClick={() => document.getElementById('file-upload')?.click()}
                  >
                    <input
                      id="file-upload"
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handleFileChange}
                    />
                    
                    {selectedFile ? (
                      <div className="absolute inset-0 bg-primary/5 flex flex-col items-center justify-center p-4 text-center">
                        <CheckCircle2 className="w-8 h-8 text-primary mb-2" />
                        <span className="text-xs font-bold text-primary truncate w-full px-2">{selectedFile.name}</span>
                        <span className="text-[10px] text-muted-foreground mt-1">Click to change</span>
                      </div>
                    ) : (
                      <>
                        <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                          <Upload className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                        </div>
                        <span className="text-[10px] font-medium text-muted-foreground group-hover:text-primary transition-colors">Upload Photo</span>
                      </>
                    )}
                  </div>
                  <p className="text-[10px] text-muted-foreground/60 uppercase tracking-widest">JPG, PNG or PDF up to 10MB</p>
                </div>

                <div className="pt-4 flex flex-col items-center gap-6">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full md:w-auto bg-primary text-primary-foreground hover:bg-primary/90 font-bold tracking-wider uppercase px-12 py-6 text-base"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Sending Request...
                      </>
                    ) : (
                      "Submit Quote Request"
                    )}
                  </Button>

                  {/* Trust Badge */}
                  <div className="flex items-center gap-6 text-muted-foreground/80 bg-muted/30 px-6 py-3 rounded-full border border-border/50">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-5 h-5 text-primary" />
                      <span className="text-xs font-bold uppercase tracking-wider">Fully Licensed & Insured</span>
                    </div>
                    <div className="w-px h-4 bg-border"></div>
                    <div className="flex items-center gap-2">
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <Star key={i} className="w-3 h-3 text-primary fill-primary" />
                        ))}
                      </div>
                      <span className="text-xs font-bold uppercase tracking-wider">Highly Rated in Canberra</span>
                    </div>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}
