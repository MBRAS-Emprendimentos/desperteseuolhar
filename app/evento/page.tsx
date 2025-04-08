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
    <div className="flex flex-col min-h-screen bg-premium-navy text-white font-light">
      {/* Hero Section */}
      <header className="relative h-screen">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-vista.jpg"
            alt="São Paulo Skyline at Sunset"
            fill
            className="object-cover"
            priority
          />
          {/* Enhanced gradient overlay with multiple layers for depth */}
          <div className="absolute inset-0 bg-gradient-to-br from-premium-navy/70 via-premium-navy-deep/50 to-premium-navy-deep/75" /> {/* Reduced opacity for lighter overlay */}
          <div className="absolute inset-0 bg-black/20" /> {/* Subtle darkening vignette */}
          <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.5)]" /> {/* Inner shadow for depth */}
        </div>

        {/* Navigation */}
        <div className="relative container mx-auto px-4 md:px-8 py-6 md:py-8 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-5 pr-5">
            <div className="relative transition-transform hover:scale-105 duration-300">
                <Image src="/images/benx-1.PNG" alt="Benx Logo" width={40} height={40} className="h-10 w-auto drop-shadow-lg" />
              </div>    
              <div className="relative transition-transform hover:scale-105 duration-300">
                <Image src="/images/lambo-sp.png" alt="Lamborghini Logo" width={50} height={60} className="h-10 w-auto drop-shadow-lg" />
              </div>
              <div className="relative transition-transform hover:scale-105 duration-300">
                <Image src="/images/mbras-1.PNG" alt="MBRAS Logo" width={50} height={50} className="h-12 w-auto drop-shadow-lg" />
              </div>
            </div>
            {/* <div className="h-8 w-px bg-gradient-to-b from-premium-light via-premium-gold to-premium-light" /> */}
            {/* <span className="text-xl md:text-2xl font-extralight tracking-[0.18em] text-transparent bg-clip-text bg-gradient-to-r from-premium-gold to-premium-warm pl-3">ARBÓREA</span> */}
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            <Link href="#event" className="text-sm uppercase tracking-[0.2em] hover:text-premium-warm transition-colors relative group">
              Evento
              <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-gradient-to-r from-premium-gold to-premium-warm group-hover:w-full transition-all duration-300 ease-in-out"></span>
            </Link>
            <Link href="#schedule" className="text-sm uppercase tracking-[0.2em] hover:text-premium-deep transition-colors relative group">
              Programação
              <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-gradient-to-r from-premium-gold to-premium-warm group-hover:w-full transition-all duration-300 ease-in-out"></span>
            </Link>
            <Link href="#gallery" className="text-sm uppercase tracking-[0.2em] hover:text-premium-light transition-colors relative group">
              Galeria
              <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-gradient-to-r from-premium-gold to-premium-warm group-hover:w-full transition-all duration-300 ease-in-out"></span>
            </Link>
            <Link href="#rsvp" className="text-sm uppercase tracking-[0.2em] hover:text-premium-gold transition-colors relative group">
              RSVP
              <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-gradient-to-r from-premium-gold to-premium-warm group-hover:w-full transition-all duration-300 ease-in-out"></span>
            </Link>
          </nav>

          {/* Mobile Navigation Trigger */}
          <MobileNav />
        </div>

        {/* Hero Content */}
        <div className="relative container mx-auto px-4 md:px-8 h-full flex flex-col justify-center">
          <div className="max-w-2xl">
            <div className="overflow-hidden">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extralight tracking-wide mb-6 transform transition-transform duration-700 ease-out translate-y-0">
                SAVE THE
                <span className="block font-medium bg-gradient-to-r from-premium-deep via-premium-gold to-premium-light bg-clip-text text-transparent drop-shadow-sm pb-1">VIEW</span>
              </h1>
            </div>
            <div className="overflow-hidden">
              <p className="text-xl md:text-2xl font-extralight tracking-wider mb-4 transform transition-transform duration-700 ease-out translate-y-0">Uma Despedida <span className="text-premium-gold">Exclusiva</span></p>
            </div>
            <div className="h-px w-24 bg-gradient-to-r from-premium-gold to-premium-warm mb-8"></div>
            <p className="text-lg md:text-xl opacity-90 mb-10 font-extralight leading-relaxed max-w-xl">
            Participe da experiência inesquecível de despedir-se da vista mais inspiradora de São Paulo antes do
            renascimento magnífico do Arbórea Vista Jardim Europa.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <Button 
                asChild
                className="bg-gradient-to-r from-premium-gold to-premium-warm hover:from-premium-warm hover:to-premium-gold text-premium-navy-deep rounded-none px-8 py-6 transition-all duration-500 text-sm tracking-wider font-normal hover:shadow-[0_5px_15px_rgba(212,175,55,0.3)] transform hover:-translate-y-1"
              >
                <Link href="#rsvp">CONFIRMAR PRESENÇA</Link>
              </Button>
              {/* <Button
                asChild
                variant="outline"
                className="border-premium-gold text-premium-gold hover:bg-premium-gold/10 hover:text-premium-light rounded-none px-8 py-6 transition-all duration-500 text-sm tracking-wider font-normal hover:border-premium-light transform hover:-translate-y-1"
              >
                <Link href="#event">EXPLORAR EVENTO</Link>
              </Button> */}
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-pulse">
            <span className="text-sm uppercase tracking-[0.25em] text-premium-light font-extralight">Rolar para Baixo</span>
            <ChevronDown className="h-6 w-6 text-premium-gold" />
          </div>
        </div>
      </header>

      {/* Event Details Section */}
      <section id="event" className="py-24 bg-gradient-to-b from-premium-navy to-premium-navy-light">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl font-extralight tracking-wide mb-3">
                SOBRE O <span className="text-transparent bg-gradient-to-r from-premium-gold to-premium-light bg-clip-text font-normal">EVENTO</span>
              </h2>
              <div className="w-24 h-px bg-gradient-to-r from-premium-gold to-premium-light mb-10"></div>
              <p className="text-lg opacity-90 mb-8 leading-relaxed font-extralight">
                Participe de uma experiência inesquecível ao despedir-se da vista mais inspiradora de São Paulo antes do
                renascimento magnífico do Arbórea Arbórea Vista Jardim Europa. Uma colaboração exclusiva entre MBRAS, Lamborghini São Paulo e
                Benx proporciona uma noite singular que combina sofisticação, emoção e elegância, homenageando o passado
                e abrindo caminho para um futuro ainda mais grandioso.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12">
                <div className="border-l-2 border-premium-warm pl-5 group hover:border-premium-light transition-all duration-500 transform hover:-translate-y-1 hover:shadow-[5px_5px_30px_rgba(0,0,0,0.15)] py-3 bg-premium-navy-deep/30">
                  <h3 className="text-premium-warm group-hover:text-premium-light text-lg font-normal transition-all duration-300 mb-1">DATA</h3>
                  <p className="opacity-90 font-extralight">10/04 Quinta-feira</p>
                </div>
                <div className="border-l-2 border-premium-deep pl-5 group hover:border-premium-light transition-all duration-500 transform hover:-translate-y-1 hover:shadow-[5px_5px_30px_rgba(0,0,0,0.15)] py-3 bg-premium-navy-deep/30">
                  <h3 className="text-premium-deep group-hover:text-premium-light text-lg font-normal transition-all duration-300 mb-1">HORÁRIO</h3>
                  <p className="opacity-90 font-extralight">Á partir das 18:30</p>
                </div>
                <div className="border-l-2 border-premium-gold pl-5 group hover:border-premium-light transition-all duration-500 transform hover:-translate-y-1 hover:shadow-[5px_5px_30px_rgba(0,0,0,0.15)] py-3 bg-premium-navy-deep/30">
                  <h3 className="text-premium-gold group-hover:text-premium-light text-lg font-normal transition-all duration-300 mb-1">LOCAL</h3>
                  <p className="opacity-90 font-extralight">Rua da Mata 25, Jardim Europa, Rooftop</p>
                </div>
              </div>
            </div>
            <div className="relative h-[600px] w-full order-1 md:order-2 overflow-hidden group">
              <Image 
                src="/images/evento-vista.jpg" 
                alt="Luxury Rooftop Venue" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out" 
              />
              <div className="absolute inset-0 bg-premium-navy-deep/30 group-hover:bg-premium-navy-deep/20 transition-all duration-700"></div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-premium-navy-deep to-transparent h-1/3"></div>
              <div className="absolute top-0 left-0 right-0 h-1/4 bg-gradient-to-b from-premium-navy-deep/80 to-transparent"></div>
              <div className="absolute inset-0 border border-premium-gold/20"></div>
              <div className="absolute bottom-8 left-8 flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-premium-gold to-premium-warm flex items-center justify-center shadow-lg">
                  <span className="text-premium-navy-deep font-bold tracking-wide">SP</span>
                </div>
                <span className="text-sm uppercase tracking-[0.2em] font-extralight">São Paulo, Brasil</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Details */}
      <section className="py-24 bg-premium-navy-light relative">
        <div className="absolute top-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-premium-gold/30 to-transparent"></div>
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-extralight text-center tracking-wide mb-3">
            EXPERIÊNCIA <span className="text-transparent bg-gradient-to-r from-premium-warm to-premium-deep bg-clip-text font-normal">EXCLUSIVA</span>
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-premium-warm to-premium-deep mx-auto mb-16"></div>

          <EventDetails />
        </div>
        <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-premium-gold/30 to-transparent"></div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="py-24 bg-gradient-to-b from-premium-navy-light to-premium-navy relative">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-extralight text-center tracking-wide mb-3">
            PROGRAMAÇÃO <span className="text-transparent bg-gradient-to-r from-premium-deep to-premium-light bg-clip-text font-normal">ESPECIAL</span>
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-premium-deep to-premium-light mx-auto mb-16"></div>

          <EventSchedule />
        </div>
        <div className="absolute left-0 top-1/2 -translate-y-1/2 h-48 w-px bg-gradient-to-b from-transparent via-premium-gold/30 to-transparent opacity-70 hidden lg:block"></div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 h-48 w-px bg-gradient-to-b from-transparent via-premium-gold/30 to-transparent opacity-70 hidden lg:block"></div>
      </section>

      {/* Lamborghini Showcase */}
      <section className="py-24 bg-premium-navy relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 relative">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-1/2 overflow-hidden rounded-sm group">
              <div className="relative">
                <Image
                  src="/images/lambo-party.jpg"
                  alt="Lamborghini Showcase"
                  width={600}
                  height={400}
                  className="w-full h-auto group-hover:scale-105 transition-transform duration-1000 ease-out"
                />
                <div className="absolute inset-0 border border-premium-gold/20 pointer-events-none"></div>
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-extralight tracking-wide mb-4">
                ELEGÂNCIA & <span className="text-transparent bg-gradient-to-r from-premium-gold to-premium-warm bg-clip-text font-normal">EXCLUSIVIDADE</span>
              </h2>
              <div className="w-24 h-px bg-gradient-to-r from-premium-gold to-premium-warm mb-8"></div>
              <p className="text-lg leading-relaxed opacity-90 mb-6">
                Encante-se com a exposição de dois carros da Lamborghini no evento. Símbolos máximos que refletem o espírito inovador do Arbórea Vista Jardim Europa.
              </p>
              <p className="text-lg leading-relaxed opacity-90 mb-8">
                Uma oportunidade única para apreciar de perto estas obras-primas da engenharia italiana, enquanto desfruta
                de uma vista deslumbrante da metrópole paulistana.
              </p>
        
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section id="gallery" className="py-24 bg-gradient-to-b from-premium-navy-deep via-premium-navy to-premium-navy-light">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-extralight text-center tracking-wide mb-3">
            GALERIA <span className="text-transparent bg-gradient-to-r from-premium-light to-premium-gold bg-clip-text font-normal">DE FOTOS</span>
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-premium-light to-premium-gold mx-auto mb-16"></div>

          <PhotoGallery />
        </div>
      </section>

      {/* RSVP Section */}
      <section id="rsvp" className="py-24 bg-premium-navy-light relative">
        <div className="container mx-auto px-4 md:px-8 relative">
          <div className="max-w-3xl mx-auto bg-premium-navy-deep/90 p-8 md:p-12 border border-premium-gold/30 backdrop-blur-sm">
            <h2 className="text-3xl md:text-4xl font-extralight text-center tracking-wide mb-3">
              ENTRE NA <span className="text-transparent bg-gradient-to-r from-premium-gold to-premium-warm bg-clip-text font-normal">LISTA DE ESPERA</span>
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-premium-gold to-premium-warm mx-auto mb-8"></div>
            <p className="text-center text-lg mb-10 font-extralight leading-relaxed">
              Faça parte desta experiência exclusiva que marca a transição do icônico edifício para o novo Arbórea Vista
              Jardim Europa.
            </p>
            <RSVPForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-premium-navy-deep border-t border-premium-gold/20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-5">
            <div className="relative transition-transform hover:scale-105 duration-300">
                <Image src="/images/benx-1.PNG" alt="Benx Logo" width={30} height={30} className="h-8 w-auto drop-shadow-md" />
              </div>
              <div className="relative transition-transform hover:scale-105 duration-300">
                <Image src="/images/lambo-sp.png" alt="Lamborghini Logo" width={30} height={30} className="h-8 w-auto drop-shadow-md" />
              </div>
              <div className="relative transition-transform hover:scale-105 duration-300">
                <Image src="/images/mbras-1.PNG" alt="MBRAS Logo" width={30} height={30} className="h-8 w-auto drop-shadow-md" />
              </div>
           
           
              <div className="h-6 w-px bg-gradient-to-b from-premium-light to-premium-gold opacity-70" />
              <span className="text-lg font-extralight tracking-[0.15em]">
                <span className="md:hidden">ARBÓREA</span>
                <span className="hidden md:inline">ARBÓREA Arbórea Vista Jardim Europa</span>
              </span>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-8">
              <Link href="/privacidade" className="text-sm uppercase tracking-[0.15em] hover:text-premium-warm transition-colors font-extralight relative group">
                Política de Privacidade
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-premium-warm group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link href="/termos" className="text-sm uppercase tracking-[0.15em] hover:text-premium-deep transition-colors font-extralight relative group">
                Termos e Condições
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-premium-deep group-hover:w-full transition-all duration-300"></span>
              </Link>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-premium-gold/10 text-center">
            <p className="text-sm text-premium-light/60 font-extralight tracking-wider">
              &copy; 2025 MBRAS • Benx • Lamborghini São Paulo. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
