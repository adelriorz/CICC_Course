import React, { Component } from 'react';

class ChallengeOne extends Component {
  // declare the state object
  state = {
    currentImage: 'look-left.jpeg' // initialize current image to 'look-left.jpeg'
  };

  // click event handlers to change current image
  handleClickLeft = () => {
    this.setState({ currentImage: 'look-left.jpeg' });
  };

  handleClickRight = () => {
    this.setState({ currentImage: 'look-right.jpeg' });
  };

  render() {
    const { currentImage } = this.state; // get the current image from state

    return (
      <>
        <h2>Challenge 1</h2>
        <div className="msg">
          <img
            className="ch1"
            src={require(`./${currentImage}`).default} // use current image in src attribute
            alt=""
          />
        </div>
        <button className="btn" onClick={this.handleClickLeft}>⭠</button>
        <button className="btn" onClick={this.handleClickRight}>⭢</button>
      </>
    );
  }
}

export default ChallengeOne;
