import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const services = [
  {
    title: "Wellness & Spa",
    description: "Rejuvenate your body and mind with our premium spa treatments and wellness programs.",
    features: ["Massage Therapy", "Meditation Sessions", "Yoga Classes", "Aromatherapy"]
  },
  {
    title: "Adventure Activities", 
    description: "Explore the great outdoors with guided adventures and thrilling experiences.",
    features: ["Nature Hiking", "Water Sports", "Wildlife Tours", "Sunset Expeditions"]
  },
  {
    title: "Culinary Excellence",
    description: "Savor exquisite cuisine crafted from the finest local and organic ingredients.",
    features: ["Farm-to-Table Dining", "Wine Tastings", "Cooking Classes", "Private Chef Service"]
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Curated experiences designed to create unforgettable moments during your stay.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="p-8 bg-card hover:shadow-xl transition-all duration-300 group">
              <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-accent transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-foreground">
                    <div className="w-2 h-2 bg-yellow rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                Learn More
              </Button>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button variant="hero" size="lg" className="text-lg px-12 py-6">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;