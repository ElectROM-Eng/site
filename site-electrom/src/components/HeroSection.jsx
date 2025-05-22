"use client";
import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { Typewriter } from 'react-simple-typewriter';

export default function HeroSection() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  // Handle video loaded event
  const handleVideoLoaded = () => {
    setIsVideoLoaded(true);
  };

  return (
    <section className="relative w-screen h-screen overflow-hidden">
      {/* Background video */}
      <div className="absolute inset-0 w-full h-full">
        <video
          className={`object-cover w-full h-full ${isVideoLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}
          autoPlay
          muted
          loop
          playsInline
          onLoadedData={handleVideoLoaded}
        >
          <source src="/videos/hero-background.mp4" type="video/mp4" />
          {/* Fallback image if video can't be loaded */}
          <img 
            src="/images/hero-fallback.jpg" 
            alt="Electrom Engenharia" 
            className="object-cover w-full h-full" 
          />
        </video>
        
        {/* Overlay that shows before video loads and stays as a filter */}
        <div className={`absolute inset-0 bg-brand-petrol/80 pointer-events-none z-0 ${isVideoLoaded ? 'bg-opacity-70' : 'bg-opacity-100'}`} />
      </div>

      <div className="absolute inset-0 flex items-center justify-start">
        <div className="container mx-auto px-6 md:px-16 relative z-10">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white">
              <Typewriter
                words={["Energia inteligente que move o amanhã."]}
                loop={false}
                cursor
                cursorStyle='|'
                typeSpeed={60}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </h1>
            <h2 className="text-xl md:text-2xl font-light mb-10 max-w-2xl text-white">
              25 anos de engenharia elétrica, solar e eficiência energética para reduzir custos e emissões na sua empresa.
            </h2>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                whileHover={{ scale: 1.07, boxShadow: "0 4px 24px 0 #7AA2E4aa" }}
                whileTap={{ scale: 0.97 }}
                href="#diagnostico"
                className="bg-brand-blue hover:bg-brand-blue/90 text-white font-semibold px-8 py-4 rounded-lg shadow transition-all text-lg text-center"
              >
                Solicitar Diagnóstico Energético
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.07, boxShadow: "0 4px 24px 0 #fff2" }}
                whileTap={{ scale: 0.97 }}
                href="#portfolio"
                className="bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-lg border border-white/20 transition-all text-lg text-center"
              >
                Ver Portfólio
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 