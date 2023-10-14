import { LatLng } from 'leaflet'
import { createContext, useState } from 'react'

export interface IMapContext {
  towerLocations: TowerLocation[],
  addLocation: (towerData: TowerLocation) => void
}
const MapContext = createContext({} as IMapContext)

export interface TowerLocation {
  id: number,
  latLng: LatLng | null
}

export const MapProvider = ({ children }: { children: JSX.Element }) => {
  const [towerLocations, setTowerLocations] = useState<TowerLocation[]>([]);

  const addLocation = (towerData: TowerLocation) => {
    const towers = [...towerLocations, towerData]
    setTowerLocations(towers)
  }

  return (
    <MapContext.Provider value={{ towerLocations, addLocation }}>
      {children}
    </MapContext.Provider>
  )
}

export default MapContext