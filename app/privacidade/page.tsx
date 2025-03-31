import React from 'react';
import Link from 'next/link';

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-premium-navy to-premium-navy-deep text-premium-light py-16 px-4 sm:px-6 lg:px-8 font-light">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-extralight tracking-wide text-center mb-3">
          POLÍTICA DE <span className="text-transparent bg-gradient-to-r from-premium-gold to-premium-light bg-clip-text font-normal">PRIVACIDADE</span>
        </h1>
        <div className="w-24 h-px bg-gradient-to-r from-premium-gold to-premium-light mx-auto mb-12"></div>

        <div className="bg-premium-navy-deep/50 shadow-lg rounded-lg p-8 space-y-8 border border-premium-gold/20">
          <section className="space-y-4">
            <p className="text-lg opacity-90">
              Esta Política de Privacidade descreve como suas informações pessoais são coletadas, usadas e compartilhadas quando você utiliza nosso site para confirmar presença no evento "Desperte Seu Olhar".
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-normal text-premium-gold tracking-wider">1. Informações que Coletamos</h2>
            <p className="opacity-90">
              Quando você confirma sua presença (RSVP) através do nosso formulário, coletamos as seguintes informações:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-4 opacity-90">
              <li>Nome completo</li>
              <li>Endereço de e-mail</li>
              <li>Número de telefone</li>
              <li>Nome do(s) acompanhante(s) (opcional)</li>
              <li>Data preferida para o evento</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-normal text-premium-warm tracking-wider">2. Como Usamos Suas Informações</h2>
            <p className="opacity-90">
              Utilizamos as informações coletadas para:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-4 opacity-90">
              <li>Confirmar e gerenciar sua reserva para o evento.</li>
              <li>Enviar comunicações importantes sobre o evento (confirmações, lembretes, atualizações).</li>
              <li>Entrar em contato caso necessitemos de informações adicionais sobre sua reserva.</li>
              <li>Garantir a organização e segurança do evento.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-normal text-premium-deep tracking-wider">3. Compartilhamento de Informações</h2>
            <p className="opacity-90">
              Não compartilhamos suas informações pessoais com terceiros, exceto quando necessário para a organização do evento (por exemplo, com a equipe de recepção no local) ou se exigido por lei. Nossos parceiros (MBRAS, Ferrari, Benx) têm acesso limitado às informações estritamente necessárias para fins de planejamento do evento.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-normal text-premium-gold tracking-wider">4. Segurança dos Dados</h2>
            <p className="opacity-90">
              Implementamos medidas de segurança para proteger suas informações pessoais contra acesso não autorizado, alteração, divulgação ou destruição.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-normal text-premium-warm tracking-wider">5. Seus Direitos</h2>
            <p className="opacity-90">
              Você tem o direito de acessar, corrigir ou solicitar a exclusão das suas informações pessoais. Para exercer esses direitos, entre em contato conosco através do e-mail [Inserir E-mail de Contato].
            </p>
          </section>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-normal text-premium-deep tracking-wider">6. Cookies</h2>
            <p className="opacity-90">
              Nosso site pode usar cookies essenciais para funcionalidade básica. Não utilizamos cookies para rastreamento ou publicidade direcionada.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-normal text-premium-gold tracking-wider">7. Alterações nesta Política</h2>
            <p className="opacity-90">
              Podemos atualizar esta política de privacidade periodicamente. A versão mais recente estará sempre disponível nesta página. Recomendamos que você revise esta política regularmente.
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
