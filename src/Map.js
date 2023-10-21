import React, { useMemo } from 'react'
import { GoogleMap, useLoadScript, MarkerF } from '@react-google-maps/api'

const Map = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyA1pTr_-1SbX0nZeMHLHeQgZd7VHaXV8l8'
  })

  const center = { lat: 56.951266, lng: 24.082570 }

  if(!isLoaded) return <div>Loading</div>
  return (
        <GoogleMap zoom={16} center={center} mapContainerClassName='location'>
            <MarkerF position={center} />
        </GoogleMap>
  )
}

export default Map