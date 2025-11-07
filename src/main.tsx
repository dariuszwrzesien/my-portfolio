import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import emailjs from '@emailjs/browser';
import './globals.css';
import App from './App';

// Initialize EmailJS with your public key from environment variables
emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

const basename = import.meta.env.VITE_BASE_URL || '';
const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root element not found');
}

createRoot(rootElement).render(
  <StrictMode>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </StrictMode>
);
