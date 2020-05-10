import React from 'react';
import Chart from './Chart';
import HoneySelection from './HoneySelection';


class Results extends React.Component {
    state = { 
    
     }
    render() { 
        return ( 
            <React.Fragment>
                <h1>Results</h1> 
                <Chart answerPointsArray={this.props.points}/>
                <HoneySelection />
            </React.Fragment>
            );
    }
}
 
export default Results;