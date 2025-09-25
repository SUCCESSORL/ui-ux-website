"use client";

import * as React from "react";
import Image from "next/image";

import { Carousel } from "@/components/ui/carousel";
import { CarouselContent } from "@/components/ui/carousel";
import { CarouselItem } from "@/components/ui/carousel";
import { CarouselNext } from "@/components/ui/carousel";
import { CarouselPrevious } from "@/components/ui/carousel";

const testimonialsData = [
  {
    company: {
      type: "image",
      src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/664c0369-6b1c-41e6-b482-de971c773c68-rogo-ai-clone-vercel-app/assets/svgs/nXmB53Tq3RuH3wqhRwM9DnugEEU-5-3.svg?",
      alt: "Nomura",
      width: 140,
      height: 25,
    },
    quote:
      "FarmAI helps our team act faster in the field. We combine weather, soil, and market signals to make planting and input decisions with confidence—freeing agronomists to focus on grower relationships and strategy.",
    author: "Patrice M.",
    title: "Operations Lead, Agrico Co‑op",
    image:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/664c0369-6b1c-41e6-b482-de971c773c68-rogo-ai-clone-vercel-app/assets/images/next-422378-uWpIUeiCXzNAcme71jTlsaj2kZw-6.jpg?",
  },
  {
    company: {
      type: "text",
      name: "Greenfields",
    },
    quote:
      "The FarmAI platform is the most practical ag tool we've tried. It improves scouting, planning, and reporting—our team is noticeably more productive each week.",
    author: "Pieter T.",
    title: "Managing Grower, Greenfields",
    image:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/664c0369-6b1c-41e6-b482-de971c773c68-rogo-ai-clone-vercel-app/assets/images/next-028669-r8Xq3ZgsrIveP9RbDtOfIgjw-7.jpg?",
  },
  {
    company: {
      type: "text",
      name: "Harvest Union",
    },
    quote:
      "FarmAI surfaced precedent field data I would've missed. It changed how I evaluated crop fit and timing for this season.",
    author: "Sean W.",
    title: "Senior Agronomist, Harvest Union",
    image:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/664c0369-6b1c-41e6-b482-de971c773c68-rogo-ai-clone-vercel-app/assets/images/next-475105-mYlRTlZaI2ByLhD2zi2MFCgDNFk-8.jpg?",
  },
];

export default function Testimonials() {
  const [api, setApi] = React.useState(null);
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const handleDotClick = (index) => {
    api?.scrollTo(index);
  };

  return (
    <section className="bg-background text-foreground py-24 sm:py-32">
      <div className="container">
        <Carousel setApi={setApi} opts={{ loop: true }}>
          <div className="flex justify-between items-start md:items-center mb-16">
            <h2 className="h2">
              What Growers Say
              <br />
              About FarmAI
            </h2>
            <div className="flex flex-col md:flex-row items-end md:items-center gap-4 sm:gap-6">
              <div className="flex items-center gap-3">
                {Array.from({ length: count }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleDotClick(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${
                      current === index
                        ? "bg-white"
                        : "bg-transparent border border-white/50 hover:border-white"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
              <div className="flex items-center gap-2">
                <CarouselPrevious className="relative -left-1 sm:left-auto top-auto -translate-y-0 w-11 h-11 rounded-full bg-card border-none hover:bg-white/10 text-primary" />
                <CarouselNext className="relative right-0 sm:right-auto top-auto -translate-y-0 w-11 h-11 rounded-full bg-card border-none hover:bg-white/10 text-primary" />
              </div>
            </div>
          </div>
          <CarouselContent>
            {testimonialsData.map((testimonial, index) => (
              <CarouselItem key={index}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                  <div className="flex flex-col gap-8">
                    <div className="h-[25px] flex items-center">
                      {testimonial.company.type === "image" ? (
                        <Image
                          src={testimonial.company.src}
                          alt={testimonial.company.alt}
                          width={testimonial.company.width}
                          height={testimonial.company.height}
                          className="invert brightness-0"
                        />
                      ) : (
                        <p className="font-serif text-3xl font-bold text-muted-foreground">
                          {testimonial.company.name}
                        </p>
                      )}
                    </div>
                    <blockquote className="font-serif text-2xl lg:text-[28px] leading-snug">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="space-y-1">
                      <p className="font-medium text-base">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                    </div>
                  </div>
                  <div className="relative aspect-[3/4] w-full max-w-sm mx-auto lg:max-w-none lg:w-full rounded-xl overflow-hidden">
                    <Image
                      src={testimonial.image}
                      alt={`Photo of ${testimonial.author}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}