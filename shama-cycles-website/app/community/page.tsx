'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { MapPin, Users, Zap, Calendar } from 'lucide-react';

const Community = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 0);
  }, []);

  return (
    <div className="mx-auto px-6 py-12">
      <div className={`text-center mb-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white tracking-[-0.02em]">COMMUNITY</h1>
        <div className="h-1.25 w-3/5 mx-auto mt-6 bg-linear-to-r from-transparent via-red-600 to-transparent animate-[glow_3s_ease-in-out_infinite]"></div>
      </div>

      <div className="mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          <div className={`transition-all duration-1000 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            <div className="group h-64 bg-gray-300 relative rounded-xl overflow-hidden mb-6 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2">
              <Image src="/community_1.webp" alt="Group Rides" className="object-cover group-hover:scale-105 transition-transform duration-300" fill />
              <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent"></div>
              <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
                <Zap size={20} className="text-red-400" />
                <span className="font-semibold">Weekly Rides</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-950 dark:text-white mb-3">Group Rides</h3>
            <p className="text-gray-700 dark:text-gray-400 leading-relaxed mb-4">Join group rides through the greater Houston area. Meet fellow cyclists, build friendships, and push your limits together on the road.</p>
          </div>

          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            <div className="group h-64 bg-gray-300 relative rounded-xl overflow-hidden mb-6 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2">
              <Image src="/community_2.webp" alt="Events & Races" className="object-cover group-hover:scale-105 transition-transform duration-300" fill />
              <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent"></div>
              <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
                <Calendar size={20} className="text-red-400" />
                <span className="font-semibold">Throughout Year</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-950 dark:text-white mb-3">Events & Races</h3>
            <p className="text-gray-700 dark:text-gray-400 leading-relaxed mb-4">We host and participate in various cycling events throughout the year. Our racing teams continue to excel and perform.</p>
          </div>

          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            <div className="group h-64 bg-gray-300 relative rounded-xl overflow-hidden mb-6 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2">
              <Image src="/community_4.webp" alt="Social Rides" className="object-cover group-hover:scale-105 transition-transform duration-300" fill />
              <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent"></div>
              <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
                <Users size={20} className="text-red-400" />
                <span className="font-semibold">Connect & Ride</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-950 dark:text-white mb-3">Social Rides</h3>
            <p className="text-gray-700 dark:text-gray-400 leading-relaxed mb-4">Connect with fellow cyclists, share tips and stories, and build lasting friendships with people who share your passion for cycling.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 rounded-xl hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                <MapPin className="text-red-600" size={20} />
              </div>
              <h3 className="font-bold text-gray-950 dark:text-white">Location</h3>
            </div>
            <p className="text-gray-700 dark:text-gray-400">Houston, Texas area with rides departing from the Shama Cycles shop</p>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 rounded-xl hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                <Users className="text-red-600" size={20} />
              </div>
              <h3 className="font-bold text-gray-950 dark:text-white">Community</h3>
            </div>
            <p className="text-gray-700 dark:text-gray-400">All skill levels welcome, from casual riders to competitive racers. Everyone is invited!</p>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 rounded-xl hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                <Calendar className="text-red-600" size={20} />
              </div>
              <h3 className="font-bold text-gray-950 dark:text-white">Schedule</h3>
            </div>
            <p className="text-gray-700 dark:text-gray-400">Regular weekly rides plus special events and races throughout the year</p>
          </div>
        </div>

        {/* commenting out gcal until this is set up */}
        {/* <div id="calendar">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-950 dark:text-white mb-2">Events & Ride Calendar</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">Stay updated on all upcoming group rides and community events</p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700">
            <iframe
              src="https://calendar.google.com/calendar/embed?src=YOUR_CALENDAR_ID&ctz=America%2FChicago"
              style={{ borderRadius: '16px' }}
              width="100%"
              height="600"
              frameBorder="0"
              scrolling="no"
            ></iframe>
          </div>
        </div> */}

      </div>
    </div>
  );
};

export default Community;