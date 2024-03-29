// import { Component } from "react";
import { useState, useEffect } from "react";
// import logo from "./logo.svg";
import "./App.css";
import Cardlist from "./components/card-list/card-list.component";
import Searchbox from "./components/search-box/search-box.component";

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [Monsters, setmonsters] = useState([]);
  const [filteredMonsters, setFilterMonsters] = useState(Monsters);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((Response) => Response.json())
      .then((users) => setmonsters(users));
  }, []);

  useEffect(() => {
    const newFilteredMonsters = Monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    setFilterMonsters(newFilteredMonsters);
  }, [Monsters, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
      <Searchbox
        className="monsters-rolodex"
        onChangeHandler={onSearchChange}
        placeholder="search monster"
      ></Searchbox>
      <Cardlist Monsters={filteredMonsters}></Cardlist>
    </div>
  );
};

export default App;
