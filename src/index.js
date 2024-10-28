import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Importa os estilos globais primeiro
import App from './App';
import './tabela2.css'; // Adicione esta linha para importar o tabela2.css depois dos outros estilos
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
