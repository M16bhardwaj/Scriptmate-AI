// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Send,
  Menu,
  MessageSquare,
  Settings,
  LogOut,
  Plus,
  Search,
} from "lucide-react";

const Chat = () => {
  const [user, setUser] = useState(null);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));
    if (!userData) {
      navigate("/login");
    } else {
      setUser(userData);
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    try {
      setLoading(true);
      setError(null);
      setMessages((prev) => [...prev, { role: "user", content: input }]);

      const response = await fetch("http://localhost:5000/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({ message: input }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || `HTTP error! status: ${response.status}`
        );
      }

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.message },
      ]);
    } catch (error) {
      console.error("Error:", error);
      setError(error.message);
    } finally {
      setLoading(false);
      setInput("");
    }
  };

  if (!user) return null;

  return (
    <div className="flex h-screen bg-zinc-950">
      {/* Sidebar */}
      <div
        className={`${
          sidebarOpen ? "w-80" : "w-0"
        } bg-zinc-900 border-r border-zinc-800 transition-all duration-300 overflow-hidden`}
      >
        <div className="p-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <MessageSquare className="h-6 w-6 text-purple-500" />
            <h1 className="text-xl font-semibold text-white">scriptmate</h1>
          </div>
          <button
            className="p-2 rounded-md text-zinc-400 hover:bg-zinc-800 hover:text-zinc-100"
            onClick={() => setSidebarOpen(false)}
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
        <div className="p-4">
          <button className="w-full flex items-center justify-start gap-2 px-4 py-2 bg-zinc-800 text-white rounded-md hover:bg-zinc-700">
            <Plus className="h-4 w-4" />
            New Chat
          </button>
        </div>
        <div className="px-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
            <input
              className="w-full pl-9 pr-4 py-2 bg-zinc-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Search chats..."
            />
          </div>
        </div>
        <div className="h-[calc(100vh-12rem)] overflow-auto px-4 py-6">
          <div className="space-y-2">
            {messages.length > 0 &&
              Array.from(
                new Set(messages.map((m) => m.content.slice(0, 30)))
              ).map((preview, i) => (
                <button
                  key={i}
                  className="w-full text-left px-4 py-2 rounded-md hover:bg-zinc-800 text-zinc-300"
                >
                  <div className="flex items-center gap-2">
                    <MessageSquare className="h-4 w-4 text-zinc-400" />
                    <span className="truncate">{preview}</span>
                  </div>
                </button>
              ))}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-zinc-900 border-t border-zinc-800">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center text-white font-semibold">
              {user.firstName[0]}
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-white">
                {user.firstName} {user.lastName}
              </p>
              <p className="text-xs text-zinc-400">{user.email}</p>
            </div>
            <button className="p-2 rounded-md text-zinc-400 hover:bg-zinc-800 hover:text-zinc-100">
              <Settings className="h-4 w-4" />
            </button>
            <button
              className="p-2 rounded-md text-zinc-400 hover:bg-zinc-800 hover:text-zinc-100"
              onClick={() => {
                localStorage.clear();
                navigate("/login");
              }}
            >
              <LogOut className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {!sidebarOpen && (
          <button
            className="absolute top-4 left-4 p-2 rounded-md text-zinc-400 hover:bg-zinc-800 hover:text-zinc-100"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu className="h-5 w-5" />
          </button>
        )}

        <div className="flex-1 overflow-auto p-4">
          <div className="max-w-3xl mx-auto space-y-4">
            {messages.length === 0 ? (
              <div className="text-center mt-20">
                <MessageSquare className="h-12 w-12 mx-auto text-purple-500 mb-4" />
                <h2 className="text-2xl font-semibold text-white mb-2">
                  Welcome to scriptmate
                </h2>
                <p className="text-zinc-400">
                  Start a conversation to generate scripts and get assistance.
                </p>
              </div>
            ) : (
              messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg ${
                    message.role === "user"
                      ? "bg-purple-500/10 ml-12"
                      : "bg-zinc-800 mr-12"
                  }`}
                >
                  <p className="text-zinc-200">{message.content}</p>
                </div>
              ))
            )}
            {error && (
              <div className="p-4 rounded-lg bg-red-500/10 mr-12">
                <p className="text-red-400">Error: {error}</p>
              </div>
            )}
          </div>
        </div>

        <div className="p-4 border-t border-zinc-800">
          <form onSubmit={handleSubmit} className="max-w-3xl mx-auto relative">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="w-full pr-12 pl-4 py-2 bg-zinc-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              disabled={loading}
            />
            <button
              type="submit"
              className="absolute right-1 top-1 p-2 bg-purple-500 text-white rounded-md hover:bg-purple-600 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={loading}
            >
              <Send className="h-4 w-4" />
              <span className="sr-only">Send message</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Chat;
