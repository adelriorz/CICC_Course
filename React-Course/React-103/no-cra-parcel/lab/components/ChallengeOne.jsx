import React, { Component } from 'react';
//import images
import LookLeft from '../assets/look-left.jpeg'
import LookRight from '../assets/look-right.jpeg'

class ChallengeOne extends Component {
  constructor(){
    super()
    this.btnClickHandler = this.btnClickHandler.bind(this)
  }
  //declare the state here
  state = {
    lookLeft: undefined
  };

  //click left/right button handler goes here
  btnClickHandler(arg){
    this.setState({ lookLeft: arg })
  }

  render() {
    return (
      <>
        <h2>Challenge 1</h2>
        <div className="msg">
          <img
            className="ch1"
            src={this.state.lookLeft ? LookLeft : LookRight}
            alt=""
          />
        </div>
        <button onClick={() => this.btnClickHandler(true)} className="btn">⭠</button>
        <button onClick={() => this.btnClickHandler(false)} className="btn">⭢</button>
      </>
    );
  }
}

export default ChallengeOne;