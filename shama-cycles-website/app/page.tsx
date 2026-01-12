'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const HomePage: React.FC = () => {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 0);
  }, []);

  return (
    <div className="relative min-h-[91vh] bg-white dark:bg-gray-900 overflow-hidden">
      <div className="relative overflow-hidden px-6 py-8">
      <div className={`text-center mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-900 dark:text-white tracking-[-0.02em]">SHAMA CYCLES</h1>
        <div className="h-1.25 w-3/5 mx-auto mt-6 bg-linear-to-r from-transparent via-red-600 to-transparent animate-[glow_3s_ease-in-out_infinite]"></div>
      </div>

        <div className="grid grid-cols-1 lg:grid-cols-[minmax(400px,1fr)_minmax(400px,1fr)] gap-8 items-start">
          <div
            className={`flex flex-col gap-8 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div>
              <p className="text-lg sm:text-xl font-light text-gray-800 dark:text-gray-200 mt-3 mb-2">
                A home away from home for bike lovers
              </p>
              <p className="text-lg sm:text-xl font-light text-gray-800 dark:text-gray-200 mb-2">
                Personalized sales, bike fitting, and service
              </p>
              <p className="text-base text-gray-600 dark:text-gray-400 leading-6 mb-2">
                Making every bike sale, upgrade and service specific you and your needs
              </p>

              <button
                onClick={() => router.push("/bikeFittings#scheduling")}
                className="inline-flex items-center gap-3 px-4 py-2 bg-red-600 text-white font-semibold text-[1rem] rounded-lg transition-all duration-300 hover:bg-red-700 hover:scale-105 hover:shadow-[0_10px_20px_rgba(220,38,38,0.3)] relative overflow-hidden mt-1"
              >
                <span className="transition-transform duration-300 transform group-hover:translate-x-1">→</span>
                <span>Schedule a bike fit</span>
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="relative w-full h-48">
                <Image className="rounded-md object-cover" src="/shama_home_1.webp" alt="Shama Cycles" fill />
              </div>
              <div className="relative w-full h-48">
                <Image className="rounded-md object-cover" src="/shama_home_6.webp" alt="Shama Cycles" fill />
              </div>
            </div>

            <div className="flex justify-around items-center gap-6 flex-wrap md:flex-nowrap">
              <div className="flex flex-col items-center gap-2 text-center">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-red-600 leading-none">15+</div>
                <div className="text-sm sm:text-base font-medium uppercase tracking-wider text-black dark:text-white">Years Experience</div>
              </div>
              <div className="flex flex-col items-center gap-2 text-center">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-red-600 leading-none">1000+</div>
                <div className="text-sm sm:text-base font-medium uppercase tracking-wider text-black dark:text-white">Bikes Fitted</div>
              </div>
              <div className="flex flex-col items-center gap-2 text-center">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-red-600 leading-none">500+</div>
                <div className="text-sm sm:text-base font-medium uppercase tracking-wider text-black dark:text-white">Happy Customers</div>
              </div>
            </div>
          </div>

          <div
            className={`grid grid-cols-2 gap-4 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="relative w-full h-60">
              <Image className="rounded-md object-cover" src="/shama_home_2.webp" alt="Shama Cycles" fill />
            </div>
            <div className="relative w-full h-60">
              <Image className="rounded-md object-cover" src="/shama_home_3.webp" alt="Shama Cycles" fill />
            </div>
            <div className="relative w-full h-60">
              <Image className="rounded-md object-cover" src="/shama_home_4.webp" alt="Shama Cycles" fill />
            </div>
            <div className="relative w-full h-60">
              <Image className="rounded-md object-cover" src="/shama_home_5.webp" alt="Shama Cycles" fill />
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes glow {
          0%, 100% { opacity: 0.8; }
          50% { opacity: 1; box-shadow: 0 0 20px rgba(220, 38, 38, 0.5); }
        }
        .animate-[glow_3s_ease-in-out_infinite] {
          animation: glow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default HomePage;