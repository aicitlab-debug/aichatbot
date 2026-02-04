import { useState, useRef, useEffect, KeyboardEvent } from "react";
import { Send, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface ChatInputProps {
  onSend: (message: string) => void;
  disabled?: boolean;
}

export const ChatInput = ({ onSend, disabled }: ChatInputProps) => {
  const [message, setMessage] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Auto-resize textarea
  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${Math.min(textarea.scrollHeight, 150)}px`;
    }
  }, [message]);

  const handleSubmit = () => {
    if (message.trim() && !disabled) {
      onSend(message.trim());
      setMessage("");
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className="relative">
      <div className="flex items-end gap-2 p-2 bg-card border border-border rounded-2xl shadow-surface-md transition-all focus-within:ring-2 focus-within:ring-primary/20 focus-within:border-primary/50">
        <div className="flex items-center px-2 pb-2.5">
          <Sparkles className="w-5 h-5 text-accent" />
        </div>
        
        <textarea
          ref={textareaRef}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask me anything..."
          disabled={disabled}
          rows={1}
          className={cn(
            "flex-1 resize-none bg-transparent text-foreground placeholder:text-muted-foreground",
            "text-[15px] leading-relaxed py-2.5 outline-none",
            "disabled:opacity-50 disabled:cursor-not-allowed"
          )}
        />

        <button
          onClick={handleSubmit}
          disabled={!message.trim() || disabled}
          className={cn(
            "flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center",
            "transition-all duration-200 ease-out",
            message.trim() && !disabled
              ? "gradient-primary text-primary-foreground shadow-surface-sm hover:shadow-surface-md hover:scale-105 active:scale-95"
              : "bg-muted text-muted-foreground cursor-not-allowed"
          )}
        >
          <Send className="w-4 h-4" />
        </button>
      </div>
      
      <p className="text-center text-xs text-muted-foreground mt-3">
        Press Enter to send, Shift + Enter for new line
      </p>
    </div>
  );
};
