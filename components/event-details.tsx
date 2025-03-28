import { TelescopeIcon as Binoculars, Camera, Users, MapPin } from "lucide-react"

export function EventDetails() {
  const details = [
    {
      icon: <Users className="h-8 w-8 text-[#DCAA70]" />,
      title: "Experiência em Grupos",
      description:
        "Suba ao rooftop em pequenos grupos de 10 a 15 pessoas, garantindo uma experiência íntima e personalizada.",
    },
    {
      icon: <MapPin className="h-8 w-8 text-[#DCAA70]" />,
      title: "Desvende São Paulo",
      description:
        "Explore a cidade com o auxílio de um guia especializado, descobrindo ícones visuais da Capital Paulista.",
    },
    {
      icon: <Binoculars className="h-8 w-8 text-[#DCAA70]" />,
      title: "Observação Detalhada",
      description:
        "Utilize binóculos e telescópios para observar detalhes fascinantes da paisagem urbana de São Paulo.",
    },
    {
      icon: <Camera className="h-8 w-8 text-[#DCAA70]" />,
      title: "Estação Fotográfica",
      description:
        "Eternize este momento único em uma estação fotográfica especialmente montada com a deslumbrante cidade como cenário.",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      {details.map((item, index) => (
        <div
          key={index}
          className="bg-black/30 p-6 border border-[#DCAA70]/20 hover:border-[#DCAA70]/50 transition-colors"
        >
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 mt-1">{item.icon}</div>
            <div>
              <h3 className="text-xl font-medium text-[#DCAA70] mb-2">{item.title}</h3>
              <p className="opacity-80">{item.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

