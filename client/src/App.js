import React, { Component } from "react";
import "whatwg-fetch";
import logo from "./logo.svg";
import "./App.css";
import { Ingredients } from "./ingredients";

class App extends Component {
  state = {
    response: ""
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  handleClick = value => {
    console.log("state", value);
    return Promise.resolve();
  };

  callApi = async () => {
    const response = await fetch("/api/hello");
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  };

  render() {
    const mockedIngredients = {
      A: 1,
      B: 2,
      C: 3,
      D: 4,
      E: 0,
      F: 1
    };
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="container">
          <Ingredients
            ingredients={mockedIngredients}
            onClick={this.handleClick}
          />
        </div>
      </div>
    );
  }
}

export default App;
