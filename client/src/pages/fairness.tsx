import { Sidebar } from "@/components/layout/Sidebar";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  ShieldCheck, 
  Scale, 
  FileSearch, 
  AlertTriangle, 
  Check,
  RefreshCw,
  Lock
} from "lucide-react";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  ScatterChart, 
  Scatter, 
  ZAxis,
  Legend
} from "recharts";

const salaryData = [
  { x: 1, y: 60000, z: 100, gender: 'Male' },
  { x: 1.2, y: 62000, z: 100, gender: 'Female' },
  { x: 2, y: 75000, z: 100, gender: 'Male' },
  { x: 2.1, y: 74000, z: 100, gender: 'Female' },
  { x: 3, y: 85000, z: 100, gender: 'Male' },
  { x: 3.2, y: 86000, z: 100, gender: 'Female' },
  { x: 5, y: 110000, z: 100, gender: 'Male' },
  { x: 5.1, y: 108000, z: 100, gender: 'Female' },
  { x: 8, y: 140000, z: 100, gender: 'Male' },
  { x: 8.2, y: 139000, z: 100, gender: 'Female' },
];

const auditLog = [
  { id: "LOG-001", time: "10:42:05", module: "Resume Parser", status: "Passed", message: "Anonymized 452 candidates. No gender bias detected." },
  { id: "LOG-002", time: "10:15:33", module: "Promo Algorithm", status: "Warning", message: "Detected age correlation in 'Senior Eng' recommendations." },
  { id: "LOG-003", time: "09:55:12", module: "Job Desc Scanner", status: "Passed", message: "Neutralized 3 gendered terms in 'Marketing Lead' posting." },
  { id: "LOG-004", time: "09:30:00", module: "Salary Equity", status: "Passed", message: "Quarterly parity check complete. Deviation < 1%." },
];

