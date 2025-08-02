import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  Settings as SettingsIcon, 
  User, 
  Bell, 
  Shield, 
  Palette, 
  Brain, 
  Link, 
  Globe,
  Camera,
  Save,
  Github,
  Linkedin,
  Mail,
  Key,
  Smartphone,
  Monitor,
  Sun,
  Moon,
  Volume2,
  Languages,
  Calendar,
  Clock,
  Target,
  Zap,
  AlertTriangle,
  CheckCircle,
  X
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function Settings() {
  const { toast } = useToast();
  const [profile, setProfile] = useState({
    name: 'Alex Johnson',
    email: 'alex@example.com',
    bio: 'Full-stack developer passionate about AI and machine learning',
    avatar: '/placeholder.svg',
    role: 'Software Engineer',
    location: 'San Francisco, CA'
  });

  const [preferences, setPreferences] = useState({
    theme: 'system',
    language: 'en',
    timezone: 'PST',
    fontSize: 'medium',
    dyslexiaMode: false,
    highContrast: false,
    domains: ['frontend', 'backend', 'ai'],
    streakReminders: true,
    audioLearning: true
  });

  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    xpGains: true,
    hackathons: true,
    quizzes: true,
    roadmapUpdates: true,
    weeklyReports: true,
    communityPosts: false
  });

  const [aiConfig, setAiConfig] = useState({
    personality: 'motivator',
    checkInTime: '09:00',
    level: 'advanced',
    weeklyRecalibration: true
  });

  const [connectedAccounts, setConnectedAccounts] = useState({
    github: true,
    linkedin: false,
    google: true,
    coursera: false,
    edx: false
  });

  const handleSave = (section: string) => {
    toast({
      title: "Settings saved",
      description: `Your ${section} preferences have been updated successfully.`,
    });
  };

  const domains = [
    { id: 'frontend', name: 'Frontend Development', icon: '🎨' },
    { id: 'backend', name: 'Backend Development', icon: '⚙️' },
    { id: 'ai', name: 'AI/Machine Learning', icon: '🤖' },
    { id: 'devops', name: 'DevOps', icon: '🚀' },
    { id: 'mobile', name: 'Mobile Development', icon: '📱' },
    { id: 'data', name: 'Data Science', icon: '📊' }
  ];

  const aiPersonalities = [
    { id: 'friendly', name: 'Friendly', description: 'Encouraging and supportive' },
    { id: 'motivator', name: 'Motivator', description: 'Pushes you to achieve more' },
    { id: 'strict', name: 'Strict', description: 'Focused on discipline and structure' },
    { id: 'chill', name: 'Chill', description: 'Relaxed and patient approach' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 p-6 animate-fade-in">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent flex items-center gap-3 mb-2">
            <SettingsIcon className="w-10 h-10 text-primary animate-pulse" />
            Settings & Preferences
          </h1>
          <p className="text-muted-foreground text-lg">
            Customize your learning experience and manage your account
          </p>
        </div>

        <Tabs defaultValue="profile" className="space-y-6">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="profile" className="flex items-center gap-2">
              <User className="w-4 h-4" />
              Profile
            </TabsTrigger>
            <TabsTrigger value="preferences" className="flex items-center gap-2">
              <Palette className="w-4 h-4" />
              Preferences
            </TabsTrigger>
            <TabsTrigger value="notifications" className="flex items-center gap-2">
              <Bell className="w-4 h-4" />
              Notifications
            </TabsTrigger>
            <TabsTrigger value="ai" className="flex items-center gap-2">
              <Brain className="w-4 h-4" />
              AI Coach
            </TabsTrigger>
            <TabsTrigger value="accounts" className="flex items-center gap-2">
              <Link className="w-4 h-4" />
              Accounts
            </TabsTrigger>
            <TabsTrigger value="security" className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              Security
            </TabsTrigger>
          </TabsList>

          {/* Profile Tab */}
          <TabsContent value="profile">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="w-5 h-5 text-primary" />
                  Profile Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-6">
                  <div className="relative">
                    <Avatar className="w-24 h-24">
                      <AvatarImage src={profile.avatar} />
                      <AvatarFallback className="text-2xl">{profile.name[0]}</AvatarFallback>
                    </Avatar>
                    <Button size="sm" variant="outline" className="absolute -bottom-2 -right-2 rounded-full w-8 h-8 p-0">
                      <Camera className="w-4 h-4" />
                    </Button>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">{profile.name}</h3>
                    <p className="text-muted-foreground">{profile.role}</p>
                    <Badge variant="outline">{profile.location}</Badge>
                  </div>
                </div>

                <Separator />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input 
                      id="name"
                      value={profile.name}
                      onChange={(e) => setProfile(prev => ({ ...prev, name: e.target.value }))}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input 
                      id="email"
                      type="email"
                      value={profile.email}
                      onChange={(e) => setProfile(prev => ({ ...prev, email: e.target.value }))}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="role">Role/Position</Label>
                    <Input 
                      id="role"
                      value={profile.role}
                      onChange={(e) => setProfile(prev => ({ ...prev, role: e.target.value }))}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <Input 
                      id="location"
                      value={profile.location}
                      onChange={(e) => setProfile(prev => ({ ...prev, location: e.target.value }))}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bio">Bio</Label>
                  <Textarea 
                    id="bio"
                    placeholder="Tell us about yourself..."
                    value={profile.bio}
                    onChange={(e) => setProfile(prev => ({ ...prev, bio: e.target.value }))}
                    className="min-h-[100px]"
                  />
                </div>

                <Button onClick={() => handleSave('profile')} className="gap-2">
                  <Save className="w-4 h-4" />
                  Save Profile
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Preferences Tab */}
          <TabsContent value="preferences" className="space-y-6">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Palette className="w-5 h-5 text-primary" />
                  Appearance & Accessibility
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <Label>Theme</Label>
                    <div className="flex gap-2">
                      {['light', 'dark', 'system'].map((theme) => (
                        <Button
                          key={theme}
                          variant={preferences.theme === theme ? "default" : "outline"}
                          size="sm"
                          onClick={() => setPreferences(prev => ({ ...prev, theme }))}
                          className="gap-2"
                        >
                          {theme === 'light' && <Sun className="w-4 h-4" />}
                          {theme === 'dark' && <Moon className="w-4 h-4" />}
                          {theme === 'system' && <Monitor className="w-4 h-4" />}
                          {theme.charAt(0).toUpperCase() + theme.slice(1)}
                        </Button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label>Font Size</Label>
                    <div className="flex gap-2">
                      {['small', 'medium', 'large'].map((size) => (
                        <Button
                          key={size}
                          variant={preferences.fontSize === size ? "default" : "outline"}
                          size="sm"
                          onClick={() => setPreferences(prev => ({ ...prev, fontSize: size }))}
                        >
                          {size.charAt(0).toUpperCase() + size.slice(1)}
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Dyslexia-friendly mode</Label>
                      <p className="text-sm text-muted-foreground">Use fonts optimized for dyslexia</p>
                    </div>
                    <Switch 
                      checked={preferences.dyslexiaMode}
                      onCheckedChange={(checked) => setPreferences(prev => ({ ...prev, dyslexiaMode: checked }))}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>High contrast mode</Label>
                      <p className="text-sm text-muted-foreground">Increase contrast for better visibility</p>
                    </div>
                    <Switch 
                      checked={preferences.highContrast}
                      onCheckedChange={(checked) => setPreferences(prev => ({ ...prev, highContrast: checked }))}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-primary" />
                  Learning Preferences
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <Label>Interested Domains</Label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {domains.map((domain) => (
                      <div
                        key={domain.id}
                        className={`p-3 rounded-lg border cursor-pointer transition-all ${
                          preferences.domains.includes(domain.id)
                            ? 'border-primary bg-primary/10'
                            : 'border-border hover:border-primary/50'
                        }`}
                        onClick={() => {
                          const newDomains = preferences.domains.includes(domain.id)
                            ? preferences.domains.filter(d => d !== domain.id)
                            : [...preferences.domains, domain.id];
                          setPreferences(prev => ({ ...prev, domains: newDomains }));
                        }}
                      >
                        <div className="text-center">
                          <div className="text-2xl mb-1">{domain.icon}</div>
                          <div className="text-sm font-medium">{domain.name}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Streak reminders</Label>
                      <p className="text-sm text-muted-foreground">Get notified to maintain your learning streak</p>
                    </div>
                    <Switch 
                      checked={preferences.streakReminders}
                      onCheckedChange={(checked) => setPreferences(prev => ({ ...prev, streakReminders: checked }))}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Audio learning recommendations</Label>
                      <p className="text-sm text-muted-foreground">Auto-play podcast and audiobook suggestions</p>
                    </div>
                    <Switch 
                      checked={preferences.audioLearning}
                      onCheckedChange={(checked) => setPreferences(prev => ({ ...prev, audioLearning: checked }))}
                    />
                  </div>
                </div>

                <Button onClick={() => handleSave('preferences')} className="gap-2">
                  <Save className="w-4 h-4" />
                  Save Preferences
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Notifications Tab */}
          <TabsContent value="notifications">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="w-5 h-5 text-primary" />
                  Notification Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Email notifications</Label>
                      <p className="text-sm text-muted-foreground">Receive updates via email</p>
                    </div>
                    <Switch 
                      checked={notifications.email}
                      onCheckedChange={(checked) => setNotifications(prev => ({ ...prev, email: checked }))}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Push notifications</Label>
                      <p className="text-sm text-muted-foreground">Get instant notifications on your device</p>
                    </div>
                    <Switch 
                      checked={notifications.push}
                      onCheckedChange={(checked) => setNotifications(prev => ({ ...prev, push: checked }))}
                    />
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h4 className="font-medium">Notification Types</h4>
                  
                  {[
                    { key: 'xpGains', label: 'XP gains and achievements', description: 'When you earn XP or unlock badges' },
                    { key: 'hackathons', label: 'Hackathon updates', description: 'New hackathons and competition announcements' },
                    { key: 'quizzes', label: 'Quiz releases', description: 'When new quizzes are available' },
                    { key: 'roadmapUpdates', label: 'Roadmap updates', description: 'When your personalized roadmap changes' },
                    { key: 'weeklyReports', label: 'Weekly progress reports', description: 'Summary of your weekly learning progress' },
                    { key: 'communityPosts', label: 'Community posts', description: 'Updates from community discussions' }
                  ].map((notification) => (
                    <div key={notification.key} className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>{notification.label}</Label>
                        <p className="text-sm text-muted-foreground">{notification.description}</p>
                      </div>
                      <Switch 
                        checked={notifications[notification.key as keyof typeof notifications]}
                        onCheckedChange={(checked) => setNotifications(prev => ({ ...prev, [notification.key]: checked }))}
                      />
                    </div>
                  ))}
                </div>

                <Button onClick={() => handleSave('notifications')} className="gap-2">
                  <Save className="w-4 h-4" />
                  Save Notifications
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* AI Coach Tab */}
          <TabsContent value="ai">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="w-5 h-5 text-primary" />
                  AI Coach Configuration
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="space-y-3">
                    <Label>Coach Personality</Label>
                    <div className="grid grid-cols-2 gap-3">
                      {aiPersonalities.map((personality) => (
                        <div
                          key={personality.id}
                          className={`p-4 rounded-lg border cursor-pointer transition-all ${
                            aiConfig.personality === personality.id
                              ? 'border-primary bg-primary/10'
                              : 'border-border hover:border-primary/50'
                          }`}
                          onClick={() => setAiConfig(prev => ({ ...prev, personality: personality.id }))}
                        >
                          <div className="font-medium">{personality.name}</div>
                          <div className="text-sm text-muted-foreground">{personality.description}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="checkin">Weekly check-in time</Label>
                      <Input 
                        id="checkin"
                        type="time"
                        value={aiConfig.checkInTime}
                        onChange={(e) => setAiConfig(prev => ({ ...prev, checkInTime: e.target.value }))}
                      />
                    </div>

                    <div className="space-y-3">
                      <Label>AI guidance level</Label>
                      <div className="flex gap-2">
                        {['basic', 'intermediate', 'advanced'].map((level) => (
                          <Button
                            key={level}
                            variant={aiConfig.level === level ? "default" : "outline"}
                            size="sm"
                            onClick={() => setAiConfig(prev => ({ ...prev, level }))}
                          >
                            {level.charAt(0).toUpperCase() + level.slice(1)}
                          </Button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Weekly roadmap recalibration</Label>
                      <p className="text-sm text-muted-foreground">Automatically adjust your learning path based on progress</p>
                    </div>
                    <Switch 
                      checked={aiConfig.weeklyRecalibration}
                      onCheckedChange={(checked) => setAiConfig(prev => ({ ...prev, weeklyRecalibration: checked }))}
                    />
                  </div>
                </div>

                <Button onClick={() => handleSave('AI coach')} className="gap-2">
                  <Save className="w-4 h-4" />
                  Save AI Settings
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Connected Accounts Tab */}
          <TabsContent value="accounts">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Link className="w-5 h-5 text-primary" />
                  Connected Accounts
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { key: 'github', name: 'GitHub', icon: Github, color: 'text-gray-900' },
                  { key: 'linkedin', name: 'LinkedIn', icon: Linkedin, color: 'text-blue-600' },
                  { key: 'google', name: 'Google', icon: Mail, color: 'text-red-600' },
                  { key: 'coursera', name: 'Coursera', icon: Globe, color: 'text-blue-500' },
                  { key: 'edx', name: 'edX', icon: Globe, color: 'text-purple-600' }
                ].map((account) => {
                  const IconComponent = account.icon;
                  const isConnected = connectedAccounts[account.key as keyof typeof connectedAccounts];
                  
                  return (
                    <div key={account.key} className="flex items-center justify-between p-4 rounded-lg border border-border">
                      <div className="flex items-center gap-3">
                        <IconComponent className={`w-6 h-6 ${account.color}`} />
                        <div>
                          <div className="font-medium">{account.name}</div>
                          <div className="text-sm text-muted-foreground">
                            {isConnected ? 'Connected' : 'Not connected'}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        {isConnected && <CheckCircle className="w-4 h-4 text-green-600" />}
                        <Button
                          variant={isConnected ? "outline" : "default"}
                          size="sm"
                          onClick={() => setConnectedAccounts(prev => ({ ...prev, [account.key]: !isConnected }))}
                        >
                          {isConnected ? 'Disconnect' : 'Connect'}
                        </Button>
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Security Tab */}
          <TabsContent value="security">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-primary" />
                  Security & Privacy
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <Button variant="outline" className="w-full justify-start gap-2">
                    <Key className="w-4 h-4" />
                    Change Password
                  </Button>

                  <div className="flex items-center justify-between p-4 rounded-lg border border-border">
                    <div className="space-y-0.5">
                      <Label>Two-factor authentication</Label>
                      <p className="text-sm text-muted-foreground">Add an extra layer of security to your account</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <Switch defaultChecked />
                    </div>
                  </div>

                  <Button variant="outline" className="w-full justify-start gap-2">
                    <Smartphone className="w-4 h-4" />
                    Manage Device Sessions
                  </Button>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h4 className="font-medium text-red-600">Danger Zone</h4>
                  <Button variant="destructive" className="gap-2">
                    <AlertTriangle className="w-4 h-4" />
                    Delete Account
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}