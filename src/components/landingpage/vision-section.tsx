import { Leaf, Heart, Globe } from "lucide-react"

export default function VisionSection() {
  return (
    <section className="py-24 sm:py-32 bg-emerald-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-800 sm:text-4xl">Our Vision</h2>
          <p className="mt-6 text-lg leading-8 text-zinc-600">
            Creating a sustainable future by connecting surplus food with those in need, while building a community of
            conscious restaurants and dedicated NGOs.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col items-center text-center">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-600">
                  <feature.icon className="h-8 w-8 text-white" aria-hidden="true" />
                </div>
                <dt className="text-xl font-semibold leading-7 text-zinc-800">{feature.name}</dt>
                <dd className="mt-4 flex flex-auto flex-col leading-7 text-zinc-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}

const features = [
  {
    name: "Reduce Food Waste",
    description:
      "Transform surplus food into meaningful meals, reducing waste and environmental impact while helping those in need.",
    icon: Leaf,
  },
  {
    name: "Community Impact",
    description:
      "Build stronger communities by connecting restaurants with local NGOs, creating a network of caring organizations.",
    icon: Heart,
  },
  {
    name: "Sustainable Future",
    description:
      "Create a model for sustainable food distribution that can be replicated globally, making a lasting impact on hunger.",
    icon: Globe,
  },
]

