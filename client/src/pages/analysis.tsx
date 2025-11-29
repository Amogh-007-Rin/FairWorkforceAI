import { Sidebar } from "@/components/layout/Sidebar";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Area, 
  AreaChart, 
  CartesianGrid, 
  XAxis, 
  YAxis, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar,
  Legend,
  LabelList
} from "recharts";

const pipelineData = [
  { stage: 'Applied', count: 1450, conversion: '100%' },
  { stage: 'Screening', count: 680, conversion: '46%' },
  { stage: 'Assessment', count: 320, conversion: '22%' },
  { stage: 'Interview', count: 115, conversion: '8%' },
  { stage: 'Offer', count: 45, conversion: '3%' },
  { stage: 'Hired', count: 38, conversion: '2.6%' },
];

const growthData = [
  { month: 'Jan', demand: 4000, supply: 2400 },
  { month: 'Feb', demand: 3000, supply: 1398 },
  { month: 'Mar', demand: 2000, supply: 9800 },
  { month: 'Apr', demand: 2780, supply: 3908 },
  { month: 'May', demand: 1890, supply: 4800 },
  { month: 'Jun', demand: 2390, supply: 3800 },
  { month: 'Jul', demand: 3490, supply: 4300 },
];

const diversityData = [
  { role: 'Junior', male: 60, female: 40, other: 5 },
  { role: 'Mid-Level', male: 65, female: 35, other: 2 },
  { role: 'Senior', male: 75, female: 25, other: 1 },
  { role: 'Exec', male: 85, female: 15, other: 0 },
];

