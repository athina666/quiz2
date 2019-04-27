import React from "react";
import questions from "../../AllQuestions";
import "./Quiz.css";
import QuizBody from "../QuizBody/QuizBody";

export class Quiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questionNumber: 0,
      selectedAnswer: "",
      score: 0
    };
  }

  nextQuestion = () => {
    const questionNumber = this.state.questionNumber;
    const questionTotal = questions.length;

    console.log({
      questionNumber,
      questionTotal
    });

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
      console.log(
        "udzielono poprawnej odpowiedzi: ",
        this.state.selectedAnswer
      );
      console.log(this.state.score);
      this.setState({
        score: this.state.score + 1
      });
    } else {
      console.log(this.state.selectedAnswer, " to nie jest poprawna odpowiedź");
      console.log(this.state.score);
    }
  };

  render() {
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