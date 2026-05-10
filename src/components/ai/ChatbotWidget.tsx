"use client";

import { useState } from "react";
import { useUIStore } from "@/store";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

const suggestedQuestions = [
  "What are the latest AI articles?",
  "Recommend a Next.js tutorial",
  "What topics are trending?",
];

export default function ChatbotWidget() {
  const { chatbotOpen, toggleChatbot } = useUIStore();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "assistant",
      content: "Hi! I'm BlogVerse AI. I can help you find articles, suggest topics, or answer questions about our content. What are you looking for?",
    },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg: Message = { id: Date.now().toString(), role: "user", content: input };
    const botMsg: Message = {
      id: (Date.now() + 1).toString(),
      role: "assistant",
      content: "Thanks for your question! In a production setup, this would connect to an AI backend. For now, try browsing our featured articles or using the search function to find what you need.",
    };
    setMessages((prev) => [...prev, userMsg, botMsg]);
    setInput("");
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={toggleChatbot}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-2xl flex items-center justify-center shadow-glow-lg transition-all duration-300 ${
          chatbotOpen
            ? "bg-bg-elevated border border-glass-border rotate-0"
            : "bg-gradient-to-br from-accent-primary to-accent-tertiary hover:scale-105"
        }`}
        aria-label="Toggle AI assistant"
      >
        {chatbotOpen ? (
          <svg className="w-6 h-6 text-text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
          </svg>
        )}
      </button>

      {/* Chat Panel */}
      {chatbotOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-[380px] max-w-[calc(100vw-2rem)] glass-card overflow-hidden animate-scale-in shadow-glass-lg">
          {/* Header */}
          <div className="px-5 py-4 border-b border-glass-border bg-bg-secondary/50">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-accent-primary to-accent-tertiary flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z" />
                </svg>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-text-primary">BlogVerse AI</h3>
                <p className="text-xs text-success">Online</p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="h-[320px] overflow-y-auto p-4 space-y-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                    msg.role === "user"
                      ? "bg-accent-primary text-white rounded-br-md"
                      : "bg-bg-tertiary text-text-secondary rounded-bl-md"
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}

            {/* Suggested Questions */}
            {messages.length <= 2 && (
              <div className="flex flex-col gap-2">
                {suggestedQuestions.map((q) => (
                  <button
                    key={q}
                    onClick={() => {
                      setInput(q);
                    }}
                    className="text-left text-xs px-3 py-2 rounded-xl border border-glass-border text-text-secondary hover:border-accent-primary/30 hover:text-accent-secondary transition-all"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Input */}
          <div className="px-4 pb-4 pt-2 border-t border-glass-border">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Ask me anything…"
                className="flex-1 bg-bg-tertiary text-sm text-text-primary placeholder-text-muted px-4 py-2.5 rounded-xl outline-none focus:ring-1 focus:ring-accent-primary/30"
              />
              <button
                onClick={handleSend}
                className="p-2.5 rounded-xl bg-accent-primary text-white hover:bg-accent-primary/90 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
