import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { 
  Briefcase, 
  FileText, 
  Mic, 
  Code, 
  PenTool, 
  Target, 
  Upload, 
  Play, 
  Timer, 
  CheckCircle, 
  Award,
  Star,
  TrendingUp,
  Eye,
  Download,
  MessageSquare,
  Sparkles,
  Trophy,
  Clock,
  BookOpen,
  Users
} from 'lucide-react';

export default function StudyCoach() {
  const [selectedRole, setSelectedRole] = useState('');
  const [resumeScore, setResumeScore] = useState(73);
  const [interviewScore, setInterviewScore] = useState(85);
  const [codingScore, setCodingScore] = useState(92);
  const [writtenProgress, setWrittenProgress] = useState(67);
  const [showRoleModal, setShowRoleModal] = useState(false);

  const careerRoles = [
    { id: 'sde', name: 'Software Engineer', color: 'bg-blue-500', icon: Code },
    { id: 'ds', name: 'Data Scientist', color: 'bg-green-500', icon: TrendingUp },
    { id: 'pm', name: 'Product Manager', color: 'bg-purple-500', icon: Target },
    { id: 'ui', name: 'UI/UX Designer', color: 'bg-pink-500', icon: PenTool },
    { id: 'cyber', name: 'Cybersecurity', color: 'bg-red-500', icon: Award },
    { id: 'devops', name: 'DevOps Engineer', color: 'bg-orange-500', icon: Trophy }
  ];

  const careerModules = [
    {
      id: 'resume',
      title: 'AI Resume Builder',
      description: 'Create ATS-optimized resumes with AI suggestions',
      icon: FileText,
      score: resumeScore,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      actions: ['Upload Resume', 'Get AI Review', 'ATS Score Check']
    },
    {
      id: 'interview',
      title: 'Interview Prep Zone',
      description: 'Mock interviews with AI feedback and scoring',
      icon: Mic,
      score: interviewScore,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      actions: ['Start Mock Interview', 'Behavioral Coach', 'Practice Questions']
    },
    {
      id: 'coding',
      title: 'Coding Round Practice',
      description: 'Live coding environment with hints and timer',
      icon: Code,
      score: codingScore,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      actions: ['Start Coding Round', 'View Solutions', 'Practice Problems']
    },
    {
      id: 'written',
      title: 'Written Essentials',
      description: 'Improve technical writing and communication',
      icon: PenTool,
      score: writtenProgress,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      actions: ['View Checklist', 'Practice Writing', 'Get Feedback']
    }
  ];

  const achievements = [
    { title: 'Resume Master', description: 'ATS Score > 85%', unlocked: resumeScore > 85, icon: FileText },
    { title: 'Interview Ace', description: 'Mock Interview Score > 80%', unlocked: interviewScore > 80, icon: Mic },
    { title: 'Coding Ninja', description: 'Coding Round Score > 90%', unlocked: codingScore > 90, icon: Code },
    { title: 'Communication Pro', description: 'Complete all writing tasks', unlocked: writtenProgress === 100, icon: MessageSquare }
  ];

  const recentActivity = [
    { action: 'Completed Mock Interview', score: 85, time: '2 hours ago', type: 'interview' },
    { action: 'Updated Resume', score: 73, time: '1 day ago', type: 'resume' },
    { action: 'Solved Coding Problem', score: 92, time: '3 days ago', type: 'coding' },
    { action: 'Writing Task Completed', score: 67, time: '1 week ago', type: 'written' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 p-6 animate-fade-in">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent flex items-center gap-3 mb-2">
            <Briefcase className="w-10 h-10 text-primary animate-pulse" />
            Career Tools
          </h1>
          <p className="text-muted-foreground text-lg">
            AI-powered career preparation toolkit for landing your dream job
          </p>
        </div>

        {/* Role Selection */}
        <Card className="glass-card mb-8 border-primary/20 shadow-elegant">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="w-5 h-5 text-primary" />
              Choose Your Career Track
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {careerRoles.map((role) => {
                const IconComponent = role.icon;
                return (
                  <Button
                    key={role.id}
                    variant={selectedRole === role.id ? "default" : "outline"}
                    className={`h-20 flex-col gap-2 hover-scale transition-all duration-300 ${
                      selectedRole === role.id ? 'shadow-glow' : ''
                    }`}
                    onClick={() => setSelectedRole(role.id)}
                  >
                    <IconComponent className="w-6 h-6" />
                    <span className="text-xs text-center">{role.name}</span>
                  </Button>
                );
              })}
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          {/* Main Career Modules */}
          <div className="xl:col-span-2 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {careerModules.map((module) => {
                const IconComponent = module.icon;
                return (
                  <Card key={module.id} className="glass-card hover-scale transition-all duration-300 border-border/50 hover:border-primary/30">
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <div className={`p-3 rounded-lg ${module.bgColor}`}>
                          <IconComponent className={`w-6 h-6 ${module.color}`} />
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-foreground">{module.score}%</div>
                          <div className="text-xs text-muted-foreground">Score</div>
                        </div>
                      </div>
                      <CardTitle className="text-lg">{module.title}</CardTitle>
                      <p className="text-sm text-muted-foreground">{module.description}</p>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <Progress value={module.score} className="h-2" />
                      <div className="space-y-2">
                        {module.actions.map((action, idx) => (
                          <Button key={idx} variant="outline" size="sm" className="w-full justify-start gap-2">
                            <Play className="w-4 h-4" />
                            {action}
                          </Button>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Interactive Sections */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Resume Builder */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Upload className="w-5 h-5 text-blue-600" />
                    Quick Resume Upload
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                    <Upload className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
                    <p className="text-sm text-muted-foreground mb-4">
                      Drag & drop your resume or click to upload
                    </p>
                    <Button variant="outline" className="gap-2">
                      <Upload className="w-4 h-4" />
                      Choose File
                    </Button>
                  </div>
                  <Button className="w-full gap-2 bg-blue-600 hover:bg-blue-700">
                    <Sparkles className="w-4 h-4" />
                    Get AI Analysis
                  </Button>
                </CardContent>
              </Card>

              {/* Interview Simulator */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Mic className="w-5 h-5 text-green-600" />
                    Quick Interview Practice
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full justify-start gap-2">
                      <Users className="w-4 h-4" />
                      Behavioral Interview
                    </Button>
                    <Button variant="outline" className="w-full justify-start gap-2">
                      <Code className="w-4 h-4" />
                      Technical Interview
                    </Button>
                    <Button variant="outline" className="w-full justify-start gap-2">
                      <BookOpen className="w-4 h-4" />
                      System Design Interview
                    </Button>
                  </div>
                  <Button className="w-full gap-2 bg-green-600 hover:bg-green-700">
                    <Play className="w-4 h-4" />
                    Start Practice Session
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Coding Practice IDE */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="w-5 h-5 text-purple-600" />
                  Live Coding Environment
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-surface-elevated rounded-lg p-4 mb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <Badge variant="outline">Medium</Badge>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Timer className="w-4 h-4" />
                        45:00
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">Hints</Button>
                      <Button size="sm" variant="outline">Submit</Button>
                    </div>
                  </div>
                  <div className="bg-background rounded border p-4 font-mono text-sm min-h-[200px]">
                    <div className="text-muted-foreground mb-2">// Problem: Two Sum</div>
                    <div className="text-muted-foreground mb-4">// Given an array of integers nums and an integer target...</div>
                    <div>function twoSum(nums, target) {"{"}</div>
                    <div className="ml-4 opacity-50">// Your solution here</div>
                    <div>{"}"}</div>
                    <div className="mt-4 border-t border-border pt-4">
                      <div className="text-muted-foreground text-xs">💡 Hint: Consider using a hash map for O(n) solution</div>
                    </div>
                  </div>
                </div>
                <Button className="w-full gap-2 bg-purple-600 hover:bg-purple-700">
                  <Play className="w-4 h-4" />
                  Run Code
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Achievement Progress */}
            <Card className="glass-card sticky top-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-achievement" />
                  Career Achievements
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {achievements.map((achievement, index) => {
                  const IconComponent = achievement.icon;
                  return (
                    <div key={index} className={`p-3 rounded-lg border transition-all duration-300 ${
                      achievement.unlocked 
                        ? 'bg-achievement/10 border-achievement/30 shadow-glow' 
                        : 'bg-muted/30 border-border'
                    }`}>
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-full ${
                          achievement.unlocked ? 'bg-achievement text-achievement-foreground' : 'bg-muted text-muted-foreground'
                        }`}>
                          <IconComponent className="w-4 h-4" />
                        </div>
                        <div className="flex-1">
                          <div className="font-medium text-sm">{achievement.title}</div>
                          <div className="text-xs text-muted-foreground">{achievement.description}</div>
                        </div>
                        {achievement.unlocked && (
                          <CheckCircle className="w-5 h-5 text-achievement animate-pulse" />
                        )}
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  Recent Activity
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-surface-elevated">
                    <div className={`w-2 h-2 rounded-full ${
                      activity.type === 'interview' ? 'bg-green-500' :
                      activity.type === 'resume' ? 'bg-blue-500' :
                      activity.type === 'coding' ? 'bg-purple-500' :
                      'bg-orange-500'
                    }`} />
                    <div className="flex-1">
                      <div className="text-sm font-medium">{activity.action}</div>
                      <div className="text-xs text-muted-foreground">{activity.time}</div>
                    </div>
                    <div className="text-sm font-medium text-primary">{activity.score}%</div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Written Skills Checklist */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <PenTool className="w-5 h-5 text-orange-600" />
                  Writing Checklist
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Progress value={writtenProgress} className="h-2" />
                <div className="space-y-2">
                  {[
                    { task: 'Technical Documentation', completed: true },
                    { task: 'Email Communication', completed: true },
                    { task: 'Project README', completed: true },
                    { task: 'Code Comments', completed: false },
                    { task: 'Presentation Slides', completed: false }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3 text-sm">
                      <CheckCircle className={`w-4 h-4 ${
                        item.completed ? 'text-success' : 'text-muted-foreground'
                      }`} />
                      <span className={item.completed ? 'line-through text-muted-foreground' : ''}>
                        {item.task}
                      </span>
                    </div>
                  ))}
                </div>
                <Button variant="outline" size="sm" className="w-full gap-2">
                  <Eye className="w-4 h-4" />
                  View All Tasks
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Success Modal Trigger (Hidden) */}
        <Dialog>
          <DialogTrigger asChild>
            <Button className="hidden">Success Modal</Button>
          </DialogTrigger>
          <DialogContent className="glass-card">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-achievement" />
                🎉 Achievement Unlocked!
              </DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div className="text-center">
                <div className="w-16 h-16 bg-achievement rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trophy className="w-8 h-8 text-achievement-foreground" />
                </div>
                <h3 className="text-lg font-semibold">Career Ready!</h3>
                <p className="text-muted-foreground">You've completed all career preparation modules</p>
              </div>
              <div className="flex gap-2">
                <Button className="flex-1 gap-2">
                  <Download className="w-4 h-4" />
                  Download Certificate
                </Button>
                <Button variant="outline" className="gap-2">
                  <Star className="w-4 h-4" />
                  Share Achievement
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}