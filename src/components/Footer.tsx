const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Reort</h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              Your gateway to natural tranquility and luxury comfort. 
              Experience the perfect blend of nature and elegance.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#home" className="hover:text-yellow transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-yellow transition-colors">About</a></li>
              <li><a href="#services" className="hover:text-yellow transition-colors">Services</a></li>
              <li><a href="#contact" className="hover:text-yellow transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#" className="hover:text-yellow transition-colors">Wellness & Spa</a></li>
              <li><a href="#" className="hover:text-yellow transition-colors">Adventure Tours</a></li>
              <li><a href="#" className="hover:text-yellow transition-colors">Fine Dining</a></li>
              <li><a href="#" className="hover:text-yellow transition-colors">Event Planning</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#" className="hover:text-yellow transition-colors">Newsletter</a></li>
              <li><a href="#" className="hover:text-yellow transition-colors">Social Media</a></li>
              <li><a href="#" className="hover:text-yellow transition-colors">Reviews</a></li>
              <li><a href="#" className="hover:text-yellow transition-colors">Blog</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-primary-foreground/60">
            © 2024 Reort. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;