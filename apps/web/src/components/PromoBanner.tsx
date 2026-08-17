import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function PromoBanner() {
  return (
    <section className="px-6 max-w-[1400px] mx-auto w-full">
      <div className="relative w-full rounded-[40px] bg-[#061022] overflow-hidden flex flex-col lg:flex-row items-center justify-between p-10 lg:p-20 shadow-2xl">
        
        {/* Decorative Grid Dots */}
        <div className="absolute top-16 right-1/2 translate-x-24 opacity-40 hidden lg:block">
          <div className="grid grid-cols-6 gap-3">
            {[...Array(24)].map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
            ))}
          </div>
        </div>

        {/* Decorative Abstract Waves (CSS generated) */}
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] border-[1px] border-blue-500/10 rounded-full -translate-x-1/2 translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] border-[1px] border-blue-500/10 rounded-full -translate-x-1/2 translate-y-1/2"></div>

        {/* Left Text Content */}
        <div className="relative z-10 flex flex-col items-start w-full lg:w-1/2 gap-6">
          <div className="flex items-center gap-3">
            <div className="w-6 h-0.5 bg-orange-500"></div>
            <span className="text-xs font-bold text-orange-500 tracking-widest uppercase">
              WE BRING YOU TO THE FUTURE
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
            Don't Worries, <br />
            We Check All <br />
            Of <span className="text-orange-500">Unit</span>
          </h2>

          <p className="text-slate-300 text-lg leading-relaxed max-w-md mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>

          <Button className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm px-8 py-6 rounded-md shadow-lg flex items-center gap-2 mt-4 transition-transform hover:scale-105">
            DISCOVER MORE <ArrowRight className="w-5 h-5" />
          </Button>
        </div>

        {/* Right Image Content */}
        <div className="relative z-10 w-full lg:w-[45%] mt-20 lg:mt-0">
          
          {/* Orange Border Accent */}
          <div className="absolute -bottom-4 -right-4 md:-bottom-5 md:-right-5 w-full h-full rounded-[50px] border-2 border-orange-500 z-0"></div>

          {/* Main Image Container */}
          <div className="relative z-10 w-full h-[400px] md:h-[500px] rounded-[50px] bg-gradient-to-br from-blue-300 via-blue-500 to-blue-900 p-2 shadow-2xl">
            <img 
              src="/images/luxury-house.png" 
              alt="Modern Luxury House" 
              className="w-full h-full object-cover rounded-[42px]"
            />
          </div>

          {/* Floating Experience Card */}
          <div className="absolute top-[20%] -left-8 md:-left-16 lg:-left-20 z-20 bg-white rounded-3xl p-6 md:p-8 shadow-2xl flex flex-col items-center justify-center min-w-[140px] md:min-w-[180px]">
            <span className="text-4xl md:text-5xl font-extrabold text-orange-500">25+</span>
            <div className="w-6 h-0.5 bg-orange-500 my-3 md:my-4"></div>
            <span className="text-[#0f172a] font-bold text-sm md:text-base text-center leading-snug">
              Years of <br/> Experience
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
