import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { AlertTriangle, CheckCircle } from "lucide-react";

const departments = [
  { name: "Engineering", score: 88, risk: "Low" },
  { name: "Sales", score: 65, risk: "High" },
  { name: "Marketing", score: 72, risk: "Medium" },
  { name: "HR", score: 92, risk: "Low" },
  { name: "Product", score: 78, risk: "Medium" },
];

export function BiasRiskCard() {
  return (
    <Card className="glass-panel h-[400px] flex flex-col">
      <CardHeader>
        <CardTitle className="font-display tracking-wide text-primary flex items-center gap-2">
          <AlertTriangle className="w-5 h-5 text-yellow-500" />
          Bias Risk Assessment
        </CardTitle>
        <CardDescription>AI-detected hiring & promotion anomalies</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {departments.map((dept) => (
          <div key={dept.name} className="flex items-center justify-between p-3 rounded bg-white/5 border border-white/5 hover:border-primary/30 transition-all">
            <div className="flex flex-col">
              <span className="font-bold text-white">{dept.name}</span>
              <span className="text-xs text-muted-foreground">Fairness Score</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex flex-col items-end">
                <span className={`font-mono text-lg font-bold ${
                  dept.score > 80 ? "text-green-400" : dept.score > 70 ? "text-yellow-400" : "text-red-400"
                }`}>
                  {dept.score}%
                </span>
                <span className="text-[10px] uppercase tracking-wider text-muted-foreground">{dept.risk} Risk</span>
              </div>
              <div className={`w-2 h-2 rounded-full ${
                 dept.score > 80 ? "bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]" : dept.score > 70 ? "bg-yellow-500" : "bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)]"
              }`} />
            </div>
          </div>
        ))}
        
        <div className="mt-6 p-3 bg-primary/10 border border-primary/20 rounded text-xs text-primary-foreground/80">
          <strong className="text-primary block mb-1">AI Recommendation:</strong>
          Review promotion criteria in Sales department. 15% deviation detected in gender balance for senior roles.
        </div>
      </CardContent>
    </Card>
  );
}
