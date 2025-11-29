import { Sidebar } from "@/components/layout/Sidebar";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Search, 
  Filter, 
  MoreHorizontal, 
  AlertCircle, 
  CheckCircle2, 
  BrainCircuit,
  TrendingUp,
  Download,
  Loader2
} from "lucide-react";
import { useState } from "react";
import Papa from "papaparse";
import { toast } from "@/hooks/use-toast";

interface Employee {
  id: string;
  name: string;
  role: string;
  dept: string;
  risk: "Low" | "Medium" | "High";
  potential: number;
  skills: string[];
  image: string;
}

const initialEmployees: Employee[] = [
  { id: "EMP-042", name: "Sarah Chen", role: "Senior Data Scientist", dept: "AI Research", risk: "Low", potential: 98, skills: ["Python", "TensorFlow", "Leadership"], image: "SC" },
  { id: "EMP-108", name: "Marcus Johnson", role: "Cloud Architect", dept: "Infrastructure", risk: "High", potential: 85, skills: ["AWS", "Kubernetes", "Security"], image: "MJ" },
  { id: "EMP-256", name: "Elena Rodriguez", role: "UX Researcher", dept: "Product", risk: "Medium", potential: 92, skills: ["Figma", "User Testing", "Psychology"], image: "ER" },
  { id: "EMP-331", name: "David Kim", role: "Frontend Engineer", dept: "Engineering", risk: "Low", potential: 78, skills: ["React", "TypeScript", "WebGL"], image: "DK" },
  { id: "EMP-412", name: "Aisha Patel", role: "Product Manager", dept: "Product", risk: "Low", potential: 94, skills: ["Strategy", "Agile", "Analytics"], image: "AP" },
  { id: "EMP-550", name: "James Wilson", role: "DevOps Engineer", dept: "Infrastructure", risk: "Medium", potential: 81, skills: ["Docker", "CI/CD", "Linux"], image: "JW" },
];

