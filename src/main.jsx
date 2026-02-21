import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './App.jsx'
import { registerSW} from 'virtual:pwa-register';

//To register the service worker for offline capabilities and caching. This will allow the app to function even without an internet connection, providing a smoother user experience and ensuring that users can access important information and features at all times. The service worker will handle caching of static assets and educational content, as well as manage updates to the cache when new versions of the app are deployed.

const updateSW = registerSW({
  onNeedRefresh() {
    //When the app is updated, this will trigger. 
    // You could also show a nice custom toast/alert here!
    if (confirm('A new version of FairSay is available. Update now?')) {
      updateSW(true);
    }
  },
  onOfflineReady() {
    console.log('FairSay: App is ready for offline use.');
  },
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

//To register the service worker for offline capabilities and caching. This will allow the app to function even without an internet connection, providing a smoother user experience and ensuring that users can access important information and features at all times. The service worker will handle caching of static assets and educational content, as well as manage updates to the cache when new versions of the app are deployed.

