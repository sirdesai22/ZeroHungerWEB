"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { Heart, Users, Utensils, Menu } from "lucide-react"
import { useState } from "react"
import { useRouter } from "next/navigation"

// Sample data for the chart
const chartData = [
  { month: "Jan", meals: 120, donations: 45 },
  { month: "Feb", meals: 150, donations: 55 },
  { month: "Mar", meals: 180, donations: 60 },
  { month: "Apr", meals: 220, donations: 80 },
  { month: "May", meals: 250, donations: 90 },
  { month: "Jun", meals: 280, donations: 100 },
]

export default function DashboardPage() {
  const [isSidebarOpen, setSidebarOpen] = useState(true)
  const router=useRouter();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Layout */}
      <div className="flex">
        {/* Sidebar */}
        <aside className={`bg-white border-r w-1/4 min-h-screen p-6 ${isSidebarOpen ? "" : "hidden"}`}>
          <div className="flex items-center gap-2 mb-8">
            <Utensils className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold text-primary">ZeroHunger</h1>
          </div>

          <nav className="space-y-2">
            {[
              { name: "Dashboard", icon: Menu, active: true ,href:"/admin/dashboard" },
              { name: "Volunteers", icon: Users,href:"/admin/volunteers" },
              // { name: "Donations", icon: Heart,href:"/admin/donations" },
              // { name: "Meals", icon: Utensils,href:"/admin/meals" },
            ].map((item) => (
              <button
                key={item.name}
                className={`flex items-center gap-3 w-full p-3 rounded-lg text-left ${
                  item.active ? "bg-primary text-white" : "text-gray-600 hover:bg-gray-100"
                }`}
                onClick={() => {router.push(item.href)}}
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
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Dashboard Overview</h2>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-lg font-medium text-muted-foreground">Total Meals Served</CardTitle>
                  <Heart className="h-4 w-4 text-primary" />
                </CardHeader>
                <CardContent>
                  <div className="text-6xl font-bold">273</div>
                  <p className="text-xs text-muted-foreground"></p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-lg font-medium text-muted-foreground">Food Saved</CardTitle>
                  <Utensils className="h-4 w-4 text-primary" />
                </CardHeader>
                <CardContent>
                  <div className="text-6xl font-bold">35%</div>
                  <p className="text-xs text-muted-foreground"></p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-lg font-medium text-muted-foreground">Active Users</CardTitle>
                  <Users className="h-4 w-4 text-primary" />
                </CardHeader>
                <CardContent>
                  <div className="text-6xl font-bold">57</div>
                  <p className="text-xs text-muted-foreground"></p>
                </CardContent>
              </Card>
            </div>

            {/* Chart */}
            <Card>
              <CardHeader>
                <CardTitle>Monthly Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[400px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={chartData}>
                      <XAxis dataKey="month" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                      <YAxis
                        stroke="#888888"
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                        tickFormatter={(value) => `${value}`}
                      />
                      <Tooltip />
                      <Line type="monotone" dataKey="meals" stroke="#2E7D32" strokeWidth={2} name="Meals Served" />
                      <Line type="monotone" dataKey="donations" stroke="#4CAF50" strokeWidth={2} name="Donations" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}

