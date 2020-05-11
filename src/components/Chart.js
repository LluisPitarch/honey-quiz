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
    
    componentDidMount(){
        this.setData()
    }

    setData = () =>{
        const dataArray = this.state.answerPointsArray;
        let dataState = {...this.state.data}
        dataState.datasets[0].data = dataArray;
        this.setState({data: dataState})
        debugger
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