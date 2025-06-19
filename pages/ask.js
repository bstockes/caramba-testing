import { useState } from 'react';
import Layout from '../components/Layout';
import { FiCamera, FiMic } from 'react-icons/fi';

export default function Ask() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { from: 'carly', text: "Hi! I'm Carly 👋 — how can I help you with your vehicle today?" }
  ]);

  const sample = [
    "What type of oil does my car need?",
    "When should I rotate my tires?",
    "Why is my engine overheating?"
  ];

  const send = (text) => {
    if (!text.trim()) return;
    setMessages(prev => [...prev, { from: 'user', text }, { from: 'carly', text: 'Thanks! I’ll get back soon. (demo)' }]);
    setInput('');
  };

  return (
    <Layout title="Ask Carly">
      <h2 className="text-xl font-semibold mb-2">Ask Carly</h2>

      {/* chat box */}
      <div className="border rounded p-3 h-64 overflow-y-auto bg-white mb-4">
        {messages.map((m,i)=>(
          <div key={i} className={`mb-2 ${m.from==='user'?'text-right':'text-left'}`}>
            <span className={`inline-block px-3 py-2 rounded ${m.from==='user'?'bg-blue-100 text-blue-800':'bg-gray-100'}`}>
              {m.text}
            </span>
          </div>
        ))}
      </div>

      {/* input row */}
      <div className="relative mb-4">
        <input
          className="w-full border rounded-full py-2 px-4 pr-16"
          placeholder="Ask Carly..."
          value={input}
          onChange={e=>setInput(e.target.value)}
          onKeyDown={e=>e.key==='Enter' && send(input)}
        />
        <div className="absolute right-4 top-1/2 -translate-y-1/2 flex gap-3 text-xl text-gray-600">
          <FiCamera className="cursor-pointer" onClick={()=>alert('Camera demo')} />
          <FiMic className="cursor-pointer" onClick={()=>alert('Voice demo')} />
        </div>
      </div>

      {/* suggestions */}
      <div className="flex flex-wrap gap-2">
        {sample.map((q,i)=>(
          <button key={i} onClick={()=>send(q)} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
            {q}
          </button>
        ))}
      </div>
    </Layout>
  );
}