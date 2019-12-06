import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function Race() {
  const raceURL = useLocation().state.raceURL;
  const [race, setRace] = useState(false);
  const [url, setURL] = useState(raceURL);

  debugger;

  useEffect(() => {
    fetch(url)
      .then(results => {
        return results.json();
      })
      .then(data => {
        setRace(data);
      });
  }, []);

  return (
    <>
      {race && (
        <div>
          <h1>{race.name}</h1>
          <p>{race.age}</p>
        </div>
      )}

      {!race && <div>Loading...</div>}
    </>
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
