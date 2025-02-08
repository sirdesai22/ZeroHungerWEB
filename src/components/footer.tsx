import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-zinc-900">
      <div className="mx-auto max-w-7xl px-6 py-12 md:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <span className="bg-emerald-600 text-white px-2 py-1 rounded-md text-lg font-bold">ZH</span>
              <span className="text-xl font-semibold text-white">Zero Hunger</span>
            </Link>
            <p className="text-sm leading-6 text-zinc-300">
              Connecting restaurants with NGOs to reduce food waste and fight hunger, one meal at a time.
            </p>
            <div className="flex space-x-6">
              {socialLinks.map((item) => (
                <Link key={item.name} href={item.href} className="text-zinc-400 hover:text-zinc-300">
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Platform</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {platformLinks.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-zinc-300 hover:text-white">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">Company</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {companyLinks.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-zinc-300 hover:text-white">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Resources</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {resourceLinks.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-zinc-300 hover:text-white">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">Legal</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {legalLinks.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-zinc-300 hover:text-white">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-zinc-400">
            &copy; {new Date().getFullYear()} Zero Hunger. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

const socialLinks = [
  {
    name: "Facebook",
    href: "#",
    icon: Facebook,
  },
  {
    name: "Twitter",
    href: "#",
    icon: Twitter,
  },
  {
    name: "Instagram",
    href: "#",
    icon: Instagram,
  },
  {
    name: "LinkedIn",
    href: "#",
    icon: Linkedin,
  },
]

const platformLinks = [
  { name: "How it Works", href: "#" },
  { name: "For Restaurants", href: "#" },
  { name: "For NGOs", href: "#" },
  { name: "Pricing", href: "#" },
]

const companyLinks = [
  { name: "About Us", href: "#" },
  { name: "Careers", href: "#" },
  { name: "News", href: "#" },
  { name: "Impact", href: "#" },
]

const resourceLinks = [
  { name: "Blog", href: "#" },
  { name: "Partners", href: "#" },
  { name: "Success Stories", href: "#" },
  { name: "FAQs", href: "#" },
]

const legalLinks = [
  { name: "Privacy Policy", href: "#" },
  { name: "Terms of Service", href: "#" },
  { name: "Cookie Policy", href: "#" },
  { name: "Contact", href: "#" },
]

