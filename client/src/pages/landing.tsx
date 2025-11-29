import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, BrainCircuit, ShieldCheck, TrendingUp } from "lucide-react";
import generatedImage from "@assets/generated_images/dark_futuristic_network_background.png";

export default function Landing() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground font-sans overflow-hidden relative">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={generatedImage} 
          alt="Background" 
          className="w-full h-full object-cover opacity-40" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
      </div>

      <header className="relative z-10 flex items-center justify-between px-8 py-6 border-b border-white/5 backdrop-blur-sm">
        <div className="flex items-center gap-3">
           <div className="w-8 h-8 rounded bg-primary flex items-center justify-center shadow-[0_0_15px_rgba(0,255,255,0.5)]">
             <BrainCircuit className="w-5 h-5 text-black" />
           </div>
           <span className="font-display text-xl font-bold tracking-wider text-white">FAIR<span className="text-primary">WORK</span></span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <a href="#" className="hover:text-primary transition-colors">Platform</a>
          <a href="#" className="hover:text-primary transition-colors">Solutions</a>
          <a href="#" className="hover:text-primary transition-colors">About</a>
        </nav>
        <div className="flex items-center gap-4">
          <span className="text-sm text-muted-foreground font-mono hidden md:inline-block">SYSTEM STATUS: ONLINE</span>
          <Link href="/dashboard">
            <Button className="bg-primary text-black hover:bg-cyan-400 font-bold tracking-wide font-display rounded-none border border-primary shadow-[0_0_20px_rgba(0,255,255,0.3)] transition-all hover:scale-105">
              ACCESS TERMINAL
            </Button>
          </Link>
        </div>
      </header>

      <main className="relative z-10 flex-1 flex flex-col justify-center px-8 md:px-20 lg:px-32 max-w-7xl mx-auto w-full">
        <div className="space-y-6 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-primary/30 bg-primary/5 text-primary text-xs font-mono tracking-widest uppercase animate-in fade-in slide-in-from-left-4 duration-700">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            AI-Powered Workforce Intelligence
          </div>
          
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-[1.1] tracking-tight animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
            PREDICT THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">FUTURE</span> OF WORK
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
            Eliminate bias, identify skills gaps, and build a sustainable workforce with our advanced AI neural network. Transform raw HR data into strategic foresight.
          </p>

          <div className="flex flex-wrap gap-4 pt-4 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
            <Link href="/dashboard">
              <Button size="lg" className="h-14 px-8 bg-white text-black hover:bg-gray-200 font-bold rounded-none text-base flex items-center gap-2">
                Start Analysis <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="h-14 px-8 border-white/20 hover:bg-white/5 hover:border-white/40 text-white rounded-none text-base">
              View Demo
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-24 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-500">
          <div className="glass-panel p-6 border-t-2 border-t-primary">
            <BrainCircuit className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-xl font-display font-bold text-white mb-2">Skill Gap Prediction</h3>
            <p className="text-muted-foreground text-sm">
              Forecast future skill requirements based on market trends and internal growth vectors.
            </p>
          </div>
          <div className="glass-panel p-6 border-t-2 border-t-secondary">
            <ShieldCheck className="w-8 h-8 text-secondary mb-4" />
            <h3 className="text-xl font-display font-bold text-white mb-2">Bias Elimination</h3>
            <p className="text-muted-foreground text-sm">
              Detect and neutralize unconscious bias in hiring and promotion cycles using Fair AI models.
            </p>
          </div>
          <div className="glass-panel p-6 border-t-2 border-t-green-500">
            <TrendingUp className="w-8 h-8 text-green-500 mb-4" />
            <h3 className="text-xl font-display font-bold text-white mb-2">Sustainable Growth</h3>
            <p className="text-muted-foreground text-sm">
              Optimize workforce planning for long-term resilience and operational stability.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