export default function Fairness() {
  return (
    <div className="flex min-h-screen bg-background bg-grid-pattern font-sans text-foreground">
      <Sidebar />
      
      <main className="flex-1 ml-64 p-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-display font-bold text-white tracking-tight flex items-center gap-3">
              ETHICS & COMPLIANCE CORE
              <Badge className="bg-green-500/10 text-green-400 border-green-500/30 font-mono border">
                SYSTEM SECURE
              </Badge>
            </h1>
            <p className="text-muted-foreground mt-1">Algorithmic auditing and bias mitigation engine.</p>
          </div>
          <Button variant="outline" className="border-white/20 hover:bg-white/5 gap-2">
            <FileSearch className="w-4 h-4" /> Generate Audit Report
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Main Score Card */}
          <Card className="glass-panel lg:col-span-1 relative overflow-hidden">
             <div className="absolute -right-12 -top-12 w-40 h-40 bg-green-500/10 rounded-full blur-3xl" />
             <CardHeader>
               <CardTitle className="text-muted-foreground text-sm uppercase tracking-wider font-mono">Fairness Index</CardTitle>
             </CardHeader>
             <CardContent className="flex flex-col items-center justify-center pb-8">
               <div className="relative w-40 h-40 flex items-center justify-center">
                 <svg className="w-full h-full transform -rotate-90">
                   <circle cx="80" cy="80" r="70" stroke="currentColor" strokeWidth="10" fill="transparent" className="text-white/5" />
                   <circle cx="80" cy="80" r="70" stroke="currentColor" strokeWidth="10" fill="transparent" strokeDasharray="440" strokeDashoffset="44" className="text-green-500" />
                 </svg>
                 <div className="absolute inset-0 flex flex-col items-center justify-center">
                   <span className="text-4xl font-bold font-display text-white">92<span className="text-lg text-muted-foreground">/100</span></span>
                   <span className="text-xs text-green-400 font-mono mt-1">OPTIMAL</span>
                 </div>
               </div>
               <div className="grid grid-cols-2 gap-8 w-full mt-6 text-center">
                 <div>
                   <div className="text-2xl font-bold text-white font-display">0.8%</div>
                   <div className="text-xs text-muted-foreground">Pay Gap</div>
                 </div>
                 <div>
                   <div className="text-2xl font-bold text-white font-display">98%</div>
                   <div className="text-xs text-muted-foreground">Audit Pass Rate</div>
                 </div>
               </div>
             </CardContent>
          </Card>

          {/* Active Modules */}
          <Card className="glass-panel lg:col-span-2">
            <CardHeader>
              <CardTitle className="font-display text-primary flex items-center gap-2">
                <Lock className="w-5 h-5" /> Active Mitigation Protocols
              </CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { name: "Blind Resume Screening", status: "Active", load: 85 },
                { name: "Gender-Neutral Text Gen", status: "Active", load: 42 },
                { name: "Promotion Parity Check", status: "Active", load: 67 },
                { name: "Salary Equity Monitor", status: "Scanning", load: 91 },
              ].map((mod) => (
                <div key={mod.name} className="p-4 rounded bg-white/5 border border-white/5 flex flex-col gap-3">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-white text-sm">{mod.name}</span>
                    <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20 text-[10px]">{mod.status}</Badge>
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>System Load</span>
                      <span>{mod.load}%</span>
                    </div>
                    <Progress value={mod.load} className="h-1" indicatorClassName="bg-secondary" />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
           {/* Salary Equity Chart */}
           <Card className="glass-panel">
             <CardHeader>
               <CardTitle className="font-display text-primary flex items-center gap-2">
                 <Scale className="w-5 h-5" /> Compensation Parity Analysis
               </CardTitle>
               <CardDescription>Scatter plot of Experience (Yrs) vs Salary, coded by demographic.</CardDescription>
             </CardHeader>
             <CardContent className="h-[350px]">
               <ResponsiveContainer width="100%" height="100%">
                 <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                   <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                   <XAxis type="number" dataKey="x" name="Experience" unit="yrs" stroke="#64748b" />
                   <YAxis type="number" dataKey="y" name="Salary" unit="$" stroke="#64748b" />
                   <Tooltip cursor={{ strokeDasharray: '3 3' }} contentStyle={{ backgroundColor: 'rgba(0,0,0,0.9)', borderColor: '#333' }} />
                   <Legend />
                   <Scatter name="Male" data={salaryData.filter(d => d.gender === 'Male')} fill="hsl(var(--primary))" />
                   <Scatter name="Female" data={salaryData.filter(d => d.gender === 'Female')} fill="hsl(var(--secondary))" />
                 </ScatterChart>
               </ResponsiveContainer>
             </CardContent>
           </Card>

           {/* Real-time Audit Log */}
           <Card className="glass-panel flex flex-col">
             <CardHeader>
               <CardTitle className="font-display text-primary flex items-center gap-2">
                 <ShieldCheck className="w-5 h-5" /> Live Audit Stream
               </CardTitle>
               <CardDescription>Real-time logs from the Fair AI engine.</CardDescription>
             </CardHeader>
             <CardContent className="flex-1 overflow-y-auto pr-2">
               <div className="space-y-4">
                 {auditLog.map((log) => (
                   <div key={log.id} className="flex gap-3 items-start p-3 rounded bg-black/20 border border-white/5 font-mono text-xs">
                     <div className={`mt-1 w-2 h-2 rounded-full ${log.status === 'Passed' ? 'bg-green-500 shadow-[0_0_5px_rgba(34,197,94,0.5)]' : 'bg-yellow-500 shadow-[0_0_5px_rgba(234,179,8,0.5)]'}`} />
                     <div className="flex-1 space-y-1">
                       <div className="flex justify-between items-center">
                         <span className="font-bold text-white">{log.module}</span>
                         <span className="text-muted-foreground">{log.time}</span>
                       </div>
                       <p className="text-muted-foreground leading-relaxed">{log.message}</p>
                       <div className="text-[10px] text-white/30 pt-1">{log.id}</div>
                     </div>
                   </div>
                 ))}
                 <div className="flex items-center justify-center pt-2">
                   <span className="flex items-center gap-2 text-xs text-primary/50 animate-pulse">
                     <RefreshCw className="w-3 h-3 animate-spin" /> Processing new events...
                   </span>
                 </div>
               </div>
             </CardContent>
           </Card>
        </div>
      </main>
    </div>
  );
}
