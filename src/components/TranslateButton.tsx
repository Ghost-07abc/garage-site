import React, { useEffect } from 'react';

const TranslateButton: React.FC = () => {
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
    <div className="flex items-center">
      <div 
        id="google_translate_element" 
        className="google-translate-container"
        style={{
          fontSize: '14px',
          fontFamily: 'Arial, sans-serif'
        }}
      />
    </div>
  );
};

export default TranslateButton; 