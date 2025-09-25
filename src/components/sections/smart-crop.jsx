import React from "react";
import { CloudSun, Droplets, Leaf, Bug, BarChart3, DollarSign, MapPin, ThermometerSun, Wind } from "lucide-react";

export const SmartCropAdvisorySection = () => {
  return (
    <section id="smart-crop" className="w-full py-24 sm:py-28 bg-background">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12 items-start">
          {/* Left: Overview & CTA */}
          <div className="lg:col-span-1 space-y-6">
            <span className="inline-flex items-center gap-2 text-sm tracking-widest uppercase text-emerald-300/90">
              <Leaf className="h-4 w-4" /> Smart Crop Advisory
            </span>
            <h2 className="h2">Actionable, AI‑driven advice for every field</h2>
            <p className="text-body-large text-white/70">
              Combine hyperlocal weather, soil health, market prices, and pest risk to
              select the right crop, plan inputs, and maximize yield sustainably.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="#advisory-summary"
                className="text-button rounded-full bg-secondary text-secondary-foreground px-6 py-3 hover:opacity-90 transition"
              >
                View Advisory Summary
              </a>
              <a
                href="#"
                className="text-button rounded-full border border-emerald-500/40 text-white/90 px-6 py-3 hover:bg-emerald-500/10 transition"
              >
                Start Free Assessment
              </a>
            </div>
          </div>

          {/* Middle: Key Signals */}
          <div className="lg:col-span-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Weather */}
            <div className="rounded-xl bg-card border border-border p-5 hover:bg-card/90 transition">
              <div className="flex items-center gap-3 mb-3">
                <CloudSun className="h-5 w-5 text-emerald-300" />
                <h3 className="text-lg font-semibold">Weather Window</h3>
              </div>
              <ul className="space-y-2 text-sm text-white/70">
                <li className="flex items-center gap-2"><ThermometerSun className="h-4 w-4 text-emerald-400" /> 28‑31°C avg next 7 days</li>
                <li className="flex items-center gap-2"><Wind className="h-4 w-4 text-emerald-400" /> Low wind, ideal for spraying Thu‑Fri</li>
                <li className="flex items-center gap-2"><Droplets className="h-4 w-4 text-emerald-400" /> Rain probability 20‑30% on weekend</li>
              </ul>
            </div>
            {/* Soil */}
            <div className="rounded-xl bg-card border border-border p-5 hover:bg-card/90 transition">
              <div className="flex items-center gap-3 mb-3">
                <Droplets className="h-5 w-5 text-emerald-300" />
                <h3 className="text-lg font-semibold">Soil Health</h3>
              </div>
              <ul className="space-y-2 text-sm text-white/70">
                <li>Moisture: 58% (optimal)</li>
                <li>pH: 6.3 (slightly acidic)</li>
                <li>Organic Matter: 3.1% (good)</li>
              </ul>
            </div>
            {/* Crop Fit */}
            <div className="rounded-xl bg-card border border-border p-5 hover:bg-card/90 transition">
              <div className="flex items-center gap-3 mb-3">
                <Leaf className="h-5 w-5 text-emerald-300" />
                <h3 className="text-lg font-semibold">Best Crop Fit</h3>
              </div>
              <ul className="space-y-2 text-sm text-white/70">
                <li>Primary: Maize (score 92)</li>
                <li>Alternatives: Soybean (86), Sorghum (81)</li>
                <li>Recommended hybrid: DKC 9120</li>
              </ul>
            </div>
            {/* Pest Risk */}
            <div className="rounded-xl bg-card border border-border p-5 hover:bg-card/90 transition">
              <div className="flex items-center gap-3 mb-3">
                <Bug className="h-5 w-5 text-emerald-300" />
                <h3 className="text-lg font-semibold">Pest & Disease Risk</h3>
              </div>
              <ul className="space-y-2 text-sm text-white/70">
                <li>Fall armyworm: Low → Medium (watchlist)</li>
                <li>Rust: Low (cool nights)</li>
                <li>Advisory: Monitor traps twice weekly</li>
              </ul>
            </div>
          </div>

          {/* Right: Advisory Summary */}
          <div id="advisory-summary" className="lg:col-span-1 rounded-2xl bg-card/70 border border-emerald-700/40 p-6 backdrop-blur">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold">Advisory Summary</h3>
              <MapPin className="h-5 w-5 text-emerald-300" />
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 rounded-xl bg-background/60 border border-border">
                <span className="flex items-center gap-2 text-sm text-white/80"><BarChart3 className="h-4 w-4 text-emerald-400" /> Yield Forecast</span>
                <span className="text-sm font-semibold">6.8–7.2 t/ha</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-xl bg-background/60 border border-border">
                <span className="flex items-center gap-2 text-sm text-white/80"><DollarSign className="h-4 w-4 text-emerald-400" /> Net Margin (est.)</span>
                <span className="text-sm font-semibold">$310/ha</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-xl bg-background/60 border border-border">
                <span className="flex items-center gap-2 text-sm text-white/80"><Droplets className="h-4 w-4 text-emerald-400" /> Irrigation Need</span>
                <span className="text-sm font-semibold">Low (0–5 mm)</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-xl bg-background/60 border border-border">
                <span className="flex items-center gap-2 text-sm text-white/80"><Leaf className="h-4 w-4 text-emerald-400" /> Input Plan</span>
                <span className="text-sm font-semibold">NPK 10‑26‑26 @ 110 kg/ha</span>
              </div>
            </div>
            <div className="mt-6 flex items-center justify-between">
              <p className="text-sm text-white/60">Updated: 2h ago • Station: KBL‑NW</p>
              <a href="#" className="text-sm text-emerald-300 hover:text-emerald-200 underline underline-offset-4">Download PDF</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartCropAdvisorySection;