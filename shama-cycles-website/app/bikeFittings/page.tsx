'use client';

import { useState, useEffect } from 'react';
import { Check, ArrowRight } from 'lucide-react';
import CalendlyWidget from '../components/CalendlyWidget';

const BikeFittings = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 0);
  }, []);

  return (
    <div className="relative overflow-hidden px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 mx-auto">
      <div className={`text-center mb-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 tracking-[-0.02em]">BIKE FITTINGS</h1>
        <div className="h-[5px] w-3/5 mx-auto mt-6 bg-linear-to-r from-transparent via-red-600 to-transparent animate-[glow_3s_ease-in-out_infinite]"></div>
      </div>

        {/* <a href="#scheduling" className="inline-flex items-center gap-2 bg-red-600 text-white px-7 py-3 rounded-lg font-semibold hover:bg-red-700 transition-all hover:gap-3">
          Schedule a Fitting
          <ArrowRight size={18} />
        </a> */}

      <div className="mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className={`transition-all duration-1000 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            <div className="bg-linear-to-r from-gray-900 to-gray-800 text-white p-6 rounded-t-xl">
              <h3 className="text-xl font-bold">Why a Custom Fit Matters</h3>
            </div>
            <div className="bg-white border border-gray-200 p-6 rounded-b-xl space-y-4 text-sm leading-relaxed">
              <p className="text-gray-700">A custom bike fit is essential for every cyclist's comfort, performance, and overall riding experience.</p>
              <p className="text-gray-700">Whether you've just purchased a new bike or have been riding the same one for years, proper fit ensures optimal efficiency and prevents injury.</p>
              <p className="text-gray-700">Since every cyclist has unique body mechanics and movement patterns, there's no one-size-fits-all position.</p>
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            <div className="bg-linear-to-r from-gray-900 to-gray-800 text-white p-6 rounded-t-xl">
              <h3 className="text-xl font-bold">The Shama Cycles Approach</h3>
            </div>
            <div className="bg-white border border-gray-200 p-6 rounded-b-xl space-y-4 text-sm leading-relaxed">
              <p className="text-gray-700">Philip Shama draws on over 14 years of experience and training under John Cobb (Texas A&M Wind Tunnel), Dr. Andy Pruitt, Retul Fit Programs, and Dan Empfield's FIST fitting.</p>
              <p className="text-gray-700">Philip works closely with every client, following up after rides to fine-tune comfort and performance until the fit is just right.</p>
              <p className="text-gray-700">Being the largest Guru dealer in the world gives us an advantage in bike fittings and frame design.</p>
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            <div className="bg-linear-to-r from-gray-900 to-gray-800 text-white p-6 rounded-t-xl">
              <h3 className="text-xl font-bold">Proven Results</h3>
            </div>
            <div className="bg-white border border-gray-200 p-6 rounded-b-xl space-y-4 text-sm leading-relaxed">
              <p className="text-gray-700">From custom bikes to refined fits, Shama Cycles clients consistently leave faster, stronger, and more comfortable.</p>
              <p className="text-gray-700">Philip has worked with State Crit, Road Race, and Time Trial Champions; a 6-time Ultraman Champion; and Pro, Elite, and Age Group triathletes.</p>
              <p className="text-gray-700">Our race teams dominate podiums worldwide, consistently achieving the fastest bike splits in their categories.</p>
            </div>
          </div>
        </div>

        <div className="mb-16 px-6 py-12 mx-auto border-t border-gray-200">
          <h2 className="text-4xl font-bold text-center mb-10 text-gray-950">Find the perfect fit for you</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className={`bg-white border border-gray-200 p-8 rounded-xl transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'} hover:shadow-xl hover:-translate-y-1 transition-all`}>
              <div className="flex items-start gap-4 mb-6">
                <div className="text-4xl">👑</div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Pro Bike Fit</h3>
                  <p className="text-2xl font-bold text-red-600 mt-1">$150</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <Check className="w-5 h-5 shrink-0 text-red-600 mt-0.5" />
                  <p className='text-gray-700'>Evaluate cleat, crank, saddle, stem, and bar for optimal sizing and placement</p>
                </div>
                <div className="flex gap-3">
                  <Check className="w-5 h-5 shrink-0 text-red-600 mt-0.5" />
                  <p className='text-gray-700'>Use power spin scan analysis and video for detailed before-and-after comparisons</p>
                </div>
                <div className="flex gap-3">
                  <Check className="w-5 h-5 shrink-0 text-red-600 mt-0.5" />
                  <p className='text-gray-700'>Receive personalized recommendations to enhance fit and riding experience</p>
                </div>
              </div>
            </div>

            <div className={`bg-white border border-gray-200 p-8 rounded-xl transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'} hover:shadow-xl hover:-translate-y-1 transition-all`}>
              <div className="flex items-start gap-4 mb-6">
                <div className="text-4xl">🎯</div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Retul Bike Fit</h3>
                  <p className="text-2xl font-bold text-red-600 mt-1">$250</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <Check className="w-5 h-5 shrink-0 text-red-600 mt-0.5" />
                  <p className='text-gray-700'>Includes professional fit enhanced with the Retul 3D Motion Capture System</p>
                </div>
                <div className="flex gap-3">
                  <Check className="w-5 h-5 shrink-0 text-red-600 mt-0.5" />
                  <p className='text-gray-700'>Captures precise motion data often missed by the naked eye during adjustments</p>
                </div>
                <div className="flex gap-3">
                  <Check className="w-5 h-5 shrink-0 text-red-600 mt-0.5" />
                  <p className='text-gray-700'>Ideal for riders with imbalances or those who love detailed performance data</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-red-50 border border-red-200 p-8 mb-16 rounded-xl">
          <p className="text-gray-800 leading-relaxed"><span className="font-semibold text-red-600">No hidden charges:</span> We don't believe fits are always a one-visit fix. Big changes may require multiple visits and adaptation time.</p>
        </div>

        <div id="scheduling" className="px-6 py-12 mx-auto border-t border-gray-200">
          <h2 className="text-2xl font-bold text-gray-950 mb-12">Schedule your fitting</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <CalendlyWidget />
            </div>
            
            <div className="md:col-span-2 flex flex-col justify-center gap-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">What to Expect</h3>
                <p className="text-gray-700 leading-relaxed mb-4">When you book a bike fitting appointment, you'll receive a confirmation email with preparation instructions. Please arrive 15 minutes early to complete paperwork and discuss your riding goals.</p>
                <p className="text-gray-700 leading-relaxed">We limit to 2 fit appointments per day to ensure personalized attention and the time needed to dial in your perfect position.</p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 p-6 rounded-xl">
                  <p className="text-gray-600 text-sm mb-2">Appointment Duration</p>
                  <p className="text-2xl font-bold text-gray-900">1-2 hours</p>
                </div>
                <div className="bg-white border border-gray-200 p-6 rounded-xl">
                  <p className="text-gray-600 text-sm mb-2">Appointments Per Day</p>
                  <p className="text-2xl font-bold text-gray-900">Limited to 2</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BikeFittings;