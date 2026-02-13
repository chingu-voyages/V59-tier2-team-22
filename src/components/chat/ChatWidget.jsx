import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Trash2, Copy, Check } from "lucide-react";
import { useChat } from "../../context/ChatContext";

function ChatWidget() {
  const {
    messages,
    isLoading,
    isChatOpen,
    sendMessage,
    toggleChat,
    clearChat,
  } = useChat();
  const [inputValue, setInputValue] = useState("");
  const [copiedId, setCopiedId] = useState(null);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Focus input when chat opens
  useEffect(() => {
    if (isChatOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isChatOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    sendMessage(inputValue.trim());
    setInputValue("");
  };

  const handleCopy = (text, messageId) => {
    navigator.clipboard.writeText(text);
    setCopiedId(messageId);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleClearChat = () => {
    if (window.confirm("Are you sure you want to clear the chat history?")) {
      clearChat();
    }
  };

  return (
    <>
      {/* Floating Button */}
      {!isChatOpen && (
        <button
          onClick={toggleChat}
          className="fixed bottom-5 right-5 md:bottom-6 md:right-6 bg-yellow-400 hover:bg-yellow-500 text-gray-900 rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 z-50 group cursor-pointer"
          aria-label="Open chat"
        >
          <MessageCircle className="w-6 h-6" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></span>
        </button>
      )}

      {/* Chat Panel */}
      {isChatOpen && (
        <div className="fixed bottom-5 right-5 md:bottom-6 md:right-6 w-[90vw] max-w-95 h-125 md:h-150 bg-white rounded-2xl shadow-2xl flex flex-col z-50 border border-gray-200">
          {/* Header */}
          <div className="bg-yellow-400 text-gray-900 px-6 py-4 rounded-t-2xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <MessageCircle className="w-5 h-5" />
              <h3 className="font-bold">InterviewFlow Assistant</h3>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={handleClearChat}
                className="p-1.5 hover:bg-yellow-500 rounded-lg transition cursor-pointer"
                aria-label="Clear chat"
                title="Clear chat history"
              >
                <Trash2 className="w-4 h-4" />
              </button>
              <button
                onClick={toggleChat}
                className="p-1.5 hover:bg-yellow-500 rounded-lg transition cursor-pointer"
                aria-label="Close chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`group relative max-w-[85%] px-4 py-3 rounded-2xl ${
                    message.role === "user"
                      ? "bg-emerald-600 text-white rounded-br-none"
                      : "bg-white text-gray-800 rounded-bl-none shadow-sm border border-gray-200"
                  }`}
                >
                  <p className="text-sm whitespace-pre-wrap wrap-break-word">
                    {message.content}
                  </p>

                  {/* Copy Button (only for assistant messages) */}
                  {message.role === "assistant" && (
                    <button
                      onClick={() => handleCopy(message.content, message.id)}
                      className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-100 hover:bg-gray-200 rounded-full p-1.5 shadow-md"
                      aria-label="Copy message"
                      title="Copy message"
                    >
                      {copiedId === message.id ? (
                        <Check className="w-3.5 h-3.5 text-green-600" />
                      ) : (
                        <Copy className="w-3.5 h-3.5 text-gray-600" />
                      )}
                    </button>
                  )}
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white text-gray-800 px-4 py-3 rounded-2xl rounded-bl-none shadow-sm border border-gray-200">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                    <span
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    ></span>
                    <span
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.4s" }}
                    ></span>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Form */}
          <form
            onSubmit={handleSubmit}
            className="p-4 bg-white border-t border-gray-200 rounded-b-2xl"
          >
            <div className="flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask me anything..."
                disabled={isLoading}
                className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed text-sm"
              />
              <button
                type="submit"
                disabled={isLoading || !inputValue.trim()}
                className="px-4 py-3 bg-yellow-400 hover:bg-yellow-500 text-gray-900 rounded-xl font-medium transition disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-yellow-400 cursor-pointer"
                aria-label="Send message"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}

export default ChatWidget;
