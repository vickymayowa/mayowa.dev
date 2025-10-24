"use client"

import { Trash2, Mail } from "lucide-react"
import { useState } from "react"

interface Message {
  id: number
  name: string
  email: string
  message: string
  date: string
}

const initialMessages: Message[] = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    message: "Great portfolio! I'd love to discuss a project opportunity.",
    date: "2025-01-15",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    message: "Your work is impressive. Let's connect on LinkedIn.",
    date: "2025-01-14",
  },
]

export default function AdminMessagesTab() {
  const [messages, setMessages] = useState<Message[]>(initialMessages)
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null)

  const handleDelete = (id: number) => {
    setMessages(messages.filter((m) => m.id !== id))
    setSelectedMessage(null)
  }

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {/* Messages List */}
      <div className="md:col-span-1">
        <div className="space-y-2">
          {messages.length === 0 ? (
            <div className="card text-center py-8">
              <Mail className="mx-auto mb-2 text-foreground/50" size={32} />
              <p className="text-foreground/70">No messages yet</p>
            </div>
          ) : (
            messages.map((msg) => (
              <button
                key={msg.id}
                onClick={() => setSelectedMessage(msg)}
                className={`w-full text-left p-4 rounded-lg border transition-all ${
                  selectedMessage?.id === msg.id
                    ? "bg-primary/20 border-primary"
                    : "bg-card border-border hover:border-primary"
                }`}
              >
                <p className="font-semibold text-sm">{msg.name}</p>
                <p className="text-xs text-foreground/60 truncate">{msg.email}</p>
                <p className="text-xs text-foreground/50 mt-1">{msg.date}</p>
              </button>
            ))
          )}
        </div>
      </div>

      {/* Message Detail */}
      <div className="md:col-span-2">
        {selectedMessage ? (
          <div className="card">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="font-semibold">{selectedMessage.name}</h3>
                <p className="text-sm text-foreground/70">{selectedMessage.email}</p>
                <p className="text-xs text-foreground/50 mt-1">{selectedMessage.date}</p>
              </div>
              <button
                onClick={() => handleDelete(selectedMessage.id)}
                className="p-2 hover:bg-error/20 text-error rounded-lg transition-colors"
              >
                <Trash2 size={18} />
              </button>
            </div>
            <div className="border-t border-border pt-4">
              <p className="text-foreground/80 whitespace-pre-wrap">{selectedMessage.message}</p>
            </div>
          </div>
        ) : (
          <div className="card text-center py-12">
            <Mail className="mx-auto mb-2 text-foreground/50" size={32} />
            <p className="text-foreground/70">Select a message to view details</p>
          </div>
        )}
      </div>
    </div>
  )
}
