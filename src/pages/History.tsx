import { Calendar, Search, Filter, TrendingUp, Heart, Brain } from "lucide-react";
import { HealthCard } from "@/components/ui/health-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const mockHistoryEntries = [
  {
    date: "Today",
    mood: 8,
    emoji: "😊",
    symptoms: "Felt energetic after morning walk. Good sleep quality.",
    aiInsight: "Great correlation between exercise and energy levels!",
    waterIntake: 2.1,
    sleepHours: 7.5
  },
  {
    date: "Yesterday", 
    mood: 7,
    emoji: "🙂",
    symptoms: "Slight headache in the afternoon, but overall good day.",
    aiInsight: "Headache might be related to dehydration - water intake was low.",
    waterIntake: 1.8,
    sleepHours: 8.0
  },
  {
    date: "2 days ago",
    mood: 9,
    emoji: "😄",
    symptoms: "Excellent day! High energy, great mood all day.",
    aiInsight: "Perfect balance of sleep, hydration, and nutrition.",
    waterIntake: 2.5,
    sleepHours: 8.2
  },
  {
    date: "3 days ago",
    mood: 6,
    emoji: "😐", 
    symptoms: "Low energy, felt tired despite adequate sleep.",
    aiInsight: "Consider checking iron levels - fatigue pattern detected.",
    waterIntake: 2.0,
    sleepHours: 7.8
  },
];

const History = () => {
  return (
    <div className="p-4 space-y-6">
      {/* Header */}
      <div className="pt-8">
        <h1 className="text-2xl font-bold text-foreground flex items-center gap-2">
          <Calendar className="text-primary" size={24} />
          Health History
        </h1>
        <p className="text-muted-foreground">Track your wellness journey over time</p>
      </div>

      {/* Search & Filter */}
      <div className="flex gap-2">
        <div className="flex-1">
          <Input 
            placeholder="Search symptoms, moods, or insights..."
            className="border-border/50"
          />
        </div>
        <Button variant="outline" size="icon">
          <Search size={20} />
        </Button>
        <Button variant="outline" size="icon">
          <Filter size={20} />
        </Button>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-3 gap-3">
        <HealthCard className="p-4 text-center">
          <TrendingUp className="text-primary mx-auto mb-2" size={20} />
          <p className="text-sm text-muted-foreground">Avg Mood</p>
          <p className="font-bold text-lg">7.5/10</p>
        </HealthCard>
        
        <HealthCard className="p-4 text-center">
          <Heart className="text-red-400 mx-auto mb-2" size={20} />
          <p className="text-sm text-muted-foreground">Logged Days</p>
          <p className="font-bold text-lg">28</p>
        </HealthCard>
        
        <HealthCard className="p-4 text-center">
          <Brain className="text-purple-400 mx-auto mb-2" size={20} />
          <p className="text-sm text-muted-foreground">Insights</p>
          <p className="font-bold text-lg">15</p>
        </HealthCard>
      </div>

      {/* History Timeline */}
      <div className="space-y-4">
        {mockHistoryEntries.map((entry, index) => (
          <HealthCard key={index} className="p-5">
            {/* Entry Header */}
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{entry.emoji}</span>
                <div>
                  <p className="font-semibold">{entry.date}</p>
                  <p className="text-sm text-muted-foreground">Mood: {entry.mood}/10</p>
                </div>
              </div>
              <Badge variant="outline" className="bg-primary/10 text-primary">
                Health Log
              </Badge>
            </div>

            {/* Symptoms/Notes */}
            <div className="mb-4">
              <p className="text-sm text-foreground/80">"{entry.symptoms}"</p>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-3 gap-4 mb-4 p-3 bg-secondary/30 rounded-xl">
              <div className="text-center">
                <p className="text-xs text-muted-foreground">Sleep</p>
                <p className="font-semibold text-sm">{entry.sleepHours}h</p>
              </div>
              <div className="text-center">
                <p className="text-xs text-muted-foreground">Water</p>
                <p className="font-semibold text-sm">{entry.waterIntake}L</p>
              </div>
              <div className="text-center">
                <p className="text-xs text-muted-foreground">Mood</p>
                <p className="font-semibold text-sm">{entry.mood}/10</p>
              </div>
            </div>

            {/* AI Insight */}
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-3 rounded-xl border-l-4 border-primary">
              <div className="flex items-start gap-2">
                <Brain className="text-primary mt-0.5" size={16} />
                <div>
                  <p className="text-sm font-medium text-primary">AI Insight</p>
                  <p className="text-sm text-foreground/80 mt-1">{entry.aiInsight}</p>
                </div>
              </div>
            </div>
          </HealthCard>
        ))}
      </div>

      {/* Load More */}
      <Button variant="outline" className="w-full">
        Load Earlier Entries
      </Button>

      {/* Export Options */}
      <HealthCard variant="wellness" className="p-4">
        <h3 className="font-semibold mb-3">📊 Export Your Data</h3>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            PDF Report
          </Button>
          <Button variant="outline" size="sm">
            CSV Export
          </Button>
          <Button variant="outline" size="sm">
            Share Insights
          </Button>
        </div>
      </HealthCard>
    </div>
  );
};

export default History;