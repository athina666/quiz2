import React from 'react';
import questions from './AllQuestions'
import './Quiz.css'



export class Quiz extends React.Component {
  constructor(props) {
      super(props)
      this.state = {
          questionNumber:0,
          selectedAnswer:'',
          score:0
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

chooseAnswer = (e) => {
    this.setState({
        selectedAnswer:e.target.value
    })
}

checkAnswer = (e) => {
    e.preventDefault();
    const currentQuestion = questions.find((question) =>{
     return question.number === this.state.questionNumber +1
    });
        if (currentQuestion.answers[currentQuestion.correct] === this.state.selectedAnswer) {
                    console.log('udzielono poprawnej odpowiedzi: ', this.state.selectedAnswer)
                    console.log(this.state.score)
                    this.setState({
                    score: this.state.score + 1,
                    });
        } else {
        console.log(this.state.selectedAnswer, ' to nie jest poprawna odpowiedź')
        console.log(this.state.score)
 }

}



    render() {
        
       
       return(
           <div>
              
               <QuizBody  
                    questionNumber={this.state.questionNumber} 
                    questions={questions}
                    nextQuestion={this.nextQuestion}
                    prevQuestion={this.prevQuestion}
                    chooseAnswer={this.chooseAnswer}
                    selectedAnswer={this.state.selectedAnswer}
                    checkAnswer={this.checkAnswer}
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
              value={answer}
              onChange={props.chooseAnswer}
              checked={answer === props.selectedAnswer}
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
             
        <button className="prev btn" onClick={props.prevQuestion}> Previous</button>
                    <div className="clear-box"><div id='infinity'></div></div>
        <button className="next btn" onClick={props.nextQuestion}>Next</button>
    </div>
</div>

{/* Question */}

    <div className="question-container">

            <h2 className="question" >
                {question.number}.
                {question.content}
            </h2>
            
    </div>

{/* Answer */}

<form onSubmit={props.checkAnswer} className="main-container">
    <ul className="answers-container">
   
             {list}
    </ul>
    <div><button type="submit">Submit</button></div>
    
</form>

{/* Counter */}

<div className="counter-container">
    <h2>Pytanie 
        <span className="sek"> 
            {props.questions[questionNumber].number}
        </span> z 
        <span className="sek"> {10} </span>  </h2>
      
</div>
       

</div>
    );
} 








