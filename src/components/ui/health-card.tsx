import { ReactNode } from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface HealthCardProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "wellness" | "energy" | "calm" | "vitality";
}

const cardVariants = {
  default: "bg-card shadow-sm",
  wellness: "bg-gradient-to-br from-emerald-50/80 to-teal-50/80 shadow-soft",
  energy: "bg-gradient-to-br from-orange-50/80 to-yellow-50/80 shadow-soft",
  calm: "bg-gradient-to-br from-purple-50/80 to-pink-50/80 shadow-soft",
  vitality: "bg-gradient-to-br from-green-50/80 to-emerald-50/80 shadow-soft",
};

export const HealthCard = ({ children, className, variant = "default" }: HealthCardProps) => {
  return (
    <Card className={cn(
      "border-border/50 backdrop-blur-sm transition-all duration-300 hover:shadow-lg",
      cardVariants[variant],
      className
    )}>
      {children}
    </Card>
  );
};