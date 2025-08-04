import { Card } from "@/components/ui/card";

const features = [
  {
    title: "Natural Serenity",
    description: "Immerse yourself in pristine landscapes and breathtaking views that restore your soul.",
    color: "bg-muted"
  },
  {
    title: "Luxury Comfort", 
    description: "Experience premium amenities and personalized service in our thoughtfully designed spaces.",
    color: "bg-secondary"
  },
  {
    title: "Peaceful Retreat",
    description: "Find your sanctuary away from the world, where time slows down and peace prevails.",
    color: "bg-accent"
  }
];

const Features = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Why Choose Reort
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover what makes our destination special and create memories that last a lifetime.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className={`p-8 ${feature.color} border-none text-center hover:shadow-lg transition-all duration-300 hover:scale-105`}>
              <div className="w-16 h-16 bg-yellow rounded-full mx-auto mb-6 flex items-center justify-center">
                <div className="w-8 h-8 bg-primary rounded-full"></div>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                {feature.title}
              </h3>
              <p className="text-foreground/80 leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;