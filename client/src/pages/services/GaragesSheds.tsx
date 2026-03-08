import ServicePageTemplate from "@/components/ServicePageTemplate";
import bannerImg from "@/assets/garageSheds/shedsBanner.jpg";
import project1 from "@/assets/garageSheds/shed1.jpg";
import project2 from "@/assets/garageSheds/shed2.jpg";
import project3 from "@/assets/garageSheds/shed3.jpg";

export default function GaragesSheds() {
  return (
    <ServicePageTemplate
      title="Garages & Shed Slabs"
      subtitle="Built for Strength"
      description="A solid structure starts with a solid foundation. We specialize in pouring high-strength, reinforced concrete slabs for garages, sheds, and workshops. Whether it's for heavy machinery, vehicle storage, or a backyard workshop, our slabs are engineered to handle the load and built to last for generations."
      heroImage={bannerImg}
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
        project1,
        project2,
        project3
      ]}
    />
  );
}
