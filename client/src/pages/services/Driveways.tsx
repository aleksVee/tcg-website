import ServicePageTemplate from "@/components/ServicePageTemplate";

export default function Driveways() {
  return (
    <ServicePageTemplate
      title="Luxury Driveways"
      subtitle="Residential Concrete"
      description="Your driveway is the first thing people see when they visit your home. We specialize in creating stunning, durable concrete driveways that enhance your property's curb appeal and value. From exposed aggregate to honed finishes, our driveways are engineered to withstand the elements while looking immaculate."
      heroImage="/images/hero_driveway.jpg"
      benefits={[
        "Increased property value and curb appeal",
        "Low maintenance and high durability",
        "Wide range of aggregate colors and finishes",
        "Professional drainage solutions included",
        "Structural integrity guarantee"
      ]}
      features={[
        {
          title: "Exposed Aggregate",
          description: "Our most popular finish, revealing the natural beauty of stone within the concrete. Slip-resistant and incredibly durable for high-traffic areas."
        },
        {
          title: "Honed & Sealed",
          description: "A smoother, matte finish that offers a sophisticated, contemporary look. Perfect for modern architectural homes."
        },
        {
          title: "Colored Concrete",
          description: "Integral color mixed throughout the concrete, ensuring a rich, consistent tone that won't chip or fade over time."
        }
      ]}
      galleryImages={[
        "/images/hero_driveway.jpg",
        "/images/portfolio_residential.jpg",
        "/images/portfolio_pathway.jpg"
      ]}
    />
  );
}
