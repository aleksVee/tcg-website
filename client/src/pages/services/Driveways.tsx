import ServicePageTemplate from "@/components/ServicePageTemplate";

export default function Driveways() {
  return (
    <ServicePageTemplate
      title="Luxury Driveways"
      subtitle="Residential Concrete"
      description="Your driveway is the first thing people see when they visit your home. We specialize in creating stunning, durable concrete driveways that enhance your property's curb appeal and value. From exposed aggregate to honed finishes, our driveways are engineered to withstand the elements while looking immaculate."
      heroImage="https://d2xsxph8kpxj0f.cloudfront.net/114162150/9cq25HcAAqsxAnnXj75PoC/hero_driveway_8c71570c.jpg"
      benefits={[
        "Increased property value and curb appeal",
        "Low maintenance and high durability",
        "Wide range of aggregate colors and finishes",
        "Professional drainage solutions included"
      ]}
      features={[
        {
          title: "Exposed Aggregate",
          description: "Our most popular finish, revealing the natural beauty of stone within the concrete. Slip-resistant and incredibly durable for high-traffic areas."
        },
        {
          title: "Concrete Tinting & Sealing",
          description: "Revitalize your existing driveway with our tinting and sealing services. We can restore colour and protect your concrete, giving it a fresh look and extending its lifespan."
        },
        {
          title: "Coloured Concrete",
          description: "Integral colour mixed throughout the concrete, ensuring a rich and consistent tone."
        }
      ]}
      galleryImages={[
        "https://d2xsxph8kpxj0f.cloudfront.net/114162150/9cq25HcAAqsxAnnXj75PoC/hero_driveway_8c71570c.jpg",
        "https://d2xsxph8kpxj0f.cloudfront.net/114162150/9cq25HcAAqsxAnnXj75PoC/portfolio_residential_fe297f7a.jpg",
        "https://d2xsxph8kpxj0f.cloudfront.net/114162150/9cq25HcAAqsxAnnXj75PoC/portfolio_pathway_a7369dd8.jpg"
      ]}
    />
  );
}
