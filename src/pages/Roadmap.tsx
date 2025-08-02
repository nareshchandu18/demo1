import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { 
  Search,
  Filter,
  Youtube,
  FileText,
  Brain,
  Globe,
  HelpCircle,
  Award,
  Users,
  Code,
  Trophy,
  Podcast,
  Bot,
  Rocket,
  MessageSquare,
  Download,
  Star,
  Play,
  BookOpen,
  ExternalLink,
  Target,
  Clock,
  Sparkles,
  CheckCircle,
  Heart,
  Share,
  Calendar,
  Zap,
  Database,
  Shield,
  Smartphone,
  Palette,
  BarChart3,
  GitBranch
} from 'lucide-react';

export default function Roadmap() {
  const [selectedDomain, setSelectedDomain] = useState('web-dev');
  const [searchQuery, setSearchQuery] = useState('');
  const [savedResources, setSavedResources] = useState<string[]>([]);

  const domains = [
    { id: 'web-dev', name: 'Web Development', icon: Globe, color: 'bg-blue-500', accent: 'text-blue-600' },
    { id: 'data-science', name: 'Data Science', icon: BarChart3, color: 'bg-green-500', accent: 'text-green-600' },
    { id: 'ai-ml', name: 'AI/ML', icon: Brain, color: 'bg-purple-500', accent: 'text-purple-600' },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, color: 'bg-red-500', accent: 'text-red-600' },
    { id: 'mobile', name: 'Mobile Dev', icon: Smartphone, color: 'bg-orange-500', accent: 'text-orange-600' },
    { id: 'devops', name: 'DevOps', icon: GitBranch, color: 'bg-teal-500', accent: 'text-teal-600' },
    { id: 'ui-ux', name: 'UI/UX Design', icon: Palette, color: 'bg-pink-500', accent: 'text-pink-600' },
    { id: 'database', name: 'Database', icon: Database, color: 'bg-indigo-500', accent: 'text-indigo-600' }
  ];

  const resourceCategories = [
    {
      id: 'playlists',
      title: 'YouTube Playlists',
      icon: Youtube,
      color: 'text-red-600',
      count: 156,
      items: [
        { title: 'Complete React Course 2024', creator: 'CodeWithMosh', duration: '12h 45m', rating: 4.9, views: '2.3M' },
        { title: 'Node.js Full Course', creator: 'FreeCodeCamp', duration: '8h 30m', rating: 4.8, views: '1.8M' },
        { title: 'JavaScript Advanced Concepts', creator: 'Traversy Media', duration: '6h 15m', rating: 4.7, views: '890K' }
      ]
    },
    {
      id: 'cheatsheets',
      title: 'Cheatsheets & Notes',
      icon: FileText,
      color: 'text-blue-600',
      count: 89,
      items: [
        { title: 'React Hooks Reference', type: 'PDF', pages: 12, downloads: '45K', rating: 4.9 },
        { title: 'CSS Grid & Flexbox Guide', type: 'PDF', pages: 8, downloads: '32K', rating: 4.8 },
        { title: 'JavaScript ES6+ Features', type: 'PDF', pages: 15, downloads: '67K', rating: 4.9 }
      ]
    },
    {
      id: 'projects',
      title: 'Project Hub',
      icon: Code,
      color: 'text-green-600',
      count: 234,
      items: [
        { title: 'E-commerce Platform', difficulty: 'Advanced', tech: 'React, Node.js, MongoDB', stars: 1200 },
        { title: 'Chat Application', difficulty: 'Intermediate', tech: 'Socket.io, Express', stars: 890 },
        { title: 'Todo App with Authentication', difficulty: 'Beginner', tech: 'React, Firebase', stars: 456 }
      ]
    },
    {
      id: 'certifications',
      title: 'Certifications',
      icon: Award,
      color: 'text-purple-600',
      count: 67,
      items: [
        { title: 'Google Cloud Professional Developer', provider: 'Google', price: '$200', duration: '3 months' },
        { title: 'AWS Certified Developer', provider: 'Amazon', price: '$150', duration: '2 months' },
        { title: 'Meta Front-End Developer', provider: 'Meta', price: 'Free', duration: '4 months' }
      ]
    },
    {
      id: 'internships',
      title: 'Internships',
      icon: Users,
      color: 'text-orange-600',
      count: 123,
      items: [
        { company: 'Microsoft', role: 'Software Engineering Intern', location: 'Remote', stipend: '$2000/month' },
        { company: 'Google', role: 'Frontend Developer Intern', location: 'Mountain View', stipend: '$2500/month' },
        { company: 'Spotify', role: 'Full-Stack Intern', location: 'Stockholm', stipend: '$1800/month' }
      ]
    },
    {
      id: 'tools',
      title: 'AI Tools Vault',
      icon: Bot,
      color: 'text-cyan-600',
      count: 45,
      items: [
        { title: 'GitHub Copilot', description: 'AI-powered code completion', category: 'Development', rating: 4.8 },
        { title: 'Figma AI', description: 'Design assistance and automation', category: 'Design', rating: 4.6 },
        { title: 'ChatGPT Code Interpreter', description: 'Code analysis and debugging', category: 'Debug', rating: 4.9 }
      ]
    }
  ];

  const quickStats = [
    { label: 'Resources Saved', value: savedResources.length, icon: Heart },
    { label: 'Certifications', value: 3, icon: Award },
    { label: 'Projects Completed', value: 12, icon: Trophy },
    { label: 'Study Streak', value: 15, icon: Zap }
  ];

  const upcomingEvents = [
    { title: 'React Conf 2024', date: 'Mar 15-16', type: 'Conference', registrations: '12K+' },
    { title: 'Google I/O Extended', date: 'May 8-10', type: 'Hackathon', registrations: '5K+' },
    { title: 'AWS DevDay', date: 'Jun 20', type: 'Workshop', registrations: '3K+' }
  ];

  const toggleSaved = (resourceId: string) => {
    setSavedResources(prev => 
      prev.includes(resourceId) 
        ? prev.filter(id => id !== resourceId)
        : [...prev, resourceId]
    );
  };

  const selectedDomainData = domains.find(d => d.id === selectedDomain);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 p-6 animate-fade-in">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent flex items-center gap-3 mb-2">
            <Database className="w-10 h-10 text-primary animate-pulse" />
            Domain Resources
          </h1>
          <p className="text-muted-foreground text-lg">
            Curated learning resources powered by AI, personalized for your journey
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {quickStats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card key={index} className="glass-card border-border/50">
                <CardContent className="p-4 text-center">
                  <IconComponent className="w-6 h-6 mx-auto mb-2 text-primary" />
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Domain Selection */}
        <Card className="glass-card mb-8 border-primary/20 shadow-elegant">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="w-5 h-5 text-primary" />
              Select Your Domain
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3">
              {domains.map((domain) => {
                const IconComponent = domain.icon;
                return (
                  <Button
                    key={domain.id}
                    variant={selectedDomain === domain.id ? "default" : "outline"}
                    className={`h-20 flex-col gap-2 hover-scale transition-all duration-300 ${
                      selectedDomain === domain.id ? 'shadow-glow' : ''
                    }`}
                    onClick={() => setSelectedDomain(domain.id)}
                  >
                    <IconComponent className="w-6 h-6" />
                    <span className="text-xs text-center">{domain.name}</span>
                  </Button>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input 
              placeholder="Search resources, projects, certifications..." 
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button variant="outline" className="gap-2">
            <Filter className="w-4 h-4" />
            Filters
          </Button>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
          {/* Main Content - Resource Categories */}
          <div className="xl:col-span-3 space-y-8">
            {resourceCategories.map((category) => {
              const IconComponent = category.icon;
              return (
                <Card key={category.id} className="glass-card border-border/50">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-surface-elevated">
                          <IconComponent className={`w-5 h-5 ${category.color}`} />
                        </div>
                        {category.title}
                        <Badge variant="secondary">{category.count}</Badge>
                      </CardTitle>
                      <Button variant="outline" size="sm" className="gap-2">
                        <ExternalLink className="w-4 h-4" />
                        View All
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {category.items.map((item, index) => (
                        <Card key={index} className="border border-border/50 hover:border-primary/30 transition-all hover-scale">
                          <CardContent className="p-4">
                            {category.id === 'playlists' && (
                              <>
                                <div className="flex items-start justify-between mb-3">
                                  <div className="flex-1">
                                    <h4 className="font-medium text-sm mb-1 line-clamp-2">{item.title}</h4>
                                    <p className="text-xs text-muted-foreground mb-2">by {item.creator}</p>
                                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                      <Clock className="w-3 h-3" />
                                      {item.duration}
                                    </div>
                                  </div>
                                  <Button
                                    size="sm"
                                    variant="ghost"
                                    onClick={() => toggleSaved(`${category.id}-${index}`)}
                                  >
                                    <Heart className={`w-4 h-4 ${
                                      savedResources.includes(`${category.id}-${index}`) 
                                        ? 'fill-red-500 text-red-500' 
                                        : 'text-muted-foreground'
                                    }`} />
                                  </Button>
                                </div>
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center gap-1">
                                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                                    <span className="text-xs">{item.rating}</span>
                                  </div>
                                  <Button size="sm" className="gap-1">
                                    <Play className="w-3 h-3" />
                                    Watch
                                  </Button>
                                </div>
                              </>
                            )}

                            {category.id === 'cheatsheets' && (
                              <>
                                <div className="flex items-start justify-between mb-3">
                                  <div className="flex-1">
                                    <h4 className="font-medium text-sm mb-1">{item.title}</h4>
                                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                                      <FileText className="w-3 h-3" />
                                      {item.pages} pages
                                    </div>
                                    <div className="text-xs text-muted-foreground">
                                      {item.downloads} downloads
                                    </div>
                                  </div>
                                  <Button
                                    size="sm"
                                    variant="ghost"
                                    onClick={() => toggleSaved(`${category.id}-${index}`)}
                                  >
                                    <Heart className={`w-4 h-4 ${
                                      savedResources.includes(`${category.id}-${index}`) 
                                        ? 'fill-red-500 text-red-500' 
                                        : 'text-muted-foreground'
                                    }`} />
                                  </Button>
                                </div>
                                <Button size="sm" className="w-full gap-1">
                                  <Download className="w-3 h-3" />
                                  Download PDF
                                </Button>
                              </>
                            )}

                            {category.id === 'projects' && (
                              <>
                                <div className="mb-3">
                                  <h4 className="font-medium text-sm mb-1">{item.title}</h4>
                                  <Badge variant="outline" className="text-xs mb-2">
                                    {item.difficulty}
                                  </Badge>
                                  <p className="text-xs text-muted-foreground mb-2">{item.tech}</p>
                                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                                    <Star className="w-3 h-3" />
                                    {item.stars} stars
                                  </div>
                                </div>
                                <div className="flex gap-2">
                                  <Button size="sm" variant="outline" className="flex-1 gap-1">
                                    <ExternalLink className="w-3 h-3" />
                                    GitHub
                                  </Button>
                                  <Button size="sm" className="flex-1 gap-1">
                                    <Rocket className="w-3 h-3" />
                                    Start
                                  </Button>
                                </div>
                              </>
                            )}

                            {category.id === 'certifications' && (
                              <>
                                <div className="mb-3">
                                  <h4 className="font-medium text-sm mb-1">{item.title}</h4>
                                  <p className="text-xs text-muted-foreground mb-2">by {item.provider}</p>
                                  <div className="flex items-center justify-between text-xs">
                                    <span className="text-primary font-medium">{item.price}</span>
                                    <span className="text-muted-foreground">{item.duration}</span>
                                  </div>
                                </div>
                                <Button size="sm" className="w-full gap-1">
                                  <Award className="w-3 h-3" />
                                  Enroll
                                </Button>
                              </>
                            )}

                            {category.id === 'internships' && (
                              <>
                                <div className="mb-3">
                                  <h4 className="font-medium text-sm mb-1">{item.role}</h4>
                                  <p className="text-xs text-muted-foreground mb-1">{item.company}</p>
                                  <div className="flex items-center justify-between text-xs">
                                    <span className="text-muted-foreground">{item.location}</span>
                                    <span className="text-primary font-medium">{item.stipend}</span>
                                  </div>
                                </div>
                                <Button size="sm" className="w-full gap-1">
                                  <ExternalLink className="w-3 h-3" />
                                  Apply
                                </Button>
                              </>
                            )}

                            {category.id === 'tools' && (
                              <>
                                <div className="mb-3">
                                  <h4 className="font-medium text-sm mb-1">{item.title}</h4>
                                  <p className="text-xs text-muted-foreground mb-2">{item.description}</p>
                                  <div className="flex items-center justify-between text-xs">
                                    <Badge variant="outline">{item.category}</Badge>
                                    <div className="flex items-center gap-1">
                                      <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                                      <span>{item.rating}</span>
                                    </div>
                                  </div>
                                </div>
                                <Button size="sm" className="w-full gap-1">
                                  <Bot className="w-3 h-3" />
                                  Try Tool
                                </Button>
                              </>
                            )}
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Domain Progress */}
            <Card className="glass-card sticky top-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {selectedDomainData && <selectedDomainData.icon className="w-5 h-5 text-primary" />}
                  {selectedDomainData?.name} Progress
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span>Beginner</span>
                    <span>100%</span>
                  </div>
                  <Progress value={100} className="h-2" />
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span>Intermediate</span>
                    <span>67%</span>
                  </div>
                  <Progress value={67} className="h-2" />
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span>Advanced</span>
                    <span>23%</span>
                  </div>
                  <Progress value={23} className="h-2" />
                </div>
                
                <div className="mt-6 p-4 rounded-lg bg-primary/10 border border-primary/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="w-4 h-4 text-primary" />
                    <span className="font-medium text-sm">Next Milestone</span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Complete 3 more intermediate projects to unlock advanced tier
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Upcoming Events */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-orange-600" />
                  Upcoming Events
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {upcomingEvents.map((event, index) => (
                  <div key={index} className="p-3 rounded-lg bg-surface-elevated border border-border/50">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-medium text-sm">{event.title}</h4>
                      <Badge variant="outline" className="text-xs">{event.type}</Badge>
                    </div>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>{event.date}</span>
                      <span>{event.registrations}</span>
                    </div>
                  </div>
                ))}
                <Button variant="outline" size="sm" className="w-full gap-2">
                  <ExternalLink className="w-4 h-4" />
                  View All Events
                </Button>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-primary" />
                  Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" size="sm" className="w-full justify-start gap-2">
                  <MessageSquare className="w-4 h-4" />
                  Ask AI Mentor
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start gap-2">
                  <Users className="w-4 h-4" />
                  Join Study Group
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start gap-2">
                  <HelpCircle className="w-4 h-4" />
                  Get Help
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start gap-2">
                  <Share className="w-4 h-4" />
                  Share Progress
                </Button>
              </CardContent>
            </Card>

            {/* Saved Resources */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-green-600" />
                  Saved Resources
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-4">
                  <Heart className="w-12 h-12 mx-auto text-muted-foreground mb-3" />
                  <p className="text-sm text-muted-foreground mb-2">
                    {savedResources.length} resources saved
                  </p>
                  <Button variant="outline" size="sm" className="gap-2">
                    <BookOpen className="w-4 h-4" />
                    View Library
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}