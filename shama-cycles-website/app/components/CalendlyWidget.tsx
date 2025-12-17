'use client';

import { useEffect, useRef } from 'react';

const CalendlyWidget = () => {
  const hasLoadedRef = useRef(false);

  useEffect(() => {
    if (hasLoadedRef.current) return;
    hasLoadedRef.current = true;

    // Load Calendly script if not already loaded
    if (!document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]')) {
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);

  return (
    <div
      className="calendly-inline-widget w-full min-h-[450px] bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700"
      data-url="https://calendly.com/philip-shamacycles/30min?hide_event_type_details=1&hide_gdpr_banner=1"
      style={{ minWidth: '320px', height: '450px' }}
      suppressHydrationWarning
    />
  );
};

export default CalendlyWidget;