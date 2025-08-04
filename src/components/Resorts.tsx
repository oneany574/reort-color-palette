import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Resorts = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Discover Our Resorts
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Immerse yourself in unforgettable experiences across our premium destinations
          </p>
        </div>

        <Tabs defaultValue="about" className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-8">
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="foods">Cuisine</TabsTrigger>
            <TabsTrigger value="entertainment">Entertainment</TabsTrigger>
            <TabsTrigger value="culture">Culture</TabsTrigger>
            <TabsTrigger value="parks">National Parks</TabsTrigger>
          </TabsList>

          <TabsContent value="about" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle className="text-primary">Luxury Accommodations</CardTitle>
                  <CardDescription>Experience comfort redefined</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Our resorts feature world-class amenities, from spa facilities to infinity pools, 
                    all designed to provide the ultimate relaxation experience.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li>• Premium suites with ocean views</li>
                    <li>• 24/7 concierge service</li>
                    <li>• Private beach access</li>
                    <li>• Wellness and spa centers</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-secondary/20">
                <CardHeader>
                  <CardTitle className="text-primary">Sustainable Tourism</CardTitle>
                  <CardDescription>Protecting nature for future generations</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    We're committed to eco-friendly practices that preserve the natural beauty 
                    of our destinations while providing exceptional guest experiences.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li>• Solar-powered facilities</li>
                    <li>• Local community partnerships</li>
                    <li>• Wildlife conservation programs</li>
                    <li>• Zero-waste initiatives</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="foods" className="space-y-8">
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-yellow/20">
                <CardHeader>
                  <CardTitle className="text-primary">Local Delicacies</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Savor authentic regional cuisines prepared by master chefs using fresh, 
                    locally-sourced ingredients.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-yellow/20">
                <CardHeader>
                  <CardTitle className="text-primary">Fine Dining</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Experience world-class restaurants featuring international cuisines 
                    and innovative culinary creations.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-yellow/20">
                <CardHeader>
                  <CardTitle className="text-primary">Cooking Classes</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Learn traditional cooking techniques from local chefs and take home 
                    authentic recipes and skills.
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="entertainment" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-primary">Adventure Activities</h3>
                <div className="grid gap-4">
                  <Card>
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-accent mb-2">Water Sports</h4>
                      <p className="text-sm text-muted-foreground">Diving, snorkeling, kayaking, and sailing</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-accent mb-2">Land Adventures</h4>
                      <p className="text-sm text-muted-foreground">Hiking, rock climbing, zip-lining, and cycling</p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-primary">Relaxation & Wellness</h3>
                <div className="grid gap-4">
                  <Card>
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-accent mb-2">Spa Services</h4>
                      <p className="text-sm text-muted-foreground">Massages, aromatherapy, and wellness treatments</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-accent mb-2">Evening Entertainment</h4>
                      <p className="text-sm text-muted-foreground">Live music, cultural shows, and themed events</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="culture" className="space-y-8">
            <div className="grid gap-8">
              <Card className="border-accent/20">
                <CardHeader>
                  <CardTitle className="text-primary">Cultural Immersion</CardTitle>
                  <CardDescription>Connect with local traditions and heritage</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-secondary mb-2">Traditional Arts</h4>
                      <p className="text-sm text-muted-foreground">
                        Experience local crafts, pottery, weaving, and painting workshops 
                        with master artisans.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-secondary mb-2">Music & Dance</h4>
                      <p className="text-sm text-muted-foreground">
                        Join traditional music sessions and dance performances that 
                        celebrate regional heritage.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-secondary mb-2">Local Markets</h4>
                      <p className="text-sm text-muted-foreground">
                        Explore vibrant markets, meet local vendors, and discover 
                        authentic handmade products.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-secondary mb-2">Historical Tours</h4>
                      <p className="text-sm text-muted-foreground">
                        Guided visits to ancient sites, museums, and cultural landmarks 
                        with expert historians.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="parks" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-muted/40">
                <CardHeader>
                  <CardTitle className="text-primary">Protected Wilderness</CardTitle>
                  <CardDescription>Explore pristine natural environments</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Our resorts provide exclusive access to nearby national parks and 
                    protected areas, offering guided tours and eco-adventures.
                  </p>
                  <Button variant="outline" className="w-full">
                    View Park Tours
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-muted/40">
                <CardHeader>
                  <CardTitle className="text-primary">Wildlife Experiences</CardTitle>
                  <CardDescription>Encounter native flora and fauna</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Professional naturalist guides lead wildlife safaris, bird watching 
                    tours, and conservation education programs.
                  </p>
                  <Button variant="outline" className="w-full">
                    Book Wildlife Tour
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 grid md:grid-cols-3 gap-4">
              <div className="text-center p-4">
                <div className="text-2xl font-bold text-yellow">50+</div>
                <div className="text-sm text-muted-foreground">Protected Species</div>
              </div>
              <div className="text-center p-4">
                <div className="text-2xl font-bold text-yellow">15</div>
                <div className="text-sm text-muted-foreground">National Parks</div>
              </div>
              <div className="text-center p-4">
                <div className="text-2xl font-bold text-yellow">1000+</div>
                <div className="text-sm text-muted-foreground">Acres of Wilderness</div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Resorts;