import React from 'react';

class Question extends React.Component {
    state = {  }
    render() { 
        const {question} = this.props
        
        return (
        <h2>{question}</h2>);
    }
}
 
export default Question;