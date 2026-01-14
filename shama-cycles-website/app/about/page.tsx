'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Zap, Calendar, Users } from 'lucide-react';

const reviews = [
  { name: "Eric B", avatarLetter: "E", rating: 5, text: `Stopped in before a trip and needed a bike box — they gave me one right away, no fuss, no charge. Super helpful and kind. On top of that, the shop itself is great: excellent layout, quality gear, and a team that clearly cares. Wish more places were like this.`},
  { name: "Haley R", avatarLetter: "H", rating: 5, text: "Came in for a new bike fitting and left with much more - great advice and helpful tips. Very knowledgeable and passionate about helping (newer) cyclists like me." },
  { name: "María B", avatarLetter: "M", rating: 5, text: "Philip fit me on my Cervelho P3x last year for my Ironman. His professionalism and understanding of the bike fit is amazing! He's made me more aerodynamic, while keeping me comfortable for long distance racing. He's the only mechanic that takes care of my bike." },
  { name: "Tristan Q", avatarLetter: "T", rating: 5, text: "They specialize in race/specialty bikes. However, they really came to my rescue by making a custom crankset for my bike and now it's as good as new. I definitely recommend if your bike is in need of repair. Mark was a big help!" },
  { name: "Marcelo R", avatarLetter: "M", rating: 5, text: "Great experience. Both Mark and Phillip are extremely knowledgeable. They helped me set up my bike. These guys are pro, the bikes they maintain are all professional level bikes. Great shop, highly recommend." },
  { name: "Ryan W", avatarLetter: "R", rating: 5, text: "Amazing team and unrivaled shop! Philip, Mark and team do it all — new builds, repairs, fitting sessions and much more. I've done two bike fits, service and several component upgrades based on advice and guidance from the team here." },
];

