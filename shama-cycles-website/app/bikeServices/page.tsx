"use client";

import React, { useState, useEffect } from "react";
import { Wrench, Zap, Radio, Check, ArrowRight } from "lucide-react";

type CardType = "frames" | "wheels" | "groups" | null;

const BikeServices = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState<CardType>(null);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 0);
  }, []);

  return (
    <div className="mx-auto px-6 py-12">
      <div className={`text-center mb-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white tracking-[-0.02em]">BIKE SERVICES</h1>
        <div className="h-1.25 w-3/5 mx-auto mt-6 bg-linear-to-r from-transparent via-red-600 to-transparent animate-[glow_3s_ease-in-out_infinite]"></div>
      </div>

      <div className="mx-auto px-6 py-12">
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div
              className={`group bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-300 cursor-pointer ${
                activeCard === "frames" ? "shadow-2xl -translate-y-2" : "shadow-lg hover:shadow-2xl hover:-translate-y-1"
              }`}
              onMouseEnter={() => setActiveCard("frames")}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div className="h-30 bg-linear-to-br from-gray-900 to-gray-700 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                  <div className="w-full h-full bg-[radial-gradient(circle,rgba(239,68,68,0.3)_0%,transparent_70%)]"></div>
                </div>
                <Wrench className="text-red-500 group-hover:scale-110 transition-transform" size={60} />
              </div>
              <div className="p-7">
                <h3 className="text-2xl font-bold text-gray-950 dark:text-white mb-3">Frame Selection</h3>
                <p className="text-gray-700 dark:text-gray-400 mb-5">
                  Premium carbon and titanium frames from the world's leading manufacturers, chosen for your specific geometry and performance needs.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-400">Aero, endurance, and race geometries</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-400">Custom sizing and fit analysis</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-400">Material consultation</span>
                  </li>
                </ul>
              </div>
            </div>

            <div
              className={`group bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-300 cursor-pointer ${
                activeCard === "wheels" ? "shadow-2xl -translate-y-2" : "shadow-lg hover:shadow-2xl hover:-translate-y-1"
              }`}
              onMouseEnter={() => setActiveCard("wheels")}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div className="h-30 bg-linear-to-br from-gray-900 to-gray-700 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                  <div className="w-full h-full bg-[radial-gradient(circle,rgba(239,68,68,0.3)_0%,transparent_70%)]"></div>
                </div>
                <Radio className="text-red-500 group-hover:scale-110 transition-transform" size={60} />
              </div>
              <div className="p-7">
                <h3 className="text-2xl font-bold text-gray-950 dark:text-white mb-3">Wheelsets</h3>
                <p className="text-gray-700 dark:text-gray-400 mb-5">
                  Custom-laced or factory builds engineered for the perfect balance of aerodynamics, weight, and reliability for your riding style.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-400">Hand-built custom wheels</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-400">Hub, rim, and spoke selection</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-400">Precision tensioning and truing</span>
                  </li>
                </ul>
              </div>
            </div>

            <div
              className={`group bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-300 cursor-pointer ${
                activeCard === "groups" ? "shadow-2xl -translate-y-2" : "shadow-lg hover:shadow-2xl hover:-translate-y-1"
              }`}
              onMouseEnter={() => setActiveCard("groups")}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div className="h-30 bg-linear-to-br from-gray-900 to-gray-700 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                  <div className="w-full h-full bg-[radial-gradient(circle,rgba(239,68,68,0.3)_0%,transparent_70%)]"></div>
                </div>
                <Zap className="text-red-500 group-hover:scale-110 transition-transform" size={60} />
              </div>
              <div className="p-7">
                <h3 className="text-2xl font-bold text-gray-950 dark:text-white mb-3">Groupsets</h3>
                <p className="text-gray-700 dark:text-gray-400 mb-5">
                  Shimano, SRAM, and Campagnolo—electronic or mechanical—we help you choose the perfect drivetrain for your goals.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-400">Full drivetrain optimization</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-400">Electronic & mechanical options</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-400">Gear ratio consultation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-linear-to-r from-red-600 to-red-700 rounded-2xl p-12 mb-20 text-white shadow-xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Why Choose Our Custom Builds?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-2">Expert Knowledge</h3>
              <p className="text-red-50">Our team has decades of combined experience building bikes for everyone from casual riders to professional racers.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Precision Assembly</h3>
              <p className="text-red-50">Every component is installed with meticulous attention to detail, ensuring optimal performance and longevity.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Custom Fit Integration</h3>
              <p className="text-red-50">We integrate your bike fit data to ensure your build is optimized for your body and riding style.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Premium Components</h3>
              <p className="text-red-50">We source only the finest frames, wheels, and groupsets from industry leaders worldwide.</p>
            </div>
          </div>
        </section>

        <section className="mb-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-950 dark:text-white mb-12 text-center">Our Build Process</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-red-600">1</span>
              </div>
              <h3 className="font-bold text-gray-950 dark:text-white mb-2">Consultation</h3>
              <p className="text-gray-700 dark:text-gray-400">Discuss your goals, budget, and riding style to determine the perfect build spec.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-red-600">2</span>
              </div>
              <h3 className="font-bold text-gray-950 dark:text-white mb-2">Component Selection</h3>
              <p className="text-gray-700 dark:text-gray-400">We source premium components tailored to your specifications and performance needs.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-red-600">3</span>
              </div>
              <h3 className="font-bold text-gray-950 dark:text-white mb-2">Assembly</h3>
              <p className="text-gray-700 dark:text-gray-400">Expert assembly with precision alignment, cable routing, and component integration.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-red-600">4</span>
              </div>
              <h3 className="font-bold text-gray-950 dark:text-white mb-2">Fine-Tuning</h3>
              <p className="text-gray-700 dark:text-gray-400">Final fit integration and adjustments to ensure your bike is perfectly dialed in.</p>
            </div>
          </div>
        </section>     
      </div>
    </div>
  );
};

export default BikeServices;