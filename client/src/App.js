import React, { Component } from "react";
import "whatwg-fetch";
import "./App.css";
import { Inventory } from "./inventory";

class App extends Component {
  state = {
    inventory: {}
  };

  componentDidMount() {
    this.getInventory().then(res =>
      this.setState({ inventory: res.inventory })
    );
  }

  mixIngredients = async ingredients => {
    const response = await fetch("/potion", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(ingredients)
    });
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body.potion;
  };

  handleClick = value => {
    return this.mixIngredients(value)
      .then(
        e => {
          alert(`Bravo ! Voici ce que vous venez de fabriquer : ${e}`);
        },
        error => {
          alert(error.message);
        }
      )
      .then(this.getInventory)
      .then(res => this.setState({ inventory: res.inventory }));
  };

  getInventory = async () => {
    const response = await fetch("/inventory");
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">The Alchemy Machine</h1>
        </header>
        <div className="container" style={{ width: "500px" }}>
          <Inventory
            inventory={this.state.inventory}
            onClick={this.handleClick}
          />
        </div>
      </div>
    );
  }
}

export default App;
