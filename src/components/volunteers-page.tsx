"use client"

import { useState } from "react"
import { Search, Users, Utensils, Menu, Heart, Clock, Mail, MoreVertical } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import type { Volunteer } from "@/types/volunteers"

// Sample data
const volunteers: Volunteer[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    email: "sarah.j@example.com",
    avatar: "/placeholder.svg?height=100&width=100",
    role: "Kitchen Lead",
    status: "active",
    joinedDate: "2023-01-15",
    hoursContributed: 120,
    mealsServed: 450,
    availability: ["Monday", "Wednesday", "Saturday"],
    skills: ["Cooking", "Team Leadership", "Food Safety"],
  },
  {
    id: "2",
    name: "Michael Chen",
    email: "m.chen@example.com",
    avatar: "/placeholder.svg?height=100&width=100",
    role: "Food Server",
    status: "active",
    joinedDate: "2023-03-20",
    hoursContributed: 85,
    mealsServed: 340,
    availability: ["Tuesday", "Thursday", "Sunday"],
    skills: ["Service", "Communication"],
  },
  {
    id: "3",
    name: "Emma Wilson",
    email: "emma.w@example.com",
    avatar: "/placeholder.svg?height=100&width=100",
    role: "Prep Cook",
    status: "inactive",
    joinedDate: "2023-02-10",
    hoursContributed: 60,
    mealsServed: 240,
    availability: ["Friday", "Saturday"],
    skills: ["Food Prep", "Inventory Management"],
  },
  {
    id: "4",
    name: "James Martinez",
    email: "j.martinez@example.com",
    avatar: "/placeholder.svg?height=100&width=100",
    role: "Kitchen Assistant",
    status: "active",
    joinedDate: "2023-04-05",
    hoursContributed: 95,
    mealsServed: 380,
    availability: ["Monday", "Wednesday", "Friday"],
    skills: ["Cooking", "Cleaning", "Organization"],
  },
  // Add more volunteers as needed
]

export function VolunteersPage() {
  const [isSidebarOpen, setSidebarOpen] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")

  const filteredVolunteers = volunteers.filter(
    (volunteer) =>
      volunteer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      volunteer.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      volunteer.role.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        {/* Sidebar */}
        <aside className={`bg-white border-r w-1/4 min-h-screen p-6 ${isSidebarOpen ? "" : "hidden"}`}>
          <div className="flex items-center gap-2 mb-8">
            <Utensils className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold text-primary">FoodShare</h1>
          </div>

          <nav className="space-y-2">
            {[
              { name: "Dashboard", icon: Menu },
              { name: "Volunteers", icon: Users, active: true },
              { name: "Donations", icon: Heart },
              { name: "Meals", icon: Utensils },
            ].map((item) => (
              <button
                key={item.name}
                className={`flex items-center gap-3 w-full p-3 rounded-lg text-left ${
                  item.active ? "bg-primary text-white" : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <item.icon className="h-5 w-5" />
                {item.name}
              </button>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800">Volunteers</h2>
              <Button className="bg-primary hover:bg-primary/90">Add New Volunteer</Button>
            </div>

            {/* Search Bar */}
            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search volunteers..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Volunteers Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredVolunteers.map((volunteer) => (
                <Card key={volunteer.id} className="overflow-hidden">
                  <CardHeader className="border-b bg-gray-50/50 space-y-0 pb-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={volunteer.avatar} />
                          <AvatarFallback>
                            {volunteer.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <CardTitle className="text-lg">{volunteer.name}</CardTitle>
                          <p className="text-sm text-muted-foreground">{volunteer.role}</p>
                        </div>
                      </div>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" className="h-8 w-8 p-0">
                            <MoreVertical className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>View Profile</DropdownMenuItem>
                          <DropdownMenuItem>Edit Details</DropdownMenuItem>
                          <DropdownMenuItem className="text-red-600">Remove</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4">
                    <div className="space-y-4">
                      {/* Contact & Status */}
                      <div className="space-y-2">
                        <div className="flex items-center text-sm">
                          <Mail className="h-4 w-4 mr-2 text-gray-400" />
                          {volunteer.email}
                        </div>
                        <div className="flex items-center text-sm">
                          <Clock className="h-4 w-4 mr-2 text-gray-400" />
                          Joined {new Date(volunteer.joinedDate).toLocaleDateString()}
                        </div>
                        <Badge
                          variant={volunteer.status === "active" ? "default" : "secondary"}
                          className={
                            volunteer.status === "active"
                              ? "bg-green-100 text-green-800 hover:bg-green-100"
                              : "bg-gray-100 text-gray-800 hover:bg-gray-100"
                          }
                        >
                          {volunteer.status.charAt(0).toUpperCase() + volunteer.status.slice(1)}
                        </Badge>
                      </div>

                      {/* Stats */}
                      <div className="grid grid-cols-2 gap-4 pt-2">
                        <div className="space-y-1">
                          <p className="text-sm text-muted-foreground">Hours</p>
                          <p className="text-xl font-bold">{volunteer.hoursContributed}</p>
                        </div>
                        <div className="space-y-1">
                          <p className="text-sm text-muted-foreground">Meals Served</p>
                          <p className="text-xl font-bold">{volunteer.mealsServed}</p>
                        </div>
                      </div>

                      {/* Skills */}
                      <div className="space-y-2">
                        <p className="text-sm text-muted-foreground">Skills</p>
                        <div className="flex flex-wrap gap-2">
                          {volunteer.skills.map((skill) => (
                            <Badge key={skill} variant="outline" className="bg-gray-50">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

