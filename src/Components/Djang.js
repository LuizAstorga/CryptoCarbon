import React from "react";

class Djang extends React.Component {
  state = { content: "memes" };

  render() {
    return <div>{this.props.moves}</div>;
  }
}

export default Djang;
