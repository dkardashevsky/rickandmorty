// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from './pages/index';

const App: React.FC = () => {
  return (
    <React.StrictMode>
      <React.Suspense fallback={<div>Loading...</div>}>
        <HomePage />
      </React.Suspense>
    </React.StrictMode>
  );
};

const rootElement = document.getElementById('root');
const createRoot = (ReactDOM as any).createRoot || (ReactDOM as any).unstable_createRoot;

const root = createRoot(rootElement);
root.render(<App />);
