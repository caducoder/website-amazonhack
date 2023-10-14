import 'leaflet/dist/leaflet.css'
import React, { useState } from 'react'
import {
  MapContainer,
  Marker,
  Polygon,
  Popup,
  TileLayer,
  useMapEvents
} from 'react-leaflet'
import { Icon, LatLngExpression, LatLng } from 'leaflet'

interface MapProps {
  position: LatLng | null,
  setPosition: React.Dispatch<React.SetStateAction<LatLng | null>>
}

function LocationFinder({ position, setPosition }: MapProps) {

  const map = useMapEvents({
    click(e) {
      console.log(e.latlng);
      setPosition(e.latlng)
    },
  });

  return position === null ? null : (
    <Marker
      position={position}
      icon={new Icon({ iconUrl: '/your-location.png', iconSize: [25, 41], iconAnchor: [12, 41] })}
    >
      <Popup className='mt-[-10px]'>TORRE</Popup>
    </Marker>
  )
}

const Map = ({ position, setPosition }: MapProps) => {
  return (
    <section className='flex justify-center flex-col'>

      <MapContainer
        className='h-[400px] w-full '
        center={[-3.10, -60]} zoom={10}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocationFinder position={position} setPosition={setPosition} />
      </MapContainer>
    </section>
  )
}

export default Map