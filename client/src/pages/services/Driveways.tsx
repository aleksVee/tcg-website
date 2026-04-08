import ServicePageTemplate from "@/components/ServicePageTemplate";
const bannerImg = "https://d2xsxph8kpxj0f.cloudfront.net/114162150/9cq25HcAAqsxAnnXj75PoC/luxuryDrivewaysBanner_4424f966.jpg";
const project1 = "https://d2xsxph8kpxj0f.cloudfront.net/114162150/9cq25HcAAqsxAnnXj75PoC/luxuryDriveways1_0b4b5bb4.jpg";
const project2 = "https://d2xsxph8kpxj0f.cloudfront.net/114162150/9cq25HcAAqsxAnnXj75PoC/luxuryDriveways2_263d473d.jpg";
const project3 = "https://d2xsxph8kpxj0f.cloudfront.net/114162150/9cq25HcAAqsxAnnXj75PoC/luxuryDriveways3_7b8c3925.jpg";

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
