import React from 'react';
import {Radar} from 'react-chartjs-2'
import { connect } from 'react-redux';

class Chart extends React.Component {
    state = { 
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

    render() { 
        if (this.props.answersPointsArray.length == 4){
            return ( 
            
                <div className="chart__container">
                    {this.props.comparisonData.length === 4 ?
                        <Radar data={
                            {
                                labels: ['Dulzor', 'Acidez', 'Aroma', 'Cristalización'],
                                datasets: [
                                    {
                                        borderColor: 'rgba(221, 146, 38, 1)',
                                        backgroundColor: 'rgba(221, 146, 38, 0.2)', 
                                        data: this.props.answersPointsArray,
                                        label: 'Tu perfil de HoneyLover',
                                    },
                                    {
                                        borderColor: 'rgba(255, 0, 0, 1)',
                                        backgroundColor: 'rgba(255, 0, 0, 0.2)', 
                                        data: this.props.comparisonData,
                                        label: this.props.comparisonName,
                                    },
                                ]}
                            }
                        options={this.state.options}/>                        
                        :
                        <Radar data={
                            {
                                labels: ['Dulzor', 'Acidez', 'Aroma', 'Cristalización'],
                                datasets: [
                                    {
                                        borderColor: 'rgba(221, 146, 38, 1)',
                                        backgroundColor: 'rgba(221, 146, 38, 0.2)', 
                                        data: this.props.answersPointsArray,
                                        label: 'Tu perfil de HoneyLover',
                                    },
                                ]}
                            }
                        options={this.state.options}/>
                        
                    }
                </div>
            
            );
        } else {
            return ''
        }

    }
}
 
const mapStateToProps = (state) => {
    return {
        comparisonData: state.comparisonData,
        answersPointsArray: state.answersPointsArray,
        comparisonName: state.comparisonName
    }
}

export default connect(mapStateToProps, null)(Chart)
