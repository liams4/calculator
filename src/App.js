import React, { Component } from 'react';
import './App.css';

// This app renders a basic calculator. 
class App extends Component {
   render () {
    return (
      <div className="App">
      <WelcomeMessage />
      <Calculator />
      </div>
    );
  }
}

// This class renders a welcome message to the user. 
class WelcomeMessage extends Component {
  render() {
    return (
      <div className="welcomeMessage">
      <h1>Welcome to React Calculator!</h1>
      <p>This is a simple calculator built with HTML, CSS, Javascript, and React.js.</p>
      </div>
    );
  }
}


// This class renders the buttons for the calculator and contains all of the methods and functionality. 
class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input : ''
    }
    this.handleClick = this.handleClick.bind(this);
  }

  // Handles button clicking by the user. 
  handleClick(symbol) {
    if (symbol === 'clear') {
      this.setState({input : ''});
    } else if (symbol === '=') {
      try {
        let answer = eval(this.state.input);  // unsafe code to use in the real world
        answer = Math.round(answer * 1000.0) / 1000; // rounds output to three decimal places
        this.setState({input : answer + ''});
      } catch (error) {
        this.setState({input : 'Invalid input'});
      }
    } else if (symbol === '+/-') {
      if (this.state.input !== '') {
          if (this.state.input.startsWith('-')) {
            this.setState({input : this.state.input.substring(1)});
          } else if (this.state.input !== '0'){ 
            this.setState({input : '-' + this.state.input});
          } 
      }
    } else if (symbol === '*' || symbol === '/' || symbol === '+' || symbol === '-') {
      this.setState({input : this.state.input + ' ' + symbol + ' '});
    } else if (this.state.input === 'Invalid input' || this.state.input === '0') {
      this.setState({input : symbol});
    } else {
      this.setState({input : this.state.input + symbol});
    }
  }

  // Renders the buttons inside of different div elements. 
  render() {
    return (
      <div className="buttons">
      <InputBar input={this.state.input}/>
      <div className="row1">
      <button id="clear" style={{width : 120, paddingLeft : 89, borderTopLeftRadius: 4}} onClick={() => this.handleClick('clear')}>AC</button>
      <button id="add" style = {{borderTopRightRadius: 4}} onClick={() => this.handleClick('+')}>+</button>
      </div>

      <div className="row2">
      <button id="one" onClick={() => this.handleClick('1')}>1</button>
      <button id="two" onClick={() => this.handleClick('2')}>2</button>
      <button id="three" onClick={() => this.handleClick('3')}>3</button>
      <button id="subtract" onClick={() => this.handleClick('-')}>-</button>
      </div>

      <div className="row3">
      <button id="four" onClick={() => this.handleClick('4')}>4</button>
      <button id="five" onClick={() => this.handleClick('5')}>5</button>
      <button id="six" onClick={() => this.handleClick('6')}>6</button>
      <button id="multiply" onClick={() => this.handleClick('*')}>*</button>
      </div>

      <div className="row4">
      <button id="seven" onClick={() => this.handleClick('7')}>7</button>
      <button id="eight" onClick={() => this.handleClick('8')}>8</button>
      <button id="nine" onClick={() => this.handleClick('9')}>9</button>
      <button id="divide" onClick={() => this.handleClick('/')}>/</button>
      </div>

      <div className="row5">
      <button id="negate" style = {{borderBottomLeftRadius: 4}} onClick={() => this.handleClick('+/-')}>+/-</button>
      <button id="zero" onClick={() => this.handleClick('0')}>0</button>
      <button id="decimal" onClick={() => this.handleClick('.')}>.</button>
      <button id="equals" style = {{borderBottomRightRadius: 4}} onClick={() => this.handleClick('=')}>=</button>
      </div>

      </div>
    );
  }
}

// This class renders the calculator's input bar
class InputBar extends Component {

  render() {    
    return (
    <div className= "inputBar">
    <div id="display">{this.props.input}</div>
    </div>
    );
  }
}  

export default App;
