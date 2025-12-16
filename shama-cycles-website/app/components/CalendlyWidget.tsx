'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    Calendly?: unknown;
  }
}

const CalendlyWidget = () => {
  useEffect(() => {
    if (!window.Calendly) {
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div
      className="calendly-inline-widget w-full"
      data-url="https://calendly.com/philip-shamacycles/30min?hide_event_type_details=1&hide_gdpr_banner=1"
      style={{ minWidth: '320px', height: '450px' }}
      suppressHydrationWarning
    />
  );
};

export default CalendlyWidget;