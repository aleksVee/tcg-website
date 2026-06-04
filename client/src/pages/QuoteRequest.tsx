import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { CheckCircle2, Loader2, ShieldCheck, Star } from "lucide-react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = "service_dh2r1n8";
const EMAILJS_TEMPLATE_ID = "template_ita0ejv";
const EMAILJS_PUBLIC_KEY = "vLTBIR_Ov8g8gpMz1";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(8, "Valid phone number is required"),
  location: z.string().min(2, "Job location is required"),
  description: z.string().min(10, "Please provide a brief description of the job"),
});

type FormData = z.infer<typeof formSchema>;

export default function QuoteRequest() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);

    try {
      const templateParams = {
        from_name: data.name,
        reply_to: data.email,
        phone: data.phone,
        location: data.location,
        message: data.description,
        project_type: "Quote Request",
      };

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      setIsSuccess(true);
      toast.success("Quote request submitted successfully!");
      reset();
    } catch (error) {
      console.error("EmailJS error:", error);
      toast.error("Something went wrong. Please try again or call us directly.");
    } finally {
      setIsSubmitting(false);
    }
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

          <div className="bg-card border border-border p-5 sm:p-8 md:p-12 shadow-sm relative overflow-hidden">
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
                  Thank you for reaching out. We will review your request and be in touch to discuss your project.
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
                      placeholder="0428 726 123"
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
                  <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 text-muted-foreground/80 bg-muted/30 px-6 py-3 rounded-full border border-border/50 text-center sm:text-left">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-5 h-5 text-primary" />
                      <span className="text-xs font-bold uppercase tracking-wider">Fully Licensed & Insured</span>
                    </div>
                    <div className="hidden sm:block w-px h-4 bg-border"></div>
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
