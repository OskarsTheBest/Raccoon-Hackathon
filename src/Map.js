import React, { useMemo, useRef, useState, useEffect } from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import RequestButton from "./RequestButton";
import { ClipLoader } from "react-spinners";
import Result from "./Result";
import axios from axios;

const Map = () => {
  const [showResult, setShowResult] = useState(false);
  const [hideMap, setHideMap] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  let [color, setColor] = useState("#ffffff");
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyA1pTr_-1SbX0nZeMHLHeQgZd7VHaXV8l8",
  });
  const [data, setData] = useState({});

  useEffect(async () => {
    const response = await axios.get('http://localhost:5000/api/get', data);

    setData(response)
  })  

  const center = { lat: 56.91447299486075, lng: 24.69715125293291 };

  if (!isLoaded) return <div>Loading</div>;
  return (
    <div className={`map-container ${!data && hideMap ? 'overlay' : ''}`}>
          <RequestButton setIsLoading={setIsLoading} setHideMap={setHideMap} />
          <GoogleMap zoom={16} center={center} mapContainerClassName="location">
            <MarkerF position={center} />
          </GoogleMap>

      {isLoading && (
        <ClipLoader
          color={color}
          loading={isLoading}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
          className="loader"
        />
      )}

      {data && <Result price={data.price} area={data.area} img={data.img} />}
    </div>
  );
};

export default Map;
