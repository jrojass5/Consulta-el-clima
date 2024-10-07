import './App.css';
import React, { useState } from 'react';
import MyComponent from './map'; // Importamos el componente MyComponent desde el archivo map.js
import { buscarClima } from './weather'; // Importamos la función buscarClima desde weather.js
function App() {
  // Declaramos los estados que controlan el comportamiento y los datos de la aplicación
  const [ciudad, setCiudad] = useState(''); // Estado para el nombre de la ciudad
  const [pais, setPais] = useState(''); // Estado para el nombre del país
  const [output, setOutput] = useState(''); // Estado para mensajes de salida
  const [coordinates, setCoordinates] = useState({ lat: 0, lng: 0}); // Estado para almacenar las coordenadas
  const [temp, setTemp]= useState(''); // Estado para almacenar la temperatura
  const [icon,setIcon]=useState ('50d'); // Estado para almacenar el ícono del clima
  const [Description,setDescription ] = useState(''); // Estado para almacenar la descripción del clima
  const [visibility, setVisibility]= useState(''); // Estado para almacenar la visibilidad
  const [humi, setHumi] = useState(''); // Estado para almacenar la humedad
  const [pressure,setPressure]= useState(''); // Estado para almacenar la presión atmosférica
  // Función que ejecuta la búsqueda del clima cuando se hace clic en el botón "Buscar Clima"
  const handleSearch = () => {
    buscarClima(ciudad, pais, setOutput, setCoordinates, setTemp, setIcon, setDescription, setHumi, setPressure, setVisibility); 
    // Llamamos a la función buscarClima y le pasamos los estados actualizadores
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="wrapper">

        {/* Mostramos el nombre de la ciudad y del país en el encabezado */}
        <h1 className='title'>{ciudad}</h1>
        <h1 className='title'>{pais}</h1>

        <div className='info'>
          <div className='Consul'>

            {/* Sección para mostrar los datos del clima obtenidos */}
            <div className='data'>
              <div className='dataweather'>
                {/* Ícono del clima */}
                <img className='img' src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt="weather icon" /> 
                {/* Descripción del clima */}
                <h1 className='Description'>{Description}</h1>
              </div>

              {/* Sección para mostrar la temperatura, humedad, visibilidad y presión */}
              <div className='datadescription'>
                <h1 className='temp'>{temp}</h1>
                <h1>El tiempo actual</h1>
                <p className='p'>{humi}</p> {/* Humedad */}
                <p className='p'>{visibility}</p> {/* Visibilidad */}
                <p className='p'>{pressure}</p> {/* Presión atmosférica */}
              </div>
            </div>

            {/* Sección para ingresar los datos de la ciudad y país */}
            <h1 className='h1'>Ingrese los datos</h1> 
            <div className="input-box">
              {/* Input para la ciudad */}
              <input 
                type="text" 
                id="txtciudad" 
                placeholder="Ciudad" 
                value={ciudad} // Valor actual del estado ciudad
                onChange={(e) => setCiudad(e.target.value)} // Actualiza el estado ciudad con lo que se escriba
                required
              />
            </div>

            <div className="input-box">
              {/* Input para el país */}
              <input 
                type="text" 
                id="txtpais" 
                placeholder="País" 
                value={pais} // Valor actual del estado país
                onChange={(e) => setPais(e.target.value)} // Actualiza el estado país con lo que se escriba
                required
              />
            </div>

            {/* Botón para buscar el clima */}
            <button type="button" className="btn" onClick={handleSearch}>
              Buscar Clima
            </button>

            {/* Botón para limpiar los datos ingresados y restablecer los estados */}
            <button type="button" className="btnl" onClick={() => {
                setCiudad(''); // Restablece la ciudad
                setPais(''); // Restablece el país
                setOutput(''); // Limpia el mensaje de salida
                setCoordinates({ lat: 0, lng: 0}); // Restablece las coordenadas
                setTemp(''); // Restablece la temperatura
                setIcon ('50d'); // Restablece el ícono del clima
                setDescription(''); // Restablece la descripción
                setHumi(''); // Restablece la humedad
                setPressure(''); // Restablece la presión
                setVisibility(''); // Restablece la visibilidad
              }}
            >
              Limpiar
            </button>

            {/* Muestra el mensaje de salida, en caso de error o notificación */}
            <p className="output" id="output">{output}</p>
          </div>

          {/* Sección para mostrar el mapa */}
          <div className='map' id='map'>
            <MyComponent coordinates={coordinates} /> {/* Pasamos las coordenadas al componente del mapa */}
          </div>
        </div>
        </div>
      </header>
    </div>
  ); 
}

export default App;
