"use client";
import { UtensilsCrossed, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export default function HeroSection() {
  const router = useRouter();
  return (
    <section className="relative overflow-hidden px-6 py-24 sm:py-32 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.emerald.100),white)]" />
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          Connecting <span className="text-emerald-600">Surplus</span> with{" "}
          <span className="text-sky-600">Purpose</span>
        </h1>
        <p className="mt-6 text-lg leading-8 text-zinc-600">
          A platform where restaurants can donate surplus food to NGOs at 10% of cost, making a difference in society
          while reducing waste.
        </p>
        <div className="mt-10 flex items-center justify-center gap-6">
          <Button onClick={() => {router.push('/admin/dashboard')}} size="lg" className="gap-2 bg-emerald-600 hover:bg-emerald-700">
            Get Started <UtensilsCrossed className="h-4 w-4" />
          </Button>
          {/* <Button size="lg" variant="outline" className="gap-2 border-sky-600 text-sky-600 hover:bg-sky-50">
            Join as NGO <Heart className="h-4 w-4" />
          </Button> */}
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3 lg:gap-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center justify-center rounded-xl bg-white/80 p-8 shadow-sm"
            >
              <dt className="text-base leading-7 text-zinc-600">{stat.label}</dt>
              <dd className="mt-2 text-3xl font-bold tracking-tight text-emerald-600">{stat.value}</dd>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const stats = [
  { label: "Meals Donated", value: "200K+" },
  { label: "Active Restaurants", value: "500+" },
  { label: "NGO Partners", value: "100+" },
]

