import { Mail, Globe, Linkedin, Briefcase } from "lucide-react";
import { SiBehance, SiFiverr } from "react-icons/si";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-card border-t border-border py-12" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div data-testid="footer-about">
            <h3 className="text-lg font-semibold mb-4">Bishal Barua</h3>
            <p className="text-muted-foreground mb-4">
              AI-Driven Marketing Expert & Project Manager helping businesses achieve exceptional results through intelligent strategies.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/in/bishalbarua/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                data-testid="footer-linkedin"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a 
                href="https://www.behance.net/bishalbarua/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                data-testid="footer-behance"
              >
                <SiBehance className="h-6 w-6" />
              </a>
              <a 
                href="https://www.fiverr.com/bishalbarua" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                data-testid="footer-fiverr"
              >
                <SiFiverr className="h-6 w-6" />
              </a>
              <a 
                href="https://www.upwork.com/freelancers/~012f13b9ab484f9c34" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                data-testid="footer-upwork"
              >
                <Briefcase className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div data-testid="footer-services">
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <button 
                  onClick={() => scrollToSection('services')} 
                  className="hover:text-primary transition-colors text-left"
                >
                  AI Marketing
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')} 
                  className="hover:text-primary transition-colors text-left"
                >
                  SEO Optimization
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')} 
                  className="hover:text-primary transition-colors text-left"
                >
                  PPC Marketing
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')} 
                  className="hover:text-primary transition-colors text-left"
                >
                  Project Management
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')} 
                  className="hover:text-primary transition-colors text-left"
                >
                  Analytics & Reporting
                </button>
              </li>
            </ul>
          </div>
          
          <div data-testid="footer-contact">
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-muted-foreground">
              <p className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <a 
                  href="mailto:baruabishal123@gmail.com" 
                  className="hover:text-primary transition-colors"
                >
                  baruabishal123@gmail.com
                </a>
              </p>
              <p className="flex items-center">
                <Globe className="h-4 w-4 mr-2" />
                <a 
                  href="http://www.bishalbarua.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  www.bishalbarua.com
                </a>
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground" data-testid="footer-copyright">
          <p>&copy; 2025 Bishal Barua. All rights reserved. | AI-Driven Marketing Expert & Project Manager</p>
        </div>
      </div>
    </footer>
  );
}
