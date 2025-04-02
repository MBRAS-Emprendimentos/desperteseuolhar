import Image from "next/image"
import Link from "next/link"

export default function FlyerPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-premium-navy to-premium-navy-deep flex flex-col">
      {/* Navigation bar with back button */}
      <header className="p-4 md:p-6 backdrop-blur-sm bg-premium-navy-deep/40 sticky top-0 z-10 border-b border-premium-gold/10 shadow-md">
        <div className="container mx-auto">
          <Link href="/" className="text-premium-light hover:text-premium-gold transition-all duration-300 inline-flex items-center gap-2 group">
            <span className="flex items-center gap-2 relative overflow-hidden">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-x-1 transition-transform duration-300">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              <span className="font-light tracking-wider">Voltar</span>
            </span>
          </Link>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 container mx-auto px-4 md:px-8 py-8 md:py-16">
        <div className="max-w-4xl mx-auto text-center animate-fadeIn">
          {/* Enhanced Header with improved sizing and spacing */}
          <h1 className="mb-6 md:mb-10">
            <span className="block text-5xl md:text-6xl lg:text-7xl font-extralight tracking-wide mb-3 md:mb-5 bg-gradient-to-r from-premium-gold via-premium-warm to-premium-gold bg-clip-text text-transparent drop-shadow-[0_5px_30px_rgba(212,175,55,0.25)] animate-fadeInSlowA">
              Save The View
            </span>
            <span className="block text-3xl md:text-4xl lg:text-5xl font-light text-white/90 tracking-wider animate-fadeInSlowB letter-spacing-wide">
              Uma Despedida Exclusiva
            </span>
          </h1>
          
          {/* Improved logo showcase with proper sizing and styling */}
          <div className="flex justify-center gap-8 md:gap-12 my-10 md:my-12">
            <div className="relative h-16 md:h-20 w-auto backdrop-blur-sm bg-premium-navy-light/20 p-3 rounded shadow-lg animate-fadeInScale hover:scale-105 transition-transform duration-300 border border-premium-gold/20">
              <Image 
                src="/images/mbras-1.PNG" 
                alt="MBRAS Logo" 
                width={160} 
                height={80} 
                className="h-full w-auto object-contain" 
              />
            </div>
            <div className="relative h-16 md:h-20 w-auto backdrop-blur-sm bg-premium-navy-light/20 p-3 rounded shadow-lg animate-fadeInScaleDelay1 hover:scale-105 transition-transform duration-300 border border-premium-gold/20">
              <Image 
                src="/images/lamborghini.png"
                alt="Lamborghini Logo"
                width={160} 
                height={80} 
                className="h-full w-auto object-contain" 
              />
            </div>
            <div className="relative h-16 md:h-20 w-auto backdrop-blur-sm bg-premium-navy-light/20 p-3 rounded shadow-lg animate-fadeInScaleDelay2 hover:scale-105 transition-transform duration-300 border border-premium-gold/20">
              <Image 
                src="/images/benx-1.PNG" 
                alt="Benx Logo" 
                width={160} 
                height={80} 
                className="h-full w-auto object-contain" 
              />
            </div>
          </div>
          
          <div className="h-0.5 w-48 md:w-64 bg-gradient-to-r from-transparent via-premium-gold to-transparent my-10 mx-auto opacity-80 shadow-sm"></div>

          <div className="text-left mb-12 animate-fadeInUp">
            {/* Event info section with improved styling */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 bg-gradient-to-br from-premium-navy-light/40 to-premium-navy-deep/60 p-8 md:p-10 border-l-4 border-premium-gold rounded-r-md shadow-[0_15px_30px_rgba(10,31,68,0.7),0_5px_15px_rgba(212,175,55,0.2)] backdrop-blur-md transform hover:translate-y-[-3px] transition-all duration-500">
              <div className="transform transition-all duration-300 hover:translate-x-2">
                <h2 className="text-premium-gold text-2xl md:text-3xl font-light mb-4 flex items-center bg-gradient-to-r from-premium-gold to-premium-warm bg-clip-text text-transparent drop-shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3 text-premium-gold opacity-90">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  Local:
                </h2>
                <p className="text-white/90 text-lg md:text-xl leading-relaxed pl-9 font-light tracking-wide">
                  Rua da Mata 25, Jardim Europa. Rooftop com vista panorâmica de São Paulo
                </p>
              </div>
              
              <div className="transform transition-all duration-300 hover:translate-x-2">
                <h2 className="text-premium-gold text-2xl md:text-3xl font-light mb-4 flex items-center bg-gradient-to-r from-premium-gold to-premium-warm bg-clip-text text-transparent drop-shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3 text-premium-gold opacity-90">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                  Participação:
                </h2>
                <p className="text-white/90 text-lg md:text-xl leading-relaxed pl-9 font-light tracking-wide">
                  Previsão de 120 pessoas, das quais 20 do time Lamborghini / MBRAS e o restante clientes das empresas
                </p>
              </div>
            </div>
            
            <div className="space-y-12">
              <section className="bg-gradient-to-br from-premium-navy-light/30 to-premium-navy-deep/50 p-8 md:p-10 rounded-md shadow-[0_10px_25px_rgba(10,31,68,0.5),0_2px_8px_rgba(212,175,55,0.15)] backdrop-blur-md border-l-2 border-premium-gold/60 transform transition-all duration-500 hover:border-l-4 hover:border-premium-gold hover:translate-x-1 hover:shadow-[0_15px_30px_rgba(10,31,68,0.6),0_5px_15px_rgba(212,175,55,0.25)]">
                <h2 className="text-2xl md:text-3xl font-light mb-5 inline-block bg-gradient-to-r from-premium-gold to-premium-warm bg-clip-text text-transparent drop-shadow-sm tracking-wide">Sobre o Evento:</h2>
                <p className="text-white/95 text-lg md:text-xl leading-relaxed font-light tracking-wide">
                  Participe de uma experiência inesquecível ao despedir-se da vista mais inspiradora de São Paulo antes do renascimento magnífico do Arbórea Vista Jardim Europa. Uma colaboração exclusiva entre MBRAS, Lamborghini e Benx proporciona uma noite singular que combina sofisticação, emoção e elegância, homenageando o passado e abrindo caminho para um futuro ainda mais grandioso.
                </p>
              </section>
              
              <section className="bg-gradient-to-br from-premium-navy-light/30 to-premium-navy-deep/50 p-8 md:p-10 rounded-md shadow-[0_10px_25px_rgba(10,31,68,0.5),0_2px_8px_rgba(212,175,55,0.15)] backdrop-blur-md border-l-2 border-premium-gold/60 transform transition-all duration-500 hover:border-l-4 hover:border-premium-gold hover:translate-x-1 hover:shadow-[0_15px_30px_rgba(10,31,68,0.6),0_5px_15px_rgba(212,175,55,0.25)]">
                <h2 className="text-2xl md:text-3xl font-light mb-5 inline-block bg-gradient-to-r from-premium-gold to-premium-warm bg-clip-text text-transparent drop-shadow-sm tracking-wide">Experiência Exclusiva:</h2>
                <ul className="text-white/95 text-lg md:text-xl leading-relaxed space-y-5 font-light tracking-wide">
                  <li className="flex items-start transform transition-all duration-300 hover:translate-x-1">
                    <span className="inline-block h-5 w-5 rounded-full bg-gradient-to-br from-premium-gold to-premium-warm mr-4 mt-1.5 flex-shrink-0 shadow-[0_2px_4px_rgba(212,175,55,0.3)]"></span>
                    <span>Suba ao rooftop em pequenos grupos de 10 a 15 pessoas, garantindo uma experiência única e personalizada.</span>
                  </li>
                  <li className="flex items-start transform transition-all duration-300 hover:translate-x-1">
                    <span className="inline-block h-5 w-5 rounded-full bg-gradient-to-br from-premium-gold to-premium-warm mr-4 mt-1.5 flex-shrink-0 shadow-[0_2px_4px_rgba(212,175,55,0.3)]"></span>
                    <span>Desvende São Paulo com o auxílio de um guia especializado, explorando visuais da Capital Paulista.</span>
                  </li>
                  <li className="flex items-start transform transition-all duration-300 hover:translate-x-1">
                    <span className="inline-block h-5 w-5 rounded-full bg-gradient-to-br from-premium-gold to-premium-warm mr-4 mt-1.5 flex-shrink-0 shadow-[0_2px_4px_rgba(212,175,55,0.3)]"></span>
                    <span>Utilize binóculos e telescópios para observar detalhes fascinantes da paisagem.</span>
                  </li>
                  <li className="flex items-start transform transition-all duration-300 hover:translate-x-1">
                    <span className="inline-block h-5 w-5 rounded-full bg-gradient-to-br from-premium-gold to-premium-warm mr-4 mt-1.5 flex-shrink-0 shadow-[0_2px_4px_rgba(212,175,55,0.3)]"></span>
                    <span>Eternize este momento inacolável em uma experiência fotográfica especialmente montada com a deslumbrante cidade como cenário.</span>
                  </li>
                </ul>
              </section>
              
              <section className="bg-gradient-to-br from-premium-navy-light/30 to-premium-navy-deep/50 p-8 md:p-10 rounded-md shadow-[0_10px_25px_rgba(10,31,68,0.5),0_2px_8px_rgba(212,175,55,0.15)] backdrop-blur-md border-l-2 border-premium-gold/60 transform transition-all duration-500 hover:border-l-4 hover:border-premium-gold hover:translate-x-1 hover:shadow-[0_15px_30px_rgba(10,31,68,0.6),0_5px_15px_rgba(212,175,55,0.25)]">
                <h2 className="text-2xl md:text-3xl font-light mb-5 inline-block bg-gradient-to-r from-premium-gold to-premium-warm bg-clip-text text-transparent drop-shadow-sm tracking-wide">Programação Especial:</h2>
                <ul className="text-white/95 text-lg md:text-xl leading-relaxed space-y-5 font-light tracking-wide">
                  <li className="flex items-start transform transition-all duration-300 hover:translate-x-1">
                    <span className="inline-block h-5 w-5 rounded-full bg-gradient-to-br from-premium-gold to-premium-warm mr-4 mt-1.5 flex-shrink-0 shadow-[0_2px_4px_rgba(212,175,55,0.3)]"></span>
                    <span><strong className="text-premium-gold/90 font-normal">Sunset Experience:</strong> Maravilhe-se com o pôr do sol mais encantador da metrópole paulistana, num momento mágico e inspirador.</span>
                  </li>
                  <li className="flex items-start transform transition-all duration-300 hover:translate-x-1">
                    <span className="inline-block h-5 w-5 rounded-full bg-gradient-to-br from-premium-gold to-premium-warm mr-4 mt-1.5 flex-shrink-0 shadow-[0_2px_4px_rgba(212,175,55,0.3)]"></span>
                    <span><strong className="text-premium-gold/90 font-normal">Música Exclusiva:</strong> Aproveite uma atmosfera sofisticada e vibrante ao som do renomado DJ Marcelo Ometto.</span>
                  </li>
                  <li className="flex items-start transform transition-all duration-300 hover:translate-x-1">
                    <span className="inline-block h-5 w-5 rounded-full bg-gradient-to-br from-premium-gold to-premium-warm mr-4 mt-1.5 flex-shrink-0 shadow-[0_2px_4px_rgba(212,175,55,0.3)]"></span>
                    <span><strong className="text-premium-gold/90 font-normal">Luxo e Inovação:</strong> Encante-se com a exposição de dois carros Lamborghini na entrada do evento, símbolos máximos de tradição, elegância e exclusividade que refletem o espírito inovador do Arbórea.</span>
                  </li>
                </ul>
              </section>
            
              <section className="bg-gradient-to-br from-premium-navy-light/30 to-premium-navy-deep/50 p-8 md:p-10 rounded-md shadow-[0_10px_25px_rgba(10,31,68,0.5),0_2px_8px_rgba(212,175,55,0.15)] backdrop-blur-md border-l-2 border-premium-gold/60 transform transition-all duration-500 hover:border-l-4 hover:border-premium-gold hover:translate-x-1 hover:shadow-[0_15px_30px_rgba(10,31,68,0.6),0_5px_15px_rgba(212,175,55,0.25)]">
                <h2 className="text-2xl md:text-3xl font-light mb-5 inline-block bg-gradient-to-r from-premium-gold to-premium-warm bg-clip-text text-transparent drop-shadow-sm tracking-wide">Catering de Alto Padrão:</h2>
                <ul className="text-white/95 text-lg md:text-xl leading-relaxed space-y-5 font-light tracking-wide">
                  <li className="flex items-start transform transition-all duration-300 hover:translate-x-1">
                    <span className="inline-block h-5 w-5 rounded-full bg-gradient-to-br from-premium-gold to-premium-warm mr-4 mt-1.5 flex-shrink-0 shadow-[0_2px_4px_rgba(212,175,55,0.3)]"></span>
                    <span>Saboreie petiscos gourmet selecionados, que combinam o melhor da culinária paulistana e internacional.</span>
                  </li>
                  <li className="flex items-start transform transition-all duration-300 hover:translate-x-1">
                    <span className="inline-block h-5 w-5 rounded-full bg-gradient-to-br from-premium-gold to-premium-warm mr-4 mt-1.5 flex-shrink-0 shadow-[0_2px_4px_rgba(212,175,55,0.3)]"></span>
                    <span>Deguste bebidas refrescantes e participe de um brinde especial com champanhe, marcando o encerramento simbólico desta fase e a abertura de um futuro promissor.</span>
                  </li>
                </ul>
              </section>
              
              <section className="bg-gradient-to-br from-premium-navy-light/30 to-premium-navy-deep/50 p-8 md:p-10 rounded-md shadow-[0_10px_25px_rgba(10,31,68,0.5),0_2px_8px_rgba(212,175,55,0.15)] backdrop-blur-md border-l-2 border-premium-gold/60 transform transition-all duration-500 hover:border-l-4 hover:border-premium-gold hover:translate-x-1 hover:shadow-[0_15px_30px_rgba(10,31,68,0.6),0_5px_15px_rgba(212,175,55,0.25)]">
                <h2 className="text-2xl md:text-3xl font-light mb-5 inline-block bg-gradient-to-r from-premium-gold to-premium-warm bg-clip-text text-transparent drop-shadow-sm tracking-wide">Lembrança Exclusiva:</h2>
                <ul className="text-white/95 text-lg md:text-xl leading-relaxed space-y-5 font-light tracking-wide">
                  <li className="flex items-start transform transition-all duration-300 hover:translate-x-1">
                    <span className="inline-block h-5 w-5 rounded-full bg-gradient-to-br from-premium-gold to-premium-warm mr-4 mt-1.5 flex-shrink-0 shadow-[0_2px_4px_rgba(212,175,55,0.3)]"></span>
                    <span>Cada convidado receberá uma lembrança personalizada, seja uma foto impressa ou um livreto comemorativo, eternizando a memória desta noite singular.</span>
                  </li>
                </ul>
              </section>
            </div>
          </div>
          
          <p className="text-white/95 text-xl md:text-2xl font-light italic mb-12 max-w-3xl mx-auto leading-relaxed px-6 py-8 border-y border-premium-gold/30 bg-gradient-to-r from-premium-navy-light/20 via-premium-navy-light/40 to-premium-navy-light/20 backdrop-blur-md animate-fadeInUp shadow-[inset_0_0_20px_rgba(10,31,68,0.4)]">
            Celebre conosco essa transição simbólica, onde sua energia se mistura à essência do novo Arbórea Vista Jardim Europa.
          </p>
          
          <div className="inline-block transition-transform duration-300 hover:scale-105 animate-fadeInUp">
            <Link 
              href="/" 
              className="inline-block bg-gradient-to-r from-premium-deep via-premium-gold to-premium-warm hover:from-premium-warm hover:via-premium-gold hover:to-premium-deep py-4 px-12 text-premium-navy-deep font-medium text-lg tracking-wider shadow-[0_10px_25px_rgba(205,138,79,0.4)] hover:shadow-[0_15px_30px_rgba(212,175,55,0.6)] transition-all duration-500 rounded-sm backdrop-blur-sm border border-premium-light/10"
            >
              CONFIRMAR PRESENÇA
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-6 border-t border-premium-gold/30 bg-premium-navy-deep/60 backdrop-blur-sm">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-6">
          <Image src="/images/benx-1.PNG" alt="Benx Logo" width={30} height={30} className="h-8 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300" />
            <Image src="/images/mbras-1.PNG" alt="MBRAS Logo" width={30} height={30} className="h-8 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300" />
            <Image src="/images/lamborghini.png" alt="Lamborghini Logo" width={30} height={30} className="h-8 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300" />
          </div>
          <p className="text-premium-light/70 text-sm font-light tracking-wide">
            2025 Benx • Lamborghini • MBRAS
          </p>
        </div>
      </footer>
    </div>
  )
}
