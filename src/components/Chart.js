import React from 'react';
import {Radar} from 'react-chartjs-2'

class Chart extends React.Component {
    state = { 
        answerPointsArray: this.props.answerPointsArray,
        data: {
            labels: ['Dulzor', 'Acidez', 'Aroma', 'Cristalización'],
            datasets: [{
                borderColor: 'rgba(252, 7, 7, 1)',
                backgroundColor: 'rgba(255, 7, 7, 0.2', 
                data: [],
                label: 'Tu perfil de HoneyLover'
            }],
        },
        options: {
            scale: {
                angleLines: {
                    display: true
                },
                ticks: {
                    suggestedMin: 0,
                    suggestedMax: 10
                }
            }
        },
     }
    
    async componentDidMount(){
        const data = this.state.answerPointsArray
        await this.setDataFromResults(data)
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
        let dataState = {...this.state.data}
        dataState.datasets[0].data = dataArray;
        this.setState({dataState})
    }

    render() { 
        if(this.state.data.data = true){
            return ( 
            
                <div className="chart__container">
                    <Radar data={this.state.data} options={this.state.options}/>
                </div>
            
            );
        } else {
            return (
                <p>Building the data</p>
            )
        }
    }
}
 
export default Chart;