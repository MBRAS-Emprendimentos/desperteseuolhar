import React from 'react';
import Link from 'next/link';
import { CheckCircle, Calendar, Clock, MapPin } from 'lucide-react';

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-premium-navy to-premium-navy-deep text-premium-light py-24 px-4 sm:px-6 lg:px-8 font-light flex items-center justify-center">
      <div className="max-w-2xl w-full text-center bg-premium-navy-deep/50 p-10 sm:p-16 rounded-lg shadow-2xl border border-premium-gold/20">
        
        <CheckCircle className="h-16 w-16 text-premium-gold mx-auto mb-6" />
        
        <h1 className="text-4xl font-extralight tracking-wide mb-4">
          OBRIGADO POR <span className="text-transparent bg-gradient-to-r from-premium-gold to-premium-light bg-clip-text font-normal">CONFIRMAR!</span>
        </h1>
        
        <p className="text-lg opacity-90 mb-10">
          Sua presença foi registrada com sucesso para o evento "Save The View".
          Estamos ansiosos para recebê-lo nesta experiência exclusiva.
        </p>

        <div className="w-full h-px bg-gradient-to-r from-premium-gold/30 via-premium-gold/80 to-premium-gold/30 my-10"></div>

        <h2 className="text-2xl font-normal text-premium-warm tracking-wider mb-6">Detalhes do Evento</h2>
        
        <div className="space-y-4 text-left max-w-md mx-auto opacity-90">
          <div className="flex items-center gap-3">
            <Calendar className="h-5 w-5 text-premium-gold flex-shrink-0" />
            <span>Quinta-feira, 10 de Abril</span>
          </div>
          <div className="flex items-center gap-3">
            <Clock className="h-5 w-5 text-premium-gold flex-shrink-0" />
            <span>A partir das 18:30</span>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="h-5 w-5 text-premium-gold flex-shrink-0" />
            <span>Rua da Mata 25, Jardim Europa, São Paulo</span>
          </div>
        </div>

        <div className="mt-12 space-y-4">
          <Link 
            href="/"
            className="inline-block bg-gradient-to-r from-premium-gold to-premium-warm 
                       hover:from-premium-warm hover:to-premium-gold 
                       text-white rounded-none px-8 py-3 
                       transition-all duration-300 text-sm tracking-widest font-light 
                       hover:shadow-[0_5px_15px_rgba(212,175,55,0.3)] 
                       transform hover:-translate-y-0.5"
          >
            VOLTAR À PÁGINA INICIAL
          </Link>
        </div>

        <p className="text-xs text-premium-light/60 mt-10">
          Você receberá um e-mail de confirmação em breve. Caso tenha alguma dúvida, entre em contato.
        </p>
      </div>
    </main>
  );
}
