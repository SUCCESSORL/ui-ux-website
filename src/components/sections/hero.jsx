import React from 'react';

const HeroSection = () => {
  return (
    <section id="hero" className="relative flex flex-col items-center justify-center w-full min-h-screen bg-background overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="https://framerusercontent.com/assets/wTrzp9MQkGsUlvTmGBWbubFlo.mp4"
        aria-label="Background video of a cityscape at dusk"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-emerald-900/20 to-emerald-950/70 z-[1]"></div>
      <div className="relative z-10 flex flex-col items-center justify-center text-center h-full w-full px-4 pt-20 sm:pt-28 pb-40 sm:pb-48">
        <div className="flex flex-col items-center gap-10">
          <div className="flex flex-col items-center gap-6">
            <h1 className="font-display text-white text-5xl sm:text-6xl md:text-[72px] font-bold leading-tight md:leading-[1.1]">
              Smart Crop Advisory<br />for Modern Agriculture
            </h1>
            <p className="font-body text-white/70 text-lg sm:text-xl font-normal leading-relaxed max-w-[650px]">
              AI-driven guidance that helps farmers choose the right crops, optimize inputs, and maximize yield with weather, soil, and market intelligence.
            </p>
          </div>
          <div className="relative">
            <a href="#smart-crop" className="relative block bg-primary text-primary-foreground text-button py-4 px-8 rounded-full hover:bg-gray-200 transition-colors">
              Get Crop Advisory
            </a>
            <div className="hidden sm:block absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-white"></div>
            <div className="hidden sm:block absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-white"></div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-0 right-0 z-10 flex flex-col items-center gap-5 px-5">
        <p className="font-body text-sm font-medium text-white/50 tracking-wide">
          Trusted by leading agri-businesses and cooperatives
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-8 sm:gap-x-12 md:gap-x-[60px] gap-y-4">
          <div className="h-4 w-[90px] md:w-[110px] text-white/80 flex items-center justify-center font-display text-[18px] md:text-[22px] tracking-[0.2em]">
            GREENFIELDS
          </div>
          <div className="h-[18px] md:h-[21px] w-[110px] md:w-[137px] text-white/80 flex items-center justify-center font-body text-xs md:text-sm font-bold tracking-widest">
            FARMER CO‑OP
          </div>
          <div className="h-[13px] md:h-[15px] w-[70px] md:w-[81px] text-white/80 flex items-center justify-center font-display text-[20px] md:text-[24px]">
            AgriNova
          </div>
          <div className="h-[22px] md:h-[27px] w-[60px] md:w-[77px] text-white/80 flex items-center justify-center font-body text-base md:text-xl font-bold">
            HARVEST
          </div>
          <div className="h-[14px] md:h-[16px] w-[90px] md:w-[105px] text-white/80 flex items-center justify-center font-body text-base md:text-lg font-bold">
            RURAL FARM
          </div>
          <div className="h-[18px] md:h-[22px] w-[130px] md:w-[158px] text-white/80 flex items-center justify-center font-display text-base md:text-[18px]">
            GRAIN UNION
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;