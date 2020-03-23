import React, { useState } from "react";
import { SearchStyle } from "../Styles/Search-style";
import api_config from "../../config.json";
import axios from "axios";

const Search = props => {
  const { onPlaceSelect } = props;
  const [searchResultsState, setSearchResultsState] = useState(null);
  const [dropdownActive, setDropdownActive] = useState(false);

  const onPlaceSearch = searchValue => {
    if (document.getElementById("searchInput").value === "")
      setDropdownActive(false);
    if (searchValue) {
      const { access_token, base_url } = api_config.mapbox;
      const reqUrl = `${base_url}${searchValue}.json?`;
      axios
        .get(reqUrl, {
          params: {
            access_token: access_token,
            autocomplete: false
          }
        })
        .then(response => {
          const searchResults = response.data.features.map(place => {
            return {
              place_id: place.id,
              place_name: place.place_name,
              coordinates: place.center,
              place_type: place.place_type[0],
              place_category: place.properties.category
            };
          });
          setSearchResultsState(searchResults);
          setDropdownActive(true);
        });
    }
  };

  const inputClasses = {
    inactive: {
      borderRadius: "4px"
    },
    active: {
      borderRadius: "4px 4px 0 0",
      border: "1px solid rgb(0, 132, 137)"
    }
  };

  return (
    <SearchStyle>
      <div className="search_title">
        <h2>Search a place name (POI, cities, countries...)</h2>
      </div>
      <div className="search_section">
        <div
          className="search_input"
          style={
            document.activeElement === document.getElementById("searchInput")
              ? inputClasses.active
              : inputClasses.inactive
          }
        >
          <input
            type="text"
            placeholder="e.g. Madrid"
            id="searchInput"
            onChange={() =>
              onPlaceSearch(document.getElementById("searchInput").value)
            }
          />
        </div>
      </div>
      {dropdownActive ? (
        <ul className="search_results">
          {searchResultsState.map(item => {
            return (
              <li
                key={item.place_id}
                className="result_item"
                onClick={() => {
                  setDropdownActive(false);
                  return onPlaceSelect(item);
                }}
              >
                <div className="item_icon">⚑</div>
                <div className="item_text">
                  <p style={({ fontSize: "1em" }, { color: "black" })}>
                    {item.place_name}
                  </p>
                  {/* <p style={{ fontSize: "0.8em" }}>{item.place_id}</p>
                  <p style={{ fontSize: "0.8em" }}>
                    {item.coordinates[1]}, {item.coordinates[0]}
                  </p> */}
                  <p style={{ fontSize: "0.8em" }}>{item.place_type}</p>
                  {item.place_category ? (
                    <p style={{ fontSize: "0.8em" }}>{item.place_category}</p>
                  ) : null}
                </div>
              </li>
            );
          })}
        </ul>
      ) : null}
    </SearchStyle>
  );
};

export default Search;
