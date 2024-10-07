import React from 'react';
import { GoogleMap, useJsApiLoader, MarkerF } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100%'
};
function MyComponent({ coordinates }) { // Recibir coordenadas como props
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg"
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    // No usar fitBounds; solo configurar el zoom y el centro
    map.setCenter(coordinates);
    map.setZoom(10); // Establece el zoom deseado
    setMap(map);
  }, [coordinates]);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={coordinates} // Centro inicial del mapa
      zoom={10} // Establecer zoom inicial
      onLoad={onLoad}
      onUnmount={onUnmount}
      options={{
        streetViewControl: false,
        mapTypeControl: false,
        draggable: false,
        scrollwheel: false,
        disableDoubleClickZoom: true,
        gestureHandling: 'none'
      }}
    >
      <MarkerF position={coordinates} /> {/* Usar las coordenadas */}
      <></>
    </GoogleMap>
  ) : <></>;
}

export default React.memo(MyComponent);
