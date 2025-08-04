import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Services from "@/components/Services";
import Resorts from "@/components/Resorts";
import ImageGallery from "@/components/ImageGallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <Services />
      <Resorts />
      <ImageGallery />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
