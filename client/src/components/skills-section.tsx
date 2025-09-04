import { Settings, Users, Lightbulb } from "lucide-react";

export default function SkillsSection() {
  const technicalSkills = [
    "AI Marketing", "SEO", "PPC Marketing", "Social Media Marketing", 
    "Google Analytics", "WordPress Customization", "Email Marketing", "Content Marketing",
    "Web Copywriting", "YouTube Marketing", "eCommerce Marketing", "ChatGPT, Gemini, ClaudAI"
  ];

  const managementSkills = [
    "Project Management", "Strategic Planning", "Leadership Skills", "Quality Management",
    "Risk Management", "Digital Marketing Management", "Time Management", "Problem Solving"
  ];

  const softSkills = [
    "Communication Skills", "Critical Thinking", "Creative Abilities", "Analytical Abilities",
    "Customer Relationship", "Persuasive Skills", "Multitasking Ability", "Coping with Pressure",
    "Research Capabilities", "Marketing Automation"
  ];

  return (
    <section className="py-20 bg-muted/30" data-testid="skills-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="skills-title">Skills & Expertise</h2>
          <p className="text-xl text-muted-foreground" data-testid="skills-subtitle">
            Comprehensive skill set spanning AI marketing, project management, and digital strategy
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Technical Skills */}
          <div className="bg-card p-6 rounded-xl border border-border card-hover" data-testid="technical-skills">
            <div className="text-center mb-6">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Settings className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Technical Skills</h3>
            </div>
            <div className="skills-grid">
              {technicalSkills.map((skill, index) => (
                <span 
                  key={index}
                  className="bg-primary/10 text-primary px-3 py-2 rounded-lg text-sm font-medium"
                  data-testid={`technical-skill-${index}`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          {/* Management Skills */}
          <div className="bg-card p-6 rounded-xl border border-border card-hover" data-testid="management-skills">
            <div className="text-center mb-6">
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold">Management Skills</h3>
            </div>
            <div className="skills-grid">
              {managementSkills.map((skill, index) => (
                <span 
                  key={index}
                  className="bg-accent/10 text-accent px-3 py-2 rounded-lg text-sm font-medium"
                  data-testid={`management-skill-${index}`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          {/* Soft Skills */}
          <div className="bg-card p-6 rounded-xl border border-border card-hover" data-testid="soft-skills">
            <div className="text-center mb-6">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Soft Skills</h3>
            </div>
            <div className="skills-grid">
              {softSkills.map((skill, index) => (
                <span 
                  key={index}
                  className="bg-secondary text-secondary-foreground px-3 py-2 rounded-lg text-sm font-medium"
                  data-testid={`soft-skill-${index}`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
