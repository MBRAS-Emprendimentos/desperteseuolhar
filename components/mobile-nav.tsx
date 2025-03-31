"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="lg:hidden">
      <button 
        onClick={() => setIsOpen(true)} 
        className="text-white p-1 hover:text-premium-gold transition-colors" 
        aria-label="Open menu"
      >
        <Menu className="h-6 w-6" />
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-premium-navy-deep z-50 flex flex-col">
          {/* Header: Close Button Only */}
          <div className="flex justify-end items-center p-4 border-b border-premium-gold/20 h-[60px]">
            <button 
              onClick={() => setIsOpen(false)} 
              className="text-white hover:text-premium-gold transition-colors p-1" 
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex-1 overflow-y-auto py-12">
            <nav className="flex flex-col items-center justify-start gap-8">
              <Link
                href="#event"
                className="text-xl uppercase tracking-wider text-premium-light hover:text-premium-gold transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Evento
              </Link>
              <Link
                href="#schedule"
                className="text-xl uppercase tracking-wider text-premium-light hover:text-premium-gold transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Programação
              </Link>
              <Link
                href="#gallery"
                className="text-xl uppercase tracking-wider text-premium-light hover:text-premium-gold transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Galeria
              </Link>
              <Link
                href="#rsvp"
                className="text-xl uppercase tracking-wider text-premium-light hover:text-premium-gold transition-colors"
                onClick={() => setIsOpen(false)}
              >
                RSVP
              </Link>
            </nav>
          </div>
          
          {/* Footer */}
          <div className="p-4 text-center text-premium-light/50 text-sm border-t border-premium-gold/20">
            <p>2025 Benx • Ferrari • MBRAS</p>
          </div>
        </div>
      )}
    </div>
  )
}
