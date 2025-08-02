import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { 
  Brain, 
  Search,
  Star, 
  ExternalLink, 
  Filter, 
  Image, 
  Video, 
  Mic, 
  Code, 
  Zap,
  Eye,
  Heart,
  TrendingUp,
  Clock,
  Users,
  Sparkles,
  Bot,
  Wand2,
  Camera,
  Play,
  FileText,
  Download,
  Upload
} from 'lucide-react';

export default function AIHub() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [favorites, setFavorites] = useState<string[]>([]);

  const categories = [
    { id: 'all', name: 'All Tools', icon: Brain, count: 300 },
    { id: 'image', name: 'Image Tools', icon: Image, count: 85 },
    { id: 'video', name: 'Video Tools', icon: Video, count: 45 },
    { id: 'audio', name: 'Audio Tools', icon: Mic, count: 32 },
    { id: 'code', name: 'Code Tools', icon: Code, count: 78 },
    { id: 'automation', name: 'Automation', icon: Zap, count: 60 }
  ];

  const aiTools = [
    {
      id: '1',
      name: 'GPT-4 Vision',
      description: 'Analyze images, extract text, generate captions with AI',
      category: 'image',
      rating: 4.9,
      launches: '12.5k',
      tags: ['OCR', 'Vision', 'Analysis'],
      model: 'GPT-4',
      icon: Eye,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      id: '2',
      name: 'YouTube Summarizer',
      description: 'Get key insights from any YouTube video in seconds',
      category: 'video',
      rating: 4.8,
      launches: '8.3k',
      tags: ['Summary', 'Learning', 'Video'],
      model: 'Claude',
      icon: Play,
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      id: '3',
      name: 'Code Debugger AI',
      description: 'Fix bugs, optimize code, explain complex functions',
      category: 'code',
      rating: 4.7,
      launches: '15.2k',
      tags: ['Debug', 'Optimize', 'Explain'],
      model: 'Codex',
      icon: Code,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      id: '4',
      name: 'Podcast Transcriber',
      description: 'Convert audio to text with speaker identification',
      category: 'audio',
      rating: 4.6,
      launches: '6.7k',
      tags: ['Transcription', 'Audio', 'Text'],
      model: 'Whisper',
      icon: Mic,
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      id: '5',
      name: 'AutoGPT Agent',
      description: 'Autonomous AI that completes complex tasks independently',
      category: 'automation',
      rating: 4.5,
      launches: '22.1k',
      tags: ['Autonomous', 'Tasks', 'Agent'],
      model: 'AutoGPT',
      icon: Bot,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    },
    {
      id: '6',
      name: 'Image Generator Pro',
      description: 'Create stunning visuals from text descriptions',
      category: 'image',
      rating: 4.9,
      launches: '18.9k',
      tags: ['Generate', 'Art', 'Creative'],
      model: 'DALL-E 3',
      icon: Sparkles,
      color: 'text-pink-600',
      bgColor: 'bg-pink-50'
    }
  ];

  const topTools = aiTools.slice(0, 3);

  const filteredTools = aiTools.filter(tool => {
    const matchesCategory = selectedCategory === 'all' || tool.category === selectedCategory;
    const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         tool.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         tool.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const toggleFavorite = (toolId: string) => {
    setFavorites(prev => 
      prev.includes(toolId) 
        ? prev.filter(id => id !== toolId)
        : [...prev, toolId]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 p-6 animate-fade-in">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent flex items-center gap-3 mb-2">
            <Brain className="w-10 h-10 text-primary animate-pulse" />
            AI Hub
          </h1>
          <p className="text-muted-foreground text-lg">
            300+ AI tools to supercharge your learning and productivity
          </p>
        </div>

        {/* Search & Filter Bar */}
        <Card className="glass-card mb-8 border-primary/20 shadow-elegant">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <Input 
                  placeholder="Search AI tools, features, or use cases..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 h-12"
                />
              </div>
              <Button variant="outline" className="gap-2">
                <Filter className="w-4 h-4" />
                Filters
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
          {/* Categories Sidebar */}
          <div className="xl:col-span-1">
            <Card className="glass-card sticky top-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-primary" />
                  Categories
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {categories.map((category) => {
                  const IconComponent = category.icon;
                  return (
                    <Button
                      key={category.id}
                      variant={selectedCategory === category.id ? "default" : "ghost"}
                      className="w-full justify-start gap-3 h-12"
                      onClick={() => setSelectedCategory(category.id)}
                    >
                      <IconComponent className="w-5 h-5" />
                      <div className="flex-1 text-left">
                        <div className="font-medium">{category.name}</div>
                        <div className="text-xs text-muted-foreground">{category.count} tools</div>
                      </div>
                    </Button>
                  );
                })}
              </CardContent>
            </Card>

            {/* Top Tools This Week */}
            <Card className="glass-card mt-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-achievement" />
                  Top This Week
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {topTools.map((tool, index) => {
                  const IconComponent = tool.icon;
                  return (
                    <div key={tool.id} className="flex items-center gap-3 p-3 rounded-lg bg-surface-elevated">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-achievement text-achievement-foreground text-sm font-bold">
                        {index + 1}
                      </div>
                      <div className={`p-2 rounded-lg ${tool.bgColor}`}>
                        <IconComponent className={`w-4 h-4 ${tool.color}`} />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-medium">{tool.name}</div>
                        <div className="text-xs text-muted-foreground">{tool.launches} launches</div>
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>
          </div>

          {/* Main Tools Grid */}
          <div className="xl:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTools.map((tool) => {
                const IconComponent = tool.icon;
                const isFavorited = favorites.includes(tool.id);
                
                return (
                  <Card key={tool.id} className="glass-card hover-scale transition-all duration-300 border-border/50 hover:border-primary/30">
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <div className={`p-3 rounded-lg ${tool.bgColor}`}>
                          <IconComponent className={`w-6 h-6 ${tool.color}`} />
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => toggleFavorite(tool.id)}
                          className="text-muted-foreground hover:text-primary"
                        >
                          <Heart className={`w-4 h-4 ${isFavorited ? 'fill-current text-red-500' : ''}`} />
                        </Button>
                      </div>
                      <div>
                        <CardTitle className="text-lg">{tool.name}</CardTitle>
                        <p className="text-sm text-muted-foreground mt-1">{tool.description}</p>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-500 fill-current" />
                          <span className="font-medium">{tool.rating}</span>
                        </div>
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <Users className="w-4 h-4" />
                          <span>{tool.launches}</span>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-1">
                        {tool.tags.map((tag, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <div className="space-y-2">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="outline" className="w-full gap-2">
                              <Eye className="w-4 h-4" />
                              View Details
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="glass-card max-w-2xl">
                            <DialogHeader>
                              <DialogTitle className="flex items-center gap-3">
                                <div className={`p-2 rounded-lg ${tool.bgColor}`}>
                                  <IconComponent className={`w-5 h-5 ${tool.color}`} />
                                </div>
                                {tool.name}
                              </DialogTitle>
                            </DialogHeader>
                            <div className="space-y-4">
                              <p className="text-muted-foreground">{tool.description}</p>
                              <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                  <h4 className="font-medium">Model</h4>
                                  <Badge variant="outline">{tool.model}</Badge>
                                </div>
                                <div className="space-y-2">
                                  <h4 className="font-medium">Category</h4>
                                  <Badge variant="outline">{tool.category}</Badge>
                                </div>
                              </div>
                              <div className="flex gap-2">
                                <Button className="flex-1 gap-2">
                                  <ExternalLink className="w-4 h-4" />
                                  Launch Tool
                                </Button>
                                <Button variant="outline" onClick={() => toggleFavorite(tool.id)}>
                                  <Heart className={`w-4 h-4 ${isFavorited ? 'fill-current text-red-500' : ''}`} />
                                </Button>
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>
                        
                        <Button className="w-full gap-2 bg-primary hover:bg-primary/90">
                          <ExternalLink className="w-4 h-4" />
                          Launch Tool
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Add Tool CTA */}
            <Card className="glass-card mt-8 border-dashed border-primary/30">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Upload className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Submit Your AI Tool</h3>
                <p className="text-muted-foreground mb-4">
                  Know an amazing AI tool? Share it with the community!
                </p>
                <Button className="gap-2">
                  <Upload className="w-4 h-4" />
                  Submit Tool
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}