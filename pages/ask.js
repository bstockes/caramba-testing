import { useState } from 'react';
import Layout from '../components/Layout';

export default function AskCarly() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { from: 'carly', text: "Hi! I'm Carly 👋 — how can I help you with your vehicle today?" }
  ]);

  const suggestedQuestions = [
    "What type of oil does my car need?",
    "When should I rotate my tires?",
    "What does this dashboard light mean?"
  ];

  const sendMessage = (text) => {
    if (!text.trim()) return;
    setMessages([
      ...messages,
      { from: 'user', text },
      { from: 'carly', text: "Thanks for your question! Let me look that up. 🔍" }
    ]);
    setInput('');
  };

  return (
    <Layout>
      <div className="max-w-xl mx-auto p-4 flex flex-col gap-4">
        <div className="flex items-center border border-gray-300 rounded-full px-4 py-2 bg-white shadow-sm">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask Carly..."
            className="flex-1 outline-none text-base bg-transparent"
          />
          <button onClick={() => sendMessage(input)} className="text-xl px-2">📷</button>
          <button onClick={() => sendMessage("voice")} className="text-xl">🎤</button>
        </div>

        <div className="flex flex-wrap gap-2">
          {suggestedQuestions.map((q, i) => (
            <button
              key={i}
              onClick={() => sendMessage(q)}
              className="px-4 py-2 rounded-full border border-gray-300 bg-white shadow-sm hover:bg-gray-100 text-sm"
            >
              {q}
            </button>
          ))}
        </div>

        <div className="flex flex-col gap-2 mt-4">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`px-4 py-2 rounded-lg max-w-[75%] ${
                msg.from === 'carly' ? 'bg-gray-100 self-start' : 'bg-blue-100 self-end'
              }`}
            >
              {msg.text}
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}