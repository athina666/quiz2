import React from 'react';

import './Questions.css'

import questions from './AllQuestions'

export class Questions extends React.Component {
     constructor (props) {
       super(props)
       this.state = {
        number:questions[0].number,
        content:questions[0].question

      }
     }
  
      render() {
      return (

        
        <div className="question-container">
        <h2 className="question" >{this.state.number}.{this.state.content}</h2>
        </div>
        

      );
    }
  }