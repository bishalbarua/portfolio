import { Button } from "@/components/ui/button";
import { User, Linkedin, Globe, Briefcase } from "lucide-react";
import { SiBehance } from "react-icons/si";
import profileImage from "@assets/Bishal-Linkedin_1756995206610.png";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const techStack = [
    "AI Marketing", "SEO", "JavaScript", "Node.js", "React", "Git", "Github"
  ];

  return (
    <section id="home" className="pt-20 pb-16 md:pt-24 md:pb-20 flex items-center relative" data-testid="hero-section">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left side - Text content */}
        <div className="space-y-8">
          <div className="space-y-2">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground">
              Hello<span className="text-primary">.</span>
            </h1>
            <div className="w-24 h-1 bg-primary"></div>
            <p className="text-2xl md:text-3xl text-muted-foreground">
              I'm Bishal
            </p>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-foreground" data-testid="hero-title">
            AI-Driven Marketing Expert
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              onClick={() => scrollToSection('contact')} 
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3"
              data-testid="button-contact"
            >
              Got a project?
            </Button>
            <Button 
              variant="outline" 
              onClick={() => scrollToSection('experience')}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-6 py-3"
              data-testid="button-work"
            >
              My resume
            </Button>
          </div>
          
          {/* Tech stack */}
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            {techStack.map((tech, index) => (
              <span key={index} className="opacity-60">
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        {/* Right side - Profile image */}
        <div className="flex justify-center lg:justify-end" data-testid="profile-image">
          <div className="relative">
            <div className="w-80 h-80 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 p-4">
              <div className="w-full h-full rounded-full bg-transparent border-4 border-primary/20 flex items-center justify-center overflow-hidden">
                <img 
                  src={profileImage} 
                  alt="Bishal Barua - AI-Driven Marketing Expert" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
            {/* Decorative circle */}
            <div className="absolute -inset-4 rounded-full border-2 border-primary/20"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
