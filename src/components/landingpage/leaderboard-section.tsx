import { Medal } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function LeaderboardSection() {
  return (
    <section className="px-6 py-24 sm:py-32 lg:px-8 bg-white">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl mb-16 text-zinc-800">
          Impact Leaders
        </h2>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Restaurants Leaderboard */}
          <Card className="p-6 border-emerald-100 bg-emerald-50/50">
            <h3 className="text-2xl font-semibold mb-8 text-center text-emerald-800">Top Donor Restaurants</h3>
            <div className="space-y-6">
              {restaurantLeaders.map((restaurant, index) => (
                <div
                  key={restaurant.name}
                  className="flex items-center gap-4 p-4 rounded-lg bg-white shadow-sm transition-transform hover:scale-102"
                >
                  {index < 3 && (
                    <Medal
                      className={`h-6 w-6 ${
                        index === 0 ? "text-yellow-500" : index === 1 ? "text-zinc-400" : "text-amber-600"
                      }`}
                    />
                  )}
                  <div className="flex-1 min-w-0">
                    <p className="font-medium truncate text-zinc-800">{restaurant.name}</p>
                    <div className="mt-2 flex items-center gap-2">
                      <Progress value={restaurant.progress} className="h-2 bg-emerald-100 [&>div]:bg-emerald-500" />
                      <span className="text-sm text-emerald-600 whitespace-nowrap">{restaurant.donations} meals</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* NGOs Leaderboard */}
          <Card className="p-6 border-sky-100 bg-sky-50/50">
            <h3 className="text-2xl font-semibold mb-8 text-center text-sky-800">Most Active NGOs</h3>
            <div className="space-y-6">
              {ngoLeaders.map((ngo, index) => (
                <div
                  key={ngo.name}
                  className="flex items-center gap-4 p-4 rounded-lg bg-white shadow-sm transition-transform hover:scale-102"
                >
                  {index < 3 && (
                    <Medal
                      className={`h-6 w-6 ${
                        index === 0 ? "text-yellow-500" : index === 1 ? "text-zinc-400" : "text-amber-600"
                      }`}
                    />
                  )}
                  <div className="flex-1 min-w-0">
                    <p className="font-medium truncate text-zinc-800">{ngo.name}</p>
                    <div className="mt-2 flex items-center gap-2">
                      <Progress value={ngo.progress} className="h-2 bg-sky-100 [&>div]:bg-sky-500" />
                      <span className="text-sm text-sky-600 whitespace-nowrap">{ngo.collections} pickups</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}

const restaurantLeaders = [
  { name: "The Green Kitchen", donations: "1,234", progress: 100 },
  { name: "Pasta Paradise", donations: "956", progress: 77 },
  { name: "Spice Garden", donations: "845", progress: 68 },
  { name: "Fresh Bites Café", donations: "678", progress: 55 },
  { name: "Ocean Delights", donations: "543", progress: 44 },
]

const ngoLeaders = [
  { name: "Food For All Foundation", collections: "789", progress: 100 },
  { name: "Helping Hands NGO", collections: "654", progress: 83 },
  { name: "Care & Share Initiative", collections: "543", progress: 69 },
  { name: "Hope Meals Society", collections: "432", progress: 55 },
  { name: "Community Food Bank", collections: "321", progress: 41 },
]

