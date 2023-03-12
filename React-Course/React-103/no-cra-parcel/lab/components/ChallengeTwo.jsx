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

export default class ChallengeTwo extends Component {
  constructor(){
    super()
    this.timer = null
  }
  //declare the states
  state = {
    arr: [],
    isLoading: false
  }

  //componentDidMount will execute when the page has loaded (this will only run once)
  componentDidMount() {
    //display the student list after 3 seconds
    // console.log("Loaded!")
    this.setState({ isLoading: true })

    this.timer = setTimeout(() => {
      this.setState({ arr: studentList, isLoading: false })
    }, 3000)
  }

  componentWillUnmount(){
    clearTimeout(this.timer)
  }

  // componentDidUpdate(){
  //   console.log("Update!")
  // }

  shuffle = a => {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      //es6 swapping - destructuring
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };

  // shuffle = a => {
  //   for(let i = a.length - 1; i > 0; i--){
  //     const j = Math.floor(Math.random() * (i + 1))
  //     [a[i], a[j]] = [a[j], a[i]]
  //   }
  //   return a
  // }

  //random button handler
  randomize = () => {
    //shuffle the array and set the state
    const newArr = this.shuffle(this.state.arr)
    this.setState({ arr: [...newArr] })
  }

  render() {

    const { arr, isLoading } = this.state

    return (
      <>
        <h2>Challenge 2</h2>
        <div className='msg'>
          {
            isLoading && (<p>Loading....</p>)
          }
          <ul>
            {/* display the list of students by iterating through the array */}
            {arr.length > 0 && arr.map((student, index) =>
              <li key={index}>{student}</li>)
            }
          </ul>
        </div>
        <button onClick={this.randomize} className='btn large'>Randomize</button>
      </>
    )
  }
}
