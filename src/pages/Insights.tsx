import { TrendingUp, Brain, Activity, Target, AlertTriangle } from "lucide-react";
import { HealthCard } from "@/components/ui/health-card";
import { Badge } from "@/components/ui/badge";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, BarChart, Bar } from "recharts";

const mockWeeklyData = [
  { day: "Mon", mood: 7, energy: 6, sleep: 7 },
  { day: "Tue", mood: 8, energy: 8, sleep: 8 },
  { day: "Wed", mood: 6, energy: 5, sleep: 6 },
  { day: "Thu", mood: 9, energy: 9, sleep: 8 },
  { day: "Fri", mood: 8, energy: 7, sleep: 7 },
  { day: "Sat", mood: 9, energy: 8, sleep: 9 },
  { day: "Sun", mood: 8, energy: 8, sleep: 8 },
];

const Insights = () => {
  return (
    <div className="p-4 space-y-6">
      {/* Header */}
      <div className="pt-8">
        <h1 className="text-2xl font-bold text-foreground flex items-center gap-2">
          <TrendingUp className="text-primary" size={24} />
          Health Insights
        </h1>
        <p className="text-muted-foreground">AI-powered analysis of your health patterns</p>
      </div>

      {/* Weekly Overview */}
      <HealthCard variant="vitality" className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp className="text-primary" size={20} />
          <h2 className="font-semibold">Weekly Health Trends</h2>
        </div>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={mockWeeklyData}>
            <XAxis dataKey="day" axisLine={false} tickLine={false} />
            <YAxis hide />
            <Line 
              type="monotone" 
              dataKey="mood" 
              stroke="hsl(260 60% 65%)" 
              strokeWidth={2}
              dot={{ r: 3 }}
              name="Mood"
            />
            <Line 
              type="monotone" 
              dataKey="energy" 
              stroke="hsl(30 80% 65%)" 
              strokeWidth={2}
              dot={{ r: 3 }}
              name="Energy"
            />
            <Line 
              type="monotone" 
              dataKey="sleep" 
              stroke="hsl(150 60% 65%)" 
              strokeWidth={2}
              dot={{ r: 3 }}
              name="Sleep"
            />
          </LineChart>
        </ResponsiveContainer>
        <div className="flex justify-center gap-4 mt-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-purple-400"></div>
            <span className="text-sm">Mood</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-orange-400"></div>
            <span className="text-sm">Energy</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-400"></div>
            <span className="text-sm">Sleep</span>
          </div>
        </div>
      </HealthCard>

      {/* Key Insights */}
      <HealthCard variant="calm" className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <Brain className="text-primary" size={20} />
          <h2 className="font-semibold">AI Analysis</h2>
        </div>
        <div className="space-y-4">
          <div className="p-4 bg-white/50 rounded-xl">
            <div className="flex items-start gap-3">
              <Badge variant="secondary" className="bg-green-100 text-green-700">Positive Trend</Badge>
            </div>
            <p className="mt-2 text-sm">
              Your sleep quality improved by 25% this week. The correlation with your mood scores suggests better sleep is enhancing your daily well-being.
            </p>
          </div>
          
          <div className="p-4 bg-white/50 rounded-xl">
            <div className="flex items-start gap-3">
              <Badge variant="secondary" className="bg-blue-100 text-blue-700">Pattern Detected</Badge>
            </div>
            <p className="mt-2 text-sm">
              Your energy levels dip on Wednesdays. Consider scheduling lighter activities or ensuring better hydration mid-week.
            </p>
          </div>

          <div className="p-4 bg-white/50 rounded-xl">
            <div className="flex items-start gap-3">
              <Badge variant="secondary" className="bg-purple-100 text-purple-700">Recommendation</Badge>
            </div>
            <p className="mt-2 text-sm">
              Your mood stability is excellent! Your current routine of morning walks seems to be working well.
            </p>
          </div>
        </div>
      </HealthCard>

      {/* Goals Progress */}
      <HealthCard variant="energy" className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <Target className="text-primary" size={20} />
          <h2 className="font-semibold">Weekly Goals Progress</h2>
        </div>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-sm">Exercise (5 days/week)</span>
              <span className="text-sm font-medium">4/5 days</span>
            </div>
            <div className="w-full bg-white/50 rounded-full h-2">
              <div className="bg-primary h-2 rounded-full" style={{ width: "80%" }}></div>
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <span className="text-sm">Water intake (2.5L/day avg)</span>
              <span className="text-sm font-medium">2.2L/day</span>
            </div>
            <div className="w-full bg-white/50 rounded-full h-2">
              <div className="bg-blue-400 h-2 rounded-full" style={{ width: "88%" }}></div>
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <span className="text-sm">Sleep consistency (7-8hrs)</span>
              <span className="text-sm font-medium">7.4hrs avg</span>
            </div>
            <div className="w-full bg-white/50 rounded-full h-2">
              <div className="bg-purple-400 h-2 rounded-full" style={{ width: "93%" }}></div>
            </div>
          </div>
        </div>
      </HealthCard>

      {/* Health Alerts */}
      <HealthCard className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <AlertTriangle className="text-orange-500" size={20} />
          <h2 className="font-semibold">Health Alerts</h2>
        </div>
        <div className="p-4 bg-orange-50/80 border border-orange-200 rounded-xl">
          <p className="text-sm text-orange-800">
            <strong>Hydration Reminder:</strong> Your water intake has been below target for 2 days. 
            Consider setting hourly reminders to stay hydrated.
          </p>
        </div>
      </HealthCard>

      {/* Activity Correlation */}
      <HealthCard className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <Activity className="text-primary" size={20} />
          <h2 className="font-semibold">Activity Impact</h2>
        </div>
        <ResponsiveContainer width="100%" height={150}>
          <BarChart data={mockWeeklyData}>
            <XAxis dataKey="day" axisLine={false} tickLine={false} />
            <YAxis hide />
            <Bar dataKey="energy" fill="hsl(150 60% 65%)" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
        <p className="text-sm text-muted-foreground mt-2">
          Days with morning exercise show 30% higher energy levels throughout the day.
        </p>
      </HealthCard>
    </div>
  );
};

export default Insights;