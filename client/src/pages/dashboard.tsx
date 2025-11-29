import { Sidebar } from "@/components/layout/Sidebar";
import { StatsCard } from "@/components/dashboard/StatsCard";
import { SkillsGapChart } from "@/components/dashboard/SkillsGapChart";
import { BiasRiskCard } from "@/components/dashboard/BiasRiskCard";
import { Users, Briefcase, AlertOctagon, Zap } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-background bg-grid-pattern font-sans text-foreground">
      <Sidebar />
      
      <main className="flex-1 ml-64 p-8 relative overflow-hidden">
        {/* Ambient Light Effect */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none -translate-x-1/2 -translate-y-1/2" />
        
        <div className="relative z-10 space-y-8">
          <div className="flex items-end justify-between">
            <div>
              <h1 className="text-4xl font-display font-bold text-white tracking-tight">
                COMMAND CENTER
              </h1>
              <p className="text-muted-foreground mt-2 font-mono">
                SYSTEM STATUS: <span className="text-green-400">OPTIMAL</span> | AI AGENTS: <span className="text-primary">ACTIVE</span>
              </p>
            </div>
            <div className="flex gap-2">
              <span className="px-3 py-1 rounded bg-primary/10 border border-primary/30 text-primary text-xs font-mono">
                LIVE DATA
              </span>
              <span className="px-3 py-1 rounded bg-secondary/10 border border-secondary/30 text-secondary text-xs font-mono">
                V 2.4.0
              </span>
            </div>
          </div>

          {/* Key Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatsCard 
              title="Total Workforce" 
              value="2,450" 
              change="+12%" 
              trend="up"
              icon={Users}
              description="vs last quarter"
            />
            <StatsCard 
              title="Skills Readiness" 
              value="78%" 
              change="+5%" 
              trend="up"
              icon={Zap}
              description="AI/ML adaption rate"
            />
            <StatsCard 
              title="Attrition Risk" 
              value="14%" 
              change="-2%" 
              trend="up"
              icon={AlertOctagon}
              description="High risk in Engineering"
            />
            <StatsCard 
              title="Open Positions" 
              value="42" 
              change="Neutral" 
              trend="neutral"
              icon={Briefcase}
              description="Across 8 depts"
            />
          </div>

          {/* Main Charts Area */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-auto">
            <SkillsGapChart />
            <BiasRiskCard />
          </div>

          {/* AI Insight Stream */}
          <div className="glass-panel p-6 rounded-lg border border-white/10">
            <h3 className="text-lg font-display font-bold text-primary mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              LIVE AI INSIGHTS
            </h3>
            <div className="space-y-3 font-mono text-sm max-h-[200px] overflow-y-auto">
              <div className="flex gap-4 text-muted-foreground hover:text-white transition-colors p-2 hover:bg-white/5 rounded border-l-2 border-transparent hover:border-primary">
                <span className="text-primary w-24">10:42:15</span>
                <span>Detected 15% decrease in 'Cloud Architecture' skills availability in market. Suggest internal upskilling.</span>
              </div>
              <div className="flex gap-4 text-muted-foreground hover:text-white transition-colors p-2 hover:bg-white/5 rounded border-l-2 border-transparent hover:border-primary">
                <span className="text-primary w-24">10:38:02</span>
                <span>Anomaly detected in 'Senior Manager' promotion cycle. Gender distribution deviation exceeds threshold.</span>
              </div>
              <div className="flex gap-4 text-muted-foreground hover:text-white transition-colors p-2 hover:bg-white/5 rounded border-l-2 border-transparent hover:border-primary">
                <span className="text-primary w-24">10:15:00</span>
                <span>Q3 Hiring Plan generated. 12 new roles recommended for 'AI Ethics' division.</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
