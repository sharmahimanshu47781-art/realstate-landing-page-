import { Headset, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ContactBanner() {
  return (
    <section className=" px-6 max-w-[1400px] mx-auto w-full">
      <div className="relative w-full rounded-[32px] bg-[#1d3bb3] overflow-hidden flex flex-col lg:flex-row items-center justify-between shadow-2xl min-h-[300px]">

        {/* Background decorative dots in bottom left */}
        <div className="absolute bottom-6 left-6 opacity-30 hidden lg:block z-0">
          <div className="grid grid-cols-4 gap-2">
            {[...Array(16)].map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 bg-white/40 rounded-full"></div>
            ))}
          </div>
        </div>

        {/* Left Content Area */}
        <div className="flex flex-col lg:flex-row items-center gap-10 p-10 lg:p-12 z-10 w-full lg:w-[65%]">

          {/* Headphone Icon Box */}
          <div className="bg-white rounded-[32px] p-8 shadow-[0_0_50px_rgba(255,255,255,0.3)] flex-shrink-0 flex items-center justify-center relative">
            <Headset className="w-16 h-16 text-[#1d3bb3]" strokeWidth={1.5} />
            <span className="absolute font-bold text-[#1d3bb3] text-lg mt-1">24/7</span>
          </div>

          {/* Text Area */}
          <div className="flex flex-col text-white text-center lg:text-left gap-2 max-w-sm">
            <h2 className="text-2xl lg:text-3xl font-bold leading-snug">
              Any Query? We are <br /> Happy to Assist You
            </h2>
            <p className="text-blue-200 text-sm md:text-base leading-relaxed mt-1">
              Our support team is available <br /> 24/7 to help you.
            </p>
          </div>

          {/* Vertical Divider */}
          <div className="hidden lg:block w-px h-28 bg-white/30 mx-4"></div>

          {/* Call to Action */}
          <div className="flex flex-col items-center lg:items-start gap-4 flex-shrink-0">
            <div className="flex items-center gap-2 text-white text-base">
              <Phone className="w-5 h-5 text-blue-200" strokeWidth={1.5} /> Call Us Anytime
            </div>
            <Button className="bg-[#ff7a00] hover:bg-orange-600 text-white font-bold text-base md:text-lg px-8 py-6 rounded-lg shadow-lg flex items-center gap-3 transition-transform hover:scale-105">
              <Phone className="w-5 h-5 fill-current" /> +1 234 567 8900
            </Button>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="w-full lg:w-[45%] h-[300px] lg:h-full absolute right-0 top-0 hidden lg:block z-0">
          <img
            src="/images/deal.png"
            alt="Team Shaking Hands"
            className="w-full h-full object-cover object-left"
          />
          {/* Curved mask overlay */}
          <div className="absolute top-0 -left-10 w-[120px] h-full bg-[#1d3bb3]" style={{ clipPath: 'ellipse(100% 100% at 0% 50%)' }}></div>
        </div>

      </div>
    </section>
  );
}
