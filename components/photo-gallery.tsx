"use client"

import { useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"

export function PhotoGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const images = [
    {
      src: "https://placehold.co/800x600/A58D6F/FFF?text=Vista+Rooftop",
      alt: "Vista do Rooftop de São Paulo",
    },
    {
      src: "https://placehold.co/800x600/A58D6F/FFF?text=Ferrari",
      alt: "Apresentação Ferrari",
    },
    {
      src: "https://placehold.co/800x600/A58D6F/FFF?text=Interior",
      alt: "Interior de Luxo",
    },
    {
      src: "https://placehold.co/800x600/A58D6F/FFF?text=Gastronomia",
      alt: "Experiência Gastronômica",
    },
    {
      src: "https://placehold.co/800x600/A58D6F/FFF?text=Noite",
      alt: "Atmosfera Noturna",
    },
    {
      src: "https://placehold.co/800x600/A58D6F/FFF?text=Detalhes",
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
              src={image.src}
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
              src={images[selectedImage].src}
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
