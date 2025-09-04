import { Bot, CheckSquare, Search, Megaphone, BarChart, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ResourcesSection() {
  const resources = [
    {
      icon: Bot,
      title: "AI Marketing Implementation Guide",
      description: "Comprehensive guide on integrating AI tools into your marketing workflow",
      type: "Free Resource",
      color: "primary"
    },
    {
      icon: CheckSquare,
      title: "Project Management Templates",
      description: "Ready-to-use templates for project planning and tracking",
      type: "Free Resource",
      color: "accent"
    },
    {
      icon: Search,
      title: "Complete SEO Audit Checklist",
      description: "Step-by-step checklist for comprehensive website SEO audits",
      type: "Free Resource",
      color: "primary"
    },
    {
      icon: Megaphone,
      title: "PPC Campaign Builder",
      description: "Framework for creating high-converting PPC campaigns",
      type: "Premium",
      color: "accent"
    },
    {
      icon: BarChart,
      title: "Analytics Dashboard Template",
      description: "Google Sheets template for marketing KPI tracking and reporting",
      type: "Free Resource",
      color: "primary"
    },
    {
      icon: Mail,
      title: "Email Marketing Automation",
      description: "Best practices for setting up conditional email campaigns",
      type: "Free Resource",
      color: "accent"
    }
  ];

  const handleResourceDownload = (title: string) => {
    // In a real implementation, this would trigger a download or redirect to the resource
    alert(`This would download: ${title}. Resource functionality would be implemented in the full version.`);
  };

  return (
    <section id="resources" className="py-20 bg-muted/30" data-testid="resources-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="resources-title">Resources & Insights</h2>
          <p className="text-xl text-muted-foreground" data-testid="resources-subtitle">
            Valuable resources for marketing and project management success
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource, index) => {
            const IconComponent = resource.icon;
            const colorClass = resource.color === "primary" ? "bg-primary/10 text-primary" : "bg-accent/10 text-accent";
            
            return (
              <div 
                key={index} 
                className="bg-card p-6 rounded-xl border border-border card-hover"
                data-testid={`resource-${index}`}
              >
                <div className="mb-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${colorClass}`}>
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{resource.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {resource.description}
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">{resource.type}</span>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => handleResourceDownload(resource.title)}
                    className="text-primary hover:text-primary/80"
                    data-testid={`resource-button-${index}`}
                  >
                    {resource.type === "Premium" ? "Learn More" : "Download"}
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
