import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode> 
  {/* recurso do react para debug: checa possíveis más práticas no código react. Caso encontre
  potencias problemas emite warnings (apenas no ambiente de dev) */}
    <App />
  </React.StrictMode>
);
