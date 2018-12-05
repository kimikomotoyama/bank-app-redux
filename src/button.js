import React from "react";
import store from "./store";
import { withdraw } from "./actions";

export default class Button extends React.Component {
  handleClick(e) {
    const amount = e.target.dataset.amount;
    console.log(amount);
    store.dispatch(withdraw(amount));
  }

  render() {
    return (
      <button data-amount={this.props.dataAmount} onClick={this.handleClick}>
        {this.props.label}
      </button>
    );
  }
}