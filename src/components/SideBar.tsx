"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Utensils, Menu, Heart, Users, ChevronLeft, ChevronRight } from "lucide-react"

const navItems = [
  { name: "Dashboard", icon: Menu, href: "/admin/dashboard" },
  { name: "Restaurants", icon: Utensils, href: "/admin/restaurants" },
  { name: "NGOs", icon: Heart, href: "/admin/ngos" },
]

export function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const pathname = usePathname()

  return (
    <aside
      className={`bg-white border-r transition-all duration-300 ease-in-out ${
        isCollapsed ? "w-16" : "w-64"
      } min-h-screen flex flex-col`}
    >
      <div className="p-4 flex items-center justify-between border-b">
        {!isCollapsed && (
          <div className="flex items-center gap-2">
            <Utensils className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold text-primary">ZeroHunger</h1>
          </div>
        )}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-1.5 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
        >
          {isCollapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </button>
      </div>

      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors duration-200
                    ${isActive ? "bg-primary text-white" : "text-gray-600 hover:bg-gray-100"}`}
                >
                  <item.icon className="h-5 w-5" />
                  {!isCollapsed && <span>{item.name}</span>}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </aside>
  )
}

