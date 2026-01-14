'use client';

import { useState, useEffect, useRef } from 'react';
import { Wind, Gauge, Zap, Check, Flame, Shirt } from 'lucide-react';
import Image from 'next/image';

type CardType = "wheels" | "drivetrain" | "cockpit" | "nutrition" | "clothing" | null;

const Components = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState<CardType>(null);
  const [fullServiceLineVisible, setFullServiceLineVisible] = useState(false);

  const fullServiceRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 0);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === fullServiceRef.current) {
            setFullServiceLineVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (fullServiceRef.current) observer.observe(fullServiceRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="mx-auto px-6 py-12">
      <div className={`text-center mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white tracking-[-0.02em]">COMPONENTS</h1>
        <div className="h-1.25 w-3/5 mx-auto mt-6 bg-linear-to-r from-transparent via-red-600 to-transparent animate-[glow_3s_ease-in-out_infinite]"></div>
      </div>

      <div className="mx-auto px-6 py-12">
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div
              className={`group bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-300 cursor-pointer ${
                activeCard === "wheels" ? "shadow-2xl -translate-y-2" : "shadow-lg hover:shadow-2xl hover:-translate-y-1"
              }`}
              onMouseEnter={() => setActiveCard("wheels")}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div className="h-24 bg-linear-to-br from-gray-900 to-gray-700 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                  <div className="w-full h-full bg-[radial-gradient(circle,rgba(239,68,68,0.3)_0%,transparent_70%)]"></div>
                </div>
                <Wind className="text-red-500 group-hover:scale-110 transition-transform" size={50} />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-950 dark:text-white mb-2">Wheels</h3>
                <p className="text-gray-700 dark:text-gray-400 text-sm mb-4">
                  Custom laced wheels, hand-picked components, precision tuning.
                </p>
                <div className="space-y-2">
                  <div className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide">Brands</div>
                  <div className="flex flex-wrap gap-2">
                    {['HED', 'Princeton', 'ENVE', 'ZIPP', 'Lightweight'].map(brand => (
                      <span key={brand} className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white px-2.5 py-1 rounded-full">
                        {brand}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div
              className={`group bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-300 cursor-pointer ${
                activeCard === "drivetrain" ? "shadow-2xl -translate-y-2" : "shadow-lg hover:shadow-2xl hover:-translate-y-1"
              }`}
              onMouseEnter={() => setActiveCard("drivetrain")}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div className="h-24 bg-linear-to-br from-gray-900 to-gray-700 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                  <div className="w-full h-full bg-[radial-gradient(circle,rgba(239,68,68,0.3)_0%,transparent_70%)]"></div>
                </div>
                <Zap className="text-red-500 group-hover:scale-110 transition-transform" size={50} />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-950 dark:text-white mb-2">Drivetrain</h3>
                <p className="text-gray-700 dark:text-gray-400 text-sm mb-4">
                  Shimano, SRAM, Rotor. Electronic & mechanical optimized for you.
                </p>
                <div className="space-y-2">
                  <div className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide">Brands</div>
                  <div className="flex flex-wrap gap-2">
                    {['Shimano', 'SRAM', 'Rotor'].map(brand => (
                      <span key={brand} className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white px-2.5 py-1 rounded-full">
                        {brand}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div
              className={`group bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-300 cursor-pointer ${
                activeCard === "cockpit" ? "shadow-2xl -translate-y-2" : "shadow-lg hover:shadow-2xl hover:-translate-y-1"
              }`}
              onMouseEnter={() => setActiveCard("cockpit")}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div className="h-24 bg-linear-to-br from-gray-900 to-gray-700 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                  <div className="w-full h-full bg-[radial-gradient(circle,rgba(239,68,68,0.3)_0%,transparent_70%)]"></div>
                </div>
                <Gauge className="text-red-500 group-hover:scale-110 transition-transform" size={50} />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-950 dark:text-white mb-2">Cockpit</h3>
                <p className="text-gray-700 dark:text-gray-400 text-sm mb-4">
                  Premium handlebars, stems, seatposts. Fit-specific selection.
                </p>
                <div className="space-y-2">
                  <div className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide">Brands</div>
                  <div className="flex flex-wrap gap-2">
                    {['Zipp', 'Enve', '3T', 'THM', 'Deda', 'Profile'].map(brand => (
                      <span key={brand} className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white px-2.5 py-1 rounded-full">
                        {brand}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div
              className={`group bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-300 cursor-pointer ${
                activeCard === "nutrition" ? "shadow-2xl -translate-y-2" : "shadow-lg hover:shadow-2xl hover:-translate-y-1"
              }`}
              onMouseEnter={() => setActiveCard("nutrition")}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div className="h-24 bg-linear-to-br from-gray-900 to-gray-700 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                  <div className="w-full h-full bg-[radial-gradient(circle,rgba(239,68,68,0.3)_0%,transparent_70%)]"></div>
                </div>
                <Flame className="text-red-500 group-hover:scale-110 transition-transform" size={50} />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-950 dark:text-white mb-2">Nutrition</h3>
                <p className="text-gray-700 dark:text-gray-400 text-sm mb-4">
                  Gels, electrolytes, drink mix, food & ketones. 15% bulk discount.
                </p>
                <div className="space-y-2">
                  <div className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide">Brands</div>
                  <div className="flex flex-wrap gap-2">
                    {['Maurten'].map(item => (
                      <span key={item} className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white px-2.5 py-1 rounded-full">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div
              className={`group bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-300 cursor-pointer ${
                activeCard === "clothing" ? "shadow-2xl -translate-y-2" : "shadow-lg hover:shadow-2xl hover:-translate-y-1"
              }`}
              onMouseEnter={() => setActiveCard("clothing")}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div className="h-24 bg-linear-to-br from-gray-900 to-gray-700 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                  <div className="w-full h-full bg-[radial-gradient(circle,rgba(239,68,68,0.3)_0%,transparent_70%)]"></div>
                </div>
                <Shirt className="text-red-500 group-hover:scale-110 transition-transform" size={50} />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-950 dark:text-white mb-2">Clothing</h3>
                <p className="text-gray-700 dark:text-gray-400 text-sm mb-4">
                  Premium biking apparel. Jerseys, bibs, socks & more.
                </p>
                <div className="space-y-2">
                  <div className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide">Brands</div>
                  <div className="flex flex-wrap gap-2">
                    {['Assos', 'Vie 13', 'Zeffz Socks'].map(brand => (
                      <span key={brand} className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white px-2.5 py-1 rounded-full">
                        {brand}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div
              className={`group bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-300 cursor-pointer ${
                activeCard === "wheels" ? "shadow-2xl -translate-y-2" : "shadow-lg hover:shadow-2xl hover:-translate-y-1"
              }`}
              onMouseEnter={() => setActiveCard("wheels")}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div className="h-24 bg-linear-to-br from-gray-900 to-gray-700 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                  <div className="w-full h-full bg-[radial-gradient(circle,rgba(239,68,68,0.3)_0%,transparent_70%)]"></div>
                </div>
                <Wind className="text-red-500 group-hover:scale-110 transition-transform" size={50} />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-950 dark:text-white mb-2">Helmets and Shoes</h3>
                <p className="text-gray-700 dark:text-gray-400 text-sm mb-4">
                  Aerodynamic helmets and carbon-soled shoes for maximum efficiency.
                </p>
                <div className="space-y-2">
                  <div className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide">Brands</div>
                  <div className="flex flex-wrap gap-2">
                    {['Giro', 'Specialized', 'Shimano'].map(brand => (
                      <span key={brand} className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white px-2.5 py-1 rounded-full">
                        {brand}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className='border-t border-gray-200 pt-12'>
        <section className="mb-4">
          <h2 ref={fullServiceRef} className="text-2xl md:text-3xl font-bold text-gray-950 dark:text-white mb-12 text-center relative inline-block w-full">Full services available
            <span className={`absolute bottom-[-9] left-1/2 transform -translate-x-1/2 h-1 bg-red-600 rounded transition-all duration-1000 ${fullServiceLineVisible ? 'w-35' : 'w-0'}`}></span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-7 shadow-lg">
              <h3 className="font-bold text-gray-950 dark:text-white mb-4 text-lg">What We Service</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                  <span className="text-gray-700 dark:text-gray-400">Hybrids and Mountain Bikes</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                  <span className="text-gray-700 dark:text-gray-400">Gravel and Road Bikes</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                  <span className="text-gray-700 dark:text-gray-400">Triathlon and Time Trial Bikes</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                  <span className="text-gray-700 dark:text-gray-400">City and Commuter Bikes</span>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-7 shadow-lg">
              <h3 className="font-bold text-gray-950 dark:text-white mb-4 text-lg">Service Details</h3>
              <p className="text-gray-700 dark:text-gray-400 mb-4">
                We offer full service on nearly any bike, even those not purchased from us. Our expert technicians handle everything from routine maintenance to complete overhauls.
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-sm border-t border-gray-200 dark:border-gray-700 pt-4">
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

export default Components;