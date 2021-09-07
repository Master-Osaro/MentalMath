import React, { Component } from 'react';
import Button from './components/Buttons';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  
  state = {
    value1: 0,
    value2: 0,
    value3: 0,
    proposedAnswer: 0,
    numQuestions : 0,
    numCorrect : 0
  }

  makeNewQuestion = () => {
    const value1n = Math.floor(Math.random() * 100);
    const value2n = Math.floor(Math.random() * 100);
    const value3n = Math.floor(Math.random() * 100);
    const proposedAnswern = Math.floor(Math.random() * 3) + (value1n + value2n + value3n);
    this.setState({value1: value1n, value2: value2n, value3: value3n, proposedAnswer: proposedAnswern})
    return [value1n, value2n, value3n, proposedAnswern];
  };

  componentDidMount(){
    this.makeNewQuestion();
  }

  getChoice=(choice)=>{
    this.evaluateChoice(choice);
    this.makeNewQuestion();
    return choice;
  }

  evaluateChoice=(choice)=>{
    let total = this.state.value1 + this.state.value2 +this.state.value3;

    if(total===this.state.proposedAnswer && choice === true){
      this.setState(prevState=>({numCorrect: prevState.numCorrect + 1, numQuestions: prevState.numQuestions+ 1}))
    }else if(total!==this.state.proposedAnswer && choice === false){
      this.setState(prevState=>({numCorrect: prevState.numCorrect + 1, numQuestions: prevState.numQuestions+ 1}))
    } else{
      this.setState(prevState=>({numQuestions: prevState.numQuestions+ 1}))
    }
  } 

  

  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="game">
          <h2>Mental Math</h2>
          <div className="equation">
            <p className="text">{`${this.state.value1} + ${this.state.value2} + ${this.state.value3} = ${this.state.proposedAnswer}`}</p>
          </div>
          <Button choice={this.getChoice}/>
          <p className="text">
            Your Score: {this.state.numCorrect}/{this.state.numQuestions}
          </p>
        </div>
      </div>
    );
  }
}

export default App;
