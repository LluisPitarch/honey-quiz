import React from 'react';
import Chart from './Chart';
import HoneySelection from './HoneySelection';


class Results extends React.Component {
    state = { 
        points: this.props.points,
        answerPointsArray: []
    }

    async componentDidMount() {
        await this.setDataFromResults(this.state.points);
    }

    setDataFromResults = (data) => {
        const sweet = data.slice(0, 2)
        const sweetValue = sweet.reduce((a, b) => a + b, 0)

        const acid = data.slice(2, 4)
        const acidValue = acid.reduce((a, b) => a + b, 0)
        
        const smell = data.slice(4, 6)
        const smellValue = smell.reduce((a, b) => a + b, 0)
        
        const hardness = data.slice(6, 8)
        const hardnessValue = hardness.reduce((a, b) => a + b, 0)
        
        const dataArray = [sweetValue, acidValue, smellValue, hardnessValue] 
        this.setState({answerPointsArray: dataArray})
    }

    render() { 
        if (this.state.answerPointsArray.length === 4){
            return ( 
                <React.Fragment>
                    <h1>Results</h1> 
                    <Chart answerPointsArray={this.state.answerPointsArray}/>
                    <HoneySelection answerPointsArray={this.state.answerPointsArray}/>
                </React.Fragment>
                );
        } else {
            return('')
        }
    }
}
 
export default Results;