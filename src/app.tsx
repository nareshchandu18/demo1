import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import Dashboard from "./pages/Dashboard";
import Roadmap from "./pages/Roadmap";
import StudyCoach from "./pages/StudyCoach";
import Projects from "./pages/Projects";
import Gamification from "./pages/Gamification";
import Quiz from "./pages/Quiz";
import AIHub from "./pages/AIHub";
import Community from "./pages/Community";
import Analytics from "./pages/Analytics";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/roadmap" element={<Roadmap />} />
            <Route path="/coach" element={<StudyCoach />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/gamification" element={<Gamification />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/career" element={<StudyCoach />} />
            <Route path="/explore" element={<Roadmap />} />
            <Route path="/ai-hub" element={<AIHub />} />
            <Route path="/community" element={<Community />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
