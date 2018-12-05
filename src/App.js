import React, { Component } from "react";
import formatNumber from "format-number";
import photographer from "./images/girl.png";
import "./App.css";
import store from "./store";
import Button from "./button";

class App extends Component {
  render() {
    console.log(store);
    const { totalAmount, username } = store.getState();
    return (
      <div className="App">
        <img className="App__userpic" src={photographer} alt="user" />
        <p className="App__username">Hello, {username}! </p>
        <div className="App__amount">
          {formatNumber({ prefix: "$" })(totalAmount)}
          <p className="App__amount--info">Total Amount</p>
        </div>

        <section className="App__buttons">
          <Button dataAmount="10000" label="WITHDRAW $10,000" />
          <Button dataAmount="5000" label="WITHDRAW $5,000" />
          <Button dataAmount={totalAmount} label="Give away all your cash to charity"></Button>
        </section>
      </div>
    );
  }
}

export default App;
