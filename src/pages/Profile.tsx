import { User, Settings, Bell, Shield, Heart, Target, LogOut, ChevronRight } from "lucide-react";
import { HealthCard } from "@/components/ui/health-card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const Profile = () => {
  return (
    <div className="p-4 space-y-6">
      {/* Header */}
      <div className="pt-8">
        <h1 className="text-2xl font-bold text-foreground flex items-center gap-2">
          <User className="text-primary" size={24} />
          Your Profile
        </h1>
        <p className="text-muted-foreground">Manage your health journey settings</p>
      </div>

      {/* Profile Card */}
      <HealthCard variant="wellness" className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <Avatar className="w-16 h-16">
            <AvatarImage src="/placeholder-avatar.jpg" />
            <AvatarFallback className="bg-primary/20 text-primary text-xl font-semibold">
              AJ
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <h2 className="text-xl font-bold">Alex Johnson</h2>
            <p className="text-muted-foreground">Member since March 2024</p>
            <div className="flex gap-2 mt-2">
              <Badge variant="secondary" className="bg-primary/10 text-primary">
                🔥 28 day streak
              </Badge>
              <Badge variant="secondary" className="bg-purple-100 text-purple-700">
                Health Hero
              </Badge>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border/50">
          <div className="text-center">
            <p className="text-2xl font-bold text-primary">28</p>
            <p className="text-xs text-muted-foreground">Days logged</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-primary">7.8</p>
            <p className="text-xs text-muted-foreground">Avg mood</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-primary">15</p>
            <p className="text-xs text-muted-foreground">AI insights</p>
          </div>
        </div>
      </HealthCard>

      {/* Health Goals */}
      <HealthCard className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Target className="text-primary" size={20} />
            <h3 className="font-semibold">Current Health Goals</h3>
          </div>
          <Button variant="outline" size="sm">Edit</Button>
        </div>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-secondary/30 rounded-xl">
            <span className="text-sm">💧 Drink 2.5L water daily</span>
            <Badge variant="secondary">Active</Badge>
          </div>
          <div className="flex items-center justify-between p-3 bg-secondary/30 rounded-xl">
            <span className="text-sm">🚶‍♂️ 8,000 steps per day</span>
            <Badge variant="secondary">Active</Badge>
          </div>
          <div className="flex items-center justify-between p-3 bg-secondary/30 rounded-xl">
            <span className="text-sm">😴 7-8 hours sleep</span>
            <Badge variant="secondary">Active</Badge>
          </div>
        </div>
      </HealthCard>

      {/* Settings Menu */}
      <div className="space-y-3">
        <HealthCard className="p-4">
          <Button variant="ghost" className="w-full justify-between h-auto p-4">
            <div className="flex items-center gap-3">
              <Bell className="text-muted-foreground" size={20} />
              <span>Notifications & Reminders</span>
            </div>
            <ChevronRight size={16} className="text-muted-foreground" />
          </Button>
        </HealthCard>

        <HealthCard className="p-4">
          <Button variant="ghost" className="w-full justify-between h-auto p-4">
            <div className="flex items-center gap-3">
              <Heart className="text-muted-foreground" size={20} />
              <span>Health Preferences</span>
            </div>
            <ChevronRight size={16} className="text-muted-foreground" />
          </Button>
        </HealthCard>

        <HealthCard className="p-4">
          <Button variant="ghost" className="w-full justify-between h-auto p-4">
            <div className="flex items-center gap-3">
              <Shield className="text-muted-foreground" size={20} />
              <span>Privacy & Data</span>
            </div>
            <ChevronRight size={16} className="text-muted-foreground" />
          </Button>
        </HealthCard>

        <HealthCard className="p-4">
          <Button variant="ghost" className="w-full justify-between h-auto p-4">
            <div className="flex items-center gap-3">
              <Settings className="text-muted-foreground" size={20} />
              <span>App Settings</span>
            </div>
            <ChevronRight size={16} className="text-muted-foreground" />
          </Button>
        </HealthCard>
      </div>

      {/* App Info */}
      <HealthCard variant="calm" className="p-6">
        <h3 className="font-semibold mb-3">🤖 About Smart Health Companion</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Your AI-powered wellness assistant, helping you track patterns, understand your health, 
          and make informed decisions about your wellbeing.
        </p>
        <div className="space-y-2 text-xs text-muted-foreground">
          <p>Version 1.0.0</p>
          <p>Built with privacy-first AI technology</p>
        </div>
      </HealthCard>

      {/* Account Actions */}
      <div className="space-y-3">
        <Button variant="outline" className="w-full">
          Export Health Data
        </Button>
        <Button variant="outline" className="w-full text-destructive border-destructive/20">
          <LogOut className="mr-2" size={16} />
          Sign Out
        </Button>
      </div>
    </div>
  );
};

export default Profile;