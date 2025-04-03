'use client';

import { MapPin, Calendar } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';


const InvitationPage = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div
      className="h-screen w-full bg-gradient-to-br from-premium-navy to-premium-navy-deep text-premium-light flex items-center justify-center px-4 py-4 overflow-hidden relative"
      style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
    >
      {/* Subtle dark overlay */}
      <div
        className="absolute inset-0 flex justify-center items-center pointer-events-none"
        style={{ backdropFilter: 'blur(2px)' }}
      >
        <div
          className="w-full h-full bg-black opacity-5"
          style={{ animation: 'fadeIn 2s ease-in-out infinite' }}
        ></div>
      </div>

      <motion.div
        className="relative w-full max-w-md sm:max-w-2xl bg-premium-navy-deep/95 border border-premium-gold/40 rounded-lg shadow-xl shadow-premium-gold/20 overflow-hidden backdrop-blur-lg p-6 sm:p-10 flex flex-col"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Luxurious background elements */}
        <motion.div
          className="absolute top-[-50px] left-[-50px] w-40 h-40 bg-premium-gold/10 rounded-full blur-3xl animate-pulse-slow"
          animate={{ rotate: isHovered ? 360 : 0 }}
          transition={{ duration: 1, ease: 'linear' }}
        />
        <motion.div
          className="absolute bottom-[-60px] right-[-60px] w-48 h-48 bg-premium-warm/10 rounded-full blur-3xl animate-pulse-slow"
          animate={{ rotate: isHovered ? -360 : 0 }}
          transition={{ duration: 1, ease: 'linear' }}
        />

        {/* Elegant corner accents with subtle animation */}
        <motion.div 
          className="absolute top-0 left-0 w-4 sm:w-8 h-4 sm:h-8 border-t-2 border-l-2 border-premium-gold/40"
          animate={{ opacity: isHovered ? 0.9 : 0.4 }}
          transition={{ duration: 0.5 }}
        />
        <motion.div 
          className="absolute top-0 right-0 w-4 sm:w-8 h-4 sm:h-8 border-t-2 border-r-2 border-premium-gold/40"
          animate={{ opacity: isHovered ? 0.9 : 0.4 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        />
        <motion.div 
          className="absolute bottom-0 left-0 w-4 sm:w-8 h-4 sm:h-8 border-b-2 border-l-2 border-premium-gold/40"
          animate={{ opacity: isHovered ? 0.9 : 0.4 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        />
        <motion.div 
          className="absolute bottom-0 right-0 w-4 sm:w-8 h-4 sm:h-8 border-b-2 border-r-2 border-premium-gold/40"
          animate={{ opacity: isHovered ? 0.9 : 0.4 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        />

        <div className="relative z-20 text-center flex-grow flex flex-col justify-between py-3 sm:py-4 space-y-2 sm:space-y-3">
          <motion.div 
            className="transition-all duration-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-sm sm:text-md uppercase tracking-wider text-premium-gold/90 sm:mb-6 font-light letter-spacing-wider">
              Uma Despedida Exclusiva
            </h2>
            <motion.h1
              className="text-3xl sm:text-5xl font-extralight tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-premium-gold via-premium-light to-premium-warm mb-2 sm:mb-4 pt-8 md:pt-0"
              animate={{ textShadow: isHovered ? "0 0 8px rgba(255,215,0,0.3)" : "0 0 0px rgba(255,215,0,0)" }}
              transition={{ duration: 0.8 }}
            >
              SAVE THE VIEW
            </motion.h1>
            <motion.div
              className="w-16 sm:w-24 h-px bg-gradient-to-r from-transparent via-premium-gold to-transparent mx-auto mb-4 sm:mb-6"
              animate={{ width: isHovered ? "7rem" : "6rem", opacity: isHovered ? 0.9 : 0.7 }}
              transition={{ duration: 0.6 }}
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="my-1 sm:my-0"
          >
            <p className="text-md md:text-xl text-premium-light/90 mb-3 sm:mb-4 leading-relaxed font-light pt-2 sm:pt-6">
              Vivencie o renascimento da Vista mais incrível de São Paulo
            </p>
          </motion.div>

          <motion.div 
            className="my-2 sm:my-3 flex justify-center items-center pt-14 md:pt-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <div className="relative w-28 sm:w-44 h-10 sm:h-14">
              <Image
                src="/images/arborea-jardimeuropa.png"
                alt="Arbórea Jardim Europa"
                fill
                style={{ objectFit: 'contain' }}
                className="opacity-90 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          </motion.div>

          <div className="space-y-2 sm:space-y-3 my-1 sm:my-2  pt-14 md:pt-6">
            <motion.div 
              className="flex items-center justify-center backdrop-blur-sm py-1 px-3 hover:border-premium-gold/30 transition-colors duration-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <Calendar className="w-4 sm:w-5 h-4 sm:h-5 mr-2 text-premium-gold" />
              <p className="text-sm sm:text-base text-premium-light font-medium">
                Quinta-feira, 10.04 • 18:30
              </p>
            </motion.div>

            <motion.div 
              className="flex flex-col items-center justify-center backdrop-blur-sm py-3 px-4 hover:border-premium-gold/30 transition-colors duration-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              <div className="flex items-center mb-1">
                <MapPin className="w-4 sm:w-5 h-4 sm:h-5 mr-2 text-premium-gold flex-shrink-0" />
              </div>
              
              <div className="grid grid-cols-1 gap-3 w-full">
                <div className="flex flex-col">
                  <p className="text-sm font-medium text-premium-light">Carro / Valet:</p>
                  <p className="text-sm text-premium-light/80">
                    Rua da Mata 25, Itaim Bibi
                  </p>
                </div>
                
                <div className="flex flex-col">
                  <p className="text-sm font-medium text-premium-light">Acesso para Pedestres:</p>
                  <p className="text-sm text-premium-light/80">
                    Av. Nove de Julho 5.229, Jardim Europa
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div 
            className="my-3 sm:my-4 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <div className="inline-block mx-auto w-10 sm:w-20 h-px bg-gradient-to-r from-transparent via-premium-gold/60 to-transparent" />
          </motion.div>

          {/* Partner Logos */}
          <div className="mt-1 sm:mt-3 opacity-100 transition-all duration-700 delay-1100">
            <div className="flex items-center justify-center space-x-4 sm:space-x-6">
              <div className="relative w-16 sm:w-24 h-6 sm:h-10">
                <Image
                  src="/images/mbras-1.PNG"
                  alt="MBRAS"
                  fill
                  style={{ objectFit: 'contain' }}
                  className="opacity-80 filter brightness-125"
                />
              </div>
              <div className="relative w-16 sm:w-24 h-6 sm:h-10">
                <Image
                  src="/images/benx-1.PNG"
                  alt="BenX"
                  fill
                  style={{ objectFit: 'contain' }}
                  className="opacity-80 filter brightness-125"
                />
              </div>
              <div className="relative w-16 sm:w-24 h-6 sm:h-10">
                <Image
                  src="/images/lambo-sp.png"
                  alt="Lamborghini"
                  fill
                  style={{ objectFit: 'contain' }}
                  className="opacity-80 filter brightness-125"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default InvitationPage;