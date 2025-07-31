/// <reference types="vite/client" />

// Google Translate API types
declare global {
  interface Window {
    google: {
      translate: {
        TranslateElement: new (options: any, element: string) => any;
      };
    };
  }
}
