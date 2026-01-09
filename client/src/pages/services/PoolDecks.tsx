import ServicePageTemplate from "@/components/ServicePageTemplate";

export default function PoolDecks() {
  return (
    <ServicePageTemplate
      title="Pool Decks & Surrounds"
      subtitle="Outdoor Living"
      description="Transform your pool area into a luxury resort-style retreat. Our concrete pool surrounds are designed with both safety and aesthetics in mind, offering slip-resistant finishes that stay cool underfoot. We work seamlessly with pool installers to ensure a perfect integration."
      heroImage="/images/portfolio_pool_deck.jpg"
      benefits={[
        "Slip-resistant safety finishes",
        "Seamless integration with pool coping",
        "Heat-reflective options for comfort",
        "Resistant to pool chemicals and salt",
        "Custom drainage solutions"
      ]}
      features={[
        {
          title: "Seamless Integration",
          description: "We design our pours to flow perfectly with your pool's coping and surrounding landscape, creating a unified outdoor space."
        },
        {
          title: "Safety First",
          description: "Our specialized finishes provide essential grip when wet, ensuring the safety of your family and guests without compromising style."
        },
        {
          title: "Floating Steps",
          description: "Add architectural interest with cantilevered or floating concrete steps leading to your pool area."
        }
      ]}
      galleryImages={[
        "/images/portfolio_pool_deck.jpg",
        "/images/portfolio_outdoor_kitchen.jpg",
        "/images/portfolio_residential.jpg"
      ]}
    />
  );
}
