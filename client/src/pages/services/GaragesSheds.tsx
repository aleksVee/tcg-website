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
        "Proper drainage and moisture control",
        "Durable, low-maintenance finish"
      ]}
      features={[
        {
          title: "Reinforced Integrity",
          description: "We use steel reinforcement and high-grade concrete mixes to ensure your slab can support vehicles, machinery, and structural weight without cracking."
        },
        {
          title: "Precision Levelling",
          description: "Using laser levels and expert screeding techniques, we guarantee a perfectly flat surface essential for construction and storage."
        },
        {
          title: "Custom Edge Beams",
          description: "Thickened edge beams provide additional structural support where it's needed most, ensuring the longevity of your building's perimeter."
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
