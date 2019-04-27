import React from 'react';

const AnswersList = (props) => (
    props.answers.map(answer => {
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
    })
)

export default AnswersList;