import { translateWithMyMemory } from './translate'; // Importamos la función de traducción
// Función asíncrona para buscar el clima de una ciudad y país específicos
export async function buscarClima(ciudad, pais, setOutput, setCoordinates, setTemp,
  setIcon, setDescription, setHumi, setPressure, setVisibility) { // Exportamos la función con múltiples parámetros para actualizar el estado
    // Validación: Si no se ha ingresado ciudad o país, mostramos un mensaje de error
    if (!ciudad || !pais) {
      setOutput('Por favor ingrese una ciudad y un país.'); // Muestra un mensaje si falta algún dato
      return; // Detiene la ejecución si no se cumplen las condiciones
    }
    try {
      // API Key de OpenWeatherMap para la autenticación
      const apiKey = 'e28e7306e678d5aaba94d50312b320fa';
      // Llamada a la API de OpenWeatherMap para obtener los datos del clima de la ciudad y país proporcionados
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${apiKey}&units=metric`);
      // Convertimos la respuesta en un objeto JSON
      const data = await response.json();
      // Si la respuesta es exitosa (status 200)
      if (response.ok) {
        // Extraemos las coordenadas (latitud y longitud) del objeto de datos
        const { lat, lon } = data.coord;
        // Actualizamos el estado de las coordenadas con latitud y longitud obtenidas
        setCoordinates({ lat, lng: lon });
        // Actualizamos el estado de la temperatura
        setTemp(`${data.main.temp} °C`);
        // Actualizamos el estado del ícono del clima basado en los datos obtenidos
        setIcon(`${data.weather[0].icon}`);
        // Limpiamos cualquier mensaje previo
        setOutput(``);
        // Usamos la función de traducción para traducir la descripción del clima del inglés al español
        const translatedText = await translateWithMyMemory(data.weather[0].description, "en", "es");
        // Actualizamos el estado con la descripción traducida
        setDescription(translatedText);
        // Actualizamos el estado con la humedad
        setHumi(`Humedad ${data.main.humidity} %`);
        // Actualizamos el estado con la presión atmosférica
        setPressure(`Presión atmosférica ${data.main.pressure} pa`);
        // Actualizamos el estado con la visibilidad (convertida de metros a kilómetros)
        setVisibility(`Visibilidad ${data.visibility / 1000} Km`);
      } else {
        // Si la respuesta no es exitosa, mostramos un mensaje de error
        setOutput('Error al buscar el clima. Verifique los datos ingresados.');
      }
    } catch (error) {
      // Si ocurre algún error durante la solicitud o procesamiento de datos, mostramos un mensaje de error
      setOutput('Hubo un error al consultar el clima.');
    }
}
