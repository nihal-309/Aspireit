import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Import marker icons
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// Fix for default marker icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const MapComponent = ({ data }) => {
  const [markers, setMarkers] = useState([]);
  const [mapWidth, setMapWidth] = useState();

  useEffect(() => {
    // Update markers based on data changes
    setMarkers(data.map((markerData) => ({
      position: [markerData.lat, markerData.lng],
      popup: markerData.popup,
    })));
  }, [data]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setMapWidth(window.innerWidth * 0.25); // Small screen size
      } else if (window.innerWidth < 768) {
        setMapWidth(window.innerWidth * 0.6); // Medium screen size
      } else if (window.innerWidth < 1024) {
        setMapWidth(window.innerWidth * 0.5); // Large screen size
      } else {
        setMapWidth(window.innerWidth * 1); // Extra large screen size
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Call handler right away so state gets updated with initial window size

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <MapContainer center={[0, 0]} zoom={2} style={{ height: '280px', width: `${mapWidth}px` }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {markers.map((marker, index) => (
        <Marker key={index} position={marker.position}>
          <Popup>{marker.popup}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapComponent;