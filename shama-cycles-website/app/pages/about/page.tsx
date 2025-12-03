'use client';

import { useState, useEffect } from 'react';

const reviews = [
  { name: "Eric B", avatarLetter: "E", rating: 5, text: `Stopped in before a trip and needed a bike box — they gave me one right away, no fuss, no charge. Super helpful and kind. On top of that, the shop itself is great: excellent layout, quality gear, and a team that clearly cares. Wish more places were like this.`},
  { name: "Haley R", avatarLetter: "H", rating: 5, text: "Came in for a new bike fitting and left with much more - great advice and helpful tips. Very knowledgeable and passionate about helping (newer) cyclists like me." },
  { name: "María B", avatarLetter: "M", rating: 5, text: "Philip fit me on my Cervelho P3x last year for my Ironman. His professionalism and understanding of the bike fit is amazing! He's made me more aerodynamic, while keeping me comfortable for long distance racing. He's the only mechanic that takes care of my bike." },
  { name: "Tristan Q", avatarLetter: "T", rating: 5, text: "They specialize in race/specialty bikes. However, they really came to my rescue by making a custom crankset. For my bike now it’s as good as new. I definitely recommend if your bike is ever need of repair. Check them out! Mark was a big help!" },
  { name: "Marcelo R", avatarLetter: "M", rating: 5, text: "Great experience. Both Mark and Phillip are extremely knowledgeable. They helped me set up my bike. These guys are pro, the bikes they maintain are all professional level bikes. Great shop, highly recommend." },
  { name: "Ryan W", avatarLetter: "R", rating: 5, text: "Amazing team and unrivaled shop! Philip, Mark and team do it all — new builds, repairs, fitting sessions and much more. I've done two bike fits, service and several component upgrades based on advice and guidance from the team here." },
];

