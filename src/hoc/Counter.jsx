import React, { Component } from "react";

class Counter extends Component {
  state = { count: 0 };
  increaseCount = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return (
      <>
        <div>Count:{this.state.count}</div>
        <button onClick={this.increaseCount}>Increase</button>
      </>
    );
  }
}

export default Counter;
