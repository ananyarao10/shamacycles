"use client";

import React from "react";
import Image from "next/image";
import { Facebook, Instagram } from "lucide-react";
import { useRouter } from "next/navigation";

const Footer: React.FC = () => {
  const router = useRouter();

  const navItems = [
    { label: "About", path: "/about" },
    { label: "Bikes", path: "/bikes" },
    { label: "Gear", path: "/gear" },
    { label: "Bike Fittings", path: "/bikeFittings" },
    { label: "Bike Services", path: "/bikeServices" },
    { label: "Our Race Team", path: "/ourRaceTeam" },
    { label: "Community", path: "/community" },
    { label: "Contact Us", path: "/contactUs" },
  ];

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
          <div className="flex items-center gap-4 md:gap-2 cursor-pointer" onClick={() => handleNavigation("/")}>
            <Image src="/shama_logo.png" alt="Shama Cycles Logo" width={48} height={48} className="h-12 w-12" />
            <p className="text-sm">&copy; 2025</p>
          </div>

          <div className="flex flex-wrap items-center gap-2 md:gap-4">
            {navItems.map((item, index) => (
              <React.Fragment key={item.label}>
                <button
                  className="text-gray-700 hover:text-black text-sm md:text-base transition"
                  onClick={() => handleNavigation(item.path)}
                >
                  {item.label}
                </button>
                {index < navItems.length - 1 && (
                  <span className="text-red-600 hidden md:inline">|</span>
                )}
              </React.Fragment>
            ))}
          </div>

          <div className="flex gap-3">
            <a
              href="https://www.facebook.com/p/Shama-Cycles-100063533020164/"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:text-blue-800 transition"
            >
              <Facebook size={24} />
            </a>
            <a
              href="https://www.instagram.com/shamacycles/?hl=en"
              target="_blank"
              rel="noreferrer"
              className="text-pink-600 hover:text-pink-700 transition"
            >
              <Instagram size={24} />
            </a>
          </div>
        </div>

        <div className="mt-4 md:mt-2 text-sm md:text-base text-center">
          2000 Edwards St. #B150, Houston, TX 77007
        </div>
      </div>
    </footer>
  );
};

export default Footer;
