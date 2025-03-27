
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Remove unused App.css import
createRoot(document.getElementById("root")!).render(<App />);
