import React from "react";
import questions from "../../AllQuestions";
import "./Quiz.css";
import QuizBody from "../QuizBody/QuizBody";
import GameOver from "../GameOver/GameOver";

export class Quiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questionNumber: 0,
      selectedAnswer: "",
      score: 0,
      text:""
    };
  }

  nextQuestion = () => {
    const questionNumber = this.state.questionNumber;
    const questionTotal = questions.length;

   

    if (questionNumber + 1 >= questionTotal) {
      return;
    }
    this.setState({
      questionNumber: questionNumber + 1
    });
  };
  prevQuestion = () => {
    const questionNumber = this.state.questionNumber;

    if (questionNumber === 0) {
      return;
    }
    this.setState({
      questionNumber: this.state.questionNumber - 1
    });
  };

  chooseAnswer = e => {
    this.setState({
      selectedAnswer: e.target.value
    });
  };

  checkAnswer = e => {
    e.preventDefault();
    const currentQuestion = questions.find(question => {
      return question.number === this.state.questionNumber + 1;
    });
    if (
      currentQuestion.answers[currentQuestion.correct] ===
      this.state.selectedAnswer
    ) {
     
      
      this.setState({
        score: this.state.score + 1
      });
    } else {
      
    }
    this.nextQuestion();
  };
 
//   renderText = () => {

//     if (this.state.score < 5) {
//         console.log('jestes fujara')
//     this.setState ({
//       text: "jestes fujara"
//       });
//     } else {
//   console.log('jestes mega propsem')
//   this.setState({
//     text: "jestes mega propsikiem"
//   });
// }
// }


renderText = () => {
   
  if (this.state.score < 5) {
    console.log('jestes fujara');
    this.setState ({
            text: "jestes fujara"
            });
  } else {
    console.log('znasz sie');
    this.setState({
          text: "znajdz se zajecie"
        });
  }
}



  render() {
    const questionNumber = this.state.questionNumber;
    const questionTotal = questions.length;
    const scoreText = this.state.text

    if (questionNumber + 1 >= questionTotal) {
      return <GameOver score={this.state.score} para={scoreText} renderTex={this.renderText()}/>
}
  
    return (
      <div>
      
        <QuizBody
          questionNumber={this.state.questionNumber}
          questions={questions}
          nextQuestion={this.nextQuestion}
          prevQuestion={this.prevQuestion}
          chooseAnswer={this.chooseAnswer}
          selectedAnswer={this.state.selectedAnswer}
          checkAnswer={this.checkAnswer}
          score={this.state.score}
        />
      </div>
    );
  }
}