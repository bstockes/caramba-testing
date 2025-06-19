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
    setMessages([...messages, { from: 'user', text }, { from: 'carly', text: "Thanks for your question! Let me look that up. 🔍" }]);
    setInput('');
  };

  return (
    <Layout>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #ccc', borderRadius: '8px', padding: '8px' }}>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask Carly..."
            style={{ flex: 1, border: 'none', outline: 'none', fontSize: '16px' }}
          />
          <button onClick={() => sendMessage(input)} style={{ background: 'none', border: 'none', fontSize: '20px' }}>📷</button>
          <button onClick={() => sendMessage("voice")} style={{ background: 'none', border: 'none', fontSize: '20px' }}>🎤</button>
        </div>

        <div>
          {suggestedQuestions.map((q, i) => (
            <button key={i} onClick={() => sendMessage(q)} style={{
              margin: '5px',
              padding: '8px 12px',
              borderRadius: '20px',
              border: '1px solid #ddd',
              background: '#fff',
              cursor: 'pointer'
            }}>{q}</button>
          ))}
        </div>

        <div>
          {messages.map((msg, i) => (
            <div key={i} style={{
              background: msg.from === 'carly' ? '#eee' : '#daf5ff',
              alignSelf: msg.from === 'carly' ? 'flex-start' : 'flex-end',
              padding: '10px',
              borderRadius: '10px',
              marginBottom: '5px'
            }}>
              {msg.text}
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}