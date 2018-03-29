import React, { Component } from "react";
import { Button, ToggleButtonGroup, ToggleButton } from "react-bootstrap";

export class Ingredients extends Component {
  state = {
    value: []
  };

  handleChange = e => {
    if (e.length <= 3) {
      this.setState({ value: e });
    }
  };

  handleClick = e => this.props.onClick(this.state.value);

  displayIngredients() {
    const { ingredients } = this.props;
    return Object.keys(ingredients).map(name => {
      return (
        <ToggleButton
          block
          value={name}
          key={name}
          disabled={ingredients[name] <= 0}
        >
          {ingredients[name]} {name}
        </ToggleButton>
      );
    });
  }

  render() {
    return (
      <div>
        <ToggleButtonGroup
          type="checkbox"
          value={this.state.value}
          onChange={this.handleChange}
        >
          {this.displayIngredients()}
        </ToggleButtonGroup>
        <Button onClick={this.handleClick} type="submit">
          Melanger
        </Button>
      </div>
    );
  }
}
