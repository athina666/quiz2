import React from 'react';

import questions from './AllQuestions'
import './Quiz.css'



export class Quiz extends React.Component {
  constructor(props) {
      super(props)
      this.state = {
          questionNumber:0
      }
  }
  nextQuestion = () => {
        const questionNumber = this.state.questionNumber;
        const questionTotal = questions.length;

        console.log({
            questionNumber,
            questionTotal
        })
        
        if (questionNumber +1 >= questionTotal) {
            return;
        } 
        this.setState({
            questionNumber:questionNumber +1
        });
  }
  prevQuestion = () => {
    const questionNumber = this.state.questionNumber;
    
    if (questionNumber === 0) {
        return;
    } 
    this.setState({
        questionNumber:this.state.questionNumber -1
    });
}
    render() {
       return(
           <div>
              
               <QuizBody  
                    questionNumber={this.state.questionNumber} 
                    questions={questions}
                    nextQuestion={this.nextQuestion}
                    prevQuestion={this.prevQuestion}
                    
                />
              
           </div>
       );
    }
}





function  QuizBody (props) {

        const questionNumber = props.questionNumber

        const question = {
            number:questions[questionNumber].number,
            content:questions[questionNumber].question
        }
        
        const list = props.questions[questionNumber].answers.map((answer) => {
            return <li key={answer}>
             <label>
            <input
              type="radio"
              value="small"
            />
           {answer}
          </label>
            
            </li>
        })
     
    return (

//    Header
    
    <div className="super-main-container">
        <div className='container-header'>
                <div>
                    <h1>This is a quiz</h1>
                    <h2>Who said it: Russell Brand or Slavoj Žižek?</h2>
    </div>

    <div className='header'>
             
        <span className="prev" onClick={props.prevQuestion}> Previous</span>
                    <div className="clear-box"><div id='infinity'></div></div>
        <span className="next" onClick={props.nextQuestion}>Next</span>
    </div>
</div>

{/* Question */}

    <div className="question-container">

            <h2 className="question" >
                {question.number}.
                {question.content}
            </h2>
            
            <button>next</button>
    </div>

{/* Answer */}

<div className="main-container">
    <ul className="answers-container">
   
             {list}
    </ul>
</div>

{/* Counter */}

<div className="counter-container">
    <h2>Pytanie 
        <span className="sek"> 
            {props.questions[questionNumber].number}
        </span> z 
        <span className="sek"> {5} </span>  </h2>
</div>
       

</div>
    );
} 






