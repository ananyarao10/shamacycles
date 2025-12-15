"use client";

import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
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
      name: 'Colnago', 
      logo: '/colnago_3.webp',
      uniqueness: 'Colnago represents the pinnacle of Italian cycling tradition with iconic designs and unmatched racing pedigree. Their frames blend artistry with performance.',
      bestFor: 'Enthusiasts who appreciate heritage, collectors, and competitive racers',
      gallery: ['/colnago_1.webp', '/colnago_2.webp', '/colnago_3.webp']
    },
    { 
      name: 'Quintana Roo', 
      logo: '/quintana_3.webp',
      uniqueness: 'Purpose-built exclusively for triathlon and time trials with features like integrated storage and optimized positioning. Every detail focused on going fast alone.',
      bestFor: 'Triathletes and time trialists who demand specialized equipment',
      gallery: ['/quintana_1.webp', '/quintana_2.webp', '/quintana_3.webp']
    },
    { 
      name: 'Argon18', 
      logo: '/argon_2.webp',
      uniqueness: 'Argon18 combines aerospace-grade engineering with real-world testing. Their 3D System allows precise fit adjustments for optimal power transfer and comfort.',
      bestFor: 'Serious racers and triathletes seeking measurable performance gains',
      gallery: ['/argon_1.webp', '/argon_2.webp', '/argon_3.wepb']
    },
    { 
      name: 'Cipollini', 
      logo: '/cipollini_2.webp',
      uniqueness: 'Named after champion Mario Cipollini, these bikes are as much about making a statement as winning races. Bold Italian design meets uncompromising performance.',
      bestFor: 'Riders who want to stand out and go fast with unmistakable style',
      gallery: ['/cipollini_1.webp', '/cipollini_2.webp', '/cipollini_3.webp']
    },
    { 
      name: 'Felt Bicycles', 
      logo: '/felt_1.webp',
      uniqueness: 'Felt pioneered many modern bike technologies and offers exceptional value without compromising quality. Their range covers every cycling discipline with proven designs.',
      bestFor: 'Performance-minded cyclists seeking reliability across all riding styles',
      gallery: ['/felt_1.webp']
    },
    { 
      name: 'Alchemy', 
      logo: '/alchemy_3.webp',
      uniqueness: 'Every Alchemy frame is handmade in Denver with custom geometry tailored to you. True craftsmanship meets modern materials for a bike that fits like nothing else.',
      bestFor: 'Riders seeking a truly custom, made-for-you bicycle experience',
      gallery: ['/alchemy_1.webp', '/alchemy_2.webp', '/alchemy_3.webp']
    },
    { 
      name: 'Drop Cycles', 
      logo: '/drop_1.webp',
      uniqueness: 'Drop specializes in timeless steel and titanium frames built to your exact specifications. These bikes age beautifully and ride with unmatched character.',
      bestFor: 'Riders who value craftsmanship, durability, and the classic ride quality of steel',
      gallery: ['/drop_1.webp', '/drop_2.webp', '/drop_3.webp']
    },
    { 
      name: 'Officine Mattio', 
      logo: '/mattio_1.webp',
      uniqueness: 'Small-batch Italian artisans who treat each frame as a work of art. Combining old-world craftsmanship with modern technology for heirloom-quality bicycles.',
      bestFor: 'Discerning cyclists who want exclusivity and Italian artisan quality',
      gallery: ['/mattio_1.webp']
    },
    { 
      name: 'Time', 
      logo: '/time_1.webp',
      uniqueness: 'Time invented carbon fiber tubes and pioneered advanced layup techniques. Their frames are known for exceptional comfort without sacrificing stiffness.',
      bestFor: 'Endurance riders and cyclists prioritizing all-day comfort with performance',
      gallery: ['/time_1.webp', '/time_2.webp', '/time_3.webp']
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
    <div className="relative overflow-hidden px-6 py-12">
      {/* Hero Section */}
      <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>
        <h1 className="text-[6rem] md:text-5xl font-bold text-gray-900 tracking-[-0.02em]">BIKES</h1>
        <div className="h-[5px] w-3/5 mx-auto mt-6 bg-linear-to-r from-transparent via-red-600 to-transparent animate-[glow_3s_ease-in-out_infinite]"></div>
      </div>

      {/* Brands Grid */}
        <div className={`grid gap-6 px-6 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
            {brands.map((brand, index) => (
                <div 
                key={index}
                className="flex flex-col items-center gap-4 p-6 bg-white rounded-lg shadow-md cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all"
                onClick={() => setSelectedBrand(brand)} // <-- Open dialog
                >
                <div className="w-full h-28 flex items-center justify-center overflow-hidden">
                    <Image src={brand.logo} alt={brand.name} className="max-w-full max-h-full rounded-md" fill />
                </div>
                <h3 className="text-lg font-semibold text-center text-gray-900">{brand.name}</h3>
                </div>
            ))}
        </div>

      {/* Builds Section */}
      <div className="mt-16 w-full px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">See some of our latest builds!</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {builds.map((build) => (
            <div key={build.id} className="relative aspect-4/3 overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-transform hover:scale-105">
              <Image src={build.image} alt={`Build ${build.id}`} className="object-cover" fill />
            </div>
          ))}
        </div>
      </div>

      {/* Bike Brand Dialog */}
      {selectedBrand && (
        <div className="fixed inset-0 bg-black/75 flex items-center justify-center z-50 p-6" onClick={closeDialog}>
          <div className="bg-white rounded-2xl w-[60%] max-h-[90vh] overflow-auto p-12 relative transition-transform" onClick={(e) => e.stopPropagation()}>
            <button className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white shadow flex items-center justify-center hover:bg-gray-100 transition" onClick={closeDialog}>
              <X size={24} />
            </button>

            <div className="flex flex-col gap-8">
              <div className="flex flex-col items-center gap-6 border-b border-gray-200 pb-8">
                <h2 className="text-2xl font-bold text-gray-900">{selectedBrand.name}</h2>
              </div>

              <div className="flex flex-col gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">What makes them unique</h3>
                  <p className="text-gray-600">{selectedBrand.uniqueness}</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Best suited for</h3>
                  <p className="text-gray-600">{selectedBrand.bestFor}</p>
                </div>

                {/* Gallery */}
                <div className="flex flex-col gap-4">
                  <div className="relative aspect-video rounded-xl overflow-hidden bg-gray-100 flex items-center justify-center">
                    <button className="absolute left-2 top-1/2 -translate-y-1/2 bg-white w-12 h-12 rounded-full flex items-center justify-center shadow hover:scale-110 transition" onClick={prevImage}>
                      <ChevronLeft size={32} />
                    </button>

                    <Image src={selectedBrand.gallery[selectedImage]} alt={`${selectedBrand.name} ${selectedImage + 1}`} className="object-cover" fill />

                    <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-white w-12 h-12 rounded-full flex items-center justify-center shadow hover:scale-110 transition" onClick={nextImage}>
                      <ChevronRight size={32} />
                    </button>
                  </div>
                  <div className="flex justify-center gap-2">
                    {selectedBrand.gallery.map((image: string, idx: number) => (
                      <span key={idx} className={`w-3 h-3 rounded-full ${selectedImage === idx ? 'bg-red-600 w-3.5 h-3.5' : 'bg-gray-300'}`}></span>
                    ))}
                  </div>
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
