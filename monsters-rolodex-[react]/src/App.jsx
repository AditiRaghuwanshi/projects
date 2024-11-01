import { Component } from "react";
import CardList from "./components/card-list";
import SearchBox from "./components/Search";
import "./App.css"

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users").then((response) =>
      response.json().then((users) => this.setState({ monsters: users }))
    );
  }

  render() {
    const { monsters, searchField } = this?.state;
    const filteredMonsters = monsters?.filter((monster) =>
      monster?.name?.toLowerCase()?.includes(searchField?.toLowerCase())
    );
    return (
      <div className="container">
        <h1 className="heading">Monsters Rolodex</h1>
        <SearchBox
          placeholder="search monster"
          handleChange={(e) => this.setState({ searchField: e.target.value })}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
