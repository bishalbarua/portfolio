import { Bot, Search, Megaphone, Share, CheckSquare, BarChart, Globe, Server } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: Bot,
      title: "AI Marketing",
      description: "Leverage AI tools for intelligent marketing automation and strategy optimization"
    },
    {
      icon: CheckSquare,
      title: "Project Management", 
      description: "End-to-end project delivery with agile methodologies and quality assurance"
    },
    {
      icon: Globe,
      title: "Digital Strategy",
      description: "Comprehensive digital marketing strategies across all platforms and channels"
    }
  ];

  return (
    <section id="services" className="py-20" data-testid="services-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Services timeline */}
          <div className="space-y-8">
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-12 top-0 bottom-0 w-0.5 bg-primary/30"></div>
              
              {services.map((service, index) => {
                const IconComponent = service.icon;
                
                return (
                  <div key={index} className="relative flex items-start space-x-6 pb-12" data-testid={`service-${index}`}>
                    {/* Icon circle */}
                    <div className="relative z-10 flex-shrink-0">
                      <div className="w-24 h-24 bg-card border-4 border-primary/20 rounded-2xl flex items-center justify-center">
                        <IconComponent className="h-8 w-8 text-primary" />
                      </div>
                      {/* Orange dot */}
                      <div className="absolute -right-1 -bottom-1 w-4 h-4 bg-primary rounded-full"></div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 pt-2">
                      <h3 className="text-2xl font-semibold text-foreground mb-2">{service.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Right side - About content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6" data-testid="services-title">
                About me
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                I started my marketing journey from traditional advertising. Through that, I learned to 
                love the process of creating innovative campaigns. Since then, this has led me to 
                AI-driven marketing as it fulfills my love for learning and building strategies.
              </p>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-bold text-foreground mb-2">
                  150<span className="text-primary">+</span>
                </div>
                <div className="text-sm text-muted-foreground">
                  Lead Generation<br />Increase
                </div>
              </div>
              
              <div>
                <div className="text-4xl font-bold text-foreground mb-2">
                  95<span className="text-primary">%</span>
                </div>
                <div className="text-sm text-muted-foreground">
                  Client<br />satisfaction
                </div>
              </div>
              
              <div>
                <div className="text-4xl font-bold text-foreground mb-2">
                  5<span className="text-primary">+</span>
                </div>
                <div className="text-sm text-muted-foreground">
                  Years of<br />experience
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
