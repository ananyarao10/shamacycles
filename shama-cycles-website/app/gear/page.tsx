'use client';

import { useState, useEffect } from 'react';
import { Wind, Gauge, Zap, Check } from 'lucide-react';

type CardType = "wheels" | "drivetrain" | "cockpit" | null;

const Gear = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState<CardType>(null);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 0);
  }, []);

  const wheelBrands = ['HED', 'Princeton CarbonWorks', 'Cantu', 'ENVE', 'ZIPP', 'Lightweight', 'Schmolke', 'White Industries', 'Campy', 'Fulcrum', '3T'];
  
  const handlebarBrands = ['Zipp', 'Shimano', 'Enve', 'Schmolke', 'THM', 'Darimo', 'Thomson', 'Deda', 'Profile Design', '3T', '51 Speedshop'];

  return (
    <div className="mx-auto px-6 py-12">
      <div className={`text-center mb-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 tracking-[-0.02em]">GEAR</h1>
        <div className="h-1.25 w-3/5 mx-auto mt-6 bg-linear-to-r from-transparent via-red-600 to-transparent animate-[glow_3s_ease-in-out_infinite]"></div>
      </div>

      <div className="mx-auto px-6 py-12">
        <style jsx>{`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Wheels Card */}
            <div
              className={`group bg-white rounded-xl border border-gray-200 overflow-hidden transition-all duration-300 cursor-pointer ${
                activeCard === "wheels" ? "shadow-2xl -translate-y-2" : "shadow-lg hover:shadow-2xl hover:-translate-y-1"
              }`}
              onMouseEnter={() => setActiveCard("wheels")}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div className="h-30 bg-linear-to-br from-gray-900 to-gray-700 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                  <div className="w-full h-full bg-[radial-gradient(circle,rgba(239,68,68,0.3)_0%,transparent_70%)]"></div>
                </div>
                <Wind className="text-red-500 group-hover:scale-110 transition-transform" size={60} />
              </div>
              <div className="p-7">
                <h3 className="text-2xl font-bold text-gray-950 mb-3">Wheels</h3>
                <p className="text-gray-700 mb-5">
                  Premium wheels engineered for aerodynamics, weight, and durability. Custom lacing or factory builds to match your riding style.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                    <span className="text-gray-700">Hand-laced custom wheels</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                    <span className="text-gray-700">Premium hub and rim selection</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                    <span className="text-gray-700">Precision tensioning and truing</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Drivetrain Card */}
            <div
              className={`group bg-white rounded-xl border border-gray-200 overflow-hidden transition-all duration-300 cursor-pointer ${
                activeCard === "drivetrain" ? "shadow-2xl -translate-y-2" : "shadow-lg hover:shadow-2xl hover:-translate-y-1"
              }`}
              onMouseEnter={() => setActiveCard("drivetrain")}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div className="h-30 bg-linear-to-br from-gray-900 to-gray-700 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                  <div className="w-full h-full bg-[radial-gradient(circle,rgba(239,68,68,0.3)_0%,transparent_70%)]"></div>
                </div>
                <Zap className="text-red-500 group-hover:scale-110 transition-transform" size={60} />
              </div>
              <div className="p-7">
                <h3 className="text-2xl font-bold text-gray-950 mb-3">Drivetrain</h3>
                <p className="text-gray-700 mb-5">
                  Shimano Dura Ace, SRAM AXS, and Rotor components—electronic or mechanical. Optimized for your goals and riding style.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                    <span className="text-gray-700">Electronic & mechanical options</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                    <span className="text-gray-700">Power meter integration</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                    <span className="text-gray-700">Gear ratio consultation</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Cockpit Card */}
            <div
              className={`group bg-white rounded-xl border border-gray-200 overflow-hidden transition-all duration-300 cursor-pointer ${
                activeCard === "cockpit" ? "shadow-2xl -translate-y-2" : "shadow-lg hover:shadow-2xl hover:-translate-y-1"
              }`}
              onMouseEnter={() => setActiveCard("cockpit")}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div className="h-30 bg-linear-to-br from-gray-900 to-gray-700 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                  <div className="w-full h-full bg-[radial-gradient(circle,rgba(239,68,68,0.3)_0%,transparent_70%)]"></div>
                </div>
                <Gauge className="text-red-500 group-hover:scale-110 transition-transform" size={60} />
              </div>
              <div className="p-7">
                <h3 className="text-2xl font-bold text-gray-950 mb-3">Cockpit</h3>
                <p className="text-gray-700 mb-5">
                  Premium handlebars, stems, and seatposts from the world's leading brands for road, gravel, and triathlon.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                    <span className="text-gray-700">Wide range of geometries</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                    <span className="text-gray-700">Fit-specific selection</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                    <span className="text-gray-700">Carbon and alloy options</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Brand Sections */}
        <section className="mb-20">
          <div className='border-t border-gray-200 pt-12'>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-950 mb-8 text-center">Premium Brand Selection</h2>
          
          <div className="mb-12">
            <h3 className="text-xl font-bold text-gray-950 mb-6">Wheel Brands</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {wheelBrands.map((brand, index) => (
                <div 
                  key={brand}
                  className={`bg-white border border-gray-200 rounded-lg p-4 text-center hover:shadow-md hover:border-red-300 transition-all duration-300 animate-[fadeInUp_0.6s_ease-out_forwards] opacity-0`}
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <p className="text-gray-900 font-semibold text-sm">{brand}</p>
                </div>
              ))}
            </div>
          </div>

            <h3 className="text-xl font-bold text-gray-950 mb-6">Cockpit Brands</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {handlebarBrands.map((brand, index) => (
                <div 
                  key={brand}
                  className={`bg-white border border-gray-200 rounded-lg p-4 text-center hover:shadow-md hover:border-red-300 transition-all duration-300 animate-[fadeInUp_0.6s_ease-out_forwards] opacity-0`}
                  style={{ animationDelay: `${(index + wheelBrands.length) * 0.05}s` }}
                >
                  <p className="text-gray-900 font-semibold text-sm">{brand}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className='border-t border-gray-200 pt-12'>
        <section className="bg-linear-to-r from-red-600 to-red-700 rounded-2xl p-10 mb-20 text-white shadow-xl">
          <h2 className="text-lg md:text-xl font-bold mb-6">Marginal Gains</h2>
          <p className="text-red-50 text-sm leading-relaxed">
            Ceramic bearings save a couple watts. Latex tubes save a couple more. Deeper wheels save some watts at speed. Maybe they just look incredible on your bike. One thing is certain: we focus on what works and what can be ridden hard and often—that is faster. All those small details that we pay attention to add up to a big difference.
          </p>
        </section>
        </div>

        <div className='border-t border-gray-200 pt-12'>
        <section className="mb-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-950 mb-12 text-center">Full Service Available</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl border border-gray-200 p-7 shadow-lg">
              <h3 className="font-bold text-gray-950 mb-4 text-lg">What We Service</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                  <span className="text-gray-700">Hybrids and Mountain Bikes</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                  <span className="text-gray-700">Gravel and Road Bikes</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                  <span className="text-gray-700">Triathlon and Time Trial Bikes</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                  <span className="text-gray-700">City and Commuter Bikes</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-7 shadow-lg">
              <h3 className="font-bold text-gray-950 mb-4 text-lg">Service Details</h3>
              <p className="text-gray-700 mb-4">
                We offer full service on nearly any bike, even those not purchased from us. Our expert technicians handle everything from routine maintenance to complete overhauls.
              </p>
              <p className="text-gray-600 text-sm border-t border-gray-200 pt-4">
                <span className="font-semibold">Note:</span> E-Bikes are serviced only if purchased from Shama Cycles.
              </p>
            </div>
          </div>
        </section>   
        </div>  
      </div>
    </div>
  );
}

export default Gear;