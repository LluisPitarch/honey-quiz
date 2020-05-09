import React from 'react';

class Answers extends React.Component {
    state = {  }
    handleClick = (points) => {
        this.props.points(points);
        console.log(points)
    }

    render() { 
        
        const answers = this.props.answers

        return ( 
            <div className="answers__chances">
                {
                    answers.map( function(answer) {
                       return <button onClick={() => this.handleClick(answer.points)} className="btn btn-primary mx-3 my-3" points={answer.points} key={answer.id}>{answer.string}</button>
                    }, this)
                }
            </div>
         );
    }
}
 
export default Answers;