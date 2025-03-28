"use client"

import { useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"

export function PhotoGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const images = [
    {
      src: "/images/gallery-1.jpg",
      alt: "Vista do Rooftop de São Paulo",
    },
    {
      src: "/images/gallery-2.jpg",
      alt: "Apresentação Ferrari",
    },
    {
      src: "/images/gallery-3.jpg",
      alt: "Interior de Luxo",
    },
    {
      src: "/images/gallery-4.jpg",
      alt: "Experiência Gastronômica",
    },
    {
      src: "/images/gallery-5.jpg",
      alt: "Atmosfera Noturna",
    },
    {
      src: "/images/gallery-6.jpg",
      alt: "Detalhes Arquitetônicos",
    },
  ]

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="aspect-[4/3] relative overflow-hidden group cursor-pointer"
            onClick={() => setSelectedImage(index)}
          >
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300"></div>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-12 h-12 rounded-full bg-[#DCAA70] flex items-center justify-center">
                <span className="text-black text-xl">+</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white"
            aria-label="Close gallery"
          >
            <X className="h-8 w-8" />
          </button>

          <div className="relative w-full max-w-4xl aspect-[16/9]">
            <Image
              src={images[selectedImage].src || "/placeholder.svg"}
              alt={images[selectedImage].alt}
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </>
  )
}

