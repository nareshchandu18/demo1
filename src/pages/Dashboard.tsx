import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Trophy, 
  Flame, 
  Target, 
  TrendingUp, 
  BookOpen, 
  Brain, 
  Zap,
  Calendar,
  Clock,
  Star,
  ArrowRight,
  Play,
  CheckCircle2,
  RefreshCw,
  Edit3,
  FileText,
  Code2,
  Award,
  Bell,
  MessageCircle,
  ChevronRight,
  BarChart3,
  Sparkles,
  Gift,
  Settings,
  Map,
  HelpCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

export default function Dashboard() {
  const { toast } = useToast();
  const [aiTyping, setAiTyping] = useState(false);
  const [currentWeek] = useState(2);
  const [streak] = useState(3);
  const [xp] = useState(845);
  const [level] = useState(2);
  const [resumeProgress] = useState(72);
  const [timeSpentWeek] = useState("3h 30m");

  // AI Typing Effect
  useEffect(() => {
    setAiTyping(true);
    const timer = setTimeout(() => setAiTyping(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Premium Data Models
  const userProgress = {
    currentWeek: 2,
    totalWeeks: 12,
    weeklyProgress: 45,
    streak: 3,
    xp: 845,
    level: 2,
    xpToNext: 155,
    skillsCompleted: ["HTML", "DSA Basics"],
    projectCurrent: "Portfolio Website",
    quizzesCompleted: 4,
    timeSpentThisWeek: "3h 30m",
    resumeProgress: 72
  };

  const weeklyBreakdown = {
    topic: "Advanced JavaScript + React Basics",
    resources: [
      { type: "YouTube", title: "JS Advanced Concepts", duration: "2h 15m" },
      { type: "Project", title: "Build Interactive Portfolio", progress: 65 },
      { type: "Quiz", title: "React Fundamentals", completed: true }
    ],
    dailyMinutes: 90,
    weekProgress: 45
  };

  const milestones = [
    { title: "Build E-commerce Cart", progress: 30, reward: "Premium Template", type: "project" },
    { title: "Complete React Module", progress: 75, reward: "Certificate", type: "course" },
    { title: "Reach Level 3", progress: 85, reward: "AI Mock Interview", type: "level" }
  ];

  const quickAccessGrid = [
    { title: 'Roadmap', icon: Map, color: 'hsl(var(--primary))', href: '/roadmap', status: 'Week 2/12' },
    { title: 'Projects', icon: Code2, color: 'hsl(var(--success))', href: '/projects', status: '3 Active' },
    { title: 'Quizzes', icon: Brain, color: 'hsl(var(--achievement))', href: '/quiz', status: '5 Available' },
    { title: 'Resources', icon: BookOpen, color: 'hsl(var(--streak))', href: '/roadmap', status: '47 Items' },
    { title: 'Resume', icon: FileText, color: 'hsl(var(--primary))', href: '/coach', status: '72% Complete' },
    { title: 'Coach', icon: MessageCircle, color: 'hsl(var(--accent))', href: '/coach', status: 'Available' }
  ];

  const notifications = [
    { id: 1, message: "You missed yesterday. Want a quick 5-min catch-up?", type: "reminder", time: "2h ago" },
    { id: 2, message: "New AI tool added to your track: Prompt Engineering", type: "update", time: "5h ago" },
    { id: 3, message: "Sarah completed the same project as you!", type: "social", time: "1d ago" }
  ];

  const analytics = {
    weeklyTime: "13h 45m",
    skillProgress: 68,
    quizPerformance: 89,
    projectsCompleted: 3,
    streakRecord: 7
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5 relative overflow-hidden">
      {/* Glassmorphic Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-achievement/5 pointer-events-none" />
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-streak/10 rounded-full blur-3xl pointer-events-none animate-pulse" />

      <div className="relative z-10 p-6 space-y-8 animate-fade-in">
        {/* Premium Header with AI Greeting */}
        <div className="glass-card p-6 border border-white/10 backdrop-blur-xl bg-white/5">
          <div className="flex items-center justify-between">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-success rounded-full animate-pulse" />
                <span className="text-sm text-muted-foreground">AI-Powered Dashboard</span>
              </div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-primary via-achievement to-streak bg-clip-text text-transparent">
                Hey Rahul 👋
              </h1>
              <p className="text-lg text-muted-foreground">
                You're on <span className="text-primary font-semibold">Week {currentWeek}</span> of your FAANG Journey
              </p>
            </div>
            
            {/* Progress Ring */}
            <div className="relative">
              <div className="w-24 h-24 relative">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="hsl(var(--muted))"
                    strokeWidth="8"
                    fill="none"
                    opacity="0.2"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="url(#progressGradient)"
                    strokeWidth="8"
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray={`${userProgress.weeklyProgress * 2.51} 251`}
                    className="transition-all duration-1000 ease-out"
                  />
                  <defs>
                    <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="hsl(var(--primary))" />
                      <stop offset="100%" stopColor="hsl(var(--achievement))" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">{userProgress.weeklyProgress}%</div>
                    <div className="text-xs text-muted-foreground">Complete</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-3 gap-6 mt-6 pt-6 border-t border-white/10">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Flame className="w-5 h-5 text-streak" />
                <span className="text-2xl font-bold text-streak">{streak}</span>
              </div>
              <p className="text-sm text-muted-foreground">Day Streak</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Trophy className="w-5 h-5 text-achievement" />
                <span className="text-2xl font-bold text-achievement">{xp} XP</span>
              </div>
              <p className="text-sm text-muted-foreground">Level {level}</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Clock className="w-5 h-5 text-success" />
                <span className="text-2xl font-bold text-success">{timeSpentWeek}</span>
              </div>
              <p className="text-sm text-muted-foreground">This Week</p>
            </div>
          </div>
        </div>

        {/* AI Message Box with Typing Effect */}
        <Card className="glass-card border border-primary/20 bg-gradient-to-r from-primary/5 to-achievement/5">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-gradient-to-r from-primary to-achievement rounded-full flex items-center justify-center animate-pulse-glow">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-semibold text-primary">AI Mentor</h3>
                  {aiTyping && (
                    <div className="flex gap-1">
                      <div className="w-1 h-1 bg-primary rounded-full animate-bounce" />
                      <div className="w-1 h-1 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                      <div className="w-1 h-1 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                    </div>
                  )}
                </div>
                <p className="text-muted-foreground">
                  Based on your answers, here's your 1st custom roadmap to reach your FAANG goal 🚀. 
                  This adapts weekly based on your progress and performance.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Current Week Card */}
        <Card className="glass-card border border-success/20">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-success" />
                Week {currentWeek} Breakdown
              </CardTitle>
              <Link to="/roadmap">
                <Button size="sm" className="bg-gradient-to-r from-success to-primary hover:opacity-90">
                  <Play className="w-4 h-4 mr-2" />
                  Continue
                </Button>
              </Link>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">{weeklyBreakdown.topic}</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Daily learning: {weeklyBreakdown.dailyMinutes} minutes
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {weeklyBreakdown.resources.map((resource, index) => (
                <div key={index} className="p-3 rounded-lg bg-surface-elevated/50 hover:bg-surface-elevated transition-colors cursor-pointer">
                  <div className="flex items-center gap-2 mb-2">
                    {resource.type === 'YouTube' && <Play className="w-4 h-4 text-red-500" />}
                    {resource.type === 'Project' && <Code2 className="w-4 h-4 text-blue-500" />}
                    {resource.type === 'Quiz' && <Brain className="w-4 h-4 text-purple-500" />}
                    <span className="text-sm font-medium">{resource.type}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{resource.title}</p>
                  {resource.duration && (
                    <p className="text-xs text-muted-foreground mt-1">{resource.duration}</p>
                  )}
                  {resource.progress && (
                    <Progress value={resource.progress} className="mt-2 h-1" />
                  )}
                  {resource.completed && (
                    <div className="flex items-center gap-1 mt-2">
                      <CheckCircle2 className="w-3 h-3 text-success" />
                      <span className="text-xs text-success">Completed</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Main Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column - Analytics & Gamification */}
          <div className="lg:col-span-4 space-y-6">
            {/* Gamification Panel */}
            <Card className="glass-card border border-achievement/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-achievement" />
                  Your Progress
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* XP Bar */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Level {level}</span>
                    <span className="text-sm text-muted-foreground">{userProgress.xpToNext} XP to Level {level + 1}</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-achievement to-primary rounded-full transition-all duration-1000 animate-pulse-glow"
                      style={{ width: `${(userProgress.xp % 1000) / 10}%` }}
                    />
                  </div>
                </div>

                {/* Next Reward */}
                <div className="p-3 rounded-lg bg-gradient-to-r from-achievement/10 to-primary/10 border border-achievement/20">
                  <div className="flex items-center gap-2 mb-1">
                    <Gift className="w-4 h-4 text-achievement" />
                    <span className="text-sm font-medium">Next Reward</span>
                  </div>
                  <p className="text-sm text-muted-foreground">1000 XP → Premium Resume Template</p>
                </div>
              </CardContent>
            </Card>

            {/* Analytics Widget */}
            <Link to="/analytics">
              <Card className="glass-card cursor-pointer hover:scale-105 transition-transform">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="w-5 h-5 text-primary" />
                    Analytics
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 rounded-lg bg-surface-elevated/50">
                      <div className="text-lg font-bold text-primary">{analytics.weeklyTime}</div>
                      <div className="text-xs text-muted-foreground">Weekly Time</div>
                    </div>
                    <div className="text-center p-3 rounded-lg bg-surface-elevated/50">
                      <div className="text-lg font-bold text-success">{analytics.skillProgress}%</div>
                      <div className="text-xs text-muted-foreground">Skill Progress</div>
                    </div>
                    <div className="text-center p-3 rounded-lg bg-surface-elevated/50">
                      <div className="text-lg font-bold text-achievement">{analytics.quizPerformance}%</div>
                      <div className="text-xs text-muted-foreground">Quiz Performance</div>
                    </div>
                    <div className="text-center p-3 rounded-lg bg-surface-elevated/50">
                      <div className="text-lg font-bold text-streak">{analytics.streakRecord}</div>
                      <div className="text-xs text-muted-foreground">Best Streak</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>

          {/* Center Column - Quick Access & Coach */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Access Grid */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-primary" />
                  Quick Access
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  {quickAccessGrid.map((item, index) => (
                    <Link key={index} to={item.href}>
                      <Card className="p-4 cursor-pointer hover:scale-105 transition-all duration-300 bg-gradient-to-br from-white/5 to-white/10 border-white/20 hover:border-primary/40 group">
                        <div className="flex items-center justify-between mb-2">
                          <item.icon 
                            className="w-5 h-5 group-hover:animate-bounce" 
                            style={{ color: item.color }}
                          />
                          <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                        </div>
                        <h4 className="font-semibold text-sm mb-1">{item.title}</h4>
                        <p className="text-xs text-muted-foreground">{item.status}</p>
                      </Card>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Daily Coach Widget */}
            <Card className="glass-card border border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageCircle className="w-5 h-5 text-primary" />
                  Daily Coach
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    "Let's revise DSA – what did you learn yesterday?"
                  </p>
                  <div className="flex gap-2">
                    <Link to="/quiz" className="flex-1">
                      <Button size="sm" variant="outline" className="w-full">
                        <Brain className="w-4 h-4 mr-2" />
                        Quick Quiz
                      </Button>
                    </Link>
                    <Link to="/coach" className="flex-1">
                      <Button size="sm" className="w-full bg-gradient-to-r from-primary to-achievement">
                        <Sparkles className="w-4 h-4 mr-2" />
                        Recap
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Resume Status */}
            <Card className="glass-card border border-success/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-success" />
                  Resume Builder
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Auto-generated resume</span>
                    <span className="text-sm font-semibold text-success">{resumeProgress}% ready</span>
                  </div>
                  <Progress value={resumeProgress} className="h-2" />
                  <Link to="/coach">
                    <Button size="sm" variant="outline" className="w-full">
                      <Edit3 className="w-4 h-4 mr-2" />
                      Edit Now
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Milestones & Notifications */}
          <div className="lg:col-span-3 space-y-6">
            {/* Milestones Panel */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-primary" />
                  Milestones
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {milestones.map((milestone, index) => (
                  <div key={index} className="space-y-2 cursor-pointer hover:bg-surface-elevated/20 p-2 rounded-lg transition-colors">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-medium">{milestone.title}</h4>
                      <div className="flex items-center gap-1">
                        {milestone.type === 'project' && <Code2 className="w-3 h-3 text-success" />}
                        {milestone.type === 'course' && <Award className="w-3 h-3 text-achievement" />}
                        {milestone.type === 'level' && <Trophy className="w-3 h-3 text-primary" />}
                      </div>
                    </div>
                    <Progress value={milestone.progress} className="h-1.5" />
                    <p className="text-xs text-muted-foreground">
                      Reward: {milestone.reward}
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Smart Notifications */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="w-5 h-5 text-primary" />
                  Updates
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {notifications.map((notification) => (
                  <div key={notification.id} className="p-3 rounded-lg bg-surface-elevated/30 hover:bg-surface-elevated/50 transition-colors cursor-pointer">
                    <p className="text-sm">{notification.message}</p>
                    <p className="text-xs text-muted-foreground mt-1">{notification.time}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Action Buttons Row */}
        <div className="flex items-center justify-center gap-4">
          <Button variant="outline" className="gap-2">
            <RefreshCw className="w-4 h-4" />
            Regenerate Roadmap
          </Button>
          <Link to="/settings">
            <Button variant="outline" className="gap-2">
              <Edit3 className="w-4 h-4" />
              Edit Goals
            </Button>
          </Link>
          <Link to="/projects">
            <Button className="gap-2 bg-gradient-to-r from-primary via-achievement to-success hover:opacity-90 text-white font-semibold px-8">
              <ArrowRight className="w-4 h-4" />
              Let's Start Building!
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}