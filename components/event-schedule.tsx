import { Sunset, Music, Wine, Gift } from "lucide-react"

export function EventSchedule() {
  const scheduleItems = [
    {
      icon: <Sunset className="h-5 w-5 text-black" />,
      time: "17:30 - 19:30",
      title: "Sunset Experience",
      description:
        "Maravilhe-se com o pôr do sol mais encantador da metrópole paulistana, num momento mágico e inspirador.",
    },
    {
      icon: <Music className="h-5 w-5 text-black" />,
      time: "19:00 - 00:30",
      title: "Música Exclusiva",
      description: "Aproveite uma atmosfera sofisticada e vibrante ao som dos renomados DJ Marcelo Ometto / Aline Rocha.",
    },
    {
      icon: <Wine className="h-5 w-5 text-black" />,
      time: "18:30 - 00:30",
      title: "Experiência Gastronômica",
      description:
        "Saboreie petiscos gourmet selecionados, que combinam o melhor da culinária paulistana e internacional. Deguste bebidas refrescantes e participe de um brinde especial com champanhe.",
    },
    {
      icon: <Gift className="h-5 w-5 text-black" />,
      time: "22:00 - 00:30",
      title: "Lembrança Exclusiva",
      description:
        "Cada convidado receberá uma lembrança personalizada, seja uma foto impressa ou um livreto comemorativo, eternizando a memória desta noite singular.",
    },
  ]

  return (
    <div className="space-y-8">
      {scheduleItems.map((item, index) => (
        <div key={index} className="flex gap-6">
          <div className="flex-shrink-0 w-24 md:w-32 flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-[#DCAA70] flex items-center justify-center">{item.icon}</div>
            {index < scheduleItems.length - 1 && <div className="w-px h-full bg-[#DCAA70]/30 my-2"></div>}
          </div>
          <div className="flex-1 pb-8">
            <div className="text-[#DCAA70] font-bold mb-1">{item.time}</div>
            <h3 className="text-xl font-light mb-2">{item.title}</h3>
            <p className="opacity-70">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

