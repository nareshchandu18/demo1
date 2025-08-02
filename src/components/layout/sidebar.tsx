import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import {
  LayoutDashboard,
  Route,
  MessageSquare,
  FolderOpen,
  Trophy,
  Brain,
  Briefcase,
  Compass,
  Zap,
  Users,
  BarChart3,
  Settings,
  ChevronLeft,
  ChevronRight,
  Sparkles
} from 'lucide-react';

const navigation = [
  { name: 'Dashboard', href: '/', icon: LayoutDashboard },
  { name: 'My Roadmap', href: '/roadmap', icon: Route },
  { name: 'Study Coach', href: '/coach', icon: MessageSquare },
  { name: 'Projects Arena', href: '/projects', icon: FolderOpen },
  { name: 'Gamification', href: '/gamification', icon: Trophy },
  { name: 'Quiz Center', href: '/quiz', icon: Brain },
  { name: 'Career Tools', href: '/career', icon: Briefcase },
  { name: 'Explore', href: '/explore', icon: Compass },
  { name: 'AI Hub', href: '/ai-hub', icon: Zap },
  { name: 'Community', href: '/community', icon: Users },
  { name: 'Analytics', href: '/analytics', icon: BarChart3 },
  { name: 'Settings', href: '/settings', icon: Settings },
];

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  return (
    <div className={cn(
      "flex flex-col bg-surface border-r border-card-border transition-all duration-300",
      collapsed ? "w-16" : "w-64",
      className
    )}>
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-card-border">
        <div className={cn(
          "flex items-center gap-2 transition-opacity duration-200",
          collapsed && "opacity-0"
        )}>
          <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <span className="font-bold text-lg bg-gradient-primary bg-clip-text text-transparent">
            LearnAI
          </span>
        </div>
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-1.5 rounded-lg hover:bg-surface-elevated transition-colors"
        >
          {collapsed ? (
            <ChevronRight className="w-4 h-4" />
          ) : (
            <ChevronLeft className="w-4 h-4" />
          )}
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-3 space-y-1">
        {navigation.map((item) => {
          const isActive = location.pathname === item.href;
          const Icon = item.icon;
          
          return (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                "nav-link",
                isActive && "active"
              )}
            >
              <Icon className="w-5 h-5 flex-shrink-0" />
              <span className={cn(
                "transition-opacity duration-200",
                collapsed && "opacity-0 sr-only"
              )}>
                {item.name}
              </span>
              {isActive && !collapsed && (
                <div className="ml-auto w-2 h-2 bg-primary rounded-full animate-pulse" />
              )}
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-card-border">
        <div className={cn(
          "bg-gradient-primary/10 border border-primary/20 rounded-lg p-3 transition-opacity duration-200",
          collapsed && "opacity-0"
        )}>
          <div className="flex items-center gap-2 mb-2">
            <Trophy className="w-4 h-4 text-achievement" />
            <span className="text-sm font-medium">Level 12</span>
          </div>
          <div className="text-xs text-muted-foreground mb-2">
            2,847 XP to next level
          </div>
          <div className="w-full bg-surface-elevated rounded-full h-2">
            <div className="bg-gradient-achievement h-2 rounded-full w-3/4" />
          </div>
        </div>
      </div>
    </div>
  );
}