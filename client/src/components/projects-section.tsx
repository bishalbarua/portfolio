import { ExternalLink, CheckCircle, TrendingUp, Users, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Healthcare Platform Digital Transformation",
      company: "Disque Foundation | Save a Life by NHCPS",
      category: "Project Management & Web Development",
      duration: "2023 - Present",
      description: "Led cross-functional team to deliver comprehensive website development project for healthcare foundation",
      highlights: [
        "Managed team of 6 professionals across different disciplines",
        "Delivered project 3 weeks ahead of schedule",
        "Achieved 12% budget savings through efficient resource management",
        "Enhanced customer satisfaction by 25% through user-centric design",
        "Completed 48 marketing and analytics projects on-time"
      ],
      results: [
        { icon: TrendingUp, label: "Business Profits", value: "+15%" },
        { icon: Users, label: "Customer Satisfaction", value: "+25%" },
        { icon: DollarSign, label: "Budget Savings", value: "12%" }
      ],
      technologies: ["Project Management", "Web Development", "Analytics", "Digital Marketing"],
      link: "#contact",
      status: "Ongoing"
    },
    {
      title: "E-Commerce Growth Campaign Strategy",
      company: "Cellbunq, Inc. | ExpoNovum Sister Company",
      category: "Digital Marketing & SEO",
      duration: "2022 - 2024",
      description: "Engineered comprehensive digital marketing strategy across multiple channels for Swedish tech company",
      highlights: [
        "Developed multi-channel digital marketing strategy (Social, SEO, Email)",
        "Increased online lead generation by 150% within first year",
        "Improved website page speed performance by 60%",
        "Boosted monthly organic traffic by 21%",
        "Automated marketing KPI reporting saving 6 hours weekly"
      ],
      results: [
        { icon: TrendingUp, label: "Lead Generation", value: "+150%" },
        { icon: TrendingUp, label: "Organic Traffic", value: "+21%" },
        { icon: TrendingUp, label: "Page Speed", value: "+60%" }
      ],
      technologies: ["SEO", "Social Media Marketing", "Email Marketing", "Google Analytics", "Marketing Automation"],
      link: "#contact",
      status: "Completed"
    },
    {
      title: "Multi-Channel Paid Advertising Campaign",
      company: "Global Softel, Inc. | Credit Master Sister Company",
      category: "PPC Marketing & Conversion Optimization",
      duration: "2020 - 2022",
      description: "Strategized and managed high-budget paid digital marketing campaigns across multiple platforms",
      highlights: [
        "Managed $10,000 monthly advertising budget across AdWords, Instagram, Facebook",
        "Generated consistent $25,000 monthly revenue (250% ROI)",
        "Created comprehensive reporting system for paid marketing funnels",
        "Improved conversion rate by 145% through data-driven optimization",
        "Developed conditional email campaigns improving retention by 19%"
      ],
      results: [
        { icon: DollarSign, label: "Monthly Revenue", value: "$25K" },
        { icon: TrendingUp, label: "Conversion Rate", value: "+145%" },
        { icon: Users, label: "Customer Retention", value: "+19%" }
      ],
      technologies: ["Google AdWords", "Facebook Ads", "Instagram Marketing", "Email Marketing", "Analytics"],
      link: "#contact",
      status: "Completed"
    }
  ];

  return (
    <section id="projects" className="py-20" data-testid="projects-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4" data-testid="projects-title">
            Key Projects
          </h2>
          <p className="text-xl text-muted-foreground">
            Showcasing impactful projects that delivered measurable results across industries
          </p>
        </div>
        
        <div className="space-y-12">
          {projects.map((project, index) => (
            <div key={index} className="bg-card rounded-xl border border-border card-hover p-8" data-testid={`project-${index}`}>
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Project Info */}
                <div className="lg:col-span-2 space-y-6">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <h3 className="text-2xl font-bold text-foreground">{project.title}</h3>
                        <span className={`px-3 py-1 rounded-lg text-xs font-medium ${
                          project.status === 'Ongoing' 
                            ? 'bg-accent/10 text-accent' 
                            : 'bg-primary/10 text-primary'
                        }`}>
                          {project.status}
                        </span>
                      </div>
                    </div>
                    <p className="text-primary font-medium text-lg">{project.company}</p>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground mt-2">
                      <span className="bg-muted px-2 py-1 rounded">{project.category}</span>
                      <span>{project.duration}</span>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Key Highlights */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Technologies & Skills:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span 
                          key={idx}
                          className="bg-primary/10 text-primary px-3 py-1 rounded-lg text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Results & CTA */}
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-4">Results Delivered:</h4>
                    <div className="space-y-4">
                      {project.results.map((result, idx) => (
                        <div key={idx} className="flex items-center space-x-3 bg-muted/20 p-3 rounded-lg">
                          <result.icon className="h-5 w-5 text-accent" />
                          <div>
                            <div className="text-sm text-muted-foreground">{result.label}</div>
                            <div className="font-bold text-accent text-lg">{result.value}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <Button 
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                      onClick={() => {
                        const element = document.getElementById('contact');
                        element?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      data-testid={`button-project-contact-${index}`}
                    >
                      Discuss Similar Project
                      <ExternalLink className="h-4 w-4 ml-2" />
                    </Button>
                    <p className="text-xs text-muted-foreground text-center">
                      Get in touch to discuss how I can help with your project
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Start Your Next Project?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Let's discuss how my proven track record in digital marketing, project management, 
              and business growth can help achieve your goals.
            </p>
            <Button 
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
              onClick={() => {
                const element = document.getElementById('contact');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              data-testid="button-start-project"
            >
              Start Your Project Today
              <ExternalLink className="h-5 w-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}