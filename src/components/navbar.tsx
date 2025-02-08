"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-200">
      <nav className="mx-auto max-w-7xl px-6 lg:px-8" aria-label="Global">
        <div className="flex items-center justify-between py-4">
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2">
              <span className="bg-emerald-600 text-white px-2 py-1 rounded-md text-lg font-bold">ZH</span>
              <span className="text-xl font-semibold text-zinc-900">Zero Hunger</span>
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-zinc-700"
              onClick={() => setIsOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-zinc-900 hover:text-emerald-600 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-4">
            <Button variant="outline" className="border-sky-600 text-sky-600 hover:bg-sky-50">
              Sign in
            </Button>
            <Button className="bg-emerald-600 hover:bg-emerald-700">Get Started</Button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`lg:hidden ${isOpen ? "fixed inset-0 z-50" : "hidden"}`}>
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-zinc-900/10">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2">
                <span className="bg-emerald-600 text-white px-2 py-1 rounded-md text-lg font-bold">ZH</span>
                <span className="text-xl font-semibold text-zinc-900">Zero Hunger</span>
              </Link>
              <button type="button" className="-m-2.5 rounded-md p-2.5 text-zinc-700" onClick={() => setIsOpen(false)}>
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-zinc-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-zinc-900 hover:bg-zinc-50"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6 space-y-3">
                  <Button variant="outline" className="w-full border-sky-600 text-sky-600 hover:bg-sky-50">
                    Sign in
                  </Button>
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Get Started</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "#about" },
  { name: "How It Works", href: "#how-it-works" },
  { name: "Impact", href: "#impact" },
  { name: "Blog", href: "#blog" },
  { name: "Contact", href: "#contact" },
]

