import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Slider } from '@/components/ui/slider';
import { useToast } from '@/hooks/use-toast';
import { 
  Trophy, 
  Flame, 
  Target, 
  Star, 
  Award, 
  Calendar,
  Users,
  Crown,
  Zap,
  BookOpen,
  Code,
  Rocket,
  Brain,
  Lock,
  CheckCircle,
  TrendingUp,
  Settings,
  Plus
} from 'lucide-react';
import { useState } from 'react';

export default function Gamification() {
  const { toast } = useToast();
  const [weeklyGoal, setWeeklyGoal] = useState([2000]);
  const [isGoalModalOpen, setIsGoalModalOpen] = useState(false);
  const [leaderboardView, setLeaderboardView] = useState<'global' | 'friends'>('global');
  
  // Mock data - in real app this would come from API
  const userStats = {
    currentXP: 2450,
    levelXP: 3000,
    weeklyXP: 850,
    weeklyGoalXP: weeklyGoal[0],
    currentLevel: 7,
    streakDays: 12,
    totalAchievements: 8,
    unlockedAchievements: 5
  };

  const achievements = [
    {
      id: 1,
      title: "First Steps",
      description: "Complete your first 5 lessons",
      icon: BookOpen,
      unlocked: true,
      progress: 100,
      xpReward: 50
    },
    {
      id: 2,
      title: "Speed Learner", 
      description: "Earn 100 XP in a single week",
      icon: Zap,
      unlocked: true,
      progress: 100,
      xpReward: 100
    },
    {
      id: 3,
      title: "Project Master",
      description: "Complete 3 projects in a month",
      icon: Code,
      unlocked: true,
      progress: 100,
      xpReward: 200
    },
    {
      id: 4,
      title: "Consistency King",
      description: "Maintain a 7-day streak",
      icon: Crown,
      unlocked: true,
      progress: 100,
      xpReward: 150
    },
    {
      id: 5,
      title: "Knowledge Seeker",
      description: "Complete 20 lessons",
      icon: Brain,
      unlocked: true,
      progress: 100,
      xpReward: 300
    },
    {
      id: 6,
      title: "Streak Warrior",
      description: "Maintain a 30-day streak",
      icon: Flame,
      unlocked: false,
      progress: 40,
      xpReward: 500
    },
    {
      id: 7,
      title: "Code Ninja",
      description: "Complete 10 projects",
      icon: Rocket,
      unlocked: false,
      progress: 30,
      xpReward: 750
    },
    {
      id: 8,
      title: "Level Master",
      description: "Reach level 10",
      icon: Star,
      unlocked: false,
      progress: 70,
      xpReward: 1000
    }
  ];

  const leaderboard = {
    global: [
      { rank: 1, name: "Alex Chen", xp: 15420, avatar: "AC", streak: 45 },
      { rank: 2, name: "Sarah Kim", xp: 12890, avatar: "SK", streak: 32 },
      { rank: 3, name: "You", xp: 2450, avatar: "ME", streak: 12, isUser: true },
      { rank: 4, name: "Mike Ross", xp: 2340, avatar: "MR", streak: 8 },
      { rank: 5, name: "Emma Davis", xp: 2100, avatar: "ED", streak: 15 }
    ],
    friends: [
      { rank: 1, name: "You", xp: 2450, avatar: "ME", streak: 12, isUser: true },
      { rank: 2, name: "John Doe", xp: 1980, avatar: "JD", streak: 6 },
      { rank: 3, name: "Jane Smith", xp: 1750, avatar: "JS", streak: 9 }
    ]
  };

  const streakDays = Array.from({ length: 14 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - (13 - i));
    return {
      date,
      active: i >= 2, // Last 12 days active
      isToday: i === 13
    };
  });

  const handleSetGoal = () => {
    setIsGoalModalOpen(false);
    toast({
      title: "🎯 Goal Updated Successfully!",
      description: `Your weekly XP goal is now ${weeklyGoal[0]} XP`,
    });
  };

  const levelProgress = (userStats.currentXP / userStats.levelXP) * 100;
  const weeklyProgress = (userStats.weeklyXP / userStats.weeklyGoalXP) * 100;

  return (
    <div className="p-6 space-y-8 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent flex items-center gap-3">
            <Trophy className="w-8 h-8 text-primary" />
            Gamification Hub
          </h1>
          <p className="text-muted-foreground mt-2">
            Track your achievements, streaks, and compete with others
          </p>
        </div>
        <Dialog open={isGoalModalOpen} onOpenChange={setIsGoalModalOpen}>
          <DialogTrigger asChild>
            <Button className="bg-gradient-primary">
              <Target className="w-4 h-4 mr-2" />
              Set Weekly Goal
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Set Your Weekly XP Goal</DialogTitle>
            </DialogHeader>
            <div className="space-y-6 pt-4">
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>Weekly XP Target:</span>
                  <span className="font-bold text-primary">{weeklyGoal[0]} XP</span>
                </div>
                <Slider
                  value={weeklyGoal}
                  onValueChange={setWeeklyGoal}
                  max={5000}
                  min={500}
                  step={100}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>500 XP</span>
                  <span>5000 XP</span>
                </div>
              </div>
              <Button onClick={handleSetGoal} className="w-full bg-gradient-primary">
                Update Goal
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* XP Progress Section */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="glass-card border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Star className="w-5 h-5 text-primary" />
              Level Progress
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold">Level {userStats.currentLevel}</span>
                <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                  {userStats.currentXP} / {userStats.levelXP} XP
                </Badge>
              </div>
              <Progress value={levelProgress} className="h-3" />
              <p className="text-sm text-muted-foreground">
                {userStats.levelXP - userStats.currentXP} XP to next level
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card border-success/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="w-5 h-5 text-success" />
              Weekly Goal
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-success">{Math.round(weeklyProgress)}%</span>
                <Badge variant="secondary" className="bg-success/10 text-success border-success/20">
                  {userStats.weeklyXP} / {userStats.weeklyGoalXP} XP
                </Badge>
              </div>
              <Progress value={weeklyProgress} className="h-3" />
              <p className="text-sm text-muted-foreground">
                {userStats.weeklyGoalXP - userStats.weeklyXP} XP to reach weekly goal
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Streak Section */}
      <Card className="glass-card border-orange-500/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Flame className="w-5 h-5 text-orange-500" />
            Daily Streak
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-500 mb-2">
                🔥 {userStats.streakDays} Days
              </div>
              <p className="text-muted-foreground">You're on fire! Keep it going!</p>
            </div>
            
            <div className="grid grid-cols-7 gap-2">
              {streakDays.slice(-7).map((day, index) => (
                <div key={index} className="text-center">
                  <div className="text-xs text-muted-foreground mb-1">
                    {day.date.toLocaleDateString('en', { weekday: 'short' })}
                  </div>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium ${
                    day.active 
                      ? day.isToday 
                        ? 'bg-orange-500 text-white animate-pulse' 
                        : 'bg-orange-500/20 border border-orange-500/30 text-orange-500'
                      : 'bg-muted/20 border border-muted/30 text-muted-foreground'
                  }`}>
                    {day.date.getDate()}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Achievements Grid */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="w-5 h-5 text-achievement" />
            Achievements ({userStats.unlockedAchievements}/{userStats.totalAchievements})
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {achievements.map((achievement) => (
              <div key={achievement.id} className={`p-4 rounded-lg border transition-all duration-300 hover:scale-105 ${
                achievement.unlocked 
                  ? 'bg-achievement/10 border-achievement/30 cursor-pointer' 
                  : 'bg-muted/10 border-muted/20 opacity-60'
              }`}>
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className={`p-3 rounded-full ${
                    achievement.unlocked 
                      ? 'bg-achievement/20 border border-achievement/30' 
                      : 'bg-muted/20 border border-muted/30'
                  }`}>
                    {achievement.unlocked ? (
                      <achievement.icon className="w-6 h-6 text-achievement" />
                    ) : (
                      <Lock className="w-6 h-6 text-muted-foreground" />
                    )}
                  </div>
                  <div>
                    <h3 className="font-medium text-sm">{achievement.title}</h3>
                    <p className="text-xs text-muted-foreground mt-1">{achievement.description}</p>
                  </div>
                  {achievement.unlocked ? (
                    <Badge variant="secondary" className="bg-achievement/10 text-achievement border-achievement/20">
                      +{achievement.xpReward} XP
                    </Badge>
                  ) : (
                    <div className="w-full">
                      <div className="flex justify-between text-xs mb-1">
                        <span>Progress</span>
                        <span>{achievement.progress}%</span>
                      </div>
                      <Progress value={achievement.progress} className="h-1" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Leaderboard */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-primary" />
              Leaderboard
            </div>
            <div className="flex gap-2">
              <Button 
                size="sm" 
                variant={leaderboardView === 'global' ? 'default' : 'outline'}
                onClick={() => setLeaderboardView('global')}
              >
                Global
              </Button>
              <Button 
                size="sm" 
                variant={leaderboardView === 'friends' ? 'default' : 'outline'}
                onClick={() => setLeaderboardView('friends')}
              >
                <Users className="w-4 h-4 mr-1" />
                Friends
              </Button>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {leaderboard[leaderboardView].map((user, index) => (
              <div key={index} className={`flex items-center justify-between p-3 rounded-lg border transition-all duration-200 hover:bg-secondary/20 ${
                user.isUser ? 'bg-primary/5 border-primary/20' : 'border-secondary/30'
              }`}>
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                    user.rank === 1 ? 'bg-yellow-500/20 text-yellow-500 border border-yellow-500/30' :
                    user.rank === 2 ? 'bg-gray-400/20 text-gray-400 border border-gray-400/30' :
                    user.rank === 3 ? 'bg-orange-600/20 text-orange-600 border border-orange-600/30' :
                    user.isUser ? 'bg-primary/20 text-primary border border-primary/30' :
                    'bg-secondary/20 text-secondary-foreground border border-secondary/30'
                  }`}>
                    #{user.rank}
                  </div>
                  <div className={`w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold ${
                    user.isUser ? 'ring-2 ring-primary ring-offset-2' : ''
                  }`}>
                    {user.avatar}
                  </div>
                  <div>
                    <p className={`font-medium ${user.isUser ? 'text-primary' : ''}`}>
                      {user.name}
                      {user.isUser && <span className="text-xs ml-2 text-primary">(You)</span>}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Flame className="w-3 h-3 text-orange-500" />
                      <span>{user.streak} day streak</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-primary">{user.xp.toLocaleString()} XP</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}