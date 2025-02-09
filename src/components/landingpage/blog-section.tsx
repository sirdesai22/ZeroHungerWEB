import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function BlogSection() {
  return (
    <section className="py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-800 sm:text-4xl">Recent Stories</h2>
          <p className="mt-4 text-lg leading-8 text-zinc-600">
            Learn about our impact and the latest developments in food donation.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <Card key={post.id} className="flex flex-col overflow-hidden border-none shadow-md">
              <div className="flex-1">
                <Image
                  src={post.imageUrl || "/placeholder.svg"}
                  alt={post.title}
                  width={800}
                  height={400}
                  className="aspect-[16/9] w-full object-cover"
                />
                <CardContent className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-x-4 text-xs">
                    <time dateTime={post.datetime} className="text-zinc-500">
                      {post.date}
                    </time>
                    <span className="relative z-10 rounded-full bg-emerald-50 px-3 py-1.5 font-medium text-emerald-600">
                      {post.category}
                    </span>
                  </div>
                  <div className="group relative flex flex-1 flex-col">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-zinc-800">
                      <a href={post.href}>
                        <span className="absolute inset-0" />
                        {post.title}
                      </a>
                    </h3>
                    <p className="mt-5 text-sm leading-6 text-zinc-600">{post.description}</p>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button variant="outline" className="border-sky-600 text-sky-600 hover:bg-sky-50">
            View All Posts
          </Button>
        </div>
      </div>
    </section>
  )
}

const posts = [
  {
    id: 1,
    title: "Restaurant Chain Donates 10,000 Meals in First Month",
    href: "https://sirdesaiexe.notion.site/Local-Restaurant-Chain-Spice-Route-Eats-Feeds-Thousands-in-First-Month-of-Giving-Back-Initiative-195dcc2ca7c4801eb8a3d911846c036f?pvs=4",
    description: "Local restaurant chain sets new record for food donations, helping hundreds of families in need.",
    imageUrl: "/placeholder.svg?height=400&width=800",
    date: "Mar 16, 2024",
    datetime: "2024-03-16",
    category: "Success Story",
  },
  {
    id: 2,
    title: "How Technology is Revolutionizing Food Donation",
    href: "https://sirdesaiexe.notion.site/How-Technology-is-Revolutionizing-Food-Donation-195dcc2ca7c480599c79c1222f815fd6?pvs=4",
    description: "Discover how our platform is making it easier than ever for restaurants to connect with NGOs.",
    imageUrl: "/placeholder.svg?height=400&width=800",
    date: "Mar 12, 2024",
    datetime: "2024-03-12",
    category: "Technology",
  },
  {
    id: 3,
    title: "NGO Spotlight: Food For All Foundation",
    href: "https://sirdesaiexe.notion.site/NGO-Spotlight-Food-For-All-Foundation-Nourishing-Communities-One-Meal-at-a-Time-195dcc2ca7c480829e42e6b872219fa4?pvs=4",
    description: "Meet the NGO that has distributed over 50,000 meals to those in need through our platform.",
    imageUrl: "/placeholder.svg?height=400&width=800",
    date: "Mar 9, 2024",
    datetime: "2024-03-09",
    category: "Community",
  },
]

