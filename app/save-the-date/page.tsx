'use client';

import { Phone } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const InvitationPage = () => {
  return (
    <div
      className="flex flex-col items-center bg-black text-white w-full min-h-screen"
      style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
    >
      {/* Full-width image container with no padding or margins */}
      <div className="w-full">
        <img
          src="/images/savethedate2.png"
          alt="Tropical View"
          className="w-full h-auto"
          style={{ display: 'block' }} // Removes any default spacing
        />
      </div>
      
      {/* Black content section - centered with max width */}
      <div className="bg-black px-8 pt-0 pb-8 text-center max-w-md w-full">
        {/* Company names
        <h3 className="text-xl mb-6 pt-4">
          Benx, Lamborghini São Paulo e MBRAS
        </h3> */}
         {/* SAVE THE VIEW */}
        <h1 className="text-2xl font-light tracking-wider my-6 uppercase">
          SAVE THE VIEW
        </h1> 
        
        {/* Invitation text */}
        <p className="text-sm mb-8 leading-relaxed">
          Despeça-se desta vista icônica<br/>
          antes de seu renascimento<br/>
          e faça parte deste momento histórico<br/>
          onde passado e futuro se encontram.
        </p>
        
        {/* Arbórea logo */}
        <div className="mb-8">
          <div className="relative h-16 w-full">
            <Image
              src="/images/arborea-jardimeuropa.png"
              alt="Arbórea Vista Jardim Europa"
              fill
              style={{ objectFit: 'contain' }}
              priority
            />
          </div>
        </div>
        
        {/* Date and time information */}
        <div className="flex justify-between items-center mb-2">
          <div className="text-left">
            <p className="text-sm font-light">Reserve<br />a data</p>
          </div>
          <div className="text-right">
            <p className="text-sm font-light">QUINTA-FEIRA<br />10.04 À PARTIR DAS 18:00H</p>
          </div>
        </div>
        
        {/* RSVP */}
        <div className="flex justify-between items-center mt-4 mb-6">
          <p className="text-left text-sm font-light">RSVP</p>
          <p className="text-right text-sm font-light">
            <a href="tel:11977998888" className="flex items-center">
              11 97799 8888
            </a>
          </p>
        </div>
        
        {/* Sponsor logos */}
        <div className="mt-8 flex justify-center items-center space-x-8">
          <div className="relative h-8 w-16">
            <Image
              src="/images/benx-1.PNG"
              alt="BenX"
              fill
              style={{ objectFit: 'contain' }}
              className="brightness-125"
            />
          </div>
          <div className="relative h-12 w-16">
            <Image
              src="/images/lambo-sp.png"
              alt="Lamborghini"
              fill
              style={{ objectFit: 'contain' }}
              className="brightness-125"
            />
          </div>
          <div className="relative h-8 w-16">
            <Image
              src="/images/mbras-1.PNG"
              alt="MBRAS"
              fill
              style={{ objectFit: 'contain' }}
              className="brightness-125"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvitationPage;