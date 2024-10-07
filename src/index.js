import React from 'react'; // Importamos la biblioteca React, que es necesaria para crear componentes
import ReactDOM from 'react-dom/client'; // Importamos ReactDOM para renderizar la aplicación en el DOM (Document Object Model)
import './index.css'; // Importamos el archivo CSS para aplicar estilos globales
import App from './App'; // Importamos el componente principal 'App' desde el archivo App.js

// Creamos un punto de acceso 'root' donde se renderizará la aplicación React dentro del elemento HTML con el id 'root'
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderizamos la aplicación dentro del modo estricto de React, que ayuda a identificar errores y prácticas recomendadas en el desarrollo
root.render(
  <React.StrictMode>
    <App /> {/* Llamamos al componente 'App', que es el componente principal de nuestra aplicación */}
  </React.StrictMode>
);
