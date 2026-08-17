"use client";

import { useState, useEffect } from "react";
import { Play } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";

export function ServicesSection() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section className="px-6 max-w-[1400px] mx-auto w-full border-l border-b pb-10">
      <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

        {/* Left Side: Image container */}
        <div className="w-full lg:w-1/2 relative mt-16 lg:mt-0">
          {/* Blue dotted pattern (top-left) */}
          <div className="absolute -top-16 -left-16 z-0 hidden md:block">
            <div className="grid grid-cols-5 gap-6">
              {[...Array(20)].map((_, i) => (
                <div key={i} className="w-2.5 h-2.5 bg-[#1130ab] rounded-full"></div>
              ))}
            </div>
          </div>

          {/* Gray Base Layers */}
          <div className="absolute -bottom-10 left-16 right-16 h-16 bg-[#f1f5f9] rounded-b-[40px] z-0"></div>
          <div className="absolute -bottom-5 left-10 right-10 h-16 bg-[#d1d5db] rounded-b-[40px] z-0"></div>

          {/* Main Image Carousel */}
          <div className="relative z-10 w-full h-[400px] md:h-[500px] rounded-[40px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] bg-white">
            <Carousel setApi={setApi} className="w-full h-full">
              <CarouselContent className="h-full -ml-0">
                {[1, 2, 3].map((_, index) => (
                  <CarouselItem key={index} className="pl-0 w-full h-[400px] md:h-[500px]">
                    <img
                      src="/images/luxury-house.png"
                      alt={`Real Estate Property ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>

            {/* Carousel Dots */}
            <div className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col items-center gap-5 z-20">
              {[0, 1, 2].map((index) => (
                <button
                  key={index}
                  onClick={() => api?.scrollTo(index)}
                  className={`w-4 h-4 rounded-full border-2 border-white transition-all duration-300 ${current === index ? "bg-white" : "bg-transparent hover:bg-white/50"
                    }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="w-full lg:w-1/2 flex flex-col items-start lg:pl-10">
          <span className="text-base font-bold text-[#1130ab] tracking-wide">
            Best real estate in The World
          </span>
          <div className="w-8 h-0.5 bg-[#1130ab] my-4"></div>

          <h2 className="text-4xl md:text-5xl lg:text-[56px] font-extrabold text-[#0f172a] leading-[1.1] mb-6">
            We serve you with <br /> best real estate <br /> by area
          </h2>

          <div className="w-8 h-0.5 bg-[#1130ab] mb-8"></div>

          <p className="text-slate-500 text-lg leading-relaxed mb-10 max-w-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>

          <div className="flex items-center gap-6">
            <button className="w-16 h-16 rounded-full bg-[#1130ab] hover:bg-blue-800 flex items-center justify-center text-white transition-colors shadow-xl">
              <Play className="w-6 h-6 ml-1" fill="currentColor" />
            </button>
            <a href="#" className="text-[#1130ab] text-lg font-semibold underline underline-offset-4 hover:text-blue-800 transition-colors">
              Learn more
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
