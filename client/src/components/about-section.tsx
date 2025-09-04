import { Bot, TrendingUp, CheckSquare, Brain } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20" data-testid="about-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="about-title">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="about-subtitle">
            AI-Driven Project and Digital Marketing Manager with extensive experience building, maintaining, 
            and running successful dev projects and marketing campaigns.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div data-testid="about-image">
            <div className="bg-muted rounded-xl p-8 text-center">
              <Bot className="h-24 w-24 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold">AI-Powered Marketing</h3>
            </div>
          </div>
          
          <div className="space-y-6" data-testid="about-features">
            <div className="flex items-start space-x-4">
              <div className="bg-primary/10 p-3 rounded-lg">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Marketing Excellence</h3>
                <p className="text-muted-foreground">
                  Adept at creating and implementing client-centered, successful campaigns, 
                  aimed at improving brand awareness and presence.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-accent/10 p-3 rounded-lg">
                <CheckSquare className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Project Management</h3>
                <p className="text-muted-foreground">
                  Expert in leading cross-functional teams and delivering complex projects 
                  on time and under budget with enhanced customer satisfaction.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-primary/10 p-3 rounded-lg">
                <Brain className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">AI Integration</h3>
                <p className="text-muted-foreground">
                  Leveraging AI tools like ChatGPT, Gemini, and Claude AI to optimize 
                  marketing strategies and project workflows.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
