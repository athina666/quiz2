import React from 'react';
import questions from "../../AllQuestions";

function QuizBody(props) {
  const questionNumber = props.questionNumber;

  const question = {
    number: questions[questionNumber].number,
    content: questions[questionNumber].question
  };

  const list = props.questions[questionNumber].answers.map(answer => {
    return (
      <li key={answer}>
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
    );
  });

  return (
    //    Header
    <div className="super-main-container">
      <div className="container-header">
        <div>
          <h1>This is a quiz</h1>
          <h2>Who said it: Russell Brand or Slavoj Žižek?</h2>
        </div>

        <div className="header">
          <button className="prev btn" onClick={props.prevQuestion}>
            {" "}
            Previous
          </button>
          <div className="clear-box">
            <div id="infinity" />
          </div>
          <button className="next btn" onClick={props.nextQuestion}>
            Next
          </button>
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
        <ul className="answers-container">{list}</ul>
        <div>
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
          z<span className="sek"> {5} </span>{" "}
        </h2>
      </div>
    </div>
  );
};

export default QuizBody;
