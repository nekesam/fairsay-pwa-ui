import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

//To register the service worker for offline capabilities and caching. This will allow the app to function even without an internet connection, providing a smoother user experience and ensuring that users can access important information and features at all times. The service worker will handle caching of static assets and educational content, as well as manage updates to the cache when new versions of the app are deployed.

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then((registration) => {
        console.log('FairSay SW registered: ', registration);
      })
      .catch((registrationError) => {
        console.log('FairSay SW registration failed: ', registrationError);
      });
  });
}