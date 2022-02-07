import React from 'react';


const green = '#39D1B4';
const yellow = '#FFD712';

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = { color: green }

// When you write a component class method that uses this, 
// then you  need to bind that method inside of your constructor 
// function!
        this.changeColor = this.changeColor.bind(this);
    }

// changeColor() should set the state’s color to yellow if it’s 
// currently green, and vice versa.
    changeColor() {
        const newColor = this.state.color == green ? yellow : green;
        this.setState({ color: newColor });
    }

  render() {
    return (
      <div style={{ background: this.state.color }}>
        <h1>
          Change my color
        </h1>
        <button onClick={this.changeColor}>
            Change color
        </button>
      </div>
    );
  }
}

ReactDOM.render(<Toggle />, document.getElementById('app'))