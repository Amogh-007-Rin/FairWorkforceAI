import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Dashboard from "@/pages/dashboard";
import Landing from "@/pages/landing";
import Analysis from "@/pages/analysis";
import Scenarios from "@/pages/scenarios";
import Workforce from "@/pages/workforce";
import Fairness from "@/pages/fairness";
import Ingest from "@/pages/ingest";
import { AiAssistant } from "@/components/layout/AiAssistant";

function Router() {
  return (
    <>
      <Switch>
        <Route path="/" component={Landing} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/analysis" component={Analysis} />
        <Route path="/scenarios" component={Scenarios} />
        <Route path="/workforce" component={Workforce} />
        <Route path="/fairness" component={Fairness} />
        <Route path="/ingest" component={Ingest} />
        <Route component={NotFound} />
      </Switch>
      <AiAssistant />
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
