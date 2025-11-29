import { Sidebar } from "@/components/layout/Sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Play, RotateCcw, Save } from "lucide-react";

export default function Scenarios() {
  const [hiringRate, setHiringRate] = useState([5]);
  const [trainingBudget, setTrainingBudget] = useState([20]);
  const [attrition, setAttrition] = useState([10]);

  return (
    <div className="flex min-h-screen bg-background bg-grid-pattern font-sans text-foreground">
      <Sidebar />
      
      <main className="flex-1 ml-64 p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-display font-bold text-white tracking-tight">SCENARIO PLANNING</h1>
          <p className="text-muted-foreground">Simulate future workforce states based on variable inputs</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Controls Panel */}
          <Card className="glass-panel lg:col-span-1 h-fit">
            <CardHeader>
              <CardTitle className="font-display text-primary">Simulation Parameters</CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="space-y-4">
                <div className="flex justify-between">
                  <label className="text-sm font-medium text-white">External Hiring Rate</label>
                  <span className="font-mono text-primary">{hiringRate}%</span>
                </div>
                <Slider 
                  defaultValue={[5]} 
                  max={20} 
                  step={1} 
                  value={hiringRate}
                  onValueChange={setHiringRate}
                  className="py-2"
                />
                <p className="text-xs text-muted-foreground">projected increase in headcount per quarter</p>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between">
                  <label className="text-sm font-medium text-white">Upskilling Budget</label>
                  <span className="font-mono text-secondary">${trainingBudget}k</span>
                </div>
                <Slider 
                  defaultValue={[20]} 
                  max={100} 
                  step={5}
                  value={trainingBudget}
                  onValueChange={setTrainingBudget} 
                  className="py-2"
                />
                <p className="text-xs text-muted-foreground">allocation for internal training programs</p>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between">
                  <label className="text-sm font-medium text-white">Expected Attrition</label>
                  <span className="font-mono text-destructive">{attrition}%</span>
                </div>
                <Slider 
                  defaultValue={[10]} 
                  max={30} 
                  step={1} 
                  value={attrition}
                  onValueChange={setAttrition}
                  className="py-2"
                />
                <p className="text-xs text-muted-foreground">annual turnover rate prediction</p>
              </div>

              <div className="pt-4 flex gap-2">
                <Button className="flex-1 bg-primary text-black hover:bg-cyan-400 font-bold">
                  <Play className="w-4 h-4 mr-2" /> Run Sim
                </Button>
                <Button variant="outline" className="border-white/20 hover:bg-white/5">
                  <RotateCcw className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Results Panel */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="glass-panel p-6 border-t-4 border-t-primary">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="space-y-1">
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">Proj. Headcount</span>
                  <div className="text-3xl font-bold font-display text-white">2,840</div>
                  <span className="text-xs text-green-400">+14% YoY</span>
                </div>
                <div className="space-y-1">
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">Skills Gap Closure</span>
                  <div className="text-3xl font-bold font-display text-white">92%</div>
                  <span className="text-xs text-green-400">Optimal</span>
                </div>
                <div className="space-y-1">
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">Budget Impact</span>
                  <div className="text-3xl font-bold font-display text-white">$1.2M</div>
                  <span className="text-xs text-yellow-400">High</span>
                </div>
              </div>
            </Card>

            <div className="grid grid-cols-2 gap-6">
              <Card className="glass-panel p-4 bg-red-500/5 border border-red-500/20">
                 <h3 className="font-bold text-red-400 mb-2">Risk Warning</h3>
                 <p className="text-sm text-muted-foreground">High attrition rate combined with low upskilling budget creates a critical failure point in 'Data Science' department by Q3.</p>
              </Card>
              <Card className="glass-panel p-4 bg-green-500/5 border border-green-500/20">
                 <h3 className="font-bold text-green-400 mb-2">Opportunity</h3>
                 <p className="text-sm text-muted-foreground">Increasing hiring rate by 2% in Q1 stabilizes the workload distribution and reduces burnout risk.</p>
              </Card>
            </div>
            
            {/* Visual Placeholder for Simulation Graph */}
            <Card className="glass-panel h-[300px] flex items-center justify-center border-dashed border-white/10 bg-black/20">
               <p className="text-muted-foreground font-mono text-sm">SIMULATION VISUALIZATION RENDER TARGET</p>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