export default function Analysis() {
  return (
    <div className="flex min-h-screen bg-background bg-grid-pattern font-sans text-foreground">
      <Sidebar />
      
      <main className="flex-1 ml-64 p-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-display font-bold text-white tracking-tight">DEEP ANALYSIS</h1>
            <p className="text-muted-foreground">Detailed workforce telemetry and predictive modeling</p>
          </div>
        </div>

        <Tabs defaultValue="skills" className="space-y-6">
          <TabsList className="bg-white/5 border border-white/10 p-1 h-auto">
            <TabsTrigger 
              value="skills" 
              className="data-[state=active]:bg-primary data-[state=active]:text-black font-mono px-6 py-2 rounded-sm transition-all"
            >
              SKILLS_MATRIX
            </TabsTrigger>
            <TabsTrigger 
              value="diversity" 
              className="data-[state=active]:bg-primary data-[state=active]:text-black font-mono px-6 py-2 rounded-sm transition-all"
            >
              DIVERSITY_INDEX
            </TabsTrigger>
            <TabsTrigger 
              value="hiring" 
              className="data-[state=active]:bg-primary data-[state=active]:text-black font-mono px-6 py-2 rounded-sm transition-all"
            >
              HIRING_PIPELINE
            </TabsTrigger>
          </TabsList>

          <TabsContent value="skills" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="glass-panel">
                <CardHeader>
                  <CardTitle className="font-display text-primary">Skill Demand Forecast</CardTitle>
                  <CardDescription>Projected demand vs internal supply over next 6 months</CardDescription>
                </CardHeader>
                <CardContent className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={growthData}>
                      <defs>
                        <linearGradient id="colorDemand" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.8}/>
                          <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                        </linearGradient>
                        <linearGradient id="colorSupply" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="hsl(var(--secondary))" stopOpacity={0.8}/>
                          <stop offset="95%" stopColor="hsl(var(--secondary))" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <XAxis dataKey="month" stroke="#64748b" />
                      <YAxis stroke="#64748b" />
                      <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                      <Tooltip 
                        contentStyle={{ backgroundColor: 'rgba(0,0,0,0.8)', borderColor: 'rgba(255,255,255,0.1)' }}
                      />
                      <Area type="monotone" dataKey="demand" stroke="hsl(var(--primary))" fillOpacity={1} fill="url(#colorDemand)" />
                      <Area type="monotone" dataKey="supply" stroke="hsl(var(--secondary))" fillOpacity={1} fill="url(#colorSupply)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card className="glass-panel">
                <CardHeader>
                  <CardTitle className="font-display text-primary">Critical Skill Deficits</CardTitle>
                  <CardDescription>Top 5 areas requiring immediate attention</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium text-white">Generative AI Prompting</span>
                      <span className="text-destructive font-mono">CRITICAL (82% Gap)</span>
                    </div>
                    <Progress value={18} className="h-2 bg-white/10" indicatorClassName="bg-destructive shadow-[0_0_10px_rgba(239,68,68,0.5)]" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium text-white">Cloud Security Architecture</span>
                      <span className="text-orange-400 font-mono">HIGH (65% Gap)</span>
                    </div>
                    <Progress value={35} className="h-2 bg-white/10" indicatorClassName="bg-orange-400" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium text-white">Data Ethics Compliance</span>
                      <span className="text-yellow-400 font-mono">MODERATE (45% Gap)</span>
                    </div>
                    <Progress value={55} className="h-2 bg-white/10" indicatorClassName="bg-yellow-400" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium text-white">React / Next.js Development</span>
                      <span className="text-green-400 font-mono">STABLE (12% Gap)</span>
                    </div>
                    <Progress value={88} className="h-2 bg-white/10" indicatorClassName="bg-green-400" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="diversity">
            <Card className="glass-panel">
              <CardHeader>
                <CardTitle className="font-display text-primary">Demographic Distribution by Level</CardTitle>
                <CardDescription>Tracking representation across organizational hierarchy</CardDescription>
              </CardHeader>
              <CardContent className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={diversityData} layout="vertical">
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" horizontal={false} />
                    <XAxis type="number" stroke="#64748b" />
                    <YAxis dataKey="role" type="category" stroke="#64748b" width={100} />
                    <Tooltip 
                      cursor={{fill: 'rgba(255,255,255,0.05)'}}
                      contentStyle={{ backgroundColor: 'rgba(0,0,0,0.8)', borderColor: 'rgba(255,255,255,0.1)' }}
                    />
                    <Legend />
                    <Bar dataKey="male" stackId="a" fill="hsl(var(--primary))" fillOpacity={0.6} name="Male" />
                    <Bar dataKey="female" stackId="a" fill="hsl(var(--secondary))" fillOpacity={0.6} name="Female" />
                    <Bar dataKey="other" stackId="a" fill="#ffffff" fillOpacity={0.6} name="Non-binary/Other" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="hiring">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="glass-panel col-span-2">
                <CardHeader>
                  <CardTitle className="font-display text-primary">Talent Acquisition Funnel</CardTitle>
                  <CardDescription>Candidate conversion rates from Application to Hire (Q3 2025)</CardDescription>
                </CardHeader>
                <CardContent className="h-[400px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={pipelineData} layout="vertical" margin={{ right: 50, left: 20 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" horizontal={false} />
                      <XAxis type="number" stroke="#64748b" hide />
                      <YAxis dataKey="stage" type="category" stroke="#64748b" width={100} tick={{fill: 'white'}} />
                      <Tooltip 
                        cursor={{fill: 'rgba(255,255,255,0.05)'}}
                        contentStyle={{ backgroundColor: 'rgba(0,0,0,0.8)', borderColor: 'rgba(255,255,255,0.1)' }}
                      />
                      <Bar dataKey="count" fill="hsl(var(--primary))" radius={[0, 4, 4, 0]} barSize={40} fillOpacity={0.8}>
                        <LabelList dataKey="count" position="right" fill="#fff" formatter={(val: number) => `${val}`} />
                        <LabelList dataKey="conversion" position="insideRight" fill="black" style={{ fontWeight: 'bold' }} />
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card className="glass-panel col-span-1">
                 <CardHeader>
                   <CardTitle className="font-display text-white">Pipeline Health</CardTitle>
                   <CardDescription>Key Performance Indicators</CardDescription>
                 </CardHeader>
                 <CardContent className="space-y-6">
                    <div className="p-4 rounded bg-white/5 border border-white/5">
                       <div className="text-sm text-muted-foreground mb-1">Time to Hire</div>
                       <div className="text-3xl font-bold text-white font-mono">24 Days</div>
                       <div className="text-xs text-green-400 mt-1">↓ 4 days vs last quarter</div>
                    </div>
                    <div className="p-4 rounded bg-white/5 border border-white/5">
                       <div className="text-sm text-muted-foreground mb-1">Offer Acceptance Rate</div>
                       <div className="text-3xl font-bold text-white font-mono">84.4%</div>
                       <div className="text-xs text-green-400 mt-1">↑ 2.1% vs industry avg</div>
                    </div>
                    <div className="p-4 rounded bg-white/5 border border-white/5">
                       <div className="text-sm text-muted-foreground mb-1">Cost per Hire</div>
                       <div className="text-3xl font-bold text-white font-mono">$4,250</div>
                       <div className="text-xs text-yellow-400 mt-1">↑ Slight increase</div>
                    </div>
                 </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
