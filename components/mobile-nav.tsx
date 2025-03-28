"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="md:hidden">
      <button onClick={() => setIsOpen(true)} className="text-white" aria-label="Open menu">
        <Menu className="h-6 w-6" />
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black z-50 flex flex-col">
          <div className="flex justify-end p-6">
            <button onClick={() => setIsOpen(false)} className="text-white" aria-label="Close menu">
              <X className="h-6 w-6" />
            </button>
          </div>

          <nav className="flex flex-col items-center justify-center flex-1 gap-8">
            <Link
              href="#event"
              className="text-2xl uppercase tracking-wider hover:text-[#DCAA70] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Evento
            </Link>
            <Link
              href="#schedule"
              className="text-2xl uppercase tracking-wider hover:text-[#DCAA70] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Programação
            </Link>
            <Link
              href="#gallery"
              className="text-2xl uppercase tracking-wider hover:text-[#DCAA70] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Galeria
            </Link>
            <Link
              href="#rsvp"
              className="text-2xl uppercase tracking-wider hover:text-[#DCAA70] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              RSVP
            </Link>
          </nav>
        </div>
      )}
    </div>
  )
}

