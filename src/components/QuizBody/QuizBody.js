import React from 'react';
import questions from "../../AllQuestions";
import AnswersList from '../AnswersList/AnswersList';
import Score from '../Score/Score'

function QuizBody(props) {
  const questionNumber = props.questionNumber;

  const question = {
    number: questions[questionNumber].number,
    content: questions[questionNumber].question
  };



  return (
    //    Header
    <div className="super-main-container">
      <div className="container-header">
        <div>
          <h1>This is a quiz</h1>
          <h2>Who said it: Russell Brand or Slavoj Žižek?</h2>
        </div>

        <div className="header">
          <div className="img_zizek"></div>    
          <div className="clear-box">
            <div id="infinity" />
            <Score score={props.score}/>
           
          </div>
          <div className="img_brand"></div>
        </div>
      </div>

      {/* Question */}

      <div className="question-container">
        <h2 className="question">
          {question.number}.{question.content}
        </h2>
      </div>

      {/* Answer */}

      <form onSubmit={props.checkAnswer} className="main-container">
        <ul className="answers-container">
          <AnswersList
            answers={props.questions[questionNumber].answers}
            chooseAnswer={props.chooseAnswer}
            selectedAnswer={props.selectedAnswer}
          />
        </ul>
        <div className="btn">
          <button type="submit">Submit</button>
        </div>
      </form>

      {/* Counter */}

      <div className="counter-container">
        <h2>
          Pytanie
          <span className="sek">
            {props.questions[questionNumber].number}
          </span>{" "}
          z<span className="sek"> {questions.length} </span>{" "}
        </h2>
      </div>
    </div>
  );
};

export default QuizBody;
