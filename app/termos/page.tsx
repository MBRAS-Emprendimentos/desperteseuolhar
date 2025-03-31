import React from 'react';
import Link from 'next/link';

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-premium-navy to-premium-navy-deep text-premium-light py-16 px-4 sm:px-6 lg:px-8 font-light">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-extralight tracking-wide text-center mb-3">
          TERMOS E <span className="text-transparent bg-gradient-to-r from-premium-gold to-premium-light bg-clip-text font-normal">CONDIÇÕES</span>
        </h1>
        <div className="w-24 h-px bg-gradient-to-r from-premium-gold to-premium-light mx-auto mb-12"></div>
        
        <div className="bg-premium-navy-deep/50 shadow-lg rounded-lg p-8 space-y-8 border border-premium-gold/20">
          <section className="space-y-4">
            <h2 className="text-2xl font-normal text-premium-gold tracking-wider">1. Aceitação dos Termos</h2>
            <p className="opacity-90">
              Ao acessar e utilizar este site, você concorda em cumprir e estar vinculado a estes termos e condições de uso, bem como à nossa Política de Privacidade.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-normal text-premium-warm tracking-wider">2. Reservas e Cancelamentos</h2>
            <p className="opacity-90">
              2.1. Todas as reservas de presença (RSVP) estão sujeitas à disponibilidade e confirmação por nossa equipe.<br/>
              2.2. Caso necessite cancelar sua presença, pedimos a gentileza de nos informar com a maior antecedência possível para que possamos ajustar nossa lista de convidados.<br/>
              2.3. Este é um evento exclusivo e sem custos para os convidados, portanto, não há políticas de reembolso aplicáveis.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-normal text-premium-deep tracking-wider">3. Uso do Espaço e Conduta</h2>
            <p className="opacity-90">
              3.1. O evento ocorrerá no rooftop especificado no convite. Solicitamos que todos os convidados respeitem as áreas designadas para o evento.<br/>
              3.2. Esperamos um comportamento cordial e respeitoso de todos os participantes. Qualquer ato que perturbe a ordem, viole leis ou desrespeite outros convidados ou a equipe não será tolerado.<br/>
              3.3. Os convidados são responsáveis por seus pertences pessoais. Não nos responsabilizamos por perdas ou danos.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-normal text-premium-gold tracking-wider">4. Responsabilidade</h2>
            <p className="opacity-90">
              A organização do evento (MBRAS, Ferrari, Benx) preza pela segurança e bem-estar de todos os convidados, porém não se responsabiliza por acidentes ou incidentes que ocorram durante o evento que não sejam diretamente causados por negligência comprovada da organização.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-normal text-premium-warm tracking-wider">5. Fotografia e Filmagem</h2>
            <p className="opacity-90">
              Ao participar do evento, você concorda que fotografias e filmagens podem ser realizadas pela organização e utilizadas para fins de divulgação e registro do evento, respeitando sempre sua privacidade e imagem.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-normal text-premium-deep tracking-wider">6. Alterações nos Termos</h2>
            <p className="opacity-90">
              Reservamos o direito de modificar estes termos a qualquer momento, especialmente se necessário devido a circunstâncias imprevistas ou requisitos legais. As alterações significativas serão comunicadas aos participantes confirmados.
            </p>
          </section>

          <div className="mt-10 pt-6 border-t border-premium-gold/20 text-center">
            <p className="text-sm text-premium-light/70">
              Última atualização: 31 de Março de 2025
            </p>
            <p className="mt-4">
              <Link href="/" className="text-premium-gold hover:text-premium-light transition-colors underline">
                Voltar à página inicial
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
