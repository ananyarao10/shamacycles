"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";

let hideTimeout: NodeJS.Timeout;

const Navbar: React.FC = () => {
  const router = useRouter();
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "About", path: "/about" },
    { label: "Bikes", path: "/bikes" },
    { label: "Gear", path: "/gear" },
  ];

  const serviceItems = [
    { label: "Bike Fittings", path: "/bikeFittings" },
    { label: "Bike Services", path: "/bikeServices" },
  ];

  const navItemsAfterServices = [
    { label: "Our Race Team", path: "/ourRaceTeam" },
    { label: "Community", path: "/community" },
    { label: "Contact Us", path: "/contactUs" },
  ];

  const handleNavigation = (path: string) => {
    router.push(path);
    setMobileMenuOpen(false);
    setShowServicesDropdown(false);
  };

  return (
    <nav className="bg-white shadow-sm">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="shrink-0 cursor-pointer mt-1 hover:opacity-80 transition-opacity" onClick={() => handleNavigation("/")}>
            <Image src="/shama_logo.png" alt="Shama Logo" width={48} height={48} className="h-12 w-auto" />
          </div>

          <div className="hidden md:flex space-x-1 items-center mt-1">
            {navItems.map((item) => (
              <button
                key={item.label}
                className="px-3 py-2 rounded-lg font-medium text-gray-700 hover:font-bold  transition-all duration-200 cursor-pointer"
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
              <button className="flex items-center gap-1 px-3 py-2 rounded-lg font-medium text-gray-700 hover:font-bold transition-all duration-200 cursor-pointer">
                Services
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${showServicesDropdown ? "rotate-180" : ""}`}
                />
              </button>

              {showServicesDropdown && (
                <div className="absolute left-0 mt-2 w-56 bg-white shadow-xl rounded-lg py-2 z-20 border border-gray-100">
                  {serviceItems.map((service) => (
                    <button
                      key={service.label}
                      className="w-full text-left px-4 py-3 text-gray-700 hover:font-bold  transition-all duration-150 cursor-pointer font-medium"
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
                className="px-3 py-2 rounded-lg font-medium text-gray-700 hover:font-bold  transition-all duration-200 cursor-pointer"
                onClick={() => handleNavigation(item.path)}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="md:hidden flex items-center">
            <button
              className="text-gray-700 hover:font-bold  cursor-pointer transition-colors"
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
                className="text-left py-3 px-3 w-full text-gray-700 hover:font-bold  rounded-lg transition-all duration-200 cursor-pointer font-medium"
                onClick={() => handleNavigation(item.path)}
              >
                {item.label}
              </button>
            ))}

            <div className="flex flex-col">
              <button
                className="flex items-center justify-between py-3 px-3 w-full text-gray-700 hover:font-bold  rounded-lg transition-all duration-200 cursor-pointer font-medium"
                onClick={() => setShowServicesDropdown(!showServicesDropdown)}
              >
                Services
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${showServicesDropdown ? "rotate-18" : ""}`}
                />
              </button>
              {showServicesDropdown &&
                serviceItems.map((service) => (
                  <button
                    key={service.label}
                    className="text-left py-3 px-6 w-full text-gray-700 hover:font-bold  rounded-lg transition-all duration-200 cursor-pointer font-medium"
                    onClick={() => handleNavigation(service.path)}
                  >
                    {service.label}
                  </button>
                ))}
            </div>

            {navItemsAfterServices.map((item) => (
              <button
                key={item.label}
                className="text-left py-3 px-3 w-full text-gray-700 hover:font-bold rounded-lg transition-all duration-200 cursor-pointer font-medium"
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