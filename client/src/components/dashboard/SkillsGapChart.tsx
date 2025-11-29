import { 
  Radar, 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  PolarRadiusAxis, 
  ResponsiveContainer,
  Tooltip,
  Legend
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const data = [
  { subject: 'AI/ML', A: 120, B: 110, fullMark: 150 },
  { subject: 'Data Science', A: 98, B: 130, fullMark: 150 },
  { subject: 'Cybersecurity', A: 86, B: 130, fullMark: 150 },
  { subject: 'Cloud Ops', A: 99, B: 100, fullMark: 150 },
  { subject: 'Blockchain', A: 85, B: 90, fullMark: 150 },
  { subject: 'UX Design', A: 65, B: 85, fullMark: 150 },
];

export function SkillsGapChart() {
  return (
    <Card className="glass-panel col-span-2 h-[400px] flex flex-col">
      <CardHeader>
        <CardTitle className="font-display tracking-wide text-primary">Skills Gap Analysis</CardTitle>
        <CardDescription>Current Workforce (A) vs. Future Requirement (B)</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
            <PolarGrid stroke="rgba(255,255,255,0.1)" />
            <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 12, fontFamily: 'Rajdhani' }} />
            <PolarRadiusAxis angle={30} domain={[0, 150]} tick={false} axisLine={false} />
            <Radar
              name="Current Capabilities"
              dataKey="A"
              stroke="hsl(var(--primary))"
              strokeWidth={2}
              fill="hsl(var(--primary))"
              fillOpacity={0.3}
            />
            <Radar
              name="Future Target"
              dataKey="B"
              stroke="hsl(var(--secondary))"
              strokeWidth={2}
              fill="hsl(var(--secondary))"
              fillOpacity={0.3}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'rgba(0,0,0,0.8)', 
                borderColor: 'rgba(255,255,255,0.1)',
                backdropFilter: 'blur(4px)',
                color: '#fff'
              }} 
              itemStyle={{ color: '#fff' }}
            />
            <Legend wrapperStyle={{ fontFamily: 'Rajdhani' }} />
          </RadarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
