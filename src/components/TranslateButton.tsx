import React, { useEffect, useState } from 'react';
import { Globe } from 'lucide-react';

const TranslateButton: React.FC = () => {
  const [showFloating, setShowFloating] = useState(false);

  useEffect(() => {
    // Show floating button after scrolling
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowFloating(true);
      } else {
        setShowFloating(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Ensure the Google Translate script is loaded
    if (typeof window !== 'undefined' && (window as any).google && (window as any).google.translate) {
      const google = (window as any).google;
      if (!document.getElementById('google_translate_element')) {
        const translateElement = new google.translate.TranslateElement(
          { pageLanguage: 'en' },
          'google_translate_element'
        );
      }
    }
  }, []);

  return (
    <>
      {/* Regular translate button */}
      <div className="flex items-center">
        <div className="flex items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-pulse">
          <Globe className="h-4 w-4 mr-2 animate-spin" style={{ animationDuration: '3s' }} />
          <span className="font-semibold text-sm">Translate</span>
          <div 
            id="google_translate_element" 
            className="google-translate-container ml-2"
            style={{
              fontSize: '14px',
              fontFamily: 'Arial, sans-serif'
            }}
          />
        </div>
      </div>

      {/* Floating translate button */}
      {showFloating && (
        <div className="fixed bottom-8 right-8 z-50 animate-bounce">
          <div className="flex items-center bg-gradient-to-r from-red-500 to-pink-500 text-white px-6 py-4 rounded-full shadow-2xl hover:shadow-red-500/50 transition-all duration-300 transform hover:scale-110">
            <Globe className="h-6 w-6 mr-3 animate-spin" style={{ animationDuration: '1.5s' }} />
            <span className="font-bold text-lg">🌍 TRANSLATE NOW!</span>
            <div 
              id="google_translate_element_floating" 
              className="google-translate-container ml-3"
              style={{
                fontSize: '16px',
                fontFamily: 'Arial, sans-serif'
              }}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default TranslateButton; 