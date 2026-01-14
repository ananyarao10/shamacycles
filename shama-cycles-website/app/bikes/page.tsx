"use client";

import { useState, useEffect, useRef } from "react";
import { X, ChevronLeft, ChevronRight, Zap, Users, Wrench, ExternalLink } from "lucide-react";
import Image from "next/image";

interface Brand {
  name: string;
  logo: string;
  uniqueness: string;
  bestFor: string;
  gallery: string[];
  website: string;
}

const Bikes = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedBrand, setSelectedBrand] = useState<Brand | null>(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [customBuildLineVisible, setCustomBuildLineVisible] = useState(false);
  const [latestBuildsLineVisible, setLatestBuildsLineVisible] = useState(false);

  const customBuildRef = useRef<HTMLHeadingElement>(null);
  const latestBuildsRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 0);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === customBuildRef.current) {
              setCustomBuildLineVisible(true);
            } else if (entry.target === latestBuildsRef.current) {
              setLatestBuildsLineVisible(true);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    if (customBuildRef.current) observer.observe(customBuildRef.current);
    if (latestBuildsRef.current) observer.observe(latestBuildsRef.current);

    return () => observer.disconnect();
  }, []);

  const brands = [
    { 
      name: '3T Bike', 
      logo: '/3t_3.jpg',
      uniqueness: 'The Italian guys who basically invented modern gravel racing. They were doing disc brakes and 1X setups on road bikes before anyone else thought it made sense. Their stuff is built to race.',
      bestFor: 'If you want to race gravel or road and aren\'t afraid to push the limits.',
      gallery: ['/3t_3.jpg', '/3t_1.jpg', '/3t_2.jpg'],
      website: 'https://3tbikes.com/'
    },
    { 
      name: 'TIME', 
      logo: '/time_1.webp',
      uniqueness: 'An American brand that\'s obsessed with how a bike actually feels to ride. Their carbon construction is their secret—it just feels smoother and more alive than most bikes out there.',
      bestFor: 'Riders who care about ride quality and can feel the difference in how a frame responds.',
      gallery: ['/time_1.webp', '/time_2.jpg', '/time_3.webp'],
      website: 'https://timebicycles.com/'
    },
    { 
      name: 'Factor', 
      logo: '/factor_1.jpg',
      uniqueness: 'These guys build bikes for top-level racers. Everything they make is engineered to be fast—no compromises. Road, tri, gravel, it doesn\'t matter. Speed is the priority.',
      bestFor: 'Serious racers who want every marginal gain they can get.',
      gallery: ['/factor_1.jpg', '/factor_2.jpg', '/factor_3.jpg'],
      website: 'https://factorbikes.com/'
    },
    { 
      name: 'Colnago', 
      logo: '/colnago_1.jpg',
      uniqueness: 'From the late 1960s through the 1970s, Colnago was generally regarded as one of the builders of the world\'s finest road race frames. In 1960, Colnago saw fame as Luigi Arienti rode to a gold medal at the Rome Olympics on a Colnago bicycle.',
      bestFor: 'Riders who value prestige, Italian craftsmanship, and a bike with genuine racing history behind it.',
      gallery: ['/colnago_1.jpg', '/colnago_2.jpg', '/colnago_3.jpg'],
      website: 'https://colnago.com/'
    },
    { 
      name: 'Cipollini', 
      logo: '/cipollini_2.jpg',
      uniqueness: 'These bikes are aggressive and they look aggressive. Italian through and through. Built for racers who want a bike that matches their attitude.',
      bestFor: 'You want to race and you want everyone to know it when you roll up.',
      gallery: ['/cipollini_2.jpg', '/cipollini_1.webp', '/cipollini_3.webp'],
      website: 'https://cipollinibike.com/'
    },
    { 
      name: 'Enve', 
      logo: '/enve_1.jpg',
      uniqueness: 'American engineering with a focus on gravel and road racing. They know how to build a bike that\'s quick but won\'t beat you up on long days.',
      bestFor: 'Racers and endurance riders who want something built to last.',
      gallery: ['/enve_1.jpg', '/enve_2.jpg', '/enve_3.jpg'],
      website: 'https://enve.com/'
    },
    { 
      name: 'Argon18', 
      logo: '/argon_1.jpg',
      uniqueness: 'Developed through triathlon and time trial racing with a focus on aerodynamics, fit systems, and race-oriented geometry. Design decisions prioritize efficiency and adjustability.',
      bestFor: 'Triathletes and competitive riders who need precise fit and aerodynamic performance.',
      gallery: ['/argon_1.jpg', '/argon_2.jpg', '/argon_3.jpg'],
      website: 'https://argon18.com/'
    },
    { 
      name: 'Officine Mattio', 
      logo: '/mattio_1.webp',
      uniqueness: 'Small Italian workshop producing hand-built frames in limited runs, with custom geometry and a strong focus on craftsmanship and ride quality.',
      bestFor: 'Riders looking for a small-batch, custom-built frame with direct attention to detail.',
      gallery: ['/mattio_1.webp', '/mattio_2.webp', '/mattio_3.webp'],
      website: 'https://officinemattio.com/'
    },
    { 
      name: 'Santa Cruz', 
      logo: '/santa_cruz_3.jpeg',
      uniqueness: 'Known for durable, well-engineered gravel and mountain bikes with a focus on suspension design, reliability, and real-world performance.',
      bestFor: 'Off-road racing and adventure. You want to go fast but you also want to have fun doing it.',
      gallery: ['/santa_cruz_1.jpeg', '/santa_cruz_2.jpeg', '/santa_cruz_3.jpeg'],
      website: 'https://santacruzbicycles.com/'
    },
    { 
      name: 'Cervélo', 
      logo: '/cervelo_3.jpeg',
      uniqueness: 'Engineering-driven brand with a strong emphasis on aerodynamics, stiffness-to-weight optimization, and data-backed design across road, gravel, and triathlon platforms.',
      bestFor: 'Speed-focused riders who want aero tech and proven race performance.',
      gallery: ['/cervelo_1.jpeg', '/cervelo_2.jpeg', '/cervelo_3.jpeg'],
      website: 'https://cervelo.com/'
    },
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
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white tracking-[-0.02em]">BIKES</h1>
        <div className="h-1.25 w-3/5 mx-auto mt-6 bg-linear-to-r from-transparent via-red-600 to-transparent animate-[glow_3s_ease-in-out_infinite]"></div>
      </div>

      <div className={`px-6 py-8 mx-auto transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
        <div className="grid gap-6 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2">
          {brands.map((brand, index) => (
            <div 
              key={index}
              className="group flex flex-col items-center gap-4 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-lg cursor-pointer transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
              onClick={() => setSelectedBrand(brand)} 
            >
              <div className="w-full h-32 flex items-center justify-center overflow-hidden relative bg-white dark:bg-gray-700 rounded-lg transition">
                <Image src={brand.logo} alt={brand.name} className="rounded-lg object-contain p-2" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
              </div>
              <h3 className="text-base font-semibold text-center text-gray-900 dark:text-white">{brand.name}</h3>
            </div>
          ))}
        </div>
      </div>

      <div className="px-6 py-12 mx-auto border-t border-gray-200">
        <h2 ref={customBuildRef} className="text-2xl md:text-3xl font-bold text-gray-950 dark:text-white mb-10 text-center relative inline-block w-full">What's a custom build?
          <span className={`absolute bottom-[-9] left-1/2 transform -translate-x-1/2 h-1 bg-red-600 rounded transition-all duration-1000 ${customBuildLineVisible ? 'w-35' : 'w-0'}`}></span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="flex flex-col gap-4">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
              <Wrench className="text-red-600" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Built by Hand</h3>
            <p className="text-gray-600 dark:text-gray-400">We assemble bikes from the ground up. Every component gets chosen for how it works with everything and by taking weight, balance, and feel into consideration.</p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
              <Users className="text-red-600" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Built for You</h3>
            <p className="text-gray-600 dark:text-gray-400">You tell us what you want. Your preferred size, your geometry, your components, your look. We build exactly what you need.</p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
              <Zap className="text-red-600" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Tuned to Your Riding</h3>
            <p className="text-gray-600 dark:text-gray-400">A stock bike off the shelf is a compromise. Your custom build isn't. We tune everything so it fits right and feels good for what you actually do.</p>
          </div>
        </div>
      </div>

      <div className="px-6 py-10 mx-auto border-t border-gray-200">
        <h2 ref={latestBuildsRef} className="text-2xl md:text-3xl font-bold text-gray-950 dark:text-white mb-12 text-center relative inline-block w-full">Our latest builds
          <span className={`absolute bottom-[-9] left-1/2 transform -translate-x-1/2 h-1 bg-red-600 rounded transition-all duration-1000 ${latestBuildsLineVisible ? 'w-35' : 'w-0'}`}></span>
        </h2>
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
          <div className="bg-white dark:bg-gray-800 rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto p-8 md:p-12 relative shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <button className="absolute top-6 right-6 w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 shadow flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-600 transition" onClick={closeDialog}>
              <X size={20} />
            </button>

            <div className="flex flex-col gap-8">
              <div className="text-center border-b border-gray-200 dark:border-gray-700 pb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">{selectedBrand.name}</h2>
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
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">What makes them unique</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{selectedBrand.uniqueness}</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Best suited for</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{selectedBrand.bestFor}</p>
                </div>

                <div className="flex justify-center pt-4">
                  <a 
                    href={selectedBrand.website} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
                  >
                    <ExternalLink size={18} />
                    Visit Website
                  </a>
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