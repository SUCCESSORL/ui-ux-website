"use client";
import { ArrowRight } from "lucide-react";
import React from "react";

const Soc2Badge = () => (
  <div className="flex h-full w-full flex-col items-center justify-center text-center text-white">
    <p className="font-sans text-[10px] font-bold tracking-[0.2em] opacity-80">AICPA</p>
    <p className="mt-1 font-sans text-[8px] tracking-[0.1em] opacity-60">SERVICE ORGANIZATIONS</p>
    <div className="my-2 flex items-end gap-1">
      <p className="font-sans text-3xl font-bold leading-none">SOC</p>
      <p className="font-sans text-3xl font-bold leading-none">2</p>
    </div>
    <p className="font-sans text-[10px] font-bold tracking-[0.2em] opacity-80">TYPE II</p>
  </div>
);

const CcpaBadge = () => (
  <div className="flex h-full w-full flex-col items-center justify-center gap-1 text-white">
    <p className="font-sans text-5xl font-bold tracking-tight">CCPA</p>
  </div>
);

const IsoBadge = () => (
  <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-white">
    <span className="font-sans text-6xl font-bold tracking-tight">ISO</span>
  </div>
);

const GdprBadge = () => (
  <div className="flex h-full w-full flex-col items-center justify-center gap-2">
    <div className="font-mono text-xl text-white/50">★★★★★★★★★★★★</div>
    <span className="mt-1 font-sans text-4xl font-bold tracking-tight text-white">GDPR</span>
  </div>
);

const SecuritySection = () => {
  return (
    <section className="bg-[#1a1a1a] pb-32 pt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-32">
          <div className="flex flex-col gap-10">
            <div>
              <p className="font-sans text-[15px] font-semibold uppercase tracking-wider text-white/50">Security</p>
              <h3 className="mt-4 font-display text-[48px] leading-[1.2] text-white">
                Built for Farm Operations
                <br />
                Secure by Design
              </h3>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 lg:grid-cols-1">
              <div className="flex flex-col gap-2">
                <h4 className="font-sans text-base font-medium text-white">Modern data protection for field and cloud</h4>
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="font-sans text-base font-medium text-white">End‑to‑end encryption of farm records</h4>
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="font-sans text-base font-medium text-white">Audited, tested, and compliant</h4>
              </div>
            </div>
            <a className="group inline-flex items-center gap-2 text-base font-medium text-white" href="/security">
              Learn how we secure your data
              <ArrowRight className="h-[18px] w-[18px] transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
          <div className="relative grid grid-cols-2 gap-px border border-white/10 bg-white/10">
            <div className="relative flex aspect-square flex-col items-center justify-center bg-[#1a1a1a] p-8">
              <Soc2Badge />
              <p className="absolute bottom-6 font-mono text-[11px] uppercase tracking-widest text-white/40">SOC2</p>
            </div>
            <div className="relative flex aspect-square flex-col items-center justify-center bg-[#1a1a1a] p-8">
              <CcpaBadge />
            </div>
            <div className="relative flex aspect-square flex-col items-center justify-center bg-[#1a1a1a] p-8">
              <IsoBadge />
              <p className="absolute bottom-6 font-mono text-[11px] uppercase tracking-widest text-white/40">ISO 27001</p>
            </div>
            <div className="relative flex aspect-square flex-col items-center justify-center bg-[#1a1a1a] p-8">
              <GdprBadge />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;