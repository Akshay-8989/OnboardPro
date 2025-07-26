import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './styles/index.css';
import { StepProvider } from './context/StepContext';
import { AuthProvider } from './context/AuthContext'; // ✅ Import AuthProvider
import { BrowserRouter } from 'react-router-dom';      // ✅ Import BrowserRouter

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter> {/* ✅ Enables routing */}
      <AuthProvider> {/* ✅ Enables auth context */}
        <StepProvider> {/* ✅ Wrap StepProvider inside AuthProvider */}
          <App />
        </StepProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
