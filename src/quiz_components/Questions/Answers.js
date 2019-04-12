import React from 'react';

import './Questions.css'

import questions from './AllQuestions'

export class Answers extends React.Component {
    constructor (props) {
      super(props)
      this.state = {
       answer1:questions[0].answer1,
       answer2:questions[0].answer2
       }
    }

   
 
     render() {
     return (
      <div className="main-container">
           <ul className="answers-container">
           
              <li>{this.state.answer1}</li>
              <li>{this.state.answer2}</li>
                           
           </ul>
         </div>
           );


   }
 }