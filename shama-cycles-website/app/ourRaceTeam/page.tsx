"use client"

import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const OurRaceTeam = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [mensTeamLineVisible, setMensTeamLineVisible] = useState(false);
  const [womensTeamLineVisible, setWomensTeamLineVisible] = useState(false);
  const [sponsorsLineVisible, setSponsorsLineVisible] = useState(false);

  const mensTeamRef = useRef<HTMLHeadingElement>(null);
  const womensTeamRef = useRef<HTMLHeadingElement>(null);
  const sponsorsRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 0);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === mensTeamRef.current) {
              setMensTeamLineVisible(true);
            } else if (entry.target === womensTeamRef.current) {
              setWomensTeamLineVisible(true);
            } else if (entry.target === sponsorsRef.current) {
              setSponsorsLineVisible(true);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    if (mensTeamRef.current) observer.observe(mensTeamRef.current);
    if (womensTeamRef.current) observer.observe(womensTeamRef.current);
    if (sponsorsRef.current) observer.observe(sponsorsRef.current);

    return () => observer.disconnect();
  }, []);

  const mensTeam = [
    'Peter Aubin',
    'John Donovan',
    'Erique Williams',
    'John Yoder',
    'Philip Shama',
    'Andrew Yoder',
    'Taylor Pruet',
    'Said Assali',
    'Leonard Gremillion',
    'Fabian Narvaez',
    'Vernon McDonald',
    'Henk Noordermeer',
    'Reed Olmsteed',
    'Steve Quick',
    'Jeff Grant',
    'Lance Looper',
    'Jose Baker',
    'Hendra Wibowo',
    'Nathan Lesniewski',
    'Paul VonBurg',
    'Ahmed King',
    'Shlomy Goffri',
    'Grant Najera',
    'Jason Van Loo',
    'Stuart Page',
    'Philip Davis',
    'Enoc Garza',
    'Luke Rucker',
    'Pat Simpson'
  ];

  const womensTeam = [
    'Jennifer Wagner',
    'Landi Orza',
    'Kelley Devine',
    'Tracy Jones Martin',
    'Michelle Yoder',
    'Skevi Yoder',
    'Ash Lesniewski',
    'Audrey Maness',
    'Peggy Yetman',
    'Isabel Lachner',
    'Kate Looney',
    'Karen Satriano'
  ];

  const sponsors = [
    { name: 'Hydromax USA', logo: '/hydromax.jpeg', website: 'https://hydromaxusa.com/' },
    { name: 'The Caker', logo: '/thecaker.jpg', website: 'https://www.instagram.com/thecakerhouston/?hl=en' },
    { name: 'HED Wheels', logo: '/hed.avif', website: 'https://hedcycling.com/' },
    { name: 'Vie13', logo: '/vie13.jpeg', website: 'https://vie13.com/' },
    { name: 'Trinity Estate Homes', logo: '/trinity_estate_homes.png', website: 'https://www.trinityestatehomes.com/' },
  ];

  const teamImages = [
    '/race_team_1.webp',
    '/race_team_2.webp',
    '/race_team_3.webp',
    '/race_team_4.webp',
    '/race_team_5.webp'
  ];

  const nextImage = () => setCurrentImageIndex((prev) => (prev + 1) % teamImages.length);
  const prevImage = () => setCurrentImageIndex((prev) => (prev - 1 + teamImages.length) % teamImages.length);

  return (
    <div className="relative overflow-hidden px-6 py-12">
      <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white tracking-[-0.02em]">OUR RACE TEAM</h1>
        <div className="h-1.25 w-3/5 mx-auto mt-6 bg-linear-to-r from-transparent via-red-600 to-transparent animate-[glow_3s_ease-in-out_infinite]"></div>
      </div>

      <div className={`mb-12 transition-opacity duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
        <div className="relative w-full md:w-1/2 mx-auto aspect-16/10 rounded-xl overflow-hidden shadow-2xl">
          <Image
            src={teamImages[currentImageIndex]}
            alt={`Team ${currentImageIndex + 1}`}
            fill
            className="object-cover"
          />

          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/90 dark:bg-gray-800/90 rounded-full flex items-center justify-center shadow hover:scale-110 transition-transform"
          >
            <ChevronLeft size={28} />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/90 dark:bg-gray-800/90 rounded-full flex items-center justify-center shadow hover:scale-110 transition-transform"
          >
            <ChevronRight size={28} />
          </button>
        </div>

        <div className="flex justify-center gap-3 mt-4">
          {teamImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`rounded-full transition-all duration-300 ${index === currentImageIndex ? 'bg-red-600 w-8 h-3 rounded-md' : 'bg-gray-300 w-3 h-3'}`}
            />
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow">
          <h3 ref={mensTeamRef} className="text-xl font-bold text-gray-900 dark:text-white mb-6 pb-3 relative">Men&apos;s Team
            <span className={`absolute bottom-0 left-0 h-1 bg-red-600 rounded transition-all duration-1000 ${mensTeamLineVisible ? 'w-full' : 'w-0'}`}></span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-2 gap-x-6">
            {mensTeam.map((member, idx) => (
              <div key={idx} className="text-gray-700 dark:text-gray-400 py-2 border-b border-gray-200 dark:border-gray-700 transition-all text-[0.8rem]">
                {member}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow">
          <h3 ref={womensTeamRef} className="text-xl font-bold text-gray-900 dark:text-white mb-6 pb-3 relative">Women&apos;s Team
            <span className={`absolute bottom-0 left-0 h-1 bg-red-600 rounded transition-all duration-1000 ${womensTeamLineVisible ? 'w-full' : 'w-0'}`}></span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-6">
            {womensTeam.map((member, idx) => (
              <div key={idx} className="text-gray-700 dark:text-gray-400 py-2 border-b border-gray-200 dark:border-gray-700 transition-all text-[0.8rem]">
                {member}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-8 bg-linear-to-b from-transparent via-pink-100 to-transparent">
        <h2 ref={sponsorsRef} className="text-2xl md:text-3xl font-bold text-center mb-12 dark:text-white relative inline-block w-full">Our sponsors
          <span className={`absolute bottom-[-9] left-1/2 transform -translate-x-1/2 h-1 bg-red-600 rounded transition-all duration-1000 ${sponsorsLineVisible ? 'w-35' : 'w-0'}`}></span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {sponsors.map((sponsor, idx) => (
            <a
              key={idx}
              href={sponsor.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-4 p-6 bg-white dark:bg-gray-800 rounded-xl shadow transition-transform hover:-translate-y-2 hover:shadow-2xl"
            >
              <Image src={sponsor.logo} alt={sponsor.name} width={100} height={100} className="w-full h-full object-contain p-4" />
              <p className="text-gray-900 dark:text-white font-semibold text-center">{sponsor.name}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurRaceTeam;