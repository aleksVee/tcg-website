import ServicePageTemplate from "@/components/ServicePageTemplate";

export default function Commercial() {
  return (
    <ServicePageTemplate
      title="Commercial Projects"
      subtitle="Industrial & Public"
      description="We deliver large-scale concrete solutions for commercial developments, public spaces, and industrial facilities. Our team understands the rigorous demands of commercial timelines and specifications, delivering high-performance concrete that meets all engineering standards."
      heroImage="/images/portfolio_commercial.jpg"
      benefits={[
        "High-strength industrial mixes",
        "Strict adherence to engineering specs",
        "Efficient project management",
        "OH&S compliant workflows",
        "Minimal downtime installation"
      ]}
      features={[
        {
          title: "Public Spaces",
          description: "Durable, low-maintenance paving for plazas, walkways, and building entrances that handle high foot traffic."
        },
        {
          title: "Structural Elements",
          description: "Foundations, retaining walls, and suspended slabs built to precise engineering requirements."
        },
        {
          title: "Architectural Features",
          description: "Statement concrete elements for commercial lobbies, reception desks, and feature walls."
        }
      ]}
      galleryImages={[
        "/images/portfolio_commercial.jpg",
        "/images/hero_driveway.jpg",
        "/images/portfolio_pathway.jpg"
      ]}
    />
  );
}
