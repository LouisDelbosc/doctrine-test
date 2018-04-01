import React, { Component } from "react";
import { Button, ToggleButtonGroup, ToggleButton } from "react-bootstrap";

export class Inventory extends Component {
  state = {
    value: []
  };

  handleChange = e => {
    if (e.length <= 3) {
      this.setState({ value: e });
    }
  };

  handleClick = e => {
    this.setState({ value: [] });
    this.props.onClick(this.state.value);
  };

  displayInventory() {
    const { inventory } = this.props;
    return Object.keys(inventory).map(name => {
      return (
        <ToggleButton
          block
          value={name}
          key={name}
          disabled={inventory[name] <= 0}
        >
          {inventory[name]} {name}
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
          {this.displayInventory()}
        </ToggleButtonGroup>
        <Button onClick={this.handleClick} type="submit">
          Melanger
        </Button>
      </div>
    );
  }
}
