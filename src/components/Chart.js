import React from 'react';
import {Radar} from 'react-chartjs-2'
import { connect } from 'react-redux';

class Chart extends React.Component {
    state = { 
        answerPointsArray: this.props.answerPointsArray,
        
        data: {
            labels: ['Dulzor', 'Acidez', 'Aroma', 'Cristalización'],
            datasets: [{
                borderColor: 'rgba(221, 146, 38, 1)',
                backgroundColor: 'rgba(221, 146, 38, 0.2)', 
                data: [],
                label: 'Tu perfil de HoneyLover',
            },
            {
                borderColor: 'rgba(0, 0, 255, 1)',
                backgroundColor: 'rgba(0, 0, 255, 0.2)', 
                data: [],
                label: 'Miel seleccionada',
            },
            ],
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
            },
            responsive: true,
            legend: {
                labels: {
                    fontColor: 'black',
                    defaultFontFamily: 'ABeeZee',
                    defaultFontSize: 28,
                }
            }
        },
    }
    
    componentDidMount(){
        this.setData(0)
    }

    setData = (i) =>{
        const dataArray = this.state.answerPointsArray;
        let dataState = {...this.state.data}
        dataState.datasets[i].data = dataArray;
        this.setState({data: dataState})
    }

    render() { 
        if (this.state.data.data = true){
            return ( 
            
                <div className="chart__container">
                    <Radar data={this.state.data} options={this.state.options}/>
                </div>
            
            );
        } else {
            return ''
        }

    }
}
 
const mapStateToProps = (state) => {
    return {
        comparisonData: state.comparisonData
    }
}

export default connect(mapStateToProps, null)(Chart)
