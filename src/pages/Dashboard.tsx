import { Bell, TrendingUp, Heart, Brain, Droplets, Moon } from "lucide-react";
import { HealthCard } from "@/components/ui/health-card";
import { Button } from "@/components/ui/button";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const mockMoodData = [
  { day: "Mon", mood: 7 },
  { day: "Tue", mood: 8 },
  { day: "Wed", mood: 6 },
  { day: "Thu", mood: 9 },
  { day: "Fri", mood: 8 },
  { day: "Sat", mood: 9 },
  { day: "Sun", mood: 8 },
];

const mockNutritionData = [
  { name: "Protein", value: 25, color: "#10b981" },
  { name: "Carbs", value: 45, color: "#f59e0b" },
  { name: "Fats", value: 30, color: "#8b5cf6" },
];

const Dashboard = () => {
  return (
    <div className="p-4 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between pt-8">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Good morning, Alex! 🌱</h1>
          <p className="text-muted-foreground">Let's make today amazing</p>
        </div>
        <Button size="icon" variant="outline" className="rounded-full">
          <Bell size={20} />
        </Button>
      </div>

      {/* Today's Summary */}
      <HealthCard variant="wellness" className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <TrendingUp className="text-primary" size={24} />
          <h2 className="text-lg font-semibold">Today's Wellness Summary</h2>
        </div>
        <p className="text-foreground/80 mb-4">
          You've improved your sleep by 20% this week! 🚀 Your mood stability is excellent, and hydration is on track.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center p-3 bg-white/50 rounded-xl">
            <Heart className="text-red-400 mx-auto mb-1" size={20} />
            <p className="text-sm text-muted-foreground">Heart Rate</p>
            <p className="font-semibold">72 BPM</p>
          </div>
          <div className="text-center p-3 bg-white/50 rounded-xl">
            <Moon className="text-blue-400 mx-auto mb-1" size={20} />
            <p className="text-sm text-muted-foreground">Sleep Score</p>
            <p className="font-semibold">85/100</p>
          </div>
        </div>
      </HealthCard>

      {/* Quick Stats Grid */}
      <div className="grid grid-cols-2 gap-4">
        <HealthCard variant="energy" className="p-4">
          <div className="text-center">
            <Droplets className="text-blue-500 mx-auto mb-2" size={24} />
            <p className="text-sm text-muted-foreground">Water Intake</p>
            <p className="text-xl font-bold">1.8L / 2.5L</p>
            <div className="w-full bg-white/50 rounded-full h-2 mt-2">
              <div className="bg-blue-500 h-2 rounded-full" style={{ width: "72%" }}></div>
            </div>
          </div>
        </HealthCard>

        <HealthCard variant="calm" className="p-4">
          <div className="text-center">
            <Brain className="text-purple-500 mx-auto mb-2" size={24} />
            <p className="text-sm text-muted-foreground">Mood Today</p>
            <p className="text-xl font-bold">Great 😊</p>
            <p className="text-xs text-muted-foreground mt-1">8.2/10 average</p>
          </div>
        </HealthCard>
      </div>

      {/* Mood Trend Chart */}
      <HealthCard className="p-4">
        <h3 className="font-semibold mb-4">7-Day Mood Trend</h3>
        <ResponsiveContainer width="100%" height={150}>
          <LineChart data={mockMoodData}>
            <XAxis dataKey="day" axisLine={false} tickLine={false} />
            <YAxis hide />
            <Line 
              type="monotone" 
              dataKey="mood" 
              stroke="hsl(150 60% 65%)" 
              strokeWidth={3}
              dot={{ fill: "hsl(150 60% 65%)", strokeWidth: 2, r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </HealthCard>

      {/* Nutrition Overview */}
      <HealthCard className="p-4">
        <h3 className="font-semibold mb-4">Today's Nutrition Balance</h3>
        <div className="flex items-center justify-between">
          <ResponsiveContainer width="50%" height={100}>
            <PieChart>
              <Pie
                data={mockNutritionData}
                cx="50%"
                cy="50%"
                innerRadius={25}
                outerRadius={40}
                dataKey="value"
              >
                {mockNutritionData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="space-y-2">
            {mockNutritionData.map((item) => (
              <div key={item.name} className="flex items-center gap-2">
                <div 
                  className="w-3 h-3 rounded-full" 
                  style={{ backgroundColor: item.color }}
                ></div>
                <span className="text-sm">{item.name}: {item.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </HealthCard>

      {/* AI Recommendations */}
      <HealthCard variant="vitality" className="p-4">
        <h3 className="font-semibold mb-3">🎯 Personalized Recommendations</h3>
        <div className="space-y-3">
          <div className="flex items-start gap-3 p-3 bg-white/50 rounded-xl">
            <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
            <div>
              <p className="font-medium">Take a 10-minute walk</p>
              <p className="text-sm text-muted-foreground">Your step count is 15% below yesterday</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3 bg-white/50 rounded-xl">
            <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
            <div>
              <p className="font-medium">Drink a glass of water</p>
              <p className="text-sm text-muted-foreground">You're slightly behind your hydration goal</p>
            </div>
          </div>
        </div>
      </HealthCard>
    </div>
  );
};

export default Dashboard;