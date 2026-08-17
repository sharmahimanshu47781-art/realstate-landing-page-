import { Menu, Home } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { NavLink } from "@/types/header";
import navLinksData from "@/data/header.json";

const navLinks = navLinksData as NavLink[];

export function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 max-w-[1400px] mx-auto w-full">
      {/* Logo */}
      <a href="#" className="flex items-center">
        <img src="/images/logo.png" alt="Real Estate Company Logo" className="h-10 md:h-12 w-auto object-contain" />
      </a>

      {/* Desktop Nav */}
      <nav className="hidden lg:flex items-center gap-8 h-full">
        {navLinks.map((link) => (
          <div key={link.name} className="relative group h-full flex items-center">
            <a
              href={link.href}
              className={`text-sm font-semibold flex items-center gap-1 py-6 ${
                link.active ? "text-blue-600 border-b-2 border-blue-600" : "text-slate-800 hover:text-blue-600"
              }`}
            >
              {link.name}
              {link.hasDropdown && (
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform duration-200 group-hover:rotate-180">
                  <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </a>
            
            {link.hasDropdown && (
              <div className="absolute top-[80%] left-0 w-48 bg-white border border-slate-100 shadow-xl rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 z-50 overflow-hidden">
                <div className="p-2 flex flex-col">
                  <a href="#" className="px-4 py-2.5 text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">Submenu Item 1</a>
                  <a href="#" className="px-4 py-2.5 text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">Submenu Item 2</a>
                  <a href="#" className="px-4 py-2.5 text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">Submenu Item 3</a>
                </div>
              </div>
            )}
          </div>
        ))}
      </nav>

      {/* Right Menu Toggle */}
      <div className="flex items-center gap-4">
        <Sheet>
          <SheetTrigger className="inline-flex items-center justify-center rounded-xl bg-white/60 hover:bg-white/90 backdrop-blur-sm shadow-sm border border-slate-100 text-slate-700 h-11 w-11 transition-all">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 6h16" />
              <path d="M4 12h3" />
              <path d="M11 12h9" />
              <path d="M4 18h9" />
              <path d="M17 18h3" />
            </svg>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-white p-6 border-l border-slate-100 shadow-2xl">
            <div className="flex flex-col h-full mt-6">
              {/* Sidebar Logo */}
              <div className="pb-6 border-b border-slate-100">
                <img src="/images/logo.png" alt="Company Logo" className="h-10 w-auto" />
              </div>

              {/* Navigation Links */}
              <div className="flex flex-col gap-1 py-6 overflow-y-auto">
                {navLinks.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href} 
                    className={`text-lg font-bold px-4 py-3 rounded-xl transition-colors focus:outline-none focus:ring-0 ${
                      link.active ? 'bg-blue-50 text-blue-600' : 'text-slate-800 hover:bg-slate-50 hover:text-blue-600'
                    }`}
                  >
                    {link.name}
                  </a>
                ))}
              </div>

              {/* Footer / Call to Action */}
              <div className="mt-auto pt-6 border-t border-slate-100 pb-2">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3 text-slate-600 font-medium px-2">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                    +1 234 567 8900
                  </div>
                  <button className="w-full bg-[#ff7a00] hover:bg-orange-600 text-white font-bold py-4 rounded-xl shadow-md transition-transform hover:scale-[1.02]">
                    Contact Agent
                  </button>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
