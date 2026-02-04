import { Bot, Lightbulb, MessageSquare, Zap } from "lucide-react";

interface SuggestionProps {
  icon: React.ReactNode;
  text: string;
  onClick: () => void;
}

const Suggestion = ({ icon, text, onClick }: SuggestionProps) => (
  <button
    onClick={onClick}
    className="flex items-center gap-3 p-3 bg-card border border-border rounded-xl shadow-surface-sm hover:shadow-surface-md hover:border-primary/30 transition-all duration-200 text-left group"
  >
    <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors">
      {icon}
    </div>
    <span className="text-sm text-foreground font-medium">{text}</span>
  </button>
);

interface WelcomeMessageProps {
  onSuggestionClick: (message: string) => void;
}

export const WelcomeMessage = ({ onSuggestionClick }: WelcomeMessageProps) => {
  const suggestions = [
    {
      icon: <Lightbulb className="w-4 h-4 text-accent" />,
      text: "Explain something to me",
    },
    {
      icon: <MessageSquare className="w-4 h-4 text-primary" />,
      text: "Help me with a problem",
    },
    {
      icon: <Zap className="w-4 h-4 text-yellow-500" />,
      text: "Give me creative ideas",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 animate-slide-up">
      <div className="w-20 h-20 rounded-3xl gradient-primary flex items-center justify-center shadow-surface-lg mb-6">
        <Bot className="w-10 h-10 text-primary-foreground" />
      </div>
      
      <h2 className="font-display font-bold text-2xl text-foreground mb-2 text-center">
        Hi there! 👋
      </h2>
      <p className="text-muted-foreground text-center max-w-md mb-8">
        I'm your friendly AI assistant. Ask me anything and I'll do my best to help you out!
      </p>

      <div className="w-full max-w-md space-y-3">
        <p className="text-sm font-medium text-muted-foreground text-center mb-4">
          Try asking me to...
        </p>
        {suggestions.map((suggestion, index) => (
          <Suggestion
            key={index}
            icon={suggestion.icon}
            text={suggestion.text}
            onClick={() => onSuggestionClick(suggestion.text)}
          />
        ))}
      </div>
    </div>
  );
};
