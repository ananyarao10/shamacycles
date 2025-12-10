"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";

let hideTimeout: NodeJS.Timeout;

const Navbar: React.FC = () => {
  const router = useRouter();
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "About", path: "/pages/about" },
    { label: "Bikes", path: "/pages/bikes" },
    { label: "Gear", path: "/pages/gear" },
  ];

  const serviceItems = [
    { label: "Bike Fittings", path: "/pages/bikeFittings" },
    { label: "Bike Services", path: "/pages/bikeServices" },
  ];

  const navItemsAfterServices = [
    { label: "Our Race Team", path: "/pages/ourRaceTeam" },
    { label: "Community", path: "/pages/community" },
    { label: "Contact Us", path: "/pages/contactUs" },
  ];

  const handleNavigation = (path: string) => {
    router.push(path);
    setMobileMenuOpen(false);
    setShowServicesDropdown(false);
  };

  return (
    <nav className="bg-white shadow">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="shrink-0 cursor-pointer mt-1" onClick={() => handleNavigation("/")}>
            <img src="/shama_logo.png" alt="Shama Logo" className="h-12 w-auto" />
          </div>

          <div className="hidden md:flex space-x-6 items-center mt-1">
            {navItems.map((item) => (
              <button
                key={item.label}
                className="px-1 pb-1 border-b-2 border-transparent hover:text-black transition"
                onClick={() => handleNavigation(item.path)}
              >
                {item.label}
              </button>
            ))}

            <div
            className="relative"
            onMouseEnter={() => {
                clearTimeout(hideTimeout);
                setShowServicesDropdown(true);
            }}
            onMouseLeave={() => {
                hideTimeout = setTimeout(() => setShowServicesDropdown(false), 100);
            }}
            >
            <button className="flex items-center gap-1 px-1 pb-1 border-b-2 border-transparent hover:text-black transition">
                Services
                <ChevronDown
                className={`w-4 h-4 transition-transform ${showServicesDropdown ? "rotate-180" : ""}`}
                />
            </button>

            {showServicesDropdown && (
                <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-1 z-20">
                {serviceItems.map((service) => (
                    <button
                    key={service.label}
                    className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-black transition"
                    onClick={() => handleNavigation(service.path)}
                    >
                    {service.label}
                    </button>
                ))}
                </div>
            )}
            </div>

            {navItemsAfterServices.map((item) => (
              <button
                key={item.label}
                className="px-1 pb-1 border-b-2 border-transparent hover:text-black transition"
                onClick={() => handleNavigation(item.path)}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="md:hidden flex items-center">
            <button
              className="text-gray-700 hover:text-black"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg border-t border-gray-200">
          <div className="flex flex-col space-y-1 px-4 py-4">
            {navItems.map((item) => (
              <button
                key={item.label}
                className="text-left py-2 px-2 w-full text-gray-700 hover:text-black transition"
                onClick={() => handleNavigation(item.path)}
              >
                {item.label}
              </button>
            ))}

            <div className="flex flex-col">
              <button
                className="flex items-center justify-between py-2 px-2 w-full text-gray-700 hover:text-black transition"
                onClick={() => setShowServicesDropdown(!showServicesDropdown)}
              >
                Services
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${showServicesDropdown ? "rotate-180" : ""}`}
                />
              </button>
              {showServicesDropdown &&
                serviceItems.map((service) => (
                  <button
                    key={service.label}
                    className="text-left py-2 px-6 w-full text-gray-700 hover:text-black transition"
                    onClick={() => handleNavigation(service.path)}
                  >
                    {service.label}
                  </button>
                ))}
            </div>

            {navItemsAfterServices.map((item) => (
              <button
                key={item.label}
                className="text-left py-2 px-2 w-full text-gray-700 hover:text-black transition"
                onClick={() => handleNavigation(item.path)}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
