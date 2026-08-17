import { LucideIcon, Building, Home, DollarSign } from "lucide-react";

export interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
  bgColor: string;
}

export const features: Feature[] = [
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
