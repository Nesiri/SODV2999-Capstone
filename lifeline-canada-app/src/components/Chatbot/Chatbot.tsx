// components/Chatbot.tsx
import React, { useState } from 'react';
import { Bot, X, Send, ExternalLink, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { chatbotResponses } from './chatbotResponses';

interface Message {
  text: string;
  isUser: boolean;
  isEscalation?: boolean;
  links?: Array<{ name: string; path?: string; description?: string }>;
}

interface ChatbotProps {
  onClose: () => void;
  onCrisisDetected?: () => void;
}

const Chatbot: React.FC<ChatbotProps> = ({ onClose, onCrisisDetected }) => {
  const [messages, setMessages] = useState<Message[]>([
    { 
      text: "Hi there. I'm here to support you. How can I help you today?", 
      isUser: false,
      links: [
        { name: "Mental Health Resources", path: "/resources", description: "Find help and information" },
        { name: "Pattern Interrupts", path: "/pattern-interrupts", description: "Break negative cycles" },
        { name: "Crisis Support", path: "/incrisisneedhelp", description: "Get help now" }
      ]
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  // Find the best matching response from the rules
  const findResponse = (userMessage: string): { response: string; requiresEscalation: boolean; links?: Array<{ name: string; path?: string; description?: string }> } => {
    const message = userMessage.toLowerCase();
    
    // Sort rules by priority (highest first)
    const sortedRules = [...chatbotResponses].sort((a, b) => (b.priority || 0) - (a.priority || 0));
    
    // Find first rule that matches any keyword
    for (const rule of sortedRules) {
      if (rule.keywords[0] === "default") continue;
      
      for (const keyword of rule.keywords) {
        if (message.includes(keyword.toLowerCase())) {
          return {
            response: rule.response,
            requiresEscalation: rule.requiresEscalation || false,
            links: rule.links
          };
        }
      }
    }
    
    // Return default response if no match found
    const defaultRule = chatbotResponses.find(rule => rule.keywords[0] === "default");
    return {
      response: defaultRule?.response || "I'm here to help. If you're in crisis, please call or text 988 immediately.",
      requiresEscalation: false,
      links: defaultRule?.links
    };
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage = inputMessage;
    
    // Add user message
    setMessages(prev => [...prev, { text: userMessage, isUser: true }]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate API call delay
    setTimeout(() => {
      const { response, requiresEscalation, links } = findResponse(userMessage);
      
      setMessages(prev => [...prev, { 
        text: response, 
        isUser: false,
        isEscalation: requiresEscalation,
        links: links
      }]);
      setIsTyping(false);
      
      // Trigger crisis detection callback if needed
      if (requiresEscalation && onCrisisDetected) {
        onCrisisDetected();
      }
    }, 600);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleCrisisButton = () => {
    window.location.href = 'tel:988';
  };

  // Helper to render links - handles both clickable and non-clickable items
  const renderLinks = (links: Array<{ name: string; path?: string; description?: string }>) => {
    return (
      <div className="mt-3 space-y-2">
        {links.map((link, idx) => {
          // Check if link has a valid path (non-empty and not "#")
          const hasValidPath = link.path && link.path !== "#" && link.path.trim() !== "";
          
          // External links (http, https, tel, sms)
          if (hasValidPath && (link.path!.startsWith('http') || link.path!.startsWith('tel:') || link.path!.startsWith('sms:'))) {
            return (
              <a
                key={idx}
                href={link.path}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-2 bg-purple-50 hover:bg-purple-100 rounded-lg transition group cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-sm font-medium text-purple-700">{link.name}</span>
                    {link.description && (
                      <p className="text-xs text-gray-500">{link.description}</p>
                    )}
                  </div>
                  <ExternalLink className="w-4 h-4 text-purple-400 group-hover:text-purple-600" />
                </div>
              </a>
            );
          }
          // Internal links (React Router)
          else if (hasValidPath) {
            return (
              <Link
                key={idx}
                to={link.path!}
                className="block p-2 bg-purple-50 hover:bg-purple-100 rounded-lg transition group cursor-pointer"
              
              >
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-sm font-medium text-purple-700">{link.name}</span>
                    {link.description && (
                      <p className="text-xs text-gray-500">{link.description}</p>
                    )}
                  </div>
                  <ArrowRight className="w-4 h-4 text-purple-400 group-hover:text-purple-600" />
                </div>
              </Link>
            );
          }
          // No path - just informational text (no arrow, no click)
          else {
            return (
              <div key={idx} className="block p-2 bg-gray-50 rounded-lg">
                <div>
                  <span className="text-sm font-medium text-gray-700">{link.name}</span>
                  {link.description && (
                    <p className="text-xs text-gray-500 mt-0.5">{link.description}</p>
                  )}
                </div>
              </div>
            );
          }
        })}
      </div>
    );
  };

  return (
    <>
      {/* Chatbot Header */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 px-5 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Bot className="w-5 h-5 text-white" />
          <div>
            <h3 className="font-semibold text-white text-sm">Support Assistant</h3>
            <p className="text-[10px] text-white/80">Always here to listen</p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="text-black/80 hover:text-purple-600 transition"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
      
      {/* Messages */}
      <div className="h-96 overflow-y-auto p-4 space-y-3 bg-gray-50">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[85%] p-3 rounded-2xl ${
                msg.isUser
                  ? 'bg-purple-500 text-white rounded-br-none'
                  : msg.isEscalation
                    ? 'bg-red-50 border border-red-200 text-red-800 rounded-bl-none'
                    : 'bg-white border border-gray-200 text-gray-700 rounded-bl-none shadow-sm'
              }`}
            >
              <p className="text-sm whitespace-pre-line">{msg.text}</p>
              
              {/* Render links if available */}
              {msg.links && msg.links.length > 0 && renderLinks(msg.links)}
              
              {/* Crisis escalation button */}
              {msg.isEscalation && (
                <button
                  onClick={handleCrisisButton}
                  className="mt-3 text-xs bg-red-500 hover:bg-red-600 text-white px-3 py-1.5 rounded-full transition"
                >
                  Call 988 Now
                </button>
              )}
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-white border border-gray-200 rounded-2xl rounded-bl-none p-3 shadow-sm">
              <div className="flex gap-1">
                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Input */}
      <div className="p-4 border-t border-gray-100 bg-white">
        <div className="flex gap-2">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your message..."
            className="flex-1 p-2 border border-gray-200 rounded-xl focus:outline-none focus:border-purple-400 text-sm"
          />
          <button
            onClick={handleSendMessage}
            disabled={!inputMessage.trim()}
            className="bg-purple-500 hover:bg-purple-600 text-white p-2 rounded-xl transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
        <p className="text-[9px] text-gray-400 text-center mt-2">
          If in crisis, call or text 988 immediately
        </p>
      </div>
    </>
  );
};

export default Chatbot;