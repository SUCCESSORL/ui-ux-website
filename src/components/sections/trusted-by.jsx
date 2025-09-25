import React from 'react';

const TrustedBy = () => {
  return (
    <div className="bg-[#f5f5f5] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-5">
        <div className="flex flex-col items-center gap-5">
          <p className="font-sans text-sm font-medium text-black/50 tracking-wide">
            Trusted by leading financial institutions
          </p>
          <div className="flex w-full flex-wrap items-center justify-center gap-x-8 gap-y-4 sm:gap-x-12 md:gap-x-[60px]">
            <div className="flex h-4 w-[90px] items-center justify-center font-serif text-[18px] tracking-[0.2em] text-black/60 md:w-[110px] md:text-[22px]">
              LAZARD
            </div>
            <div className="flex h-[18px] w-[110px] items-center justify-center font-sans text-xs font-bold tracking-widest text-black/60 md:h-[21px] md:w-[137px] md:text-sm">
              TIGERGLOBAL
            </div>
            <div className="flex h-[13px] w-[70px] items-center justify-center font-serif text-[20px] text-black/60 md:h-[15px] md:w-[81px] md:text-[24px]">
              Moelis
            </div>
            <div className="flex h-[22px] w-[60px] items-center justify-center font-sans text-base font-bold text-black/60 md:h-[27px] md:w-[77px] md:text-xl">
              GTCR
            </div>
            <div className="flex h-[14px] w-[90px] items-center justify-center font-sans text-base font-bold text-black/60 md:h-[16px] md:w-[105px] md:text-lg">
              NOMURA
            </div>
            <div className="flex h-[18px] w-[130px] items-center justify-center font-serif text-base text-black/60 md:h-[22px] md:w-[158px] md:text-[18px]">
              RAYMOND JAMES
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustedBy;