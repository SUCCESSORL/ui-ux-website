import React from 'react';
import Link from 'next/link';

const CtaSection = () => {
  return (
    <section className="bg-[#f5f5f5] py-24 sm:py-32">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:gap-16">
          <div className="relative text-center md:text-left">
            <div className="absolute -left-4 -top-4 hidden h-8 w-8 border-l-2 border-t-2 border-[#1a1a1a] md:block" />
            <h2 className="font-display text-[48px] font-bold leading-[1.2] text-[#1a1a1a]">
              Unlock Farm AI
              <br />
              For Your Operation
            </h2>
          </div>
          <div className="shrink-0">
            <Link
              href="#"
              className="inline-block rounded-full bg-[#1a1a1a] px-8 py-4 text-base font-medium text-white transition-colors hover:bg-neutral-800"
            >
              Start Free Trial
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;