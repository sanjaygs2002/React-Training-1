import { Component } from "react";

class LifeCycle extends Component {
  constructor(props) {
    super(props);

    this.state = { count: 0 };
  }

  componentDidMount() {
    console.log("Mounted");
  }
  componentDidUpdate() {
    console.log("Updated");
  }
  componentWillUnmount() {
    console.log("Component Removed from the DOM");
  }

  render() {
    return (
      <>
        <p>count:{this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count - 1 })}>
          Decrement button
        </button>
      </>
    );
  }
}
export default LifeCycle;
