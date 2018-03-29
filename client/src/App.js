import React, { Component } from "react";
import "whatwg-fetch";
import logo from "./logo.svg";
import "./App.css";
import { Inventory } from "./inventory";

class App extends Component {
  state = {
    inventory: {}
  };

  componentDidMount() {
    this.getInventory()
      .then(res => this.setState({ inventory: res.inventory }))
      .catch(err => console.log(err));
  }

  handleClick = value => {
    console.log("state", value);
    return Promise.resolve();
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
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="container">
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
