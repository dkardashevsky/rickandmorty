// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom'; // Вернули правильный импорт
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

if (rootElement) {
  ReactDOM.render(<App />, rootElement);
} else {
  console.error('Root element not found');
}
