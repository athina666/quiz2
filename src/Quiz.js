import React from 'react';

import questions from './AllQuestions'
import './Quiz.css'



export class Quiz extends React.Component {
    render() {
       return(
           <div>
              
               <QuizBody questions={questions}/>
              
           </div>
       );
    }
}





function  QuizBody (props) {

const question = {
            number:questions[0].number,
            content:questions[0].question
        }
        
const list = props.questions[0].answers.map((answer) => {
            return <li key={answer}>{answer}</li>
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
             
        <span className="prev">Previous</span>
                    <div className="clear-box"><div id='infinity'></div></div>
        <span className="next">Next</span>
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
            {props.questions[0].number}
        </span> z 
        <span className="sek"> {5} </span>  </h2>
</div>
       

</div>
    );
} 






