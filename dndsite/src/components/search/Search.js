import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Spinner from "../spinner/Spinner";
import { NavLink } from "react-router-dom";

function Race() {
  const [keyword, setKeyword] = useState("");
  const [raceData, setRaceData] = useState([]);

  //debugger;

  useEffect(() => {
    fetch("http://www.dnd5eapi.co/api/races/")
      .then(results => {
        return results.json();
      })
      .then(data => {
        setRaceData(data.results);
      });
  }, []);

  const handleChange = e => {
    setKeyword(e.target.value);
  };

  console.log(raceData);
  return (
    <div>
      {raceData && (
        <div>
          <h1>Search</h1>
          <input value={keyword} onChange={handleChange} />
          <ul>
            {keyword &&
              raceData.map(race => {
                return race.name
                  .toUpperCase()
                  .startsWith(keyword.toUpperCase()) ? (
                  <li>
                    <NavLink
                      to={{
                        pathname: "/Race/" + race.name,
                        state: {
                          raceURL: race.url
                        }
                      }}
                      key={race.name}
                    >
                      <p>{race.name}</p>
                    </NavLink>
                  </li>
                ) : null;
              })}
          </ul>
        </div>
      )}

      {!raceData && <Spinner />}
    </div>
  );
}

export default Race;

const styles = {};

//constructor() {
//super();
//this.state = {
//race: false,
//url: this.props.url
//}
//}
