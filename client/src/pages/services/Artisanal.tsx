import ServicePageTemplate from "@/components/ServicePageTemplate";

export default function Artisanal() {
  return (
    <ServicePageTemplate
      title="Artisanal Concrete"
      subtitle="Bespoke Interiors"
      description="Concrete is no longer just for foundations. We craft furniture-grade architectural pieces that serve as stunning focal points in your home. From custom kitchen benchtops to floating vanities and fireplace hearths, our artisanal work pushes the boundaries of what concrete can be."
      heroImage="/images/artisanal_benchtop.jpg"
      benefits={[
        "Completely custom shapes and sizes",
        "Unique textures and color variations",
        "Heat and stain resistant sealing",
        "Seamless, monolithic appearance",
        "Hand-finished craftsmanship"
      ]}
      features={[
        {
          title: "Custom Benchtops",
          description: "Durable, heat-resistant, and stunningly unique. Our concrete benchtops are cast to your exact specifications."
        },
        {
          title: "Integrated Basins",
          description: "Seamless sinks and vanities where the basin flows naturally from the countertop surface."
        },
        {
          title: "Fireplace Surrounds",
          description: "Create a dramatic statement with a floor-to-ceiling concrete fireplace surround or a floating hearth."
        },
        {
          title: "Exterior Fitouts & Benches",
          description: "Custom outdoor seating, BBQ areas, and architectural landscape features designed to withstand the elements in style."
        }
      ]}
      galleryImages={[
        "/images/artisanal_benchtop.jpg",
        "/images/artisanal_basin.jpg",
        "/images/artisanal_fireplace.jpg"
      ]}
    />
  );
}
