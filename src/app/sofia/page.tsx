"use client";

import { useState, useRef, useEffect } from "react";

interface Message {
  id: string;
  content: string;
  role: "user" | "assistant";
  timestamp: Date;
}

export default function Sofia() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "¡Hola! I'm Sofia, your digital concierge for Hacienda Pinilla in Tamarindo, Costa Rica. How can I help you today?",
      role: "assistant",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue.trim(),
      role: "user",
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: inputValue.trim(),
          messages: [...messages, userMessage],
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to get response");
      }

      const reader = response.body?.getReader();
      if (!reader) throw new Error("No response body");

      let assistantMessage = "";
      const assistantMessageId = (Date.now() + 1).toString();

      // Add empty assistant message first
      setMessages(prev => [...prev, {
        id: assistantMessageId,
        content: "",
        role: "assistant",
        timestamp: new Date(),
      }]);

      // Stream the response
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = new TextDecoder().decode(value);
        const lines = chunk.split("\n");

        for (const line of lines) {
          if (line.startsWith("data: ")) {
            const data = line.slice(6);
            if (data === "[DONE]") continue;
            
            try {
              const parsed = JSON.parse(data);
              if (parsed.content) {
                assistantMessage += parsed.content;
                setMessages(prev => 
                  prev.map(msg => 
                    msg.id === assistantMessageId 
                      ? { ...msg, content: assistantMessage }
                      : msg
                  )
                );
              }
            } catch {
              // Ignore parsing errors for incomplete chunks
            }
          }
        }
      }
    } catch (error) {
      console.error("Error:", error);
      setMessages(prev => [...prev, {
        id: Date.now().toString(),
        content: "I'm sorry, I'm having trouble connecting right now. Please try again in a moment.",
        role: "assistant",
        timestamp: new Date(),
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{ 
      fontFamily: "system-ui, -apple-system, sans-serif",
      backgroundColor: "#f5f5f5",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column"
    }}>
      {/* Header */}
      <header style={{
        backgroundColor: "white",
        padding: "1rem",
        borderBottom: "1px solid #e5e5e5",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
      }}>
        <h1 style={{
          fontSize: "1.5rem",
          fontWeight: "600",
          color: "#333",
          margin: 0,
          textAlign: "center"
        }}>
          Sofia – Hacienda Pinilla Concierge
        </h1>
      </header>

      {/* Chat Messages */}
      <div style={{
        flex: 1,
        overflowY: "auto",
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        gap: "1rem"
      }}>
        {messages.map((message) => (
          <div
            key={message.id}
            style={{
              display: "flex",
              justifyContent: message.role === "user" ? "flex-end" : "flex-start",
              marginBottom: "0.5rem"
            }}
          >
            <div
              style={{
                maxWidth: "70%",
                padding: "0.75rem 1rem",
                borderRadius: "1rem",
                backgroundColor: message.role === "user" ? "#007AFF" : "white",
                color: message.role === "user" ? "white" : "#333",
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                border: message.role === "assistant" ? "1px solid #e5e5e5" : "none"
              }}
            >
              <div style={{ whiteSpace: "pre-wrap", lineHeight: "1.4" }}>
                {message.content}
              </div>
              {message.content === "" && isLoading && (
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <div style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    backgroundColor: "#007AFF",
                    animation: "pulse 1.5s ease-in-out infinite"
                  }}></div>
                  <div style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    backgroundColor: "#007AFF",
                    animation: "pulse 1.5s ease-in-out infinite 0.2s"
                  }}></div>
                  <div style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    backgroundColor: "#007AFF",
                    animation: "pulse 1.5s ease-in-out infinite 0.4s"
                  }}></div>
                </div>
              )}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Form */}
      <form
        onSubmit={handleSubmit}
        style={{
          backgroundColor: "white",
          padding: "1rem",
          borderTop: "1px solid #e5e5e5",
          display: "flex",
          gap: "0.75rem",
          alignItems: "flex-end"
        }}
      >
                 <input
                   type="text"
                   value={inputValue}
                   onChange={(e) => setInputValue(e.target.value)}
                   placeholder="Ask Sofia about bookings, transport, activities..."
                   disabled={isLoading}
                   style={{
                     flex: 1,
                     padding: "0.75rem",
                     border: "1px solid #e5e5e5",
                     borderRadius: "1rem",
                     fontSize: "1rem",
                     outline: "none",
                     backgroundColor: isLoading ? "#f9f9f9" : "white",
                     color: "#333",
                     placeholderColor: "#999"
                   }}
                 />
        <button
          type="submit"
          disabled={!inputValue.trim() || isLoading}
          style={{
            padding: "0.75rem 1.5rem",
            backgroundColor: "#007AFF",
            color: "white",
            border: "none",
            borderRadius: "1rem",
            fontSize: "1rem",
            fontWeight: "500",
            cursor: isLoading ? "not-allowed" : "pointer",
            opacity: (!inputValue.trim() || isLoading) ? 0.5 : 1,
            transition: "opacity 0.2s"
          }}
        >
          {isLoading ? "..." : "Send"}
        </button>
      </form>

      <style jsx>{`
        @keyframes pulse {
          0%, 80%, 100% {
            opacity: 0.3;
          }
          40% {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
