import { Sidebar } from "@/components/layout/Sidebar";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription
} from "@/components/ui/dialog";
import { 
  UploadCloud, 
  FileText, 
  CheckCircle2, 
  AlertTriangle, 
  Database, 
  Cpu,
  ChevronRight,
  BarChart4,
  Download,
  Share2
} from "lucide-react";
import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import Papa from "papaparse";
import { motion, AnimatePresence } from "framer-motion";

interface CSVRow {
  [key: string]: string;
}

export default function Ingest() {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [analysisStage, setAnalysisStage] = useState<string>("");
  const [results, setResults] = useState<any | null>(null);
  const [showReport, setShowReport] = useState(false);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      setFile(acceptedFiles[0]);
      setResults(null);
      setProgress(0);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ 
    onDrop,
    accept: {
      'text/csv': ['.csv'],
      'application/vnd.ms-excel': ['.csv']
    },
    maxFiles: 1
  });

  const processFile = () => {
    if (!file) return;
    setUploading(true);
    
    // Simulate scanning process
    const stages = [
      "Initializing Neural Parsers...",
      "Anonymizing PII Data...",
      "Vectorizing Skill Sets...",
      "Detecting Bias Patterns...",
      "Generating Sustainability Report..."
    ];

    let currentStage = 0;
    setAnalysisStage(stages[0]);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });

      if (progress % 20 === 0 && currentStage < stages.length - 1) {
        currentStage++;
        setAnalysisStage(stages[currentStage]);
      }
    }, 100);

    Papa.parse(file, {
      header: true,
      complete: (results) => {
        setTimeout(() => {
          setUploading(false);
          generateInsights(results.data as CSVRow[]);
        }, 5500); // Wait for animation to finish
      }
    });
  };

  const generateInsights = (data: CSVRow[]) => {
    // Simulate AI analysis based on row count (mock logic for demo)
    const rowCount = data.length;
    setResults({
      rowsProcessed: rowCount,
      departments: Math.floor(rowCount / 5) + 2,
      skillsGap: "High Demand: Python, AI Ethics",
      biasAlert: "Potential gender imbalance in Senior Leadership detected",
      sustainabilityScore: 78
    });
  };

  return (
    <div className="flex min-h-screen bg-background bg-grid-pattern font-sans text-foreground">
      <Sidebar />
      
      <main className="flex-1 ml-64 p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-display font-bold text-white tracking-tight flex items-center gap-3">
            DATA INGESTION TERMINAL
            <Badge className="bg-primary/10 text-primary border-primary/30 font-mono border animate-pulse">
              SECURE CONNECTION
            </Badge>
          </h1>
          <p className="text-muted-foreground mt-1">Upload raw workforce CSV data for AI processing and sustainability auditing.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Upload Area */}
          <div className="space-y-6">
            <Card className="glass-panel border-primary/20 relative overflow-hidden">
              <CardHeader>
                <CardTitle className="font-display text-white flex items-center gap-2">
                  <Database className="w-5 h-5 text-primary" />
                  Source File Upload
                </CardTitle>
                <CardDescription>Accepted formats: .csv (UTF-8 encoded)</CardDescription>
              </CardHeader>
              <CardContent>
                {!results ? (
                  <div 
                    {...getRootProps()} 
                    className={`border-2 border-dashed rounded-lg h-64 flex flex-col items-center justify-center cursor-pointer transition-all duration-300 ${
                      isDragActive ? "border-primary bg-primary/5 scale-[1.02]" : "border-white/10 hover:border-primary/50 hover:bg-white/5"
                    }`}
                  >
                    <input {...getInputProps()} />
                    <div className="w-16 h-16 rounded-full bg-black/50 flex items-center justify-center mb-4 border border-white/10">
                      <UploadCloud className={`w-8 h-8 ${isDragActive ? "text-primary" : "text-muted-foreground"}`} />
                    </div>
                    {file ? (
                      <div className="text-center">
                        <p className="font-bold text-white text-lg">{file.name}</p>
                        <p className="text-sm text-muted-foreground font-mono mt-1">{(file.size / 1024).toFixed(2)} KB</p>
                        <Button 
                          size="sm" 
                          className="mt-4 bg-primary text-black hover:bg-cyan-400"
                          onClick={(e) => { e.stopPropagation(); processFile(); }}
                          disabled={uploading}
                        >
                          {uploading ? "Processing..." : "Initiate Analysis"}
                        </Button>
                      </div>
                    ) : (
                      <div className="text-center px-8">
                        <p className="font-bold text-white text-lg">Drop HR Dataset Here</p>
                        <p className="text-sm text-muted-foreground mt-2">or click to browse filesystem</p>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="h-64 flex flex-col items-center justify-center text-center space-y-4 animate-in fade-in zoom-in duration-500">
                    <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center border border-green-500/30 shadow-[0_0_30px_rgba(34,197,94,0.2)]">
                      <CheckCircle2 className="w-10 h-10 text-green-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white font-display">Ingestion Complete</h3>
                      <p className="text-muted-foreground">Data successfully vectorized and indexed.</p>
                    </div>
                    <Button 
                      variant="outline" 
                      className="border-white/20 hover:bg-white/5"
                      onClick={() => { setFile(null); setResults(null); }}
                    >
                      Upload New Dataset
                    </Button>
                  </div>
                )}
              </CardContent>

              {/* Scanning Animation Overlay */}
              <AnimatePresence>
                {uploading && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-black/90 backdrop-blur-sm z-50 flex flex-col items-center justify-center p-8"
                  >
                    <div className="w-full max-w-md space-y-6">
                       <div className="flex justify-between items-end mb-2">
                         <span className="font-mono text-primary text-sm animate-pulse">AI_CORE_ACTIVE</span>
                         <span className="font-mono text-white text-lg">{progress}%</span>
                       </div>
                       <Progress value={progress} className="h-1" indicatorClassName="bg-primary shadow-[0_0_10px_rgba(0,255,255,0.8)]" />
                       <div className="h-8 font-mono text-sm text-muted-foreground text-center">
                         {`> ${analysisStage}`}
                       </div>
                       
                       {/* Visual Hex Grid Animation */}
                       <div className="grid grid-cols-8 gap-1 opacity-20 mt-8">
                         {Array.from({ length: 32 }).map((_, i) => (
                           <motion.div 
                             key={i}
                             className="w-full aspect-square bg-primary/50 rounded-sm"
                             animate={{ 
                               opacity: [0.1, 0.8, 0.1],
                               scale: [0.8, 1.1, 0.8] 
                             }}
                             transition={{ 
                               duration: Math.random() * 2 + 1, 
                               repeat: Infinity,
                               delay: Math.random() * 0.5 
                             }}
                           />
                         ))}
                       </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </Card>

            <Card className="glass-panel border-white/5">
              <CardHeader>
                 <CardTitle className="text-sm font-mono text-muted-foreground uppercase tracking-wider">Requirements</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                 <div className="flex gap-2 items-center"><FileText className="w-4 h-4" /> Must include 'Role', 'Department', 'Tenure' columns</div>
                 <div className="flex gap-2 items-center"><FileText className="w-4 h-4" /> UTF-8 Encoding required</div>
                 <div className="flex gap-2 items-center"><FileText className="w-4 h-4" /> Max file size: 25MB</div>
              </CardContent>
            </Card>
          </div>

          {/* Results Preview */}
          <div className="space-y-6">
             {results ? (
               <div className="space-y-6 animate-in slide-in-from-right duration-700">
                 <Card className="glass-panel border-t-4 border-t-primary">
                   <CardHeader>
                     <CardTitle className="font-display text-white">Analysis Summary</CardTitle>
                   </CardHeader>
                   <CardContent className="space-y-4">
                     <div className="grid grid-cols-2 gap-4">
                       <div className="p-3 rounded bg-white/5 border border-white/5">
                         <span className="text-xs text-muted-foreground uppercase">Records</span>
                         <div className="text-2xl font-bold text-white font-mono">{results.rowsProcessed}</div>
                       </div>
                       <div className="p-3 rounded bg-white/5 border border-white/5">
                         <span className="text-xs text-muted-foreground uppercase">Departments</span>
                         <div className="text-2xl font-bold text-white font-mono">{results.departments}</div>
                       </div>
                     </div>
                     
                     <div className="p-4 rounded bg-primary/10 border border-primary/20">
                       <div className="flex items-center gap-2 mb-2 text-primary font-bold">
                         <Cpu className="w-4 h-4" /> AI Generated Insight
                       </div>
                       <p className="text-sm text-white/80 mb-2">{results.skillsGap}</p>
                       <div className="flex items-center gap-2 text-xs text-primary/60 font-mono">
                         Confidence: 98.4%
                       </div>
                     </div>

                     <div className="p-4 rounded bg-yellow-500/10 border border-yellow-500/20">
                       <div className="flex items-center gap-2 mb-2 text-yellow-400 font-bold">
                         <AlertTriangle className="w-4 h-4" /> Bias Pattern Detected
                       </div>
                       <p className="text-sm text-white/80">{results.biasAlert}</p>
                     </div>

                     <Button 
                       className="w-full bg-white text-black hover:bg-gray-200 font-bold"
                       onClick={() => setShowReport(true)}
                     >
                       View Full Report <ChevronRight className="w-4 h-4 ml-2" />
                     </Button>
                   </CardContent>
                 </Card>
               </div>
             ) : (
               <div className="h-full flex flex-col items-center justify-center text-center opacity-30 space-y-4 p-8 border-2 border-dashed border-white/5 rounded-lg">
                 <BarChart4 className="w-16 h-16" />
                 <h3 className="font-display text-xl font-bold">Awaiting Data</h3>
                 <p className="text-sm max-w-xs">Upload a dataset to generate sustainability insights and predictive models.</p>
               </div>
             )}
          </div>
        </div>

        <Dialog open={showReport} onOpenChange={setShowReport}>
          <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto glass-panel border-primary/20">
            <DialogHeader>
              <DialogTitle className="text-2xl font-display text-white flex items-center gap-2">
                <FileText className="w-6 h-6 text-primary" />
                Comprehensive Workforce Audit
              </DialogTitle>
              <DialogDescription>
                Generated on {new Date().toLocaleDateString()} • Sensitivity Level: HIGH
              </DialogDescription>
            </DialogHeader>
            
            <div className="space-y-6 mt-4">
              {/* Executive Summary */}
              <div className="p-4 rounded bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-white mb-2">Executive Summary</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  The uploaded dataset contains {results?.rowsProcessed} records across {results?.departments} operational units. 
                  Our Fair AI engine has detected a <span className="text-yellow-400 font-bold">medium risk</span> of attrition in technical roles 
                  and a <span className="text-green-400 font-bold">strong</span> internal mobility potential. 
                  Immediate action is recommended to address the identified skills gap in AI Ethics and Cloud Security.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Skills Matrix */}
                <Card className="bg-black/20 border-white/10">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-mono uppercase text-muted-foreground">Critical Skills Gap</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs text-white">
                        <span>Python / Data Science</span>
                        <span className="text-red-400">High Deficit</span>
                      </div>
                      <Progress value={35} className="h-1.5" indicatorClassName="bg-red-500" />
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs text-white">
                        <span>Cloud Architecture</span>
                        <span className="text-orange-400">Moderate Deficit</span>
                      </div>
                      <Progress value={55} className="h-1.5" indicatorClassName="bg-orange-400" />
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs text-white">
                        <span>Project Management</span>
                        <span className="text-green-400">Surplus</span>
                      </div>
                      <Progress value={92} className="h-1.5" indicatorClassName="bg-green-400" />
                    </div>
                  </CardContent>
                </Card>

                {/* Diversity Metrics */}
                <Card className="bg-black/20 border-white/10">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-mono uppercase text-muted-foreground">Diversity & Inclusion</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-white">Gender Balance (Leadership)</span>
                      <Badge variant="outline" className="text-yellow-400 border-yellow-400/30">Review Needed</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-white">Pay Equity Score</span>
                      <Badge variant="outline" className="text-green-400 border-green-400/30">98.5%</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-white">Age Distribution</span>
                      <Badge variant="outline" className="text-blue-400 border-blue-400/30">Balanced</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* AI Recommendations */}
              <div className="space-y-3">
                <h3 className="text-sm font-mono uppercase text-primary flex items-center gap-2">
                  <Cpu className="w-4 h-4" /> Strategic Recommendations
                </h3>
                <div className="p-3 rounded bg-primary/5 border-l-2 border-primary text-sm text-muted-foreground">
                  <strong className="text-white block mb-1">Upskilling Initiative</strong>
                  Launch an internal "AI Fluency" certification program to bridge the 35% gap in data literacy across non-technical departments.
                </div>
                <div className="p-3 rounded bg-primary/5 border-l-2 border-primary text-sm text-muted-foreground">
                  <strong className="text-white block mb-1">Hiring Adjustments</strong>
                  Modify job descriptions for "Senior Architect" roles to remove gender-coded language, targeting a 15% increase in diverse applicants.
                </div>
              </div>

              <div className="flex justify-end gap-2 pt-4 border-t border-white/10">
                <Button variant="outline" className="border-white/20 hover:bg-white/5">
                  <Share2 className="w-4 h-4 mr-2" /> Share Report
                </Button>
                <Button className="bg-primary text-black hover:bg-cyan-400">
                  <Download className="w-4 h-4 mr-2" /> Download PDF
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </main>
    </div>
  );
}
