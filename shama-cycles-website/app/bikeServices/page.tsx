"use client";

import React, { useState, useEffect } from "react";

type CardType = "frames" | "wheels" | "groups" | null;

const BikeServices = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState<CardType>(null);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 0);
  }, []);

  return (
    <div className="mx-auto px-6 py-12">
      <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 tracking-[-0.02em]">BIKE SERVICES</h1>
        <div className="h-[5px] w-3/5 mx-auto mt-6 bg-linear-to-r from-transparent via-red-600 to-transparent animate-[glow_3s_ease-in-out_infinite]"></div>
      </div>

      <section className="mb-20">
        <div className="mb-10">
          <h2 className="text-3xl font-bold mb-2">Custom Bike Builds</h2>
          <div className="h-1 w-20 bg-linear-to-r from-red-600 to-red-400 rounded"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div
            className={`bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 cursor-pointer ${
              activeCard === "frames" ? "transform -translate-y-1 shadow-xl" : ""
            }`}
            onMouseEnter={() => setActiveCard("frames")}
            onMouseLeave={() => setActiveCard(null)}
          >
            <div className="h-40 bg-linear-to-br from-gray-800 to-gray-600 flex items-center justify-center">
              <span className="text-6xl filter grayscale brightness-200">🚴</span>
            </div>
            <div className="p-5">
              <h3 className="text-xl font-semibold mb-2">Frame Selection</h3>
              <p className="text-gray-600 text-sm mb-3">
                Premium carbon and titanium frames from the world&apos;s leading
                manufacturers
              </p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>Aero, endurance, and race geometries
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>Custom sizing and fit analysis
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>Material consultation
                </li>
              </ul>
            </div>
          </div>

          <div
            className={`bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 cursor-pointer ${
              activeCard === "wheels" ? "transform -translate-y-1 shadow-xl" : ""
            }`}
            onMouseEnter={() => setActiveCard("wheels")}
            onMouseLeave={() => setActiveCard(null)}
          >
            <div className="h-40 bg-linear-to-br from-gray-700 to-gray-500 flex items-center justify-center">
              <span className="text-6xl filter grayscale brightness-200">⚙️</span>
            </div>
            <div className="p-5">
              <h3 className="text-xl font-semibold mb-2">Wheelsets</h3>
              <p className="text-gray-600 text-sm mb-3">
                Custom-laced or factory builds — aerodynamics meets reliability
              </p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>Hand-built custom wheels
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>Hub, rim, and spoke selection
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>Precision tensioning and truing
                </li>
              </ul>
            </div>
          </div>

          <div
            className={`bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 cursor-pointer ${
              activeCard === "groups" ? "transform -translate-y-1 shadow-xl" : ""
            }`}
            onMouseEnter={() => setActiveCard("groups")}
            onMouseLeave={() => setActiveCard(null)}
          >
            <div className="h-40 bg-linear-to-br from-gray-600 to-gray-400 flex items-center justify-center">
              <span className="text-6xl filter grayscale brightness-200">⚡</span>
            </div>
            <div className="p-5">
              <h3 className="text-xl font-semibold mb-2">Groupsets</h3>
              <p className="text-gray-600 text-sm mb-3">
                Shimano, SRAM, Campagnolo — electronic or mechanical perfection
              </p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>Full drivetrain optimization
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>Electronic & mechanical options
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>Gear ratio consultation
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default BikeServices;
