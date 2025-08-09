import 'leaflet/dist/leaflet.css';
import React, { useState } from 'react';
import { MapContainer, Marker, Polygon, Popup, TileLayer, useMapEvents } from 'react-leaflet';
import { Icon, LatLngExpression, LatLng } from 'leaflet';
import { Typography } from '@mui/material';

interface MainMap {
  towerLocations: NetworkTower[];
}

function LocationMarker() {
  const [position, setPosition] = useState<LatLng | null>(null);
  const map = useMapEvents({
    click() {
      map.locate();
    },
    locationfound(e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    },
  });

  return position === null ? null : (
    <Marker
      position={position}
      icon={new Icon({ iconUrl: '/your-location.png', iconSize: [25, 41], iconAnchor: [12, 41] })}
    >
      <Popup className='mt-[-10px]'>Você está aqui</Popup>
    </Marker>
  );
}

const amazonasCoordinates: LatLngExpression[] = [
  [-2.02, -56.14],
  [1.69, -69.76],
  [-7.13, -73.72],
  [-9.25, -65.3],
  [-8.67, -58.62]
];

const greenColor = { color: 'green' };

const Map = ({ towerLocations }: MainMap) => {
  console.log('tower locations form db', towerLocations);
  return (
    <section className='flex justify-center flex-col'>

      <MapContainer
        className='h-[600px] w-full mx-auto mt-[120px]'
        center={[-3.10, -60]} zoom={10}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {towerLocations ? (
          towerLocations.map(loc => (
            <Marker
              position={[loc.lat, loc.lng]}
              icon={new Icon({ iconUrl: '/tower.png', iconSize: [25, 41], iconAnchor: [12, 41] })}
            >
              <Popup>
                <Typography variant='body1'>
                  Id: <Typography component={'span'} variant='body1' className='font-bold'>{loc.id}</Typography>
                </Typography>
              </Popup>
            </Marker>
          ))
        ) : null}

        <Polygon pathOptions={greenColor} positions={amazonasCoordinates} />
        <LocationMarker />
      </MapContainer>
    </section>
  );
};

export default Map;