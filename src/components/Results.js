import React from 'react';
import Chart from './Chart';
import HoneySelection from './HoneySelection';


class Results extends React.Component {
    state = { 
        points: this.props.points
     }
    render() { 
        return ( 
            <React.Fragment>
                <h1>Results</h1> 
                <Chart answerPointsArray={this.props.points}/>
                <HoneySelection answerPointsArray={this.props.points}/>
            </React.Fragment>
            );
    }
}
 
export default Results;