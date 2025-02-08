import { Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"

export default function ContactSection() {
  return (
    <section className="py-24 sm:py-32 bg-emerald-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-800 sm:text-4xl">Get in Touch</h2>
          <p className="mt-4 text-lg leading-8 text-zinc-600">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-8 sm:mt-20 lg:grid-cols-2">
          <Card className="p-8 border-none shadow-md">
            <form>
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-zinc-700">
                    Name
                  </label>
                  <Input type="text" id="name" className="mt-2" placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-zinc-700">
                    Email
                  </label>
                  <Input type="email" id="email" className="mt-2" placeholder="you@example.com" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-zinc-700">
                    Message
                  </label>
                  <Textarea id="message" rows={4} className="mt-2" placeholder="Your message" />
                </div>
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Send Message</Button>
              </div>
            </form>
          </Card>

          <div className="space-y-8">
            {contactInfo.map((item) => (
              <Card key={item.name} className="border-none shadow-md">
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-600">
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-zinc-800">{item.name}</h3>
                    <p className="mt-2 text-zinc-600">{item.value}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

const contactInfo = [
  {
    name: "Email",
    value: "contact@foodconnect.com",
    icon: Mail,
  },
  {
    name: "Phone",
    value: "+1 (555) 000-0000",
    icon: Phone,
  },
  {
    name: "Address",
    value: "123 Food Connect Street, City, Country",
    icon: MapPin,
  },
]

