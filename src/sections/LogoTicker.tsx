'use client'
import Image from 'next/image';
import { motion } from 'framer-motion';

import acmeLogo from '@/assets/logo-acme.png';
import quantumLogo from '@/assets/logo-quantum.png';
import echoLogo from '@/assets/logo-echo.png';
import celestialLogo from '@/assets/logo-celestial.png';
import pulseLogo from '@/assets/logo-pulse.png';
import apexLogo from '@/assets/logo-apex.png';

export const LogoTicker = () => {
  const logos = [
    { src: acmeLogo, alt: 'Acme Logo' },
    { src: quantumLogo, alt: 'Quantum Logo' },
    { src: echoLogo, alt: 'Echo Logo' },
    { src: celestialLogo, alt: 'Celestial Logo' },
    { src: pulseLogo, alt: 'Pulse Logo' },
    { src: apexLogo, alt: 'Apex Logo' },
  ];

  return (
    <div className='py-8 md:py-12 bg-white'>
      <div className='container'>
        <div className='flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]'>
          <motion.div 
          className='flex gap-14 flex-none pr-14' 
          animate={{
            translateX:'-50%',
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
            repeatType: 'loop'
          }}
          >
            {logos.map((logo, index) => (
              <Image key={index} src={logo.src} alt={logo.alt} className='logo-ticker-image' />
            ))}
            {/* SECOND LOGOS  FOR ANIMATION*/}
            {logos.map((logo, index) => (
              <Image key={index} src={logo.src} alt={logo.alt} className='logo-ticker-image' />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