export default function Workforce() {
  const [employees, setEmployees] = useState<Employee[]>(initialEmployees);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [isExporting, setIsExporting] = useState(false);

  const handleExport = () => {
    setIsExporting(true);
    
    // Prepare data for CSV
    const csvData = employees.map(emp => ({
      ID: emp.id,
      Name: emp.name,
      Role: emp.role,
      Department: emp.dept,
      Risk_Level: emp.risk,
      AI_Potential_Score: emp.potential,
      Skills: emp.skills.join("; ")
    }));

    // Convert to CSV
    const csv = Papa.unparse(csvData);
    
    // Create blob and download link
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `workforce_export_${new Date().toISOString().slice(0,10)}.csv`);
    document.body.appendChild(link);
    
    setTimeout(() => {
      link.click();
      document.body.removeChild(link);
      setIsExporting(false);
      toast({
        title: "Export Complete",
        description: "Workforce telemetry data downloaded successfully.",
      });
    }, 1000);
  };

  const handleAnalysis = () => {
    setIsAnalyzing(true);
    
    // Simulate AI processing time
    setTimeout(() => {
      // Simulate updating scores/risk randomly for demonstration
      const updatedEmployees = employees.map(emp => ({
        ...emp,
        potential: Math.min(100, Math.max(0, emp.potential + Math.floor(Math.random() * 10 - 3))),
        risk: Math.random() > 0.8 ? (emp.risk === "Low" ? "Medium" : "High") : emp.risk
      }));
      
      setEmployees(updatedEmployees);
      setIsAnalyzing(false);
      
      toast({
        title: "AI Analysis Complete",
        description: "Updated predictive models for 6 personnel. 2 risk vectors identified.",
        variant: "default",
        className: "bg-primary/20 border-primary/50 text-white"
      });
    }, 2500);
  };

  return (
    <div className="flex min-h-screen bg-background bg-grid-pattern font-sans text-foreground">
      <Sidebar />
      
      <main className="flex-1 ml-64 p-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-display font-bold text-white tracking-tight flex items-center gap-3">
              WORKFORCE INTELLIGENCE
              <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30 font-mono">LIVE</Badge>
            </h1>
            <p className="text-muted-foreground mt-1">Real-time telemetry on human capital performance and retention risk.</p>
          </div>
          <div className="flex gap-2">
            <Button 
              variant="outline" 
              className="border-white/20 hover:bg-white/5 gap-2"
              onClick={handleExport}
              disabled={isExporting}
            >
              {isExporting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Download className="w-4 h-4" />}
              {isExporting ? "Exporting..." : "Export Data"}
            </Button>
            <Button 
              className="bg-primary text-black hover:bg-cyan-400 font-bold gap-2"
              onClick={handleAnalysis}
              disabled={isAnalyzing}
            >
              {isAnalyzing ? <Loader2 className="w-4 h-4 animate-spin" /> : <BrainCircuit className="w-4 h-4" />}
              {isAnalyzing ? "Processing..." : "Run AI Analysis"}
            </Button>
          </div>
        </div>

        {/* Filters Toolbar */}
        <div className="glass-panel p-4 rounded-lg mb-6 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="flex items-center gap-4 w-full md:w-auto flex-1">
            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input placeholder="Search personnel ID..." className="pl-9 bg-black/20 border-white/10 focus:border-primary/50" />
            </div>
            <Select defaultValue="all">
              <SelectTrigger className="w-[180px] bg-black/20 border-white/10">
                <SelectValue placeholder="Department" />
              </SelectTrigger>
              <SelectContent className="bg-card border-white/10 text-white">
                <SelectItem value="all">All Departments</SelectItem>
                <SelectItem value="ai">AI Research</SelectItem>
                <SelectItem value="eng">Engineering</SelectItem>
                <SelectItem value="prod">Product</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-white">
              <Filter className="w-4 h-4" />
            </Button>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground font-mono">
            <span className={`w-2 h-2 rounded-full bg-green-500 ${isAnalyzing ? 'animate-ping' : 'animate-pulse'}`} />
            {isAnalyzing ? "AI Processing Active..." : "Database Synced: Just now"}
          </div>
        </div>

        {/* Employee Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {employees.map((emp) => (
            <Card key={emp.id} className="glass-panel border-l-2 border-l-transparent hover:border-l-primary transition-all duration-300 group">
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded bg-white/10 flex items-center justify-center font-display font-bold text-primary border border-white/5 group-hover:border-primary/50 transition-colors">
                      {emp.image}
                    </div>
                    <div>
                      <CardTitle className="text-base font-bold text-white">{emp.name}</CardTitle>
                      <CardDescription className="text-xs font-mono text-primary/80">{emp.id} • {emp.dept}</CardDescription>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-white/10">
                    <MoreHorizontal className="w-4 h-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <span className="text-[10px] uppercase tracking-wider text-muted-foreground">Retention Risk</span>
                    <div className={`flex items-center gap-2 font-bold ${
                      emp.risk === 'High' ? 'text-destructive' : emp.risk === 'Medium' ? 'text-yellow-400' : 'text-green-400'
                    }`}>
                      {emp.risk === 'High' ? <AlertCircle className="w-4 h-4" /> : <CheckCircle2 className="w-4 h-4" />}
                      {emp.risk}
                    </div>
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] uppercase tracking-wider text-muted-foreground">AI Potential Score</span>
                    <div className="flex items-center gap-2 font-bold text-secondary">
                      <TrendingUp className="w-4 h-4" />
                      {emp.potential}/100
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <span className="text-[10px] uppercase tracking-wider text-muted-foreground">Top Skills</span>
                  <div className="flex flex-wrap gap-2">
                    {emp.skills.map(skill => (
                      <Badge key={skill} variant="secondary" className="bg-white/5 text-white hover:bg-white/10 border-white/5 rounded-none text-[10px]">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="pt-2 mt-2 border-t border-white/5 flex justify-between items-center">
                   <span className="text-xs text-muted-foreground font-mono">Last Review: {isAnalyzing ? "Updating..." : "2d ago"}</span>
                   <span className="text-xs text-primary hover:underline cursor-pointer">View Full Profile →</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}