const openMoreReviews = () => {
  window.open('https://www.google.com/search?q=shama+cycles', '_blank');
}

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative overflow-hidden px-6 py-12">
      {/* Hero Section */}
      <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>
        <h1 className="text-[6rem] md:text-5xl font-bold text-gray-900 tracking-[-0.02em]">ABOUT</h1>
        <div className="h-[5px] w-3/5 mx-auto mt-6 bg-linear-to-r from-transparent via-red-600 to-transparent animate-[glow_3s_ease-in-out_infinite]"></div>
      </div>

      {/* Vision Section */}
      <section className="flex flex-col md:flex-row gap-6 md:gap-6 justify-between mb-12 max-w-380 mx-auto p-6 md:p-10 rounded-xl shadow-[0_10px_40px_rgba(220,38,38,0.15)] bg-cover bg-center" style={{ backgroundImage: "url('/bike_abt.webp')" }}>
        {/* Philosophy */}
        <div className="flex-1 flex flex-col gap-4">
          <h3 className="text-red-600 font-bold text-2xl relative pb-2">Our Philosophy
            <span className="absolute bottom-0 left-0 w-10 h-[3px] bg-red-600 rounded"></span>
          </h3>
          <div className="flex flex-col gap-3">
            <div className="bg-white rounded-lg p-4 shadow-md hover:-translate-y-2 hover:shadow-lg transition-all">
              <div className="font-bold mb-2">A Personalized Approach</div>
              <div className="text-gray-700 text-sm">We understand that every rider has a distinct style, taste, and set of goals. Whether you're racing, commuting, or exploring gravel roads, we take the time to understand what matters most to you.</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-md hover:-translate-y-2 hover:shadow-lg transition-all">
              <div className="font-bold mb-2">Focused, Not Rushed</div>
              <div className="text-gray-700 text-sm">Every build and service we do is intentional. We believe that bike building and detailing should always be focused, never rushed — so that every ride feels right.</div>
            </div>
          </div>
        </div>

        {/* Mission */}
        <div className="flex-1 flex flex-col items-center justify-center text-center bg-linear-to-br from-red-600 to-red-800 rounded-xl p-10">
          <h3 className="text-white font-bold text-2xl relative pb-2">Our Mission
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-10 h-[3px] bg-white rounded"></span>
          </h3>
          <div className="bg-white bg-opacity-95 rounded-xl p-8 text-gray-900 text-sm shadow-md mt-4">
            Our mission is to build custom road, gravel, triathlon, and track bikes that feel good to ride, perform well, and look great — all at the same time.
          </div>
        </div>

        {/* Process */}
        <div className="flex-1 flex flex-col gap-4">
          <h3 className="text-red-600 font-bold text-2xl relative pb-2">Our Process
            <span className="absolute bottom-0 left-0 w-10 h-[3px] bg-red-600 rounded"></span>
          </h3>
          <div className="flex flex-col gap-3">
            <div className="bg-white rounded-lg p-4 shadow-md hover:-translate-y-2 hover:shadow-lg transition-all">
              <div className="font-bold mb-2">Listen & Understand</div>
              <div className="text-gray-700 text-sm">We start with your riding goals, preferences, and budget.</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-md hover:-translate-y-2 hover:shadow-lg transition-all">
              <div className="font-bold mb-2">Design & Build</div>
              <div className="text-gray-700 text-sm">We source and assemble components to create a bike that matches your exact fit and riding style.</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-md hover:-translate-y-2 hover:shadow-lg transition-all">
              <div className="font-bold mb-2">Refine & Fit</div>
              <div className="text-gray-700 text-sm">Every build includes a fitting so your ride feels perfect.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Philip */}
      <section className="flex flex-col md:flex-row gap-12 items-start justify-center mb-12 max-w-360 mx-auto">
        <div className="grid grid-cols-2 gap-4">
          {[1,2,3,4].map(i => (
            <img key={i} src={`/philip_${i}.webp`} alt="" className="rounded-xl w-76 h-52 object-cover shadow-lg transform transition-all hover:scale-105"/>
          ))}
        </div>
        <div className="max-w-xl space-y-4 mt-10">
          <h1 className="text-3xl font-bold relative inline-block">Meet Philip Shama
            <span className="absolute bottom-[-4] left-0 w-20 h-1 bg-red-600 rounded"></span>
          </h1>
          <p>Philip Shama loves many things. He enjoys fresh brewed coffee in the morning, watching Le Tour (well, actually all tours), and spending time with his family. But he's also one of those people lucky enough to say he really loves his job.</p>
          <p>His passion for fine detail and commitment to quality craftsmanship can be seen in every bike that leaves the shop. Philip believes the riding experience doesn’t stop when a client picks up their bike — he follows up to make sure each ride feels just right.</p>
          <p>When he's not at the shop, you can find Philip riding his bike around Houston or racing throughout the season.</p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-8 relative inline-block w-full">What our customers are saying
          <span className="absolute bottom-[-4] left-1/2 transform -translate-x-1/2 w-25 h-1 bg-red-600 rounded"></span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r, idx) => (
            <article key={idx} className="bg-linear-to-br from-gray-100 to-gray-200 rounded-xl p-5 shadow-md transition-transform hover:-translate-y-2 hover:shadow-lg relative overflow-hidden">
              <header className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 rounded-full bg-linear-to-br from-red-600 to-red-800 text-white font-bold flex items-center justify-center">{r.avatarLetter}</div>
                <div className="flex flex-col">
                  <div className="font-bold text-gray-900">{r.name}</div>
                  <div className="text-red-600">{Array.from({ length: 5 }).map((_, i) => <span key={i}>{i<r.rating?'★':'☆'}</span>)}</div>
                </div>
              </header>
              <p className="text-gray-900 text-sm">{r.text}</p>
            </article>
          ))}
        </div>
        <div className="flex justify-end mt-6">
          <button onClick={openMoreReviews} className="px-6 py-3 rounded-full bg-gray-200 hover:shadow-lg font-semibold transition-all">See more →</button>
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