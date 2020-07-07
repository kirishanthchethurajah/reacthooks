import React from "react";

class WindowsSizeChangeClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = { windowWidth: window.innerWidth };
    this.updateWindowWidth = this.updateWindowWidth.bind(this);
  }

  updateWindowWidth() {
    this.setState({ windowWidth: window.innerWidth });
  }
  componentDidMount() {
    window.addEventListener("resize", this.updateWindowWidth);
    // this.setState({ items: customApi.getList(this.props.url) });
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowWidth);
  }
  render() {
    return (
      <>
        <div>Window Width: {this.state.windowWidth}</div>
      </>
    );
  }
}

export default WindowsSizeChangeClass;
