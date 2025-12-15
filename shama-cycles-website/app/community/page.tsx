'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const Community = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 0);
  }, []);

  return (
    <div className="relative overflow-hidden px-8 py-16 mx-auto">
      <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>
        <h1 className="text-[6rem] md:text-5xl font-bold text-gray-900 tracking-[-0.02em]">COMMUNITY</h1>
        <div className="h-[5px] w-3/5 mx-auto mt-6 bg-linear-to-r from-transparent via-red-600 to-transparent animate-[glow_3s_ease-in-out_infinite]"></div>
      </div>

      <div className="grid grid-cols-3 gap-8 mb-12">
        <div className="space-y-6">
          <div className="h-85 bg-gray-200 relative">
            <Image src="/community_1.webp" alt="Community" className="object-cover rounded-md" fill />
          </div>
          <p className="text-base text-gray-700">blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah</p>
        </div>

        <div className="space-y-6">
          <div className="h-95 bg-gray-200 relative">
            <Image src="/community_2.webp" alt="Community Event" className="object-cover rounded-md" fill />
          </div>
          <p className="text-base text-gray-700">blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah</p>
        </div>

        <div className="space-y-6">
          <div className="h-85 bg-gray-200 relative">
            <Image src="/community_4.webp" alt="Community" className="object-cover rounded-md" fill />
          </div>
          <p className="text-base text-gray-700">blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah</p>
        </div>
      </div>

      <div className="mb-4">
        <p className="text-2xl font-medium text-gray-900 mb-4">Join our community!</p>

        <div className="grid grid-cols-4 gap-8">
          <div className="col-span-3">
            <iframe
              src="https://calendar.google.com/calendar/embed?src=YOUR_CALENDAR_ID&ctz=America%2FNew_York"
              style={{ border: '2px solid rgb(17, 24, 39)', borderRadius: '10px' }}
              width="100%"
              height="700"
              frameBorder="0"
              scrolling="no"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Community;