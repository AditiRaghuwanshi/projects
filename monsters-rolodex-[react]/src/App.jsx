import { Component } from "react";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [{ id:'1', name: "Aditi" }, { id:'2', name: "Rahul" }, { id:'3', name: "Vinesh" }],
    };
  }
  render() {
    return (
      <div>
        {this.state.monsters.map((monster) => (
          <h1 key={monster.id}>{monster.name}</h1>
        ))}
      </div>
    );
  }
}

export default App;
