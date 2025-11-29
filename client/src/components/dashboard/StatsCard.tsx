import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string | number;
  change?: string;
  trend?: "up" | "down" | "neutral";
  icon: LucideIcon;
  description?: string;
}

export function StatsCard({ title, value, change, trend, icon: Icon, description }: StatsCardProps) {
  return (
    <Card className="glass-panel border-l-4 border-l-primary overflow-hidden relative group hover:shadow-[0_0_20px_rgba(0,255,255,0.1)] transition-all duration-300">
      <div className="absolute -right-6 -top-6 w-24 h-24 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-all" />
      
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground font-mono uppercase tracking-widest">
          {title}
        </CardTitle>
        <Icon className="h-4 w-4 text-primary" />
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold font-display tracking-tight text-white group-hover:text-primary transition-colors">
          {value}
        </div>
        {(change || description) && (
          <p className="text-xs text-muted-foreground mt-1 flex items-center gap-2">
            {change && (
              <span className={cn(
                "font-bold px-1.5 py-0.5 rounded bg-white/5",
                trend === "up" ? "text-green-400" : trend === "down" ? "text-red-400" : "text-yellow-400"
              )}>
                {change}
              </span>
            )}
            {description}
          </p>
        )}
      </CardContent>
    </Card>
  );
}
