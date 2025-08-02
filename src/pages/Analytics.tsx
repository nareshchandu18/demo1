import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  TrendingUp, 
  Target, 
  Clock, 
  Zap, 
  Brain, 
  Calendar,
  BarChart3,
  PieChart,
  Activity,
  Trophy,
  Flame,
  Star,
  BookOpen,
  Code,
  Award,
  TimerIcon,
  CheckCircle,
  ArrowUp,
  ArrowDown,
  Sparkles
} from 'lucide-react';

export default function Analytics() {
  const [timeFrame, setTimeFrame] = useState('week');

  const stats = {
    totalXP: 15240,
    weeklyXP: 1850,
    streakDays: 47,
    studyHours: 128,
    completedTasks: 89,
    weeklyGoal: 2000,
    level: 12
  };

  const skillProgress = [
    { skill: 'React', level: 85, xp: 3420, change: '+12%' },
    { skill: 'Node.js', level: 72, xp: 2880, change: '+8%' },
    { skill: 'Python', level: 68, xp: 2720, change: '+15%' },
    { skill: 'System Design', level: 45, xp: 1800, change: '+22%' },
    { skill: 'Data Structures', level: 78, xp: 3120, change: '+5%' }
  ];

  const weeklyData = [
    { day: 'Mon', xp: 320, hours: 2.5, tasks: 4 },
    { day: 'Tue', xp: 450, hours: 3.2, tasks: 6 },
    { day: 'Wed', xp: 280, hours: 2.0, tasks: 3 },
    { day: 'Thu', xp: 380, hours: 2.8, tasks: 5 },
    { day: 'Fri', xp: 200, hours: 1.5, tasks: 2 },
    { day: 'Sat', xp: 150, hours: 1.0, tasks: 1 },
    { day: 'Sun', xp: 70, hours: 0.5, tasks: 1 }
  ];

  const domainDistribution = [
    { domain: 'Frontend', percentage: 35, color: 'bg-blue-500' },
    { domain: 'Backend', percentage: 25, color: 'bg-green-500' },
    { domain: 'AI/ML', percentage: 20, color: 'bg-purple-500' },
    { domain: 'DevOps', percentage: 12, color: 'bg-orange-500' },
    { domain: 'System Design', percentage: 8, color: 'bg-red-500' }
  ];

  const achievements = [
    { title: 'Week Warrior', description: '7-day learning streak', date: '2 days ago', icon: Flame },
    { title: 'Code Master', description: '50 coding challenges solved', date: '1 week ago', icon: Code },
    { title: 'Knowledge Seeker', description: '100 hours of study time', date: '2 weeks ago', icon: BookOpen }
  ];

  const aiInsights = [
    {
      type: 'improvement',
      title: 'Peak Learning Time',
      description: 'You learn best between 9-11 AM. Consider scheduling complex topics during this time.',
      icon: Clock,
      color: 'text-blue-600'
    },
    {
      type: 'warning',
      title: 'Weekend Drop-off',
      description: 'Your weekend productivity drops by 60%. Try setting smaller weekend goals.',
      icon: TrendingUp,
      color: 'text-orange-600'
    },
    {
      type: 'suggestion',
      title: 'Skill Gap Detected',
      description: 'Focus more on System Design to balance your full-stack knowledge.',
      icon: Target,
      color: 'text-purple-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 p-6 animate-fade-in">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent flex items-center gap-3 mb-2">
            <BarChart3 className="w-10 h-10 text-primary animate-pulse" />
            Analytics Dashboard
          </h1>
          <p className="text-muted-foreground text-lg">
            Track your learning journey with AI-powered insights
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-8">
          <Card className="glass-card">
            <CardContent className="p-4 text-center">
              <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                <Zap className="w-4 h-4 text-primary" />
              </div>
              <div className="text-2xl font-bold text-primary">{stats.totalXP.toLocaleString()}</div>
              <div className="text-xs text-muted-foreground">Total XP</div>
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardContent className="p-4 text-center">
              <div className="w-8 h-8 bg-achievement/10 rounded-full flex items-center justify-center mx-auto mb-2">
                <Flame className="w-4 h-4 text-achievement" />
              </div>
              <div className="text-2xl font-bold text-achievement">{stats.streakDays}</div>
              <div className="text-xs text-muted-foreground">Day Streak</div>
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardContent className="p-4 text-center">
              <div className="w-8 h-8 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-2">
                <Clock className="w-4 h-4 text-green-600" />
              </div>
              <div className="text-2xl font-bold text-green-600">{stats.studyHours}h</div>
              <div className="text-xs text-muted-foreground">Study Time</div>
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardContent className="p-4 text-center">
              <div className="w-8 h-8 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-2">
                <CheckCircle className="w-4 h-4 text-purple-600" />
              </div>
              <div className="text-2xl font-bold text-purple-600">{stats.completedTasks}</div>
              <div className="text-xs text-muted-foreground">Tasks Done</div>
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardContent className="p-4 text-center">
              <div className="w-8 h-8 bg-orange-500/10 rounded-full flex items-center justify-center mx-auto mb-2">
                <Trophy className="w-4 h-4 text-orange-600" />
              </div>
              <div className="text-2xl font-bold text-orange-600">{stats.level}</div>
              <div className="text-xs text-muted-foreground">Level</div>
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardContent className="p-4 text-center">
              <div className="w-8 h-8 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-2">
                <Target className="w-4 h-4 text-blue-600" />
              </div>
              <div className="text-2xl font-bold text-blue-600">{Math.round((stats.weeklyXP / stats.weeklyGoal) * 100)}%</div>
              <div className="text-xs text-muted-foreground">Weekly Goal</div>
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardContent className="p-4 text-center">
              <div className="w-8 h-8 bg-pink-500/10 rounded-full flex items-center justify-center mx-auto mb-2">
                <Brain className="w-4 h-4 text-pink-600" />
              </div>
              <div className="text-2xl font-bold text-pink-600">A+</div>
              <div className="text-xs text-muted-foreground">AI Score</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          {/* Main Charts */}
          <div className="xl:col-span-2 space-y-6">
            {/* Weekly Progress */}
            <Card className="glass-card">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <Activity className="w-5 h-5 text-primary" />
                    Weekly Progress
                  </CardTitle>
                  <div className="flex gap-2">
                    <Button variant={timeFrame === 'week' ? 'default' : 'outline'} size="sm" onClick={() => setTimeFrame('week')}>
                      Week
                    </Button>
                    <Button variant={timeFrame === 'month' ? 'default' : 'outline'} size="sm" onClick={() => setTimeFrame('month')}>
                      Month
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {weeklyData.map((day, index) => (
                    <div key={day.day} className="flex items-center gap-4">
                      <div className="w-12 text-sm font-medium">{day.day}</div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm text-muted-foreground">XP: {day.xp}</span>
                          <span className="text-sm text-muted-foreground">{day.hours}h • {day.tasks} tasks</span>
                        </div>
                        <Progress value={(day.xp / 500) * 100} className="h-2" />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Skill Progress */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-achievement" />
                  Skill Progress
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {skillProgress.map((skill, index) => (
                    <div key={skill.skill} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="font-medium">{skill.skill}</span>
                          <Badge variant="outline" className="text-xs">
                            Level {Math.floor(skill.level / 10)}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <span className="text-muted-foreground">{skill.xp} XP</span>
                          <div className={`flex items-center gap-1 ${
                            skill.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
                          }`}>
                            {skill.change.startsWith('+') ? 
                              <ArrowUp className="w-3 h-3" /> : 
                              <ArrowDown className="w-3 h-3" />
                            }
                            <span className="text-xs">{skill.change}</span>
                          </div>
                        </div>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Domain Distribution */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <PieChart className="w-5 h-5 text-purple-600" />
                  Learning Focus
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {domainDistribution.map((domain, index) => (
                    <div key={domain.domain} className="flex items-center gap-3">
                      <div className={`w-4 h-4 rounded ${domain.color}`}></div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-medium">{domain.domain}</span>
                          <span className="text-sm text-muted-foreground">{domain.percentage}%</span>
                        </div>
                        <Progress value={domain.percentage} className="h-2" />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Weekly Goal */}
            <Card className="glass-card sticky top-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-primary" />
                  Weekly Goal
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">{stats.weeklyXP}</div>
                  <div className="text-sm text-muted-foreground">/ {stats.weeklyGoal} XP</div>
                </div>
                <Progress value={(stats.weeklyXP / stats.weeklyGoal) * 100} className="h-3" />
                <div className="text-center text-sm text-muted-foreground">
                  {stats.weeklyGoal - stats.weeklyXP} XP to go
                </div>
                <Button className="w-full">Update Goal</Button>
              </CardContent>
            </Card>

            {/* AI Insights */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-purple-600" />
                  AI Insights
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {aiInsights.map((insight, index) => {
                  const IconComponent = insight.icon;
                  return (
                    <div key={index} className="p-3 rounded-lg bg-surface-elevated">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                          <IconComponent className={`w-4 h-4 ${insight.color}`} />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-sm">{insight.title}</h4>
                          <p className="text-xs text-muted-foreground mt-1">{insight.description}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            {/* Recent Achievements */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-achievement" />
                  Recent Achievements
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {achievements.map((achievement, index) => {
                  const IconComponent = achievement.icon;
                  return (
                    <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-achievement/10 border border-achievement/20">
                      <div className="w-10 h-10 bg-achievement rounded-full flex items-center justify-center">
                        <IconComponent className="w-5 h-5 text-achievement-foreground" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-sm">{achievement.title}</h4>
                        <p className="text-xs text-muted-foreground">{achievement.description}</p>
                        <p className="text-xs text-muted-foreground">{achievement.date}</p>
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}