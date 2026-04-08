import ServicePageTemplate from "@/components/ServicePageTemplate";
const bannerImg = "https://d2xsxph8kpxj0f.cloudfront.net/114162150/9cq25HcAAqsxAnnXj75PoC/shedsBanner_09173f46.jpg";
const project1 = "https://d2xsxph8kpxj0f.cloudfront.net/114162150/9cq25HcAAqsxAnnXj75PoC/shed1_fb62c7ae.jpg";
const project2 = "https://d2xsxph8kpxj0f.cloudfront.net/114162150/9cq25HcAAqsxAnnXj75PoC/shed2_0bffd658.jpg";
const project3 = "https://d2xsxph8kpxj0f.cloudfront.net/114162150/9cq25HcAAqsxAnnXj75PoC/shed3_6c2fb5c9.jpg";

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
