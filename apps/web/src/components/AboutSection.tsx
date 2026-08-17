import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Building, Home, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    title: "Consulting Service",
    description: "We offer tailored solutions to address your unique challenges and goals, from strategic planning to process optimization.",
    icon: Building,
    bgColor: "bg-blue-600",
  },
  {
    title: "Home Selling",
    description: "Selling your home requires careful planning, staging and pricing for maximum appeal and marketing effectiveness.",
    icon: Home,
    bgColor: "bg-orange-500",
  },
  {
    title: "Rent Collection",
    description: "We handle the day-to-day operations, including rent collection, maintenance and tenant screening.",
    icon: DollarSign,
    bgColor: "bg-blue-600",
  },
];

export function AboutSection() {
  return (
    <section className="w-full bg-slate-50 py-8">
      <div className="px-6 max-w-[1400px] mx-auto w-full flex flex-col xl:flex-row items-stretch gap-10">

        {/* Left Content */}
        <div className="xl:w-1/4 flex flex-col items-start gap-6 pt-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-0.5 bg-orange-500"></div>
            <span className="text-sm font-bold text-blue-900 tracking-wider">ABOUT US</span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-[#0f172a] leading-tight">
            The Leading <br /> Real Estate <br /> <span className="text-blue-600">Company.</span>
          </h2>

          <p className="text-slate-500 text-lg leading-relaxed mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>

          <Button className="bg-[#0f172a] hover:bg-blue-900 text-white rounded-md px-8 py-6 mt-4 flex items-center gap-2">
            EXPLORE MORE <ArrowRight className="w-5 h-5" />
          </Button>
        </div>

        {/* Center Image */}
        <div className="xl:w-1/4">
          <img
            src="https://images.unsplash.com/photo-1593696140826-c58b021acf8b?auto=format&fit=crop&q=80&w=800"
            alt="Interior Living Room"
            className="w-full h-full min-h-[500px] object-cover rounded-[40px]"
          />
        </div>

        {/* Right Feature Cards */}
        <div className="xl:w-2/4 grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <Card key={idx} className="border-none shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] rounded-3xl p-6 transition-transform hover:-translate-y-1 duration-300 h-full flex flex-col">
                <CardContent className="p-0 flex flex-col items-start h-full w-full">
                  <div className={`p-4 rounded-2xl ${feature.bgColor} text-white`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <div className="flex flex-col gap-3 mt-6">
                    <h3 className="text-xl font-bold text-[#0f172a] leading-snug">{feature.title}</h3>
                    <div className="w-8 h-0.5 bg-orange-500"></div>
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed mt-4">
                    {feature.description}
                  </p>
                  <div className="mt-auto pt-6 w-full">
                    <a href="#" className="text-blue-700 font-bold text-sm flex items-center gap-2 hover:underline">
                      READ MORE <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

      </div>
    </section>
  );
}
