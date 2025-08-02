import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';
import { 
  Rocket, 
  Github, 
  ExternalLink, 
  Download, 
  RefreshCw, 
  Trophy, 
  Flame, 
  Code2, 
  Play, 
  Calendar,
  CheckCircle,
  Lock,
  Star,
  Award,
  Zap,
  Brain,
  Target,
  Database,
  Sparkles
} from 'lucide-react';
import { useState } from 'react';

export default function Projects() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isRegenerating, setIsRegenerating] = useState(false);
  const [projectProgress, setProjectProgress] = useState(45);
  const [currentStreak, setCurrentStreak] = useState(7);
  const [totalXP, setTotalXP] = useState(2450);

  const handleStartProject = () => {
    toast({
      title: "🚀 Project Started!",
      description: "Boilerplate downloaded. Ready to build your Netflix Clone!",
    });
    setProjectProgress(15);
  };

  const handleSubmitProject = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setTotalXP(prev => prev + 300);
      setCurrentStreak(prev => prev + 1);
      setProjectProgress(100);
      toast({
        title: "🎉 Project Validated Successfully!",
        description: "+300 XP earned! Your portfolio just got stronger.",
      });
    }, 2000);
  };

  const handleRegenerateProject = () => {
    setIsRegenerating(true);
    setTimeout(() => {
      setIsRegenerating(false);
      toast({
        title: "✨ New Project Generated!",
        description: "Your fresh challenge is ready - E-commerce Platform with AI!",
      });
    }, 3000);
  };

  const currentProject = {
    title: "Netflix Clone with AI Recommendations",
    month: "July",
    difficulty: "Intermediate",
    techStack: ["React", "Node.js", "MongoDB", "OpenAI API"],
    duration: "2-3 weeks",
    xpReward: 300,
    concepts: ["Authentication", "Video Streaming", "AI Integration", "Responsive Design"],
    objectives: [
      "Set up authentication system",
      "Build video catalog interface",
      "Implement AI recommendation engine",
      "Deploy to production"
    ]
  };

  const pastProjects = [
    {
      title: "E-commerce Dashboard",
      status: "completed",
      xp: 250,
      month: "June"
    },
    {
      title: "Social Media App",
      status: "completed", 
      xp: 300,
      month: "May"
    },
    {
      title: "AI Chatbot Platform",
      status: "locked",
      month: "August"
    }
  ];

  return (
    <div className="p-6 space-y-8 animate-fade-in">
      {/* Hero Section */}
      <div className="relative glass-card p-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-primary opacity-10"></div>
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-full bg-primary/20 border border-primary/30">
                <Rocket className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  🚀 Your {currentProject.month} Project is Ready!
                </h1>
                <p className="text-muted-foreground mt-1">
                  AI-generated challenge tailored to your skill level
                </p>
              </div>
            </div>
            <Button 
              variant="outline" 
              onClick={handleRegenerateProject}
              disabled={isRegenerating}
              className="glass-card border-primary/30 hover:bg-primary/10"
            >
              {isRegenerating ? (
                <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
              ) : (
                <RefreshCw className="w-4 h-4 mr-2" />
              )}
              Regenerate
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-4 text-foreground">
                {currentProject.title}
              </h2>
              <div className="flex flex-wrap gap-2 mb-4">
                {currentProject.techStack.map((tech) => (
                  <Badge key={tech} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                    {tech}
                  </Badge>
                ))}
              </div>
              <div className="flex items-center gap-6 mb-6">
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-achievement" />
                  <span className="text-sm">{currentProject.difficulty}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span className="text-sm">{currentProject.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Trophy className="w-4 h-4 text-success" />
                  <span className="text-sm">+{currentProject.xpReward} XP</span>
                </div>
              </div>
              <div className="space-y-3">
                <Button 
                  onClick={handleStartProject} 
                  className="bg-gradient-primary hover:opacity-90 w-full md:w-auto"
                >
                  <Play className="w-4 h-4 mr-2" />
                  Start Project
                </Button>
                <Button variant="outline" className="w-full md:w-auto ml-0 md:ml-3">
                  <Download className="w-4 h-4 mr-2" />
                  Download Boilerplate
                </Button>
              </div>
            </div>

            <div className="space-y-6">
              {/* Progress Card */}
              <Card className="glass-card border-primary/20">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Target className="w-5 h-5 text-primary" />
                    Project Progress
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span>Overall Completion</span>
                      <span className="text-primary font-medium">{projectProgress}%</span>
                    </div>
                    <Progress value={projectProgress} className="h-2" />
                    <div className="flex justify-between">
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={handleSubmitProject}
                        disabled={isSubmitting}
                        className="flex-1 mr-2"
                      >
                        {isSubmitting ? (
                          <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                        ) : (
                          <Github className="w-4 h-4 mr-2" />
                        )}
                        Submit Project
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1 ml-2">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Preview
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* XP Rewards */}
              <Card className="glass-card border-success/20">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Zap className="w-5 h-5 text-success" />
                    XP & Rewards
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Total XP</span>
                      <span className="text-lg font-bold text-success">{totalXP.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm flex items-center gap-1">
                        <Flame className="w-4 h-4 text-orange-500" />
                        Current Streak
                      </span>
                      <span className="text-lg font-bold text-orange-500">{currentStreak} days</span>
                    </div>
                    <Separator />
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Award className="w-4 h-4" />
                      Next unlock: Premium Resume Template (3000 XP)
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Project Breakdown */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Brain className="w-5 h-5 text-primary" />
              Learning Objectives
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {currentProject.objectives.map((objective, index) => (
                <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-secondary/20 border border-secondary/30">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm">{objective}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Code2 className="w-5 h-5 text-success" />
              Concepts Covered
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-3">
              {currentProject.concepts.map((concept) => (
                <div key={concept} className="p-3 rounded-lg bg-success/10 border border-success/20 text-center">
                  <span className="text-sm font-medium text-success">{concept}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Monthly Timeline */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-primary" />
            Monthly Projects Timeline
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {pastProjects.map((project, index) => (
              <div key={index} className="flex items-center justify-between p-4 rounded-lg border border-secondary/30 bg-secondary/10">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-full ${
                    project.status === 'completed' ? 'bg-success/20 border border-success/30' :
                    project.status === 'locked' ? 'bg-muted/20 border border-muted/30' : 
                    'bg-primary/20 border border-primary/30'
                  }`}>
                    {project.status === 'completed' ? (
                      <CheckCircle className="w-4 h-4 text-success" />
                    ) : project.status === 'locked' ? (
                      <Lock className="w-4 h-4 text-muted-foreground" />
                    ) : (
                      <Code2 className="w-4 h-4 text-primary" />
                    )}
                  </div>
                  <div>
                    <h3 className="font-medium">{project.title}</h3>
                    <p className="text-sm text-muted-foreground">{project.month} 2024</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  {project.status === 'completed' && (
                    <Badge variant="secondary" className="bg-success/10 text-success border-success/20">
                      +{project.xp} XP
                    </Badge>
                  )}
                  {project.status === 'locked' && (
                    <Badge variant="outline" className="border-muted/30 text-muted-foreground">
                      Locked
                    </Badge>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* AI Insights */}
      <Card className="glass-card border-primary/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-primary" />
            AI Project Insights
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
              <p className="text-sm">
                <strong>Why this project?</strong> Based on your progress in React and interest in AI, 
                this Netflix clone will strengthen your full-stack skills while introducing modern AI concepts.
              </p>
            </div>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Database className="w-4 h-4" />
                <span>Database: MongoDB</span>
              </div>
              <div className="flex items-center gap-1">
                <Brain className="w-4 h-4" />
                <span>AI: OpenAI Integration</span>
              </div>
              <div className="flex items-center gap-1">
                <ExternalLink className="w-4 h-4" />
                <span>Deployment: Vercel</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}