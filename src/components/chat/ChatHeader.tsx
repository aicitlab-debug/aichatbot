import { Bot, Sparkles } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

export const ChatHeader = () => {
  return (
    <div className="flex items-center gap-4 px-6 py-4 bg-card/80 backdrop-blur-sm border-b border-border">
      <div className="relative">
        <div className="w-12 h-12 rounded-2xl gradient-primary flex items-center justify-center shadow-surface-md">
          <Bot className="w-6 h-6 text-primary-foreground" />
        </div>
        <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-green-500 border-2 border-card" />
      </div>
      
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <h1 className="font-display font-semibold text-lg text-foreground">
            AI Assistant
          </h1>
          <Sparkles className="w-4 h-4 text-accent" />
        </div>
        <p className="text-sm text-muted-foreground">
          Always here to help you
        </p>
      </div>

      <ThemeToggle />
    </div>
  );
};
