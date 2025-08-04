import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";

// Available Unsplash placeholder images
const unsplashImages = [
  {
    id: "photo-1472396961693-142e6e269027",
    title: "Brown deer beside trees and mountain",
    url: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800&h=600&fit=crop",
  },
  {
    id: "photo-1433086966358-54859d0ed716",
    title: "Gray concrete bridge and waterfalls",
    url: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=800&h=600&fit=crop",
  },
  {
    id: "photo-1465146344425-f00d5f5c8f07",
    title: "Orange flowers",
    url: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=800&h=600&fit=crop",
  },
  {
    id: "photo-1482938289607-e9573fc25ebb",
    title: "Desert sand",
    url: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=800&h=600&fit=crop",
  },
  {
    id: "photo-1500673922987-e212871fec22",
    title: "Yellow lights between trees",
    url: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=800&h=600&fit=crop",
  },
  {
    id: "photo-1506744038136-46273834b3fb",
    title: "Body of water surrounded by trees",
    url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&h=600&fit=crop",
  },
  {
    id: "photo-1466721591366-2d5fba72006d",
    title: "Brown antelope and zebra on field",
    url: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d?w=800&h=600&fit=crop",
  },
  {
    id: "photo-1493962853295-0fd70327578a",
    title: "Brown ox on mountain",
    url: "https://images.unsplash.com/photo-1493962853295-0fd70327578a?w=800&h=600&fit=crop",
  },
];

interface PixabayImage {
  id: number;
  webformatURL: string;
  tags: string;
  user: string;
}

const ImageGallery = () => {
  const [pixabayImages, setPixabayImages] = useState<PixabayImage[]>([]);
  const [pixabayApiKey, setPixabayApiKey] = useState("");
  const [searchQuery, setSearchQuery] = useState("nature resort");
  const [loading, setLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Image adjustment states
  const [brightness, setBrightness] = useState(100);
  const [contrast, setContrast] = useState(100);
  const [saturation, setSaturation] = useState(100);
  const [blur, setBlur] = useState(0);

  const fetchPixabayImages = async () => {
    if (!pixabayApiKey) {
      toast.error("Please enter your Pixabay API key");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(
        `https://pixabay.com/api/?key=${pixabayApiKey}&q=${encodeURIComponent(searchQuery)}&category=nature&min_width=800&per_page=12`
      );
      const data = await response.json();
      
      if (data.hits) {
        setPixabayImages(data.hits);
        toast.success(`Found ${data.hits.length} images from Pixabay`);
      } else {
        toast.error("Failed to fetch images from Pixabay");
      }
    } catch (error) {
      console.error("Error fetching Pixabay images:", error);
      toast.error("Error fetching images from Pixabay");
    } finally {
      setLoading(false);
    }
  };

  const resetAdjustments = () => {
    setBrightness(100);
    setContrast(100);
    setSaturation(100);
    setBlur(0);
  };

  const getImageStyle = () => ({
    filter: `brightness(${brightness}%) contrast(${contrast}%) saturate(${saturation}%) blur(${blur}px)`,
    transition: "filter 0.3s ease",
  });

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Image Gallery
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore beautiful nature and resort images with real-time adjustments
          </p>
        </div>

        {/* Image Adjustments Panel */}
        <Card className="mb-8 border-primary/20">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold text-primary mb-4">Image Adjustments</h3>
            <div className="grid md:grid-cols-4 gap-4 mb-4">
              <div>
                <label className="text-sm font-medium text-muted-foreground">Brightness</label>
                <Input
                  type="range"
                  min="0"
                  max="200"
                  value={brightness}
                  onChange={(e) => setBrightness(Number(e.target.value))}
                  className="mt-1"
                />
                <span className="text-xs text-muted-foreground">{brightness}%</span>
              </div>
              <div>
                <label className="text-sm font-medium text-muted-foreground">Contrast</label>
                <Input
                  type="range"
                  min="0"
                  max="200"
                  value={contrast}
                  onChange={(e) => setContrast(Number(e.target.value))}
                  className="mt-1"
                />
                <span className="text-xs text-muted-foreground">{contrast}%</span>
              </div>
              <div>
                <label className="text-sm font-medium text-muted-foreground">Saturation</label>
                <Input
                  type="range"
                  min="0"
                  max="200"
                  value={saturation}
                  onChange={(e) => setSaturation(Number(e.target.value))}
                  className="mt-1"
                />
                <span className="text-xs text-muted-foreground">{saturation}%</span>
              </div>
              <div>
                <label className="text-sm font-medium text-muted-foreground">Blur</label>
                <Input
                  type="range"
                  min="0"
                  max="10"
                  value={blur}
                  onChange={(e) => setBlur(Number(e.target.value))}
                  className="mt-1"
                />
                <span className="text-xs text-muted-foreground">{blur}px</span>
              </div>
            </div>
            <Button onClick={resetAdjustments} variant="outline">
              Reset Adjustments
            </Button>
          </CardContent>
        </Card>

        <Tabs defaultValue="unsplash" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="unsplash">Unsplash Images</TabsTrigger>
            <TabsTrigger value="pixabay">Pixabay Images</TabsTrigger>
          </TabsList>

          <TabsContent value="unsplash">
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
              {unsplashImages.map((image) => (
                <Card key={image.id} className="overflow-hidden border-muted/40 hover:border-primary/50 transition-colors">
                  <CardContent className="p-0">
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={image.url}
                        alt={image.title}
                        className="w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform"
                        style={getImageStyle()}
                        onClick={() => setSelectedImage(image.url)}
                      />
                    </div>
                    <div className="p-3">
                      <p className="text-sm text-muted-foreground truncate">{image.title}</p>
                      <p className="text-xs text-muted-foreground mt-1">Unsplash</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="pixabay">
            <div className="mb-6 space-y-4">
              <div className="flex gap-4">
                <Input
                  type="password"
                  placeholder="Enter your Pixabay API key"
                  value={pixabayApiKey}
                  onChange={(e) => setPixabayApiKey(e.target.value)}
                  className="flex-1"
                />
                <Input
                  placeholder="Search query (e.g., nature resort)"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1"
                />
                <Button onClick={fetchPixabayImages} disabled={loading}>
                  {loading ? "Loading..." : "Search"}
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                Get your free API key from{" "}
                <a href="https://pixabay.com/api/docs/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  Pixabay API Documentation
                </a>
              </p>
            </div>

            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
              {pixabayImages.map((image) => (
                <Card key={image.id} className="overflow-hidden border-muted/40 hover:border-primary/50 transition-colors">
                  <CardContent className="p-0">
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={image.webformatURL}
                        alt={image.tags}
                        className="w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform"
                        style={getImageStyle()}
                        onClick={() => setSelectedImage(image.webformatURL)}
                      />
                    </div>
                    <div className="p-3">
                      <p className="text-sm text-muted-foreground truncate">{image.tags}</p>
                      <p className="text-xs text-muted-foreground mt-1">by {image.user} • Pixabay</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Full Size Image Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="max-w-4xl max-h-full">
              <img
                src={selectedImage}
                alt="Full size"
                className="max-w-full max-h-full object-contain"
                style={getImageStyle()}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ImageGallery;