const openMoreReviews = () => {
  window.open('https://www.google.com/search?q=shama+cycles#lrd=0x8640c6c0b5b27d1f:0x984c9e7d965e1658,1,,,,', '_blank');
}

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [sectionVisible, setSectionVisible] = useState(false);
  const [philipLineVisible, setPhilipLineVisible] = useState(false);
  const [reviewsLineVisible, setReviewsLineVisible] = useState(false);
  const [shopLineVisible, setShopLineVisible] = useState(false);

  const philipRef = useRef<HTMLDivElement>(null);
  const reviewsRef = useRef<HTMLDivElement>(null);
  const shopRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 0);
    setTimeout(() => setSectionVisible(true), 300);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === philipRef.current) {
              setPhilipLineVisible(true);
            } else if (entry.target === reviewsRef.current) {
              setReviewsLineVisible(true);
            } else if (entry.target === shopRef.current) {
              setShopLineVisible(true);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    if (philipRef.current) observer.observe(philipRef.current);
    if (reviewsRef.current) observer.observe(reviewsRef.current);
    if (shopRef.current) observer.observe(shopRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative overflow-hidden px-6 py-12">
      <div className={`text-center mb-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white tracking-[-0.02em]">ABOUT</h1>
        <div className="h-1.25 w-3/5 mx-auto mt-6 bg-linear-to-r from-transparent via-red-600 to-transparent animate-[glow_3s_ease-in-out_infinite]"></div>
      </div>

      <section className={`flex flex-col md:flex-row gap-6 md:gap-6 justify-between mb-10 max-w-full mx-auto p-6 md:p-10 rounded-xl shadow-[0_10px_40px_rgba(220,38,38,0.15)] bg-cover bg-center transition-all duration-1000 ${sectionVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'}`} style={{ backgroundImage: "url('/bike_abt.webp')" }}>
        <div className="flex-1 flex flex-col gap-4">
          <h3 className="text-white font-bold text-2xl relative pb-2">Our Philosophy
            <span className="absolute bottom-0 left-0 w-15 h-0.75 bg-white rounded"></span>
          </h3>
          <div className="flex flex-col gap-3">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md hover:-translate-y-2 hover:shadow-lg transition-all">
              <div className="font-bold mb-2 text-gray-900 dark:text-white">A Personalized Approach</div>
              <div className="text-gray-700 dark:text-gray-300 text-sm">We understand that every rider has a distinct style, taste, and set of goals. Whether you&apos;re racing or exploring gravel roads, we take the time to understand what matters most to you.</div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md hover:-translate-y-2 hover:shadow-lg transition-all">
              <div className="font-bold mb-2 text-gray-900 dark:text-white">Focused, Not Rushed</div>
              <div className="text-gray-700 dark:text-gray-300 text-sm">Every build and service we do is intentional. We believe that bike building and detailing should be focused and never rushed, so every ride feels right.</div>
            </div>
          </div>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center text-center bg-linear-to-br from-red-600 to-red-800 rounded-xl p-10">
          <h3 className="text-white font-bold text-2xl relative pb-2">Our Mission
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-15 h-0.75 bg-white rounded"></span>
          </h3>
          <div className="bg-white dark:bg-gray-100 bg-opacity-95 rounded-xl p-8 text-gray-900 dark:text-gray-800 text-sm shadow-md mt-4">
            Our mission is to build custom road, gravel, triathlon, and track bikes that feel good to ride, perform well, and look great all at the same time.
          </div>
        </div>

        <div className="flex-1 flex flex-col gap-4">
          <h3 className="text-white font-bold text-2xl relative pb-2">Our Process
            <span className="absolute bottom-0 left-0 w-15 h-0.75 bg-white rounded"></span>
          </h3>
          <div className="flex flex-col gap-3">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md hover:-translate-y-2 hover:shadow-lg transition-all">
              <div className="font-bold mb-2 text-gray-900 dark:text-white">Listen & Understand</div>
              <div className="text-gray-700 dark:text-gray-300 text-sm">We start with your goals, preferences, and budget</div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md hover:-translate-y-2 hover:shadow-lg transition-all">
              <div className="font-bold mb-2 text-gray-900 dark:text-white">Design & Build</div>
              <div className="text-gray-700 dark:text-gray-300 text-sm">We source and assemble components to create a bike that matches your exact fit and riding style</div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md hover:-translate-y-2 hover:shadow-lg transition-all">
              <div className="font-bold mb-2 text-gray-900 dark:text-white">Refine & Fit</div>
              <div className="text-gray-700 dark:text-gray-300 text-sm">Every build includes a fitting so your ride feels perfect</div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-12 border-t border-gray-200 flex flex-col md:flex-row gap-8 md:gap-12 items-center md:items-start justify-center mb-8 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[1,2,3,4].map(i => (
            <div key={i} className="relative w-76 h-48 sm:h-52">
              <Image src={`/philip_${i}.webp`} alt="" className="rounded-xl object-cover shadow-lg transform transition-all hover:scale-105" fill />
            </div>
          ))}
        </div>
        <div className="max-w-xl space-y-4 text-center md:text-left">
          <h1 ref={philipRef} className="text-3xl font-bold relative inline-block text-gray-900 dark:text-white">Meet Philip Shama
            <span className={`absolute bottom-[-9] left-0 md:left-0 h-1 bg-red-600 rounded transition-all duration-1000 ${philipLineVisible ? 'w-20' : 'w-0'}`}></span>
          </h1>
          <p className='mt-3 text-gray-700 dark:text-gray-300'>Philip Shama loves many things. He enjoys fresh brewed coffee in the morning, watching Le Tour (well, actually all tours), and spending time with his family. But he&apos;s also one of those people lucky enough to say he really loves his job.</p>
          <p className='text-gray-700 dark:text-gray-300'>His passion for fine detail and commitment to quality craftsmanship can be seen in every bike that leaves the shop. Philip believes the riding experience doesn&apos;t stop when a client picks up their bike — he follows up to make sure each ride feels just right.</p>
          <p className='text-gray-700 dark:text-gray-300'>When he&apos;s not at the shop, you can find Philip riding his bike around Houston or racing throughout the season.</p>
        </div>
      </section>

      <section className="px-6 py-12 border-t border-gray-200 mx-auto">
        <h2 ref={shopRef} className="text-2xl md:text-3xl font-bold text-center mb-12 mt-4 relative inline-block w-full text-gray-900 dark:text-white">Our shop
          <span className={`absolute bottom-[-9] left-1/2 transform -translate-x-1/2 h-1 bg-red-600 rounded transition-all duration-1000 ${shopLineVisible ? 'w-35' : 'w-0'}`}></span>
        </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          <div className={`transition-all duration-1000 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            <div className="group h-64 bg-gray-300 relative rounded-xl overflow-hidden mb-6 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2">
              <Image src="/community_2.jpeg" alt="Group Rides" className="object-cover group-hover:scale-105 transition-transform duration-300" fill />
              <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent"></div>
              <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
                <Zap size={20} className="text-red-400" />
                <span className="font-semibold">Weekly Rides</span>
              </div>
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            <div className="group h-64 bg-gray-300 relative rounded-xl overflow-hidden mb-6 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2">
              <Image src="/community_1.jpeg" alt="Events & Races" className="object-cover group-hover:scale-105 transition-transform duration-300" fill />
              <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent"></div>
              <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
                <Calendar size={20} className="text-red-400" />
                <span className="font-semibold">Year Round</span>
              </div>
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            <div className="group h-64 bg-gray-300 relative rounded-xl overflow-hidden mb-6 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2">
              <Image src="/community_3.webp" alt="Social Rides" className="object-cover group-hover:scale-105 transition-transform duration-300" fill />
              <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent"></div>
              <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
                <Users size={20} className="text-red-400" />
                <span className="font-semibold">Connect & Ride</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-7 mx-auto border-t border-gray-200 dark:border-gray-700">
        <h2 ref={reviewsRef} className="text-2xl md:text-3xl font-bold text-center mb-12 mt-4 relative inline-block w-full text-gray-900 dark:text-white">What our customers are saying
          <span className={`absolute bottom-[-9] left-1/2 transform -translate-x-1/2 h-1 bg-red-600 rounded transition-all duration-1000 ${reviewsLineVisible ? 'w-35' : 'w-0'}`}></span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r, idx) => (
            <article key={idx} className="bg-linear-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 rounded-xl p-5 shadow-md transition-transform hover:-translate-y-2 hover:shadow-lg relative overflow-hidden">
              <header className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 rounded-full bg-linear-to-br from-red-600 to-red-800 text-white font-bold flex items-center justify-center">{r.avatarLetter}</div>
                <div className="flex flex-col">
                  <div className="font-bold text-gray-900 dark:text-white">{r.name}</div>
                  <div className="text-red-600">{Array.from({ length: 5 }).map((_, i) => <span key={i}>{i<r.rating?'★':'☆'}</span>)}</div>
                </div>
              </header>
              <p className="text-gray-900 dark:text-gray-200 text-sm">{r.text}</p>
            </article>
          ))}
        </div>
        <div className="flex justify-end mt-6">
          <button onClick={openMoreReviews} className="px-6 py-3 rounded-full bg-gray-200 dark:bg-gray-700 hover:shadow-lg font-semibold transition-all text-gray-900 dark:text-white">See more →</button>
        </div>
      </section>

      <style jsx global>{`
        @keyframes glow {
          0%,100% { opacity: 0.8; }
          50% { opacity:1; box-shadow:0 0 20px rgba(220,38,38,0.5); }
        }
        .animate-[glow_3s_ease-in-out_infinite] { animation: glow 3s ease-in-out infinite; }
      `}</style>
    </div>
  );
}

export default About;