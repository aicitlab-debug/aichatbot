import { Bot, User } from "lucide-react";
import { cn } from "@/lib/utils";

interface ChatMessageProps {
  content: string;
  role: "user" | "assistant";
  isTyping?: boolean;
}

export const ChatMessage = ({ content, role, isTyping }: ChatMessageProps) => {
  const isUser = role === "user";

  return (
    <div
      className={cn(
        "flex gap-3 animate-fade-in",
        isUser ? "flex-row-reverse" : "flex-row"
      )}
    >
      {/* Avatar */}
      <div
        className={cn(
          "flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center shadow-surface-sm",
          isUser ? "gradient-primary" : "bg-card border border-border"
        )}
      >
        {isUser ? (
          <User className="w-4 h-4 text-primary-foreground" />
        ) : (
          <Bot className="w-4 h-4 text-primary" />
        )}
      </div>

      {/* Message Bubble */}
      <div
        className={cn(
          "max-w-[75%] px-4 py-3 rounded-2xl shadow-chat",
          isUser
            ? "bg-chat-user text-chat-user-foreground rounded-tr-md"
            : "bg-chat-ai text-chat-ai-foreground rounded-tl-md"
        )}
      >
        {isTyping ? (
          <div className="flex items-center gap-1.5 py-1 px-1">
            <div className="w-2 h-2 rounded-full bg-current opacity-60 animate-pulse-dot" />
            <div className="w-2 h-2 rounded-full bg-current opacity-60 animate-pulse-dot-delay-1" />
            <div className="w-2 h-2 rounded-full bg-current opacity-60 animate-pulse-dot-delay-2" />
          </div>
        ) : (
          <p className="text-[15px] leading-relaxed whitespace-pre-wrap">{content}</p>
        )}
      </div>
    </div>
  );
};
