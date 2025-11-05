"use client"

import { Trash2, Mail } from "lucide-react"
import { useState, useEffect } from "react"
import { LoadingSpinner } from "./loading-spinner"

interface Message {
  id: number
  name: string
  email: string
  message: string
  created_at: string
}

export default function AdminMessagesTab() {
  const [messages, setMessages] = useState<Message[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null)
  const [deletingId, setDeletingId] = useState<number | null>(null)

  useEffect(() => {
    fetchMessages()
  }, [])

  const fetchMessages = async () => {
    try {
      const response = await fetch("/api/contacts")
      const data = await response.json()
      setMessages(data)
    } catch (error) {
      console.error("Error fetching messages:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id: number) => {
    setDeletingId(id)
    try {
      await fetch(`/api/contacts?id=${id}`, { method: "DELETE" })
      fetchMessages()
      setSelectedMessage(null)
    } catch (error) {
      console.error("Error deleting message:", error)
    } finally {
      setDeletingId(null)
    }
  }

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {/* Messages List */}
      <div className="md:col-span-1">
        <div className="space-y-2">
          {loading ? (
            <div className="card text-center py-8">
              <LoadingSpinner size="md" />
              <p className="text-foreground/70 mt-2">Loading messages...</p>
            </div>
          ) : messages.length === 0 ? (
            <div className="card text-center py-8">
              <Mail className="mx-auto mb-2 text-foreground/50" size={32} />
              <p className="text-foreground/70">No messages yet</p>
            </div>
          ) : (
            Array.isArray(messages) && messages.map((msg) => (
              <button
                key={msg.id}
                onClick={() => setSelectedMessage(msg)}
                className={`w-full text-left p-4 rounded-lg border transition-all ${selectedMessage?.id === msg.id
                    ? "bg-primary/20 border-primary"
                    : "bg-card border-border hover:border-primary"
                  }`}
              >
                <p className="font-semibold text-sm">{msg.name}</p>
                <p className="text-xs text-foreground/60 truncate">{msg.email}</p>
                <p className="text-xs text-foreground/50 mt-1">{msg.created_at}</p>
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
                <p className="text-xs text-foreground/50 mt-1">{selectedMessage.created_at}</p>
              </div>
              <button
                onClick={() => handleDelete(selectedMessage.id)}
                className="p-2 hover:bg-error/20 text-error rounded-lg transition-colors disabled:opacity-50"
                disabled={deletingId === selectedMessage.id}
              >
                {deletingId === selectedMessage.id ? <LoadingSpinner size="sm" /> : <Trash2 size={18} />}
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
