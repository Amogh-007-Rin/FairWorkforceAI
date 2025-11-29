import { 
  LayoutDashboard, 
  Users, 
  BrainCircuit, 
  TrendingUp, 
  Settings, 
  LogOut,
  ShieldCheck,
  Database
} from "lucide-react";
import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";

const navItems = [
  { icon: LayoutDashboard, label: "Overview", href: "/dashboard" },
  { icon: BrainCircuit, label: "AI Insights", href: "/analysis" },
  { icon: TrendingUp, label: "Projections", href: "/scenarios" },
  { icon: Users, label: "Workforce", href: "/workforce" },
  { icon: Database, label: "Data Ingest", href: "/ingest" },
  { icon: ShieldCheck, label: "Fairness Audit", href: "/fairness" },
];

export function Sidebar() {
  const [location] = useLocation();

  return (
    <div className="h-screen w-64 bg-sidebar border-r border-sidebar-border flex flex-col fixed left-0 top-0 z-50 glass-panel">
      <div className="p-6 flex items-center gap-3">
        <div className="w-8 h-8 rounded bg-primary flex items-center justify-center shadow-[0_0_15px_rgba(0,255,255,0.5)]">
          <BrainCircuit className="w-5 h-5 text-black" />
        </div>
        <h1 className="font-display text-xl font-bold tracking-wider text-primary">FAIR<span className="text-white">WORK</span></h1>
      </div>

      <nav className="flex-1 px-4 py-4 space-y-2">
        {navItems.map((item) => {
          const isActive = location === item.href;
          return (
            <Link key={item.href} href={item.href}>
              <div className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-md transition-all duration-200 cursor-pointer group",
                isActive 
                  ? "bg-primary/10 text-primary border border-primary/30 shadow-[0_0_10px_rgba(0,255,255,0.1)]" 
                  : "text-muted-foreground hover:text-white hover:bg-white/5"
              )}>
                <item.icon className={cn("w-5 h-5", isActive && "animate-pulse")} />
                <span className="font-sans font-medium tracking-wide">{item.label}</span>
              </div>
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-sidebar-border">
        <div className="flex items-center gap-3 px-4 py-3 text-muted-foreground hover:text-white cursor-pointer transition-colors">
          <Settings className="w-5 h-5" />
          <span className="font-sans font-medium">Settings</span>
        </div>
        <div className="flex items-center gap-3 px-4 py-3 text-destructive hover:text-destructive/80 cursor-pointer transition-colors">
          <LogOut className="w-5 h-5" />
          <span className="font-sans font-medium">Logout</span>
        </div>
      </div>
    </div>
  );
}
