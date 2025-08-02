import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { 
  MessageSquare, 
  Users, 
  Star, 
  Trophy, 
  ExternalLink, 
  Heart, 
  Share2,
  Clock,
  TrendingUp,
  Zap,
  Target,
  Award,
  BookOpen,
  Code,
  Briefcase,
  Globe,
  UserPlus,
  Send,
  ThumbsUp,
  Eye,
  ChevronRight,
  Sparkles,
  Crown,
  Fire
} from 'lucide-react';

export default function Community() {
  const [selectedStory, setSelectedStory] = useState(null);
  const [newShoutout, setNewShoutout] = useState('');

  const discordServers = [
    {
      id: '1',
      name: 'Frontend Freaks',
      description: 'React, Vue, Angular developers sharing tips & tricks',
      members: '12.5k',
      online: '2.3k',
      channels: 45,
      tags: ['React', 'Vue', 'CSS', 'JavaScript'],
      color: 'bg-blue-500',
      recentMessages: [
        { user: 'Sarah_Dev', message: 'Just shipped a new React component library! 🚀', time: '2m ago' },
        { user: 'CodeMaster', message: 'CSS Grid vs Flexbox - when to use what?', time: '5m ago' }
      ]
    },
    {
      id: '2',
      name: 'MERN Gang',
      description: 'Full-stack developers building with MongoDB, Express, React, Node',
      members: '8.7k',
      online: '1.8k',
      channels: 32,
      tags: ['MongoDB', 'Express', 'React', 'Node.js'],
      color: 'bg-green-500',
      recentMessages: [
        { user: 'FullStackPro', message: 'Deploy MERN apps to AWS in 5 minutes', time: '1m ago' },
        { user: 'DBExpert', message: 'MongoDB aggregation pipeline tips', time: '8m ago' }
      ]
    },
    {
      id: '3',
      name: 'AI Prompt Hackers',
      description: 'Master prompt engineering for GPT, Claude, and more',
      members: '15.2k',
      online: '3.1k',
      channels: 28,
      tags: ['GPT', 'Claude', 'Prompts', 'AI'],
      color: 'bg-purple-500',
      recentMessages: [
        { user: 'PromptGuru', message: 'New technique for better code generation', time: '30s ago' },
        { user: 'AIWhisperer', message: 'Chain-of-thought prompting explained', time: '3m ago' }
      ]
    },
    {
      id: '4',
      name: 'DevOps Masters',
      description: 'Docker, Kubernetes, CI/CD, and cloud infrastructure',
      members: '9.8k',
      online: '1.5k',
      channels: 38,
      tags: ['Docker', 'K8s', 'AWS', 'CI/CD'],
      color: 'bg-orange-500',
      recentMessages: [
        { user: 'CloudArchitect', message: 'Kubernetes monitoring best practices', time: '4m ago' },
        { user: 'DockerNinja', message: 'Multi-stage builds optimization', time: '7m ago' }
      ]
    }
  ];

  const successStories = [
    {
      id: '1',
      user: {
        name: 'Priya Sharma',
        avatar: '/placeholder.svg',
        role: 'Software Engineer @ Google',
        location: 'Bangalore, India'
      },
      category: 'Dream Job',
      title: 'From Bootcamp to Google SDE in 8 Months',
      snippet: 'Started with zero coding experience, joined the platform, followed the AI roadmap religiously...',
      fullStory: 'I was working in marketing for 3 years when I decided to switch to tech. The platform\'s AI coach created a personalized roadmap that adapted to my learning pace. Within 8 months, I mastered React, Node.js, and system design. The mock interviews prepared me perfectly for Google\'s process!',
      stats: {
        xpGained: '15,240',
        projectsCompleted: 12,
        streakDays: 180,
        timeSpent: '320 hours'
      },
      tools: ['React', 'Node.js', 'System Design', 'LeetCode'],
      likes: 847,
      comments: 156,
      timeAgo: '2 days ago'
    },
    {
      id: '2',
      user: {
        name: 'Arjun Patel',
        avatar: '/placeholder.svg',
        role: 'ML Engineer @ Microsoft',
        location: 'Hyderabad, India'
      },
      category: 'Career Switch',
      title: 'Mechanical Engineer → AI Specialist',
      snippet: 'After 5 years in mechanical engineering, I used the platform to transition into AI/ML...',
      fullStory: 'The platform\'s domain-specific resources were game-changing. From Python basics to advanced neural networks, the AI coach guided me through each step. The project-based learning approach helped me build a portfolio that impressed Microsoft recruiters.',
      stats: {
        xpGained: '22,150',
        projectsCompleted: 18,
        streakDays: 240,
        timeSpent: '450 hours'
      },
      tools: ['Python', 'TensorFlow', 'PyTorch', 'MLOps'],
      likes: 923,
      comments: 203,
      timeAgo: '1 week ago'
    },
    {
      id: '3',
      user: {
        name: 'Sneha Gupta',
        avatar: '/placeholder.svg',
        role: 'Product Manager @ Flipkart',
        location: 'Mumbai, India'
      },
      category: 'Skill Upgrade',
      title: 'Technical PM with AI Skills',
      snippet: 'Enhanced my product management career by learning technical skills and AI fundamentals...',
      fullStory: 'As a PM, understanding AI and technical concepts became crucial. The platform helped me learn enough to communicate effectively with engineering teams and make better product decisions. Now I lead AI-powered product initiatives at Flipkart.',
      stats: {
        xpGained: '18,900',
        projectsCompleted: 8,
        streakDays: 120,
        timeSpent: '280 hours'
      },
      tools: ['SQL', 'Python', 'AI/ML', 'Data Analysis'],
      likes: 654,
      comments: 98,
      timeAgo: '3 days ago'
    }
  ];

  const recentShoutouts = [
    { user: 'DevNinja', message: '🔥 Just hit 100-day streak! Thanks to this amazing community!', xp: 150, timeAgo: '5m ago' },
    { user: 'CodeQueen', message: '🚀 Landed my first internship at a startup! The mock interviews helped so much', xp: 200, timeAgo: '1h ago' },
    { user: 'AIExplorer', message: '💡 Completed my first ML project - predicting house prices with 95% accuracy!', xp: 300, timeAgo: '2h ago' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 p-6 animate-fade-in">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent flex items-center gap-3 mb-2">
            <Users className="w-10 h-10 text-primary animate-pulse" />
            Community Hub
          </h1>
          <p className="text-muted-foreground text-lg">
            Connect, learn, and grow with thousands of learners worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="xl:col-span-2 space-y-6">
            {/* Discord Servers */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-primary" />
                  Join Discord Communities
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {discordServers.map((server) => (
                  <Card key={server.id} className="border border-border/50 hover:border-primary/30 transition-all duration-300">
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className={`w-12 h-12 ${server.color} rounded-lg flex items-center justify-center`}>
                            <MessageSquare className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h3 className="font-semibold">{server.name}</h3>
                            <p className="text-sm text-muted-foreground">{server.description}</p>
                          </div>
                        </div>
                        <Button size="sm" className="gap-2">
                          <ExternalLink className="w-4 h-4" />
                          Join
                        </Button>
                      </div>

                      <div className="flex items-center gap-4 mb-3 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          <span>{server.members} members</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span>{server.online} online</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Globe className="w-4 h-4" />
                          <span>{server.channels} channels</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-1 mb-3">
                        {server.tags.map((tag, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <div className="space-y-2">
                        <h4 className="text-xs font-medium text-muted-foreground">Recent Messages</h4>
                        {server.recentMessages.map((msg, index) => (
                          <div key={index} className="text-xs p-2 bg-surface-elevated rounded">
                            <span className="font-medium text-primary">{msg.user}:</span>
                            <span className="ml-1">{msg.message}</span>
                            <span className="text-muted-foreground ml-2">{msg.time}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </CardContent>
            </Card>

            {/* Success Stories */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-achievement" />
                  Success Stories
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {successStories.map((story) => (
                    <Card key={story.id} className="border border-border/50 hover:border-primary/30 transition-all duration-300 hover-scale">
                      <CardContent className="p-4">
                        <div className="flex items-center gap-3 mb-3">
                          <Avatar className="w-10 h-10">
                            <AvatarImage src={story.user.avatar} />
                            <AvatarFallback>{story.user.name[0]}</AvatarFallback>
                          </Avatar>
                          <div>
                            <h3 className="font-medium text-sm">{story.user.name}</h3>
                            <p className="text-xs text-muted-foreground">{story.user.role}</p>
                          </div>
                          <Badge variant="outline" className="ml-auto text-xs">
                            {story.category}
                          </Badge>
                        </div>

                        <h4 className="font-semibold mb-2">{story.title}</h4>
                        <p className="text-sm text-muted-foreground mb-3">{story.snippet}</p>

                        <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                          <div className="flex items-center gap-3">
                            <div className="flex items-center gap-1">
                              <Heart className="w-3 h-3" />
                              <span>{story.likes}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MessageSquare className="w-3 h-3" />
                              <span>{story.comments}</span>
                            </div>
                          </div>
                          <span>{story.timeAgo}</span>
                        </div>

                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="outline" size="sm" className="w-full gap-2">
                              <Eye className="w-4 h-4" />
                              Read Full Story
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="glass-card max-w-2xl">
                            <DialogHeader>
                              <DialogTitle className="flex items-center gap-3">
                                <Avatar className="w-8 h-8">
                                  <AvatarImage src={story.user.avatar} />
                                  <AvatarFallback>{story.user.name[0]}</AvatarFallback>
                                </Avatar>
                                {story.title}
                              </DialogTitle>
                            </DialogHeader>
                            <div className="space-y-4">
                              <div className="flex items-center gap-2">
                                <Badge variant="outline">{story.category}</Badge>
                                <span className="text-sm text-muted-foreground">{story.timeAgo}</span>
                              </div>
                              <p className="text-muted-foreground">{story.fullStory}</p>
                              
                              <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                  <h4 className="font-medium">Journey Stats</h4>
                                  <div className="space-y-1 text-sm">
                                    <div className="flex justify-between">
                                      <span>XP Gained:</span>
                                      <span className="font-medium">{story.stats.xpGained}</span>
                                    </div>
                                    <div className="flex justify-between">
                                      <span>Projects:</span>
                                      <span className="font-medium">{story.stats.projectsCompleted}</span>
                                    </div>
                                    <div className="flex justify-between">
                                      <span>Streak:</span>
                                      <span className="font-medium">{story.stats.streakDays} days</span>
                                    </div>
                                  </div>
                                </div>
                                <div className="space-y-2">
                                  <h4 className="font-medium">Tools Used</h4>
                                  <div className="flex flex-wrap gap-1">
                                    {story.tools.map((tool, index) => (
                                      <Badge key={index} variant="secondary" className="text-xs">
                                        {tool}
                                      </Badge>
                                    ))}
                                  </div>
                                </div>
                              </div>

                              <div className="flex gap-2">
                                <Button className="flex-1 gap-2">
                                  <Heart className="w-4 h-4" />
                                  Like Story
                                </Button>
                                <Button variant="outline" className="gap-2">
                                  <Share2 className="w-4 h-4" />
                                  Share
                                </Button>
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Shoutout */}
            <Card className="glass-card sticky top-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-primary" />
                  Quick Shoutout
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Textarea 
                  placeholder="Share your win, ask for help, or celebrate with the community..."
                  value={newShoutout}
                  onChange={(e) => setNewShoutout(e.target.value)}
                  className="min-h-[100px]"
                />
                <Button className="w-full gap-2">
                  <Send className="w-4 h-4" />
                  Share with Community
                </Button>
              </CardContent>
            </Card>

            {/* Recent Shoutouts */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-orange-500" />
                  Recent Shoutouts
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {recentShoutouts.map((shoutout, index) => (
                  <div key={index} className="p-3 rounded-lg bg-surface-elevated">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                        <span className="text-xs font-medium text-primary">{shoutout.user[0]}</span>
                      </div>
                      <div className="flex-1">
                        <div className="text-sm">
                          <span className="font-medium text-primary">{shoutout.user}</span>
                          <span className="ml-1">{shoutout.message}</span>
                        </div>
                        <div className="flex items-center gap-2 mt-1 text-xs text-muted-foreground">
                          <span>+{shoutout.xp} XP</span>
                          <span>•</span>
                          <span>{shoutout.timeAgo}</span>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        <ThumbsUp className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Find Your Tribe */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-purple-500" />
                  Find Your Tribe
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  { name: 'Frontend Beginners', tag: '#ReactNewbies', members: '2.3k' },
                  { name: 'Python Enthusiasts', tag: '#PythonPower', members: '5.7k' },
                  { name: 'Career Switchers', tag: '#TechTransition', members: '1.8k' },
                  { name: 'Interview Prep', tag: '#CrackTheCode', members: '4.2k' }
                ].map((tribe, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-surface-elevated">
                    <div>
                      <div className="font-medium text-sm">{tribe.name}</div>
                      <div className="text-xs text-muted-foreground">{tribe.tag} • {tribe.members} members</div>
                    </div>
                    <Button size="sm" variant="outline">
                      <UserPlus className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}