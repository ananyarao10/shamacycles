'use client';

import { useState, useEffect } from 'react';
import { Check } from 'lucide-react';
import CalendlyWidget from '../components/CalendlyWidget';

const BikeFittings = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>
        <h1 className="text-[6rem] md:text-5xl font-bold text-gray-900 tracking-[-0.02em]">BIKE FITTINGS</h1>
        <div className="h-[5px] w-3/5 mx-auto mt-6 bg-linear-to-r from-transparent via-red-600 to-transparent animate-[glow_3s_ease-in-out_infinite]"></div>
      </div>

      <div className="mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-13">
          <div className={`transition-all duration-1000 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            <div className="bg-black text-white p-8 mb-4">
              <h3 className="text-xl font-bold">Why a Custom Fit Matters</h3>
            </div>
            <div className="bg-gray-50 p-6 space-y-4 text-base">
              <p>A custom bike fit is essential for every cyclist&apos;s comfort, performance, and overall riding experience.</p>
              <p>Whether you&apos;ve just purchased a new bike or have been riding the same one for years, proper fit ensures optimal efficiency and prevents injury.</p>
              <p>Since every cyclist has unique body mechanics and movement patterns, there&apos;s no one-size-fits-all position.</p>
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            <div className="bg-black text-white p-8 mb-4">
              <h3 className="text-xl font-bold">The Shama Cycles Approach</h3>
            </div>
            <div className="bg-gray-50 p-6 space-y-4 text-base">
              <p>Philip Shama draws on over 14 years of experience and training under John Cobb (Texas A&M Wind Tunnel), Dr. Andy Pruitt, Retul Fit Programs, and Dan Empfield&apos;s FIST fitting.</p>
              <p>Philip works closely with every client, following up after rides to fine-tune comfort and performance until the fit is just right.</p>
              <p>Being the largest Guru dealer in the world gives us an advantage in custom bike fitting and frame design.</p>
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            <div className="bg-black text-white p-8 mb-4">
              <h3 className="text-xl font-bold">Proven Results</h3>
            </div>
            <div className="bg-gray-50 p-6 space-y-4 text-base">
              <p>From custom bikes to refined fits, Shama Cycles clients consistently leave faster, stronger, and more comfortable.</p>
              <p>Philip has worked with State Crit, Road Race, and Time Trial Champions; a 6-time Ultraman Champion; and Pro, Elite, and Age Group triathletes.</p>
              <p>Our race teams dominate podiums worldwide, consistently achieving the fastest bike splits in their categories.</p>
            </div>
          </div>
        </div>

        <div className="mb-15">
          <h2 className="text-4xl font-bold text-center mb-12 text-black">Find the perfect fit for you</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className={`bg-black text-white p-8 rounded-lg transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'} hover:shadow-2xl hover:scale-105 transition-transform`}>
              <div className="flex items-center gap-3 mb-6">
                <div className="text-4xl">👑</div>
                <h3 className="text-3xl font-bold">Pro Bike Fit</h3>
                <span className="text-2xl font-bold ml-auto">$150</span>
              </div>
              <div className="space-y-3">
                <div className="flex gap-3">
                  <Check className="w-5 h-5 shrink-0 text-green-400" />
                  <p>Evaluate cleat, crank, saddle, stem, and bar for optimal sizing and placement</p>
                </div>
                <div className="flex gap-3">
                  <Check className="w-5 h-5 shrink-0 text-green-400" />
                  <p>Use power spin scan analysis and video for detailed before-and-after comparisons</p>
                </div>
                <div className="flex gap-3">
                  <Check className="w-5 h-5 shrink-0 text-green-400" />
                  <p>Receive personalized recommendations to enhance fit and riding experience</p>
                </div>
              </div>
            </div>

            <div className={`bg-black text-white p-8 rounded-lg transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'} hover:shadow-2xl hover:scale-105 transition-transform`}>
              <div className="flex items-center gap-3 mb-6">
                <div className="text-4xl">🎯</div>
                <h3 className="text-3xl font-bold">Retul Bike Fit</h3>
                <span className="text-2xl font-bold ml-auto">$250</span>
              </div>
              <div className="space-y-3">
                <div className="flex gap-3">
                  <Check className="w-5 h-5 shrink-0 text-green-400" />
                  <p>Includes professional fit enhanced with the Retul 3D Motion Capture System</p>
                </div>
                <div className="flex gap-3">
                  <Check className="w-5 h-5 shrink-0 text-green-400" />
                  <p>Captures precise motion data often missed by the naked eye during adjustments</p>
                </div>
                <div className="flex gap-3">
                  <Check className="w-5 h-5 shrink-0 text-green-400" />
                  <p>Ideal for riders with imbalances or those who love detailed performance data</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-15 rounded">
          <p className="text-gray-800"><strong>Follow-up Fits:</strong> We don&apos;t believe fits are always a one-visit fix. Big changes may require multiple visits, and new equipment needs adaptation time. That&apos;s why we don&apos;t charge for follow-up fits. Your satisfaction is our priority.</p>
        </div>

        <div>
          <h2 className="text-4xl font-bold text-center text-black">Schedule a fitting</h2>
          <CalendlyWidget />
        </div>
      </div>
    </div>
  );
};

export default BikeFittings;