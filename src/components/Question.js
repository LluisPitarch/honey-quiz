import React from 'react';

// Styles
import './styles/question.css';

class Question extends React.Component {
  state = {};
  render() {
    const { question } = this.props;

    return (
      <h2 className={this.props.res ? 'res__question__title' : ''}>
        {question}
      </h2>
    );
  }
}

export default Question;
