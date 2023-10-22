import React, { useState } from "react";
import Header from "./Header";
import Map from "./Map";

const App = () => {

  return (
    <div className="main">
      <Header />
        <div id="map" className="map-container">
        <Map />
        </div>  
    </div>
  );
};

export default App;
