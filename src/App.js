import React, { Component } from 'react';
import {Header} from './quiz_components/Header/Header';
import {Counter} from './quiz_components/Counter/Counter';
import {Questions} from './quiz_components/Questions/Questions';
import {Answers} from './quiz_components/Questions/Answers';
import './App.css';


class App extends Component {
  

  render() {
    return (
      <div>

        <Header />
        <Counter />
        <Questions />
        <Answers />
      
      </div>
    );
  }
}

export default App;
