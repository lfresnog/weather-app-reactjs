import React, { useState, useEffect } from "react";
import { DetailStyle } from "../Styles/Detail-style";
import api_config from "../../config.json";
import axios from "axios";

const Detail = props => {
  const { selectedPlace } = props;
  console.log("[Detail.jsx] props.selectedPlace", selectedPlace);

  const [placeWeatherState, setPlaceWeatherState] = useState(null);
  console.log("[Detail.jsx] placeWeatherState", placeWeatherState);

  useEffect(() => {
    const { api_key, base_url, proxy } = api_config.darksky;
    const reqUrl = `${proxy}${base_url}${api_key}/${selectedPlace.coordinates.lat},${selectedPlace.coordinates.long}`;
    axios.get(reqUrl).then(response => {
      console.log("[Detail.jsx] useEffect (response)", response);
      setPlaceWeatherState(response.data);
    });
  }, [selectedPlace]);

  return (
    <DetailStyle>
      <div className="detail_place-name">
        <h2>{selectedPlace.place_name}</h2>
      </div>
      {placeWeatherState ? (
        <div className="detail_weather-info">
          <p>
            <b>Temperature: </b>
            {placeWeatherState.currently.temperature}ºF
          </p>
          <p>
            <b>Rain probability: </b>
            {placeWeatherState.currently.precipProbability * 100}%
          </p>
        </div>
      ) : null}
    </DetailStyle>
  );
};

export default Detail;
