"use client"

import { useState } from "react"
import { LogOut, Plus, Edit2, MessageSquare } from "lucide-react"
import AdminProjectsTab from "./admin-projects-tab"
import AdminExperienceTab from "./admin-experience-tab"
import AdminMessagesTab from "./admin-messages-tab"

interface AdminDashboardProps {
  onLogout: () => void
}

type TabType = "projects" | "experience" | "messages"

export default function AdminDashboard({ onLogout }: AdminDashboardProps) {
  const [activeTab, setActiveTab] = useState<TabType>("projects")

  const tabs = [
    { id: "projects", label: "Projects", icon: Plus },
    { id: "experience", label: "Experience", icon: Edit2 },
    { id: "messages", label: "Messages", icon: MessageSquare },
  ]

  return (
    <div className="section-container">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="mb-2">Admin Dashboard</h1>
          <p className="text-foreground/70">Manage your portfolio content</p>
        </div>
        <button
          onClick={onLogout}
          className="flex items-center gap-2 px-4 py-2 bg-error/20 text-error hover:bg-error/30 rounded-lg transition-colors"
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-8 border-b border-border">
        {tabs.map((tab) => {
          const Icon = tab.icon
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as TabType)}
              className={`flex items-center gap-2 px-4 py-3 border-b-2 transition-colors ${
                activeTab === tab.id
                  ? "border-primary text-primary"
                  : "border-transparent text-foreground/70 hover:text-foreground"
              }`}
            >
              <Icon size={18} />
              {tab.label}
            </button>
          )
        })}
      </div>

      {/* Tab Content */}
      <div>
        {activeTab === "projects" && <AdminProjectsTab />}
        {activeTab === "experience" && <AdminExperienceTab />}
        {activeTab === "messages" && <AdminMessagesTab />}
      </div>
    </div>
  )
}
