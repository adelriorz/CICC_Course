import React, { Component } from 'react'

const studentList = [
  'Randall Malfoy',
  'Kvothe Black',
  'Chun Zorander',
  'Leomund Ridcully',
  'Rary Stibbons',
  'Gandalf Dresden',
  'Zeddicus Doom',
]

class ChallengeTwo extends Component {
  state = {
    arr: [],
  }

  componentDidMount() {
    //display the student list after 3 seconds
    setTimeout(() => {
      this.setState({ arr: studentList });
    }, 3000);
  }

  randomize = () => {
    //shuffle the array and set the state
    const shuffled = studentList.sort(() => 0.5 - Math.random());
    this.setState({ arr: shuffled });
  }

  render() {
    return (
      <>
        <h2>Challenge 2</h2>
        <div className='msg'>
          <ul>
            {/* display the list of students by iterating through the array */}
            {this.state.arr.map((student, index) => (
              <li key={index}>{student}</li>
            ))}
          </ul>
        </div>
        <button className='btn large' onClick={this.randomize}>
          Randomize
        </button>
      </>
    )
  }
}

export default ChallengeTwo;
