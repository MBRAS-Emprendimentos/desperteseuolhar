import Image from "next/image"
import Link from "next/link"

export default function FlyerPage() {
  return (
    <div className="min-h-screen bg-premium-navy flex flex-col">
      {/* Navigation bar with back button */}
      <header className="p-4">
        <Link href="/" className="text-premium-light hover:text-premium-gold transition-colors">
          <span className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Voltar
          </span>
        </Link>
      </header>

      {/* Main content */}
      <main className="flex-1 container mx-auto px-4 md:px-8 py-8 md:py-12">
        <div className="max-w-4xl mx-auto text-center">
          {/* Enhanced Header with improved sizing and spacing */}
          <h1 className="mb-4 md:mb-8">
            <span className="block text-5xl md:text-6xl lg:text-7xl font-extralight tracking-wide mb-2 md:mb-4 bg-gradient-to-r from-premium-gold via-premium-warm to-premium-gold bg-clip-text text-transparent">
              Desperte Seu Olhar
            </span>
            <span className="block text-3xl md:text-4xl lg:text-5xl font-light text-white tracking-wider">
              Uma Despedida Exclusiva
            </span>
          </h1>
          
          {/* Improved logo showcase with proper sizing */}
          <div className="flex justify-center gap-6 md:gap-10 my-8 md:my-10">
            <div className="relative h-16 md:h-20 w-auto">
              <Image 
                src="/images/mbras-logo2.png" 
                alt="MBRAS Logo" 
                width={160} 
                height={80} 
                className="h-full w-auto object-contain" 
              />
            </div>
            <div className="relative h-16 md:h-20 w-auto">
              <Image 
                src="/images/ferrari-logo.jpg" 
                alt="Ferrari Logo" 
                width={160} 
                height={80} 
                className="h-full w-auto object-contain" 
              />
            </div>
            <div className="relative h-16 md:h-20 w-auto bg-white/90 px-4 rounded-sm">
              <Image 
                src="https://www.benx.com.br/_images/logo.png" 
                alt="Benx Logo" 
                width={160} 
                height={80} 
                className="h-full w-auto object-contain" 
              />
            </div>
          </div>
          
          <div className="h-1 w-48 md:w-64 bg-gradient-to-r from-premium-gold to-premium-warm my-8 mx-auto"></div>

          <div className="text-left mb-10">
            {/* Event info section with improved styling */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 bg-premium-navy-light/40 p-6 md:p-8 border-l-4 border-premium-gold rounded-r shadow-[0_4px_12px_rgba(205,138,79,0.10)]">
              <div>
                <h2 className="text-premium-gold text-2xl md:text-3xl font-light mb-3 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 opacity-80">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  Local:
                </h2>
                <p className="text-white/90 text-lg leading-relaxed">
                  Av 9 de Julho 5229, Rooftop do Edifício que dará lugar ao Arbórea Vista Jardim Europa, com vista panorâmica de São Paulo
                </p>
              </div>
              
              <div>
                <h2 className="text-premium-gold text-2xl md:text-3xl font-light mb-3 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 opacity-80">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                  Participação:
                </h2>
                <p className="text-white/90 text-lg leading-relaxed">
                  Previsão de 120 pessoas, das quais 20 do time Ferrari / MBRAS e o restante clientes das empresas
                </p>
              </div>
            </div>
            
            <h2 className="text-premium-gold text-2xl md:text-3xl font-light mb-4">Sobre o Evento:</h2>
            <p className="text-white/90 text-lg leading-relaxed mb-8">
              Participe de uma experiência inesquecível ao despedir-se da vista mais inspiradora de São Paulo antes do renascimento magnífico do Arbórea Vista Jardim Europa. Uma colaboração exclusiva entre MBRAS, Ferrari e Benx proporciona uma noite singular que combina sofisticação, emoção e elegância, homenageando o passado e abrindo caminho para um futuro ainda mais grandioso.
            </p>
            
            <h2 className="text-premium-gold text-2xl md:text-3xl font-light mb-4">Experiência Exclusiva:</h2>
            <ul className="text-white/90 text-lg leading-relaxed mb-8 list-disc pl-6">
              <li className="mb-2">Suba ao rooftop em pequenos grupos de 10 a 15 pessoas, garantindo uma experiência íntima e personalizada.</li>
              <li className="mb-2">Desvende São Paulo com o auxílio de um guia especializado, explorando ícones visuais da Capital Paulista.</li>
              <li className="mb-2">Utilize binóculos e telescópios para observar detalhes fascinantes da paisagem.</li>
              <li>Eternize este momento único em uma estação fotográfica especialmente montada com a deslumbrante cidade como cenário.</li>
            </ul>
            
            <h2 className="text-premium-gold text-2xl md:text-3xl font-light mb-4">Programação Especial:</h2>
            <ul className="text-white/90 text-lg leading-relaxed mb-8 list-disc pl-6">
              <li className="mb-2">Sunset Experience: Maravilhe-se com o pôr do sol mais encantador da metrópole paulistana, num momento mágico e inspirador.</li>
              <li className="mb-2">Música Exclusiva: Aproveite uma atmosfera sofisticada e vibrante ao som do renomado DJ Marcelo Ometto.</li>
              <li>Luxo e Inovação: Encante-se com a exposição de dois carros Ferrari na entrada do evento, símbolos máximos de elegância e exclusividade que refletem o espírito inovador do Arbórea.</li>
            </ul>
          
            <h2 className="text-premium-gold text-2xl md:text-3xl font-light mb-4">Catering de Alto Padrão:</h2>
            <ul className="text-white/90 text-lg leading-relaxed mb-8 list-disc pl-6">
              <li className="mb-2">Saboreie petiscos gourmet selecionados, que combinam o melhor da culinária paulistana e internacional.</li>
              <li>Deguste bebidas refrescantes e participe de um brinde especial com champanhe, marcando o encerramento simbólico desta fase e a abertura de um futuro promissor.</li>
            </ul>
            
            <h2 className="text-premium-gold text-2xl md:text-3xl font-light mb-4">Lembrança Exclusiva:</h2>
            <ul className="text-white/90 text-lg leading-relaxed mb-8 list-disc pl-6">
              <li>Cada convidado receberá uma lembrança personalizada, seja uma foto impressa ou um livreto comemorativo, eternizando a memória desta noite singular.</li>
            </ul>
          </div>
          
          <p className="text-white/90 text-xl font-light italic mb-10 max-w-3xl mx-auto">
            Celebre conosco essa transição simbólica, onde sua energia se mistura à essência do novo Arbórea Vista Jardim Europa.
          </p>
          
          <Link 
            href="/" 
            className="inline-block bg-gradient-to-r from-premium-deep via-premium-gold to-premium-warm hover:from-premium-warm hover:via-premium-gold hover:to-premium-deep py-4 px-10 text-premium-navy-deep font-medium text-lg tracking-wider shadow-[0_4px_12px_rgba(205,138,79,0.25)] hover:shadow-[0_4px_20px_rgba(205,138,79,0.4)] transition-all duration-300"
          >
            CONFIRMAR PRESENÇA
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-6 border-t border-premium-gold/20">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Image src="/images/mbras-logo2.png" alt="MBRAS Logo" width={30} height={30} className="h-8 w-auto" />
            <Image src="/images/ferrari-logo.jpg" alt="Ferrari Logo" width={30} height={30} className="h-8 w-auto" />
            <Image src="https://www.benx.com.br/_images/logo.png" alt="Benx Logo" width={30} height={30} className="h-8 w-auto" />
          </div>
          <p className="text-premium-light/70 text-sm"> 2025 MBRAS • Ferrari • Benx</p>
        </div>
      </footer>
    </div>
  )
}
