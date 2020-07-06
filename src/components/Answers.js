import React from 'react';
import './styles/answers.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-regular-svg-icons';

class Answers extends React.Component {
  state = {};
  handleClick = (points) => {
    this.props.points(points);
  };

  render() {
    const answers = this.props.answers;

    return (
      <div className="answers__chances">
        {answers.map(function (answer) {
          return (
            <button
              className="answer__button btn__answer"
              onClick={() => this.handleClick(answer.points)}
              points={answer.points}
              key={answer.id}>
              <FontAwesomeIcon icon={faCircle} className="btn__icon" />{' '}
              <span className={this.props.res ? 'res__answers__string' : ''}>
                {answer.string}
              </span>
            </button>
          );
        }, this)}
      </div>
    );
  }
}

export default Answers;
