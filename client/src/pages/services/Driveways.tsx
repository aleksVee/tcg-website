import ServicePageTemplate from "@/components/ServicePageTemplate";
import bannerImg from "@/assets/luxuryDriveways/luxuryDrivewaysBanner.jpg";
import project1 from "@/assets/luxuryDriveways/luxuryDriveways1.jpg";
import project2 from "@/assets/luxuryDriveways/luxuryDriveways2.jpg";
import project3 from "@/assets/luxuryDriveways/luxuryDriveways3.jpg";

export default function Driveways() {
  return (
    <ServicePageTemplate
      title="Luxury Driveways"
      subtitle="Residential Concrete"
      description="Your driveway is the first thing people see when they visit your home. We specialize in creating stunning, durable concrete driveways that enhance your property's curb appeal and value. From exposed aggregate to honed finishes, our driveways are engineered to withstand the elements while looking immaculate."
      heroImage={bannerImg}
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
          title: "Tinting & Sealing",
          description: "Revitalise your existing driveway with a tint and seal. We can restore, colour and protect your concrete, giving it a fresh look and extending its lifespan."
        },
        {
          title: "Coloured Concrete",
          description: "Integral colour mixed throughout the concrete, ensuring a rich and consistent tone."
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
