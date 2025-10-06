import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import "@fontsource/ubuntu";
import "@fontsource/ubuntu/400.css";
import "@fontsource/ubuntu/400-italic.css";
import App from './App.jsx';
import { AuthProvider } from "./Provider/AuthProvider";
import { CookiesProvider } from "react-cookie";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CookiesProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </CookiesProvider>
  </StrictMode>
);
