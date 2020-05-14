import React from 'react';
import './styles/answers.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle} from '@fortawesome/free-regular-svg-icons'


class Answers extends React.Component {
    state = {  }
    handleClick = (points) => {
        this.props.points(points);
        
    }

    render() { 
        
        const answers = this.props.answers

        return ( 
            <div className="answers__chances">
                {
                    answers.map( function(answer) {
                       return <button className="answer__button" onClick={() => this.handleClick(answer.points)} className="btn__answer" points={answer.points} key={answer.id}><FontAwesomeIcon icon={faCircle} className="btn__icon"/> {answer.string}</button>
                    }, this)
                }
            </div>
         );
    }
}
 
export default Answers;