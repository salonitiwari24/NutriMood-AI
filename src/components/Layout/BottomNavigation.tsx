import { Home, Plus, BarChart3, History, User } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";

const navItems = [
  { icon: Home, label: "Home", path: "/" },
  { icon: Plus, label: "Log", path: "/log" },
  { icon: BarChart3, label: "Insights", path: "/insights" },
  { icon: History, label: "History", path: "/history" },
  { icon: User, label: "Profile", path: "/profile" },
];

export const BottomNavigation = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border/50 backdrop-blur-sm">
      <div className="flex items-center justify-around px-2 py-2">
        {navItems.map(({ icon: Icon, label, path }) => {
          const isActive = location.pathname === path;
          return (
            <button
              key={path}
              onClick={() => navigate(path)}
              className={cn(
                "flex flex-col items-center gap-1 px-3 py-2 rounded-2xl transition-all duration-300",
                isActive
                  ? "text-primary bg-primary/10 shadow-lg"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
              )}
            >
              <Icon size={20} strokeWidth={isActive ? 2.5 : 2} />
              <span className="text-xs font-medium">{label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};