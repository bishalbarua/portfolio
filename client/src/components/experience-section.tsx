import { CheckCircle } from "lucide-react";
import { SiFiverr } from "react-icons/si";
import { Briefcase } from "lucide-react";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20" data-testid="experience-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="experience-title">Professional Experience</h2>
          <p className="text-xl text-muted-foreground" data-testid="experience-subtitle">
            A proven track record of delivering exceptional results across diverse industries
          </p>
        </div>
        
        <div className="space-y-12">
          {/* Employment History Timeline */}
          <div className="timeline-line relative pl-12" data-testid="employment-timeline">
            {/* Current Position */}
            <div className="mb-12" data-testid="current-position">
              <div className="timeline-dot absolute left-0 w-8 h-8 bg-primary rounded-full border-4 border-background flex items-center justify-center">
                <div className="w-3 h-3 bg-primary-foreground rounded-full"></div>
              </div>
              <div className="bg-card p-6 rounded-xl border border-border card-hover">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">Project Manager</h3>
                    <p className="text-primary font-medium">Disque Foundation | Save a Life by NHCPS</p>
                    <p className="text-muted-foreground">Texas, USA • Remote</p>
                  </div>
                  <div className="bg-accent/10 text-accent px-3 py-1 rounded-lg text-sm font-medium">
                    2023 - Present
                  </div>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>Spearheaded a cross-functional team of 6, delivering a complex website development project 3 weeks ahead of schedule</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>Achieved 12% budget savings and enhanced customer satisfaction by 25%</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>Oversaw 48 Marketing and Analytics projects on-time, leading to 15% increase in business profits</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Marketing Manager */}
            <div className="mb-12" data-testid="marketing-manager">
              <div className="timeline-dot absolute left-0 w-8 h-8 bg-primary rounded-full border-4 border-background flex items-center justify-center">
                <div className="w-3 h-3 bg-primary-foreground rounded-full"></div>
              </div>
              <div className="bg-card p-6 rounded-xl border border-border card-hover">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">Marketing Manager</h3>
                    <p className="text-primary font-medium">Cellbunq, Inc. | Sister Company of ExpoNovum</p>
                    <p className="text-muted-foreground">Sweden • Remote</p>
                  </div>
                  <div className="bg-muted text-muted-foreground px-3 py-1 rounded-lg text-sm font-medium">
                    2022 - 2024 (2.5 years)
                  </div>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>Engineered comprehensive digital marketing strategy increasing online lead generation by 150%</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>Improved page speed by 60% and increased monthly organic traffic by 21%</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>Automated marketing KPI reporting, saving 6 hours of manual work weekly</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Digital Marketing Manager */}
            <div className="mb-12" data-testid="digital-marketing-manager">
              <div className="timeline-dot absolute left-0 w-8 h-8 bg-primary rounded-full border-4 border-background flex items-center justify-center">
                <div className="w-3 h-3 bg-primary-foreground rounded-full"></div>
              </div>
              <div className="bg-card p-6 rounded-xl border border-border card-hover">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">Digital Marketing Manager</h3>
                    <p className="text-primary font-medium">Global Softel, Inc. | Sister Company of Credit Master, LLC</p>
                    <p className="text-muted-foreground">USA • Remote</p>
                  </div>
                  <div className="bg-muted text-muted-foreground px-3 py-1 rounded-lg text-sm font-medium">
                    2020 - 2022 (2.5 years)
                  </div>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>Managed $10,000 monthly paid marketing budget generating $25,000 in monthly revenue</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>Improved conversion rate by 145% through data-driven funnel optimization</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>Developed conditional email campaigns improving customer retention by 19%</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Freelancing Section */}
          <div className="grid md:grid-cols-2 gap-8 mt-16" data-testid="freelancing-section">
            <div className="bg-card p-6 rounded-xl border border-border card-hover" data-testid="fiverr-freelancing">
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-accent/10 w-12 h-12 rounded-full flex items-center justify-center">
                  <SiFiverr className="text-accent text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Fiverr Freelancer</h3>
                  <p className="text-muted-foreground">2019 - Present (5+ years)</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Completed Jobs</span>
                  <span className="font-semibold text-accent">80+</span>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Created engaging ad campaigns for realtors & lenders</li>
                  <li>• Grew e-commerce businesses on Facebook & Instagram</li>
                  <li>• Optimized YouTube channels & blogging websites</li>
                  <li>• Fixed technical issues on social media & websites</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-card p-6 rounded-xl border border-border card-hover" data-testid="upwork-freelancing">
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center">
                  <Briefcase className="text-primary text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Upwork & Independent</h3>
                  <p className="text-muted-foreground">2019 - Present (5+ years)</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Total Projects</span>
                  <span className="font-semibold text-primary">45+</span>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Created engaging PPC campaigns for B2B & B2C</li>
                  <li>• Optimized websites for top SERP rankings</li>
                  <li>• Designed & customized eCommerce websites</li>
                  <li>• Delivered comprehensive digital strategies</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
