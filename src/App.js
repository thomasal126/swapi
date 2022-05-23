import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles.css";
import { processData } from "./utils";
import Person from "./components/Person";
import background from "./image/background.jpg";

export default function App() {
  // const people1 = usePeopleData(filterPeopleParams); // Un-comment on Task #3
  const payloadURL = "https://swapi.dev/api/people/";
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(true);
  const [find, setFind] = useState("");

  const usePeopleData = (filterParams) => {
    useEffect(() => {
      async function fetchPeople(api) {
        try {
          let res = await axios.get(api);

          setPeople(res.data.results);
          setLoading(false);
        } catch (err) {
          console.log(err);
        }
      }
      fetchPeople(payloadURL);
    }, []);

    const display = processData(filterParams)(people);
    return display;
  };

  const filterPeopleParams = { gender: "male", minHeight: 130 };

  const person = usePeopleData(filterPeopleParams);

  const handleSearch = (e) => {
    setFind(e.target.value);
  };

  const readyToDisplay = person.filter((elem) =>
    elem.name.toLowerCase().includes(find.toLowerCase())
  );

  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        height: "100vh"
      }}
    >
      <div>
        <label>
          Mission name:{" "}
          <input
            onChange={handleSearch}
            value={find}
            placeholder="Search Hero"
          />
        </label>
      </div>
      <h3>Heroes</h3>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <div className="mx-auto container-fluid row border border-danger">
            <h5 className="col-sm-4">Name</h5>
            <h5 className="col-sm-4">Mass</h5>
            <h5 className="col-sm-4">Weight</h5>
          </div>
          {readyToDisplay.map((person, index) => (
            <Person key={index} {...person} />
          ))}
        </div>
      )}
    </div>
  );
}
