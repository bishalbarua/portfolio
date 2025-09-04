import { useQuery } from "@tanstack/react-query";
import { TrendingUp, Heart, Percent, DollarSign, FolderOpen, PiggyBank, Clock } from "lucide-react";
import type { Achievement } from "@shared/schema";

const iconMap = {
  "arrow-trend-up": TrendingUp,
  "heart": Heart,
  "percentage": Percent,
  "dollar-sign": DollarSign,
  "project-diagram": FolderOpen,
  "piggy-bank": PiggyBank,
  "clock": Clock
};

export default function AchievementsSection() {
  const { data: achievements, isLoading } = useQuery<Achievement[]>({
    queryKey: ["/api/achievements"],
  });

  if (isLoading) {
    return (
      <section id="achievements" className="py-20" data-testid="achievements-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-pulse">Loading achievements...</div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="achievements" className="py-20" data-testid="achievements-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="achievements-title">Key Achievements</h2>
          <p className="text-xl text-muted-foreground" data-testid="achievements-subtitle">
            Quantifiable results that demonstrate proven impact across projects
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {achievements?.map((achievement, index) => {
            const IconComponent = iconMap[achievement.icon as keyof typeof iconMap] || TrendingUp;
            const colorClass = achievement.color === "primary" ? "bg-primary/10 text-primary" : "bg-accent/10 text-accent";
            const valueClass = achievement.color === "primary" ? "text-primary" : "text-accent";
            
            return (
              <div 
                key={achievement.id} 
                className="bg-card p-6 rounded-xl border border-border card-hover text-center"
                data-testid={`achievement-${index}`}
              >
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${colorClass}`}>
                  <IconComponent className="h-8 w-8" />
                </div>
                <div className={`text-3xl font-bold mb-2 ${valueClass}`}>{achievement.value}</div>
                <div className="text-lg font-semibold mb-2">{achievement.title}</div>
                <p className="text-sm text-muted-foreground">
                  {achievement.description}
                </p>
              </div>
            );
          })}
        </div>
        
        {/* Additional Metrics */}
        <div className="grid md:grid-cols-3 gap-8" data-testid="additional-metrics">
          <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-6 rounded-xl border border-border">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Projects Delivered</h3>
              <FolderOpen className="h-6 w-6 text-primary" />
            </div>
            <div className="text-2xl font-bold mb-2">48</div>
            <p className="text-sm text-muted-foreground">Marketing and Analytics projects completed on-time</p>
          </div>
          
          <div className="bg-gradient-to-br from-accent/5 to-primary/5 p-6 rounded-xl border border-border">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Budget Savings</h3>
              <PiggyBank className="h-6 w-6 text-accent" />
            </div>
            <div className="text-2xl font-bold mb-2">12%</div>
            <p className="text-sm text-muted-foreground">Average project budget savings through efficient management</p>
          </div>
          
          <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-6 rounded-xl border border-border">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Time Efficiency</h3>
              <Clock className="h-6 w-6 text-primary" />
            </div>
            <div className="text-2xl font-bold mb-2">6h</div>
            <p className="text-sm text-muted-foreground">Weekly time savings through marketing automation</p>
          </div>
        </div>
      </div>
    </section>
  );
}
