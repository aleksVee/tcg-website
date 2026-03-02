import ServicePageTemplate from "@/components/ServicePageTemplate";

export default function GaragesSheds() {
  return (
    <ServicePageTemplate
      title="Garages & Shed Slabs"
      subtitle="Built for Strength"
      description="A solid structure starts with a solid foundation. We specialize in pouring high-strength, reinforced concrete slabs for garages, sheds, and workshops. Whether it's for heavy machinery, vehicle storage, or a backyard workshop, our slabs are engineered to handle the load and built to last for generations."
      heroImage="https://d2xsxph8kpxj0f.cloudfront.net/114162150/9cq25HcAAqsxAnnXj75PoC/portfolio_residential_fe297f7a.jpg"
      benefits={[
        "High-strength reinforced concrete",
        "Laser-level precision for flat surfaces",
        "Engineered for heavy load-bearing",
        "Durable, low-maintenance finish"
      ]}
      features={[
        {
          title: "Controlled Placement & Finishing",
          description: "From set-out to final trowel, we maintain tight level control to achieve consistent surfaces suited to garages, sheds, and structural builds."
        },
        {
          title: "Engineer-Aligned Construction",
          description: "Built in direct accordance with engineering drawings and structural specifications to guarantee compliance, strength, and durability."
        }
      ]}
      galleryImages={[
        "https://d2xsxph8kpxj0f.cloudfront.net/114162150/9cq25HcAAqsxAnnXj75PoC/portfolio_residential_fe297f7a.jpg",
        "https://d2xsxph8kpxj0f.cloudfront.net/114162150/9cq25HcAAqsxAnnXj75PoC/portfolio_pool_deck_f98b6989.jpg",
        "https://d2xsxph8kpxj0f.cloudfront.net/114162150/9cq25HcAAqsxAnnXj75PoC/portfolio_outdoor_kitchen_86149060.jpg"
      ]}
    />
  );
}
