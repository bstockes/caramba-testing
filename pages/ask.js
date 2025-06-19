import { useState } from 'react'

export default function AskCarly() {
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([
    { from: 'carly', text: "Hi! I'm Carly 👋 — how can I help you with your vehicle today?" }
  ])
  const sampleQuestions = [
    "What oil does my car need?",
    "When should I rotate my tires?",
    "What does this light mean?"
  ]

  const handleSend = () => {
    if (!input.trim()) return
    setMessages([...messages, { from: 'user', text: input }])
    setInput('')
  }

  return (
    <div className="space-y-6 py-6">
      <div className="space-y-2">
        {messages.map((msg, idx) => (
          <div key={idx} className={`p-3 rounded-xl ${msg.from === 'carly' ? 'bg-blue-100 text-left' : 'bg-green-100 text-right'}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <div className="flex items-center gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask me anything..."
          className="flex-1 border p-2 rounded"
        />
        <button onClick={handleSend} className="bg-blue-500 text-white px-4 py-2 rounded">Send</button>
      </div>
      <div className="pt-4 space-x-2">
        {sampleQuestions.map((q, i) => (
          <button key={i} onClick={() => setInput(q)} className="bg-gray-200 text-sm rounded-full px-3 py-1">{q}</button>
        ))}
      </div>
    </div>
  )
}