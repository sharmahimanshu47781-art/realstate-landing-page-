import { Badge } from "@/components/ui/badge";

export function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex items-center bg-gradient-to-br from-blue-100 via-blue-50 to-white overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 left-0 w-full h-full bg-white z-0" style={{ clipPath: 'polygon(0 0, 35% 0, 65% 100%, 0% 100%)' }}></div>
      <div className="absolute bottom-0 right-0 w-[60%] h-[20%] bg-white rounded-tl-[100px] z-0"></div>

      <div className="max-w-[1400px] mx-auto w-full px-6 flex flex-col md:flex-row items-center relative z-10 pt-20">
        
        {/* Left Content */}
        <div className="md:w-1/2 flex flex-col items-start gap-6 pt-10">
          <div className="inline-flex items-center gap-3 border border-zinc-200 rounded-full p-1 pr-4 bg-white/50 backdrop-blur-sm">
            <Badge className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1.5 text-xs font-semibold rounded-full border-none shadow-none">
              TRENDING
            </Badge>
            <span className="text-zinc-500 text-sm font-medium uppercase tracking-wide">
              2024 Fort Clayton
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-[#1e293b] leading-[1.1]">
            Find Your <br/>
            <span className="text-blue-600">Dream Home</span> <br/>
            With Us
          </h1>

          <p className="text-slate-500 max-w-md text-lg leading-relaxed mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
          </p>
        </div>

        {/* Right Content - Hero Image */}
        <div className="md:w-1/2 mt-12 md:mt-0 relative w-full h-[600px]">
          <div className="absolute top-10 right-10 z-20">
            <div className="bg-blue-600/90 backdrop-blur-md text-white p-6 rounded-xl shadow-2xl">
              <p className="text-sm font-medium text-blue-100 mb-1">Starting at</p>
              <p className="text-3xl font-bold">$20,500</p>
            </div>
          </div>
          <img 
            src="/images/house.png" 
            alt="Luxury Modern House" 
            className="w-full h-full object-cover rounded-3xl rounded-tr-none rounded-bl-none md:rounded-bl-[100px] shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
