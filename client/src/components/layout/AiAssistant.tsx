import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BrainCircuit, X, MessageSquare, Sparkles, ChevronRight } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

const insights = {
  "/": [
    "System initialization complete. Welcome to FairWork AI.",
    "Current workforce sustainability score: 88/100.",
    "Navigation Tip: Check the Dashboard for real-time metrics."
  ],
  "/dashboard": [
    "Alert: 'Sales' department showing 15% attrition risk increase.",
    "Skill Gap Analysis: 'Cloud Security' demand > supply.",
    "Recommendation: Initiate upskilling program for Q3."
  ],
  "/workforce": [
    "Analyzing 6 employee profiles...",
    "High Potential Alert: Sarah Chen (98/100).",
    "Retention Risk: Marcus Johnson requires intervention."
  ],
  "/analysis": [
    "Data Correlation Found: Hiring diversity directly impacts innovation index.",
    "Forecast: 40% growth in AI roles needed by Year End.",
    "Critical Deficit: 'Generative AI Prompting' skills."
  ],
  "/scenarios": [
    "Simulation Active: 'High Growth' parameters set.",
    "Projection: 14% headcount increase feasible with current budget.",
    "Warning: Increasing hiring rate > 8% may impact culture integration."
  ],
  "/fairness": [
    "Audit Protocol: Active.",
    "Resume Parser: 100% Anonymized.",
    "Pay Equity Check: Deviation within 1% tolerance.",
    "Bias Mitigation: 3 job descriptions flagged for revision."
  ]
};

export function AiAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();
  const [messages, setMessages] = useState<string[]>([]);
  const [isTyping, setIsTyping] = useState(false);

  // Reset messages when location changes
  useEffect(() => {
    setMessages([]);
    if (isOpen) {
      simulateTyping();
    }
  }, [location]);

  // Effect to trigger typing when opened
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      simulateTyping();
    }
  }, [isOpen]);

  const simulateTyping = () => {
    setIsTyping(true);
    const pageInsights = insights[location as keyof typeof insights] || ["System standing by..."];
    
    let delay = 500;
    pageInsights.forEach((msg, index) => {
      setTimeout(() => {
        setMessages(prev => [...prev, msg]);
        if (index === pageInsights.length - 1) setIsTyping(false);
      }, delay);
      delay += 1500;
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none">
      {/* Chat Window */}
      <div className={cn(
        "pointer-events-auto transition-all duration-500 ease-out transform origin-bottom-right mb-4",
        isOpen ? "scale-100 opacity-100 translate-y-0" : "scale-95 opacity-0 translate-y-10 pointer-events-none hidden"
      )}>
        <Card className="w-80 md:w-96 glass-panel border-primary/30 shadow-[0_0_30px_rgba(0,255,255,0.15)] backdrop-blur-xl">
          <CardHeader className="p-4 border-b border-white/10 bg-black/20 flex flex-row items-center justify-between space-y-0">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_10px_rgba(0,255,255,0.8)]" />
              <CardTitle className="text-sm font-display text-white tracking-wider">FAIR.AI ASSISTANT</CardTitle>
            </div>
            <Button variant="ghost" size="icon" className="h-6 w-6 hover:bg-white/10" onClick={() => setIsOpen(false)}>
              <X className="w-4 h-4 text-muted-foreground" />
            </Button>
          </CardHeader>
          <CardContent className="p-0">
            <ScrollArea className="h-64 p-4 space-y-4">
              {messages.map((msg, i) => (
                <div key={i} className="flex gap-3 animate-in fade-in slide-in-from-bottom-2 duration-300 mb-4 last:mb-0">
                  <div className="w-6 h-6 rounded bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1 border border-primary/20">
                    <BrainCircuit className="w-3 h-3 text-primary" />
                  </div>
                  <div className="text-sm font-mono text-muted-foreground leading-relaxed bg-white/5 p-2 rounded-r-lg rounded-bl-lg border border-white/5">
                    {msg}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex gap-2 p-2 items-center text-xs text-primary font-mono animate-pulse">
                  <Sparkles className="w-3 h-3" /> Analyzing context...
                </div>
              )}
            </ScrollArea>
            <div className="p-3 border-t border-white/10 bg-black/20">
              <div className="flex items-center gap-2">
                 <input 
                   type="text" 
                   placeholder="Ask Fair.AI..." 
                   className="flex-1 bg-transparent border-none text-sm text-white placeholder:text-white/20 focus:outline-none font-mono"
                   disabled
                 />
                 <Button size="icon" variant="ghost" className="h-6 w-6 text-primary">
                   <ChevronRight className="w-4 h-4" />
                 </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Toggle Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "pointer-events-auto h-14 w-14 rounded-full shadow-[0_0_20px_rgba(0,255,255,0.3)] transition-all duration-300 hover:scale-110 border-2 border-white/10",
          isOpen ? "bg-destructive hover:bg-destructive/80 rotate-90" : "bg-primary hover:bg-cyan-400 text-black"
        )}
      >
        {isOpen ? <X className="w-6 h-6 text-white" /> : <BrainCircuit className="w-7 h-7" />}
      </Button>
    </div>
  );
}
