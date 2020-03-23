import React, { useState } from "react";
import { BodyStyle } from "./Styles/Body-style";
import Search from "./Body/Search";
import Detail from "./Body/Detail";

const Body = props => {
  const [selectedPlaceState, setSelectedPlaceState] = useState(null);

  const onPlaceSelect = selectedPlace => {
    console.log("[Body.jsx] onPlaceSelect (selectedPlace)", selectedPlace);
    const newState = {
      place_name: selectedPlace.place_name,
      coordinates: {
        lat: selectedPlace.coordinates[1],
        long: selectedPlace.coordinates[0]
      }
    };
    console.log("[Body.jsx] onPlaceSelect (newState)", newState);
    setSelectedPlaceState(newState);
  };

  return (
    <BodyStyle>
      <Search onPlaceSelect={onPlaceSelect} />
      {selectedPlaceState ? (
        <Detail selectedPlace={selectedPlaceState} />
      ) : <div className="detail_placeholder">No place selected...</div> }
    </BodyStyle>
  );
};

export default Body;
