import { useState } from "react";
import { Camera, Mic, Calendar, Send, Plus } from "lucide-react";
import { HealthCard } from "@/components/ui/health-card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const DailyLog = () => {
  const [logText, setLogText] = useState("");
  const [mood, setMood] = useState(5);
  const { toast } = useToast();

  const handleSubmitLog = () => {
    toast({
      title: "Log saved! 🎉",
      description: "Your daily health log has been recorded successfully.",
    });
    setLogText("");
    setMood(5);
  };

  const moodEmojis = ["😢", "😟", "😐", "🙂", "😊", "😄", "🤩", "🥳", "✨", "🌟"];

  return (
    <div className="p-4 space-y-6">
      {/* Header */}
      <div className="pt-8">
        <h1 className="text-2xl font-bold text-foreground flex items-center gap-2">
          <Plus className="text-primary" size={24} />
          Daily Health Log
        </h1>
        <p className="text-muted-foreground">How are you feeling today?</p>
      </div>

      {/* Quick Mood Check */}
      <HealthCard variant="calm" className="p-6">
        <Label className="text-lg font-semibold mb-4 block">Rate Your Mood</Label>
        <div className="grid grid-cols-5 gap-2 mb-4">
          {moodEmojis.map((emoji, index) => (
            <button
              key={index}
              onClick={() => setMood(index + 1)}
              className={`p-3 rounded-xl text-2xl transition-all duration-300 ${
                mood === index + 1
                  ? "bg-primary/20 shadow-lg scale-110"
                  : "bg-white/50 hover:bg-white/70"
              }`}
            >
              {emoji}
            </button>
          ))}
        </div>
        <p className="text-center text-sm text-muted-foreground">
          Current mood: {moodEmojis[mood - 1]} ({mood}/10)
        </p>
      </HealthCard>

      {/* Symptoms & Notes */}
      <HealthCard className="p-6">
        <Label htmlFor="symptoms" className="text-lg font-semibold mb-4 block">
          How are you feeling? Any symptoms?
        </Label>
        <Textarea
          id="symptoms"
          placeholder="Describe your symptoms, energy level, sleep quality, or anything else worth noting..."
          value={logText}
          onChange={(e) => setLogText(e.target.value)}
          className="min-h-[120px] resize-none border-border/50"
        />
      </HealthCard>

      {/* Meal Photo Upload */}
      <HealthCard variant="energy" className="p-6">
        <Label className="text-lg font-semibold mb-4 block">📸 Meal Photos</Label>
        <div className="space-y-4">
          <Button variant="outline" className="w-full h-20 border-dashed">
            <div className="text-center">
              <Camera className="mx-auto mb-2 text-muted-foreground" size={24} />
              <p className="text-sm">Upload meal photos</p>
            </div>
          </Button>
          <p className="text-xs text-muted-foreground text-center">
            AI will analyze your nutrition from meal photos
          </p>
        </div>
      </HealthCard>

      {/* Quick Health Metrics */}
      <HealthCard variant="wellness" className="p-6">
        <Label className="text-lg font-semibold mb-4 block">Quick Metrics</Label>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="water" className="text-sm mb-2 block">Water (glasses)</Label>
            <Input id="water" type="number" placeholder="8" className="text-center" />
          </div>
          <div>
            <Label htmlFor="sleep" className="text-sm mb-2 block">Sleep (hours)</Label>
            <Input id="sleep" type="number" placeholder="7.5" className="text-center" />
          </div>
        </div>
      </HealthCard>

      {/* Voice Note Option */}
      <HealthCard className="p-6">
        <div className="text-center">
          <Button variant="outline" size="lg" className="rounded-full">
            <Mic className="mr-2" size={20} />
            Record Voice Note
          </Button>
          <p className="text-xs text-muted-foreground mt-2">
            Speak your thoughts instead of typing
          </p>
        </div>
      </HealthCard>

      {/* Submit Button */}
      <div className="sticky bottom-20 pt-4">
        <Button 
          onClick={handleSubmitLog}
          size="lg" 
          className="w-full rounded-2xl shadow-glow bg-primary hover:bg-primary/90"
        >
          <Send className="mr-2" size={20} />
          Save Today's Log
        </Button>
      </div>
    </div>
  );
};

export default DailyLog;