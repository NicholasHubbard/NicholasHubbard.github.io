import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Spinner from "../spinner/Spinner";

function Race() {
  const raceURL = useLocation().state.raceURL;
  const [race, setRace] = useState(false);
  const [url, setURL] = useState(raceURL);

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
          <p>
            <b>Race Description: </b> {race.alignment}
          </p>
          <p>
            <b>Age: </b> {race.age}
          </p>
          <p>
            <b>Size: </b> {race.size_description}
          </p>
          <p>
            <b>Language: </b> {race.language_desc}
          </p>
        </div>
      )}

      {!race && <Spinner />}
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
