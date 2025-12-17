"use client";

import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight, Zap, Users, Wrench } from "lucide-react";
import Image from "next/image";

interface Brand {
  name: string;
  logo: string;
  uniqueness: string;
  bestFor: string;
  gallery: string[];
}

const Bikes = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedBrand, setSelectedBrand] = useState<Brand | null>(null);
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 0);
  }, []);

  const brands = [
    { 
      name: '3T Bike', 
      logo: '/3t_2.webp',
      uniqueness: 'Italian brand that pioneered gravel bikes, aero road race bikes with disc brakes, and 1X drivetrains. Known for pushing boundaries and redefining modern performance design.',
      bestFor: 'Gravel racers and road riders who want innovative, race-ready versatility',
      gallery: ['/3t_1.webp', '/3t_2.webp', '/3t_3.webp']
    },
    { 
      name: 'TIME', 
      logo: '/time_1.webp',
      uniqueness: 'A US-owned brand known for unique carbon construction techniques that deliver exceptional ride quality, balance, and precision across road and gravel platforms.',
      bestFor: 'Riders who value ride feel, craftsmanship, and refined performance',
      gallery: ['/time_1.webp', '/time_2.webp', '/time_3.webp']
    },
    { 
      name: 'Factor', 
      logo: '/factor_1.webp',
      uniqueness: 'Cutting-edge race bikes engineered at the highest level, spanning road, triathlon, and gravel. Designed with uncompromising focus on speed and efficiency.',
      bestFor: 'Elite racers and performance-driven cyclists',
      gallery: ['/factor_1.webp', '/factor_2.webp', '/factor_3.webp']
    },
    { 
      name: 'Colnago', 
      logo: '/colnago_3.webp',
      uniqueness: 'One of the oldest and most iconic Italian race brands. Built in Italy and synonymous with speed, prestige, and world-class ride experiences.',
      bestFor: 'Cyclists who want heritage, prestige, and top-tier race performance',
      gallery: ['/colnago_1.webp', '/colnago_2.webp', '/colnago_3.webp']
    },
    { 
      name: 'Cipollini', 
      logo: '/cipollini_2.webp',
      uniqueness: 'Aggressive Italian race bikes defined by bold styling, stiffness, and an uncompromising focus on speed and presence.',
      bestFor: 'Riders who want an aggressive race bike that stands out',
      gallery: ['/cipollini_1.webp', '/cipollini_2.webp', '/cipollini_3.webp']
    },
    { 
      name: 'Enve', 
      logo: '/enve_1.jpeg',
      uniqueness: 'US-based brand producing race-focused gravel and road bikes designed for both high-speed competition and all-day riding comfort.',
      bestFor: 'Racers and endurance riders seeking precision American engineering',
      gallery: ['/enve_1.jpeg', '/enve_2.webp', '/enve_3.jpeg']
    },
    { 
      name: 'Argon18', 
      logo: '/argon_2.webp',
      uniqueness: 'Performance-driven brand specializing in triathlon, road, and gravel bikes with a strong emphasis on fit, aerodynamics, and efficiency.',
      bestFor: 'Triathletes and racers who want dialed-in fit and performance',
      gallery: ['/argon_1.webp', '/argon_2.webp', '/argon_3.webp']
    },
    { 
      name: 'Officine Mattio', 
      logo: '/mattio_1.webp',
      uniqueness: 'Handmade Italian frames built in small batches, offering custom geometry and exceptional attention to detail.',
      bestFor: 'Riders seeking bespoke Italian craftsmanship and exclusivity',
      gallery: ['/mattio_1.webp', '/mattio_2.webp', '/mattio_3.webp']
    },
    { 
      name: 'Santa Cruz', 
      logo: '/santa_cruz_3.jpeg',
      uniqueness: 'Known for fun-first performance, Santa Cruz builds gravel and mountain bikes designed for racing hard and enjoying every mile off-road.',
      bestFor: 'Off-road racers and adventure-focused riders',
      gallery: ['/santa_cruz_1.jpeg', '/santa_cruz_2.jpeg', '/santa_cruz_3.jpeg']
    },
    { 
      name: 'Cervélo', 
      logo: '/cervelo_3.jpeg',
      uniqueness: 'A leader in aero road, gravel, and triathlon bikes, built for riders who are obsessed with speed and marginal gains.',
      bestFor: 'Speed-focused road racers and triathletes',
      gallery: ['/cervelo_1.jpeg', '/cervelo_2.jpeg', '/cervelo_3.jpeg']
    }
  ];

  const builds = [
    { id: 1, image: '/guru_build.webp' },
    { id: 2, image: '/argon_build.webp' },
    { id: 3, image: '/build.webp' },
    { id: 4, image: '/alchemy_build.webp' }
  ];

  const closeDialog = () => {
    setSelectedBrand(null);
    setSelectedImage(0);
  };

  const nextImage = () => {
    if (selectedBrand) {
      setSelectedImage((prev) => (prev + 1) % selectedBrand.gallery.length);
    }
  };

  const prevImage = () => {
    if (selectedBrand) {
      setSelectedImage((prev) => (prev - 1 + selectedBrand.gallery.length) % selectedBrand.gallery.length);
    }
  };

  return (
    <div className="relative overflow-hidden px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 mx-auto">
      <div className={`text-center mb-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 tracking-[-0.02em]">BIKES</h1>
        <div className="h-1.25 w-3/5 mx-auto mt-6 bg-linear-to-r from-transparent via-red-600 to-transparent animate-[glow_3s_ease-in-out_infinite]"></div>
      </div>

      <div className={`px-6 py-8 mx-auto transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
        <div className="grid gap-6 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2">
          {brands.map((brand, index) => (
            <div 
              key={index}
              className="group flex flex-col items-center gap-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-lg cursor-pointer transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              onClick={() => setSelectedBrand(brand)} 
            >
              <div className="w-full h-32 flex items-center justify-center overflow-hidden relative bg-white rounded-lg transition">
                <Image src={brand.logo} alt={brand.name} className="rounded-lg object-contain p-2" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
              </div>
              <h3 className="text-base font-semibold text-center text-gray-900">{brand.name}</h3>
            </div>
          ))}
        </div>
      </div>

      <div className="px-6 py-12 mx-auto border-t border-gray-200">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-950 mb-10 text-center">What is a Custom Build?</h2>
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="flex flex-col gap-4">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
              <Wrench className="text-red-600" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Hand-Assembled</h3>
            <p className="text-gray-600">Each component is carefully selected and assembled by experienced builders who understand the nuances of weight, balance, and performance.</p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
              <Users className="text-red-600" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Your Specifications</h3>
            <p className="text-gray-600">Work directly with us to choose the frame size, geometry, components, and aesthetic that best match your riding style.</p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
              <Zap className="text-red-600" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Optimized Performance</h3>
            <p className="text-gray-600">Unlike off-the-shelf bikes, custom builds are tuned specifically for you to ensure the perfect fit, power transfer, and ride quality.</p>
          </div>
        </div>
      </div>

      <div className="px-6 py-10 mx-auto border-t border-gray-200">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-950 mb-12 text-center">Our Latest Builds</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {builds.map((build) => (
            <div key={build.id} className="group relative aspect-square overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-transform hover:scale-105">
              <Image src={build.image} alt={`Build ${build.id}`} className="object-cover group-hover:brightness-110 transition-all" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw" />
            </div>
          ))}
        </div>
      </div>

      {selectedBrand && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-6" onClick={closeDialog}>
          <div className="bg-white rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto p-8 md:p-12 relative shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <button className="absolute top-6 right-6 w-10 h-10 rounded-full bg-gray-100 shadow flex items-center justify-center hover:bg-gray-200 transition" onClick={closeDialog}>
              <X size={20} />
            </button>

            <div className="flex flex-col gap-8">
              <div className="text-center border-b border-gray-200 pb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{selectedBrand.name}</h2>
              </div>

              <div className="flex flex-col gap-4">
                <div className="relative aspect-video rounded-xl overflow-hidden bg-white flex items-center justify-center">
                  {selectedBrand.gallery.length > 1 && (
                    <button className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 w-10 h-10 rounded-full flex items-center justify-center shadow hover:bg-white transition z-10" onClick={prevImage}>
                      <ChevronLeft size={20} />
                    </button>
                  )}

                  <Image src={selectedBrand.gallery[selectedImage]} alt={`${selectedBrand.name} ${selectedImage + 1}`} className="object-contain" fill sizes="(max-width: 768px) 90vw, 600px" />

                  {selectedBrand.gallery.length > 1 && (
                    <button className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 w-10 h-10 rounded-full flex items-center justify-center shadow hover:bg-white transition z-10" onClick={nextImage}>
                      <ChevronRight size={20} />
                    </button>
                  )}
                </div>
                {selectedBrand.gallery.length > 1 && (
                  <div className="flex justify-center gap-2">
                    {selectedBrand.gallery.map((_, idx: number) => (
                      <button key={idx} onClick={() => setSelectedImage(idx)} className={`w-2.5 h-2.5 rounded-full transition-all ${selectedImage === idx ? 'bg-red-600 w-8' : 'bg-gray-300 hover:bg-gray-400'}`}></button>
                    ))}
                  </div>
                )}
              </div>

              <div className="flex flex-col gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">What makes them unique</h3>
                  <p className="text-gray-600 leading-relaxed">{selectedBrand.uniqueness}</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Best suited for</h3>
                  <p className="text-gray-600 leading-relaxed">{selectedBrand.bestFor}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Bikes;