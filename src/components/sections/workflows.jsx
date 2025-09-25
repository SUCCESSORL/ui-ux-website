import Image from "next/image";
import { Phone, FileText, CalendarDays, User, DollarSign, Newspaper, Briefcase, FileCheck2 } from "lucide-react";
import React from "react";

const column1Items = [
  { icon: Phone, text: "Field Scouting Report" },
  {
    icon: FileText,
    text: (
      <>
        Crop Rotation
        <br />
        Plan
      </>
    ),
  },
  { icon: CalendarDays, text: "Irrigation Schedule" },
  { icon: FileText, text: "Soil Test Summary" },
  { icon: User, text: "Grower Profile" },
];

const column2Items = [
  { icon: DollarSign, text: "Input Cost Breakdown" },
  { icon: FileText, text: "Pest & Disease Advisory" },
  { icon: Newspaper, text: "Market Price Update" },
  { icon: Briefcase, text: "Co‑op Delivery Overview" },
  { icon: FileCheck2, text: "Proofread My Farm Plan" },
];

const WorkflowsSection = () => {
  return (
    <section className="bg-background py-24 md:py-32 px-5 md:px-10 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-32">
          <div className="lg:flex-1 w-full lg:max-w-[480px] text-center lg:text-left">
            <h2 className="font-display text-[48px] leading-tight text-foreground mb-6 font-bold">
              Leverage Your
              <br />
              Farm's Workflows
            </h2>
            <p className="text-body-large text-muted-foreground max-w-md mx-auto lg:mx-0">
              Use agents designed to generate field reports, schedules, and plans exactly as you would across your tools.
            </p>
          </div>
          <div className="lg:flex-1 w-full [perspective:1200px]">
            <div className="relative aspect-[1.47] [transform-style:preserve-3d] [transform:rotateX(10deg)_rotateY(-10deg)] will-change-transform">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/664c0369-6b1c-41e6-b482-de971c773c68-rogo-ai-clone-vercel-app/assets/images/next-543261-7RikvNOaGWGdC81zREctYsGVYF0-3.jpeg?"
                alt="Farm management workflow UI overlay on aerial farmland"
                fill
                className="object-cover rounded-[20px]"
              />
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="grid h-[372px] grid-cols-2 gap-4 overflow-hidden rounded-2xl bg-[#eeeeee]/90 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.05)_inset] backdrop-blur-lg group">
                  <div className="overflow-hidden group-hover:[animation-play-state:paused] [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
                    <ul className="flex flex-col space-y-4 animate-marquee-vertical">
                      {[...column1Items, ...column1Items].map((item, index) => (
                        <li key={index} className="flex h-[76px] items-center gap-4 rounded-lg border border-black/5 bg-white/80 p-4 shadow-[0px_2px_4px_rgba(0,0,0,0.05)]">
                          <div className="shrink-0 text-background">
                            <item.icon className="w-5 h-5" />
                          </div>
                          <p className="font-medium text-sm text-background leading-tight">{item.text}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="overflow-hidden group-hover:[animation-play-state:paused] [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
                    <ul className="flex flex-col space-y-4 animate-marquee-vertical-reverse">
                      {[...column2Items, ...column2Items].map((item, index) => (
                        <li key={index} className="flex h-[76px] items-center gap-4 rounded-lg border border-black/5 bg-white/80 p-4 shadow-[0px_2px_4px_rgba(0,0,0,0.05)]">
                          <div className="shrink-0 text-background">
                            <item.icon className="w-5 h-5" />
                          </div>
                          <p className="font-medium text-sm text-background leading-tight">{item.text}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowsSection;