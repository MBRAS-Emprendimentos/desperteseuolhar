import Image from "next/image"
import Link from "next/link"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { RSVPForm } from "@/components/rsvp-form"
import { EventSchedule } from "@/components/event-schedule"
import { PhotoGallery } from "@/components/photo-gallery"
import { MobileNav } from "@/components/mobile-nav"
import { EventDetails } from "@/components/event-details"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-premium-navy text-white">
      {/* Hero Section */}
      <header className="relative h-screen">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/sao-paulo-sunset.jpg"
            alt="São Paulo Skyline at Sunset"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-premium-navy/80 to-premium-navy-deep/90" />
        </div>

        {/* Navigation */}
        <div className="relative z-10 container mx-auto px-4 py-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-4">
              <Image src="/images/mbras-logo2.png" alt="MBRAS Logo" width={50} height={50} className="h-12 w-auto" />
              <Image src="/images/ferrari-logo.jpg" alt="Ferrari Logo" width={40} height={40} className="h-10 w-auto" />
              <Image src="https://www.benx.com.br/_images/logo.png" alt="Benx Logo" width={40} height={40} className="h-10 w-auto" />
            </div>
            <div className="h-6 w-px bg-gradient-to-b from-premium-light to-premium-gold" />
            <span className="text-xl font-light tracking-wider">ARBÓREA VISTA JARDIM EUROPA</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#event" className="text-sm uppercase tracking-wider hover:text-premium-warm transition-colors">
              Evento
            </Link>
            <Link href="#schedule" className="text-sm uppercase tracking-wider hover:text-premium-deep transition-colors">
              Programação
            </Link>
            <Link href="#gallery" className="text-sm uppercase tracking-wider hover:text-premium-light transition-colors">
              Galeria
            </Link>
            <Link href="#rsvp" className="text-sm uppercase tracking-wider hover:text-premium-gold transition-colors">
              RSVP
            </Link>
          </nav>

          {/* Mobile Navigation Trigger */}
          <MobileNav />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light mb-4">
              DESPERTE SEU
              <span className="block font-bold bg-gradient-to-r from-premium-deep via-premium-gold to-premium-light bg-clip-text text-transparent">OLHAR</span>
            </h1>
            <p className="text-xl md:text-2xl font-light mb-2">Uma Despedida Exclusiva</p>
            <p className="text-lg md:text-xl opacity-90 mb-8">
              Participe de uma experiência inesquecível ao despedir-se da vista mais inspiradora de São Paulo antes do
              renascimento magnífico do Arbórea Vista Jardim Europa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-gradient-to-r from-premium-gold to-premium-warm hover:from-premium-warm hover:to-premium-gold text-premium-navy-deep rounded-none px-8 py-6 transition-all duration-300">
                CONFIRMAR PRESENÇA
              </Button>
              <Button
                variant="outline"
                className="border-premium-gold text-premium-gold hover:bg-premium-gold/10 hover:text-premium-light rounded-none px-8 py-6 transition-all duration-300"
              >
                EXPLORAR EVENTO
              </Button>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-pulse">
            <span className="text-sm uppercase tracking-widest text-premium-light">Rolar para Baixo</span>
            <ChevronDown className="h-6 w-6 text-premium-gold" />
          </div>
        </div>
      </header>

      {/* Event Details Section */}
      <section id="event" className="py-20 bg-gradient-to-b from-premium-navy to-premium-navy-light">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-light mb-2">
                SOBRE O <span className="text-transparent bg-gradient-to-r from-premium-gold to-premium-light bg-clip-text font-bold">EVENTO</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-premium-gold to-premium-light mb-8"></div>
              <p className="text-lg opacity-80 mb-6">
                Participe de uma experiência inesquecível ao despedir-se da vista mais inspiradora de São Paulo antes do
                renascimento magnífico do Arbórea Vista Jardim Europa. Uma colaboração exclusiva entre MBRAS, Ferrari e
                Benx proporciona uma noite singular que combina sofisticação, emoção e elegância, homenageando o passado
                e abrindo caminho para um futuro ainda mais grandioso.
              </p>

              <div className="grid grid-cols-2 gap-6 mt-10">
                <div className="border-l-2 border-premium-warm pl-4 group hover:border-premium-light transition-all duration-300">
                  <h3 className="text-premium-warm group-hover:text-premium-light text-lg font-bold transition-all duration-300">DATA</h3>
                  <p className="opacity-90">02 de Abril, 2025</p>
                </div>
                <div className="border-l-2 border-premium-deep pl-4 group hover:border-premium-light transition-all duration-300">
                  <h3 className="text-premium-deep group-hover:text-premium-light text-lg font-bold transition-all duration-300">HORÁRIO</h3>
                  <p className="opacity-90">17:30 - 00:30</p>
                </div>
                <div className="border-l-2 border-premium-gold pl-4 group hover:border-premium-light transition-all duration-300">
                  <h3 className="text-premium-gold group-hover:text-premium-light text-lg font-bold transition-all duration-300">LOCAL</h3>
                  <p className="opacity-90">Av 9 de Julho 5229, Rooftop</p>
                </div>
                <div className="border-l-2 border-premium-light pl-4 group hover:border-premium-gold transition-all duration-300">
                  <h3 className="text-premium-light group-hover:text-premium-gold text-lg font-bold transition-all duration-300">TRAJE</h3>
                  <p className="opacity-90">Traje Elegante</p>
                </div>
              </div>
            </div>
            <div className="relative h-[500px] w-full">
              <Image src="/images/rooftop-venue.jpg" alt="Luxury Rooftop Venue" fill className="object-cover" />
              <div className="absolute inset-0 bg-premium-navy/20"></div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-premium-navy-deep to-transparent h-1/3"></div>
              <div className="absolute bottom-6 left-6 flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-premium-gold to-premium-warm flex items-center justify-center">
                  <span className="text-premium-navy-deep font-bold">SP</span>
                </div>
                <span className="text-sm uppercase tracking-wider">São Paulo, Brasil</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Details */}
      <section className="py-20 bg-premium-navy-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-light text-center mb-2">
            EXPERIÊNCIA <span className="text-transparent bg-gradient-to-r from-premium-warm to-premium-deep bg-clip-text font-bold">EXCLUSIVA</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-premium-warm to-premium-deep mx-auto mb-16"></div>

          <EventDetails />
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="py-20 bg-gradient-to-b from-premium-navy-light to-premium-navy">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-light text-center mb-2">
            PROGRAMAÇÃO <span className="text-transparent bg-gradient-to-r from-premium-deep to-premium-light bg-clip-text font-bold">ESPECIAL</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-premium-deep to-premium-light mx-auto mb-16"></div>

          <EventSchedule />
        </div>
      </section>

      {/* Ferrari Showcase */}
      <section className="py-20 bg-premium-navy relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image src="/images/ferrari-pattern.jpg" alt="Ferrari Pattern" fill className="object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <Image
                src="/images/ferrari-showcase.jpg"
                alt="Ferrari Showcase"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
            <div className="md:w-1/2">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <Image src="/images/mbras-logo2.png" alt="MBRAS Logo" width={50} height={50} className="h-12 w-auto" />
                  <Image
                    src="/images/ferrari-logo.jpg"
                    alt="Ferrari Logo"
                    width={60}
                    height={60}
                    className="h-14 w-auto"
                  />
                  <Image src="https://www.benx.com.br/_images/logo.png" alt="Benx Logo" width={40} height={40} className="h-10 w-auto" />
                </div>
                <h2 className="text-3xl md:text-4xl font-light">
                  LUXO E <span className="text-transparent bg-gradient-to-r from-premium-light to-premium-warm bg-clip-text font-bold">INOVAÇÃO</span>
                </h2>
              </div>
              <div className="w-20 h-1 bg-gradient-to-r from-premium-light to-premium-warm mb-8"></div>
              <p className="text-lg opacity-80 mb-6">
                Encante-se com a exposição de dois carros Ferrari na entrada do evento, símbolos máximos de elegância e
                exclusividade que refletem o espírito inovador do Arbórea.
              </p>
              <p className="text-lg opacity-80 mb-8">
                Uma experiência especial de test drive estará disponível para convidados selecionados após o evento,
                mediante agendamento.
              </p>
              <Button className="bg-gradient-to-r from-premium-deep to-premium-gold hover:from-premium-gold hover:to-premium-deep text-premium-navy-deep rounded-none px-8 py-6 transition-all duration-300">SAIBA MAIS</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section id="gallery" className="py-20 bg-gradient-to-b from-premium-navy to-premium-navy-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-light text-center mb-2">
            GALERIA DE <span className="text-transparent bg-gradient-to-r from-premium-gold to-premium-warm bg-clip-text font-bold">FOTOS</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-premium-gold to-premium-warm mx-auto mb-16"></div>

          <PhotoGallery />
        </div>
      </section>

      {/* RSVP Section */}
      <section id="rsvp" className="py-20 bg-premium-navy-deep relative">
        <div className="absolute inset-0 z-0">
          <Image src="/images/sao-paulo-night.jpg" alt="São Paulo at Night" fill className="object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-br from-premium-navy-deep/70 to-premium-navy/80"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto bg-premium-navy-deep/50 p-8 md:p-12 backdrop-blur-sm border border-premium-gold/20 shadow-[0_0_15px_rgba(205,138,79,0.15)]">
            <h2 className="text-3xl md:text-4xl font-light text-center mb-2">
              CONFIRME SUA <span className="text-transparent bg-gradient-to-r from-premium-warm via-premium-gold to-premium-light bg-clip-text font-bold">PRESENÇA</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-premium-warm via-premium-gold to-premium-light mx-auto mb-8"></div>
            <p className="text-center opacity-80 mb-8">
              Celebre conosco essa transição simbólica, onde sua energia se mistura à essência do novo Arbórea Vista
              Jardim Europa.
            </p>
            <RSVPForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-premium-navy-deep border-t border-premium-gold/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-4">
              <Image src="/images/mbras-logo2.png" alt="MBRAS Logo" width={30} height={30} className="h-8 w-auto" />
              <Image src="/images/ferrari-logo.jpg" alt="Ferrari Logo" width={30} height={30} className="h-8 w-auto" />
              <Image src="https://www.benx.com.br/_images/logo.png" alt="Benx Logo" width={30} height={30} className="h-8 w-auto" />
              <div className="h-6 w-px bg-gradient-to-b from-premium-light to-premium-gold" />
              <span className="text-lg font-light tracking-wider">ARBÓREA VISTA JARDIM EUROPA</span>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-6">
              <Link href="#" className="text-sm uppercase tracking-wider hover:text-premium-warm transition-colors">
                Política de Privacidade
              </Link>
              <Link href="#" className="text-sm uppercase tracking-wider hover:text-premium-deep transition-colors">
                Termos e Condições
              </Link>
              <Link href="#" className="text-sm uppercase tracking-wider hover:text-premium-light transition-colors">
                Contato
              </Link>
            </div>

            <div className="text-sm opacity-70"> 2023 MBRAS, Ferrari e Benx. Todos os direitos reservados.</div>
          </div>
        </div>
      </footer>
    </div>
  )
}
