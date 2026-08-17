import { Card, CardContent } from "@/components/ui/card";
import { MapPin, BedDouble, Bath, Square } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { properties } from "@/types/topDeals";

export function TopDealsSection() {
  return (
    <section className=" px-6 max-w-[1400px] mx-auto w-full">
      <Carousel opts={{ align: "start", loop: true }} className="w-full">
        {/* Header */}
        <div className="flex justify-between items-end mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-0.5 bg-orange-500"></div>
              <span className="text-sm font-bold text-orange-500 tracking-wider">TOP DEALS</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0f172a]">
              OF THE WEEK
            </h2>
          </div>
          <div className="flex items-center gap-4 hidden sm:flex relative">
            <CarouselPrevious className="static translate-y-0 h-12 w-12 rounded-full border-slate-200 shadow-sm text-slate-600 bg-white hover:bg-slate-50 hover:text-slate-900" />
            <CarouselNext className="static translate-y-0 h-12 w-12 rounded-full border-slate-200 shadow-sm text-slate-600 bg-white hover:bg-slate-50 hover:text-slate-900" />
          </div>
        </div>

        {/* Property Cards */}
        <CarouselContent className="-ml-8">
          {properties.map((property, idx) => (
            <CarouselItem key={idx} className="pl-8 md:basis-1/2 lg:basis-1/3">
              <Card className="border-none shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] rounded-[32px] overflow-hidden transition-transform hover:-translate-y-2 duration-300 bg-white h-full flex flex-col">
                {/* Image & Price */}
                <div className="relative h-[250px] w-full shrink-0">
                  <img src={property.image} alt={property.title} className="w-full h-full object-cover" />
                  <div className="absolute -bottom-5 right-6 bg-[#313eb4] text-white font-bold px-5 rounded-2xl shadow-md z-10 text-lg">
                    {property.price}
                  </div>
                </div>

                <CardContent className="p-8 pt-10 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-[#0f172a] leading-snug mb-3">{property.title}</h3>
                  <div className="flex items-center gap-2 text-slate-500 uppercase text-xs font-bold tracking-widest">
                    <MapPin className="w-4 h-4 text-[#313eb4]" /> {property.location}
                  </div>

                  <div className="h-px w-full bg-slate-100 my-6"></div>

                  {/* Footer Specs */}
                  <div className="flex items-start justify-between mt-auto">
                    <div className="flex flex-col gap-3">
                      <div className="flex items-center gap-1.5 text-slate-500 text-[13px] font-semibold">
                        <BedDouble className="w-4 h-4 text-[#313eb4]" /> Bedrooms
                      </div>
                      <span className="font-bold text-[#0f172a] text-2xl">{property.beds}</span>
                    </div>
                    <div className="flex flex-col gap-3">
                      <div className="flex items-center gap-1.5 text-slate-500 text-[13px] font-semibold">
                        <Bath className="w-4 h-4 text-[#313eb4]" /> Bathrooms
                      </div>
                      <span className="font-bold text-[#0f172a] text-2xl">{property.baths}</span>
                    </div>
                    <div className="flex flex-col gap-3">
                      <div className="flex items-center gap-1.5 text-slate-500 text-[13px] font-semibold">
                        <Square className="w-4 h-4 text-[#313eb4]" /> Square Ft
                      </div>
                      <span className="font-bold text-[#0f172a] text-2xl">{property.sqft}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Visual Carousel Dots */}
      <div className="flex justify-center items-center gap-3 mt-16">
        <div className="w-10 h-3 rounded-full bg-[#313eb4]"></div>
        <div className="w-10 h-3 rounded-full bg-slate-200"></div>
        <div className="w-10 h-3 rounded-full bg-slate-200"></div>
      </div>
    </section>
  );
}
