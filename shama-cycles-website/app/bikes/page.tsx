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
      uniqueness: 'What makes 3T special is their engineering-first approach and willingness to challenge convention. Perfect for riders who want cutting-edge aerodynamics and versatility in one package.',
      bestFor: 'Gravel racers, triathletes, and road cyclists seeking maximum efficiency',
      gallery: ['/3t_1.webp', '/3t_2.webp', '/3t_3.wepb']
    },
    { 
      name: 'TIME', 
      logo: '/time_1.webp',
      uniqueness: 'TIME invented carbon fiber tubes and pioneered advanced layup techniques. Their frames are known for exceptional comfort without sacrificing stiffness.',
      bestFor: 'Endurance riders and cyclists prioritizing all-day comfort with performance',
      gallery: ['/time_1.webp', '/time_2.webp', '/time_3.webp']
    },
    { 
      name: 'Factor', 
      logo: '/factor_1.webp',
      uniqueness: 'Factor pushes the boundaries of modern frame design with cutting-edge technology and aggressive aesthetics. Their bikes are engineered for speed and built for riders who demand the absolute best.',
      bestFor: 'Competitive racers and performance enthusiasts seeking next-generation technology',
      gallery: ['/factor_1.webp', '/factor_2.webp', '/factor_3.webp']
    },
    { 
      name: 'Colnago', 
      logo: '/colnago_3.webp',
      uniqueness: 'Colnago represents the pinnacle of Italian cycling tradition with iconic designs and unmatched racing pedigree. Their frames blend artistry with performance.',
      bestFor: 'Enthusiasts who appreciate heritage, collectors, and competitive racers',
      gallery: ['/colnago_1.webp', '/colnago_2.webp', '/colnago_3.webp']
    },
    { 
      name: 'Cipollini', 
      logo: '/cipollini_2.webp',
      uniqueness: 'Named after champion Mario Cipollini, these bikes are as much about making a statement as winning races. Bold Italian design meets uncompromising performance.',
      bestFor: 'Riders who want to stand out and go fast with unmistakable style',
      gallery: ['/cipollini_1.webp', '/cipollini_2.webp', '/cipollini_3.webp']
    },
    { 
      name: 'Enve', 
      logo: '/enve_1.jpeg',
      uniqueness: 'Enve builds the fastest carbon frames and components with precision craftsmanship. Every detail is obsessively refined for optimal aerodynamics and stiffness.',
      bestFor: 'Speed-focused racers and cyclists who value American engineering excellence',
      gallery: ['/enve_1.jpeg', '/enve_2.webp', '/enve_3.jpeg']
    },
    { 
      name: 'Argon18', 
      logo: '/argon_2.webp',
      uniqueness: 'Argon18 combines aerospace-grade engineering with real-world testing. Their 3D System allows precise fit adjustments for optimal power transfer and comfort.',
      bestFor: 'Serious racers and triathletes seeking measurable performance gains',
      gallery: ['/argon_1.webp', '/argon_2.webp', '/argon_3.wepb']
    },
    { 
      name: 'Officine Mattio', 
      logo: '/mattio_1.webp',
      uniqueness: 'Small-batch Italian artisans who treat each frame as a work of art. Combining old-world craftsmanship with modern technology for heirloom-quality bicycles.',
      bestFor: 'Discerning cyclists who want exclusivity and Italian artisan quality',
      gallery: ['/mattio_1.webp', '/mattio_2.webp', '/mattio_3.webp']
    },
    { 
      name: 'Santa Cruz', 
      logo: '/santa_cruz_3.jpeg',
      uniqueness: 'Santa Cruz creates versatile bikes that blur the line between gravel, adventure, and road. Built for exploration without compromising performance.',
      bestFor: 'Riders seeking adventure capability with road bike efficiency',
      gallery: ['/santa_cruz_1.jpeg', '/santa_cruz_2.jpeg', '/santa_cruz_3.jpeg']
    },
    { 
      name: 'Cervélo', 
      logo: '/cervelo_3.jpeg',
      uniqueness: 'Cervélo is obsessed with speed, using computational design and aerodynamic testing to create the fastest bikes on the planet. Science meets performance.',
      bestFor: 'Professional and amateur racers prioritizing velocity and marginal gains',
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
        <div className="h-[5px] w-3/5 mx-auto mt-6 bg-linear-to-r from-transparent via-red-600 to-transparent animate-[glow_3s_ease-in-out_infinite]"></div>
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
        <h2 className="text-2xl md:text-4xl font-bold text-gray-950 mb-10 text-center">What is a Custom Build?</h2>
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
            <p className="text-gray-600">Work directly with builders to choose the frame size, geometry, and componentsthat match your riding style.</p>
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
        <h2 className="text-2xl md:text-4xl font-bold text-gray-950 mb-12 text-center">Our Latest Builds</h2>
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
          <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto p-8 md:p-12 relative shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <button className="absolute top-6 right-6 w-10 h-10 rounded-full bg-gray-100 shadow flex items-center justify-center hover:bg-gray-200 transition" onClick={closeDialog}>
              <X size={20} />
            </button>

            <div className="flex flex-col gap-8">
              <div className="text-center border-b border-gray-200 pb-6">
                <h2 className="text-3xl font-bold text-gray-900">{selectedBrand.name}</h2>
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