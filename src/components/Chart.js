import React from 'react';
import {Radar} from 'react-chartjs-2'
import { connect } from 'react-redux';

class Chart extends React.Component {
    state = { 
        userData: [],
        data: {
            labels: ['Dulzor', 'Acidez', 'Aroma', 'Cristalización'],
            datasets: [
                {
                    borderColor: 'rgba(221, 146, 38, 1)',
                    backgroundColor: 'rgba(221, 146, 38, 0.2)', 
                    data: [],
                    label: 'Tu perfil de HoneyLover',
                }
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

    async componentDidMount() {
        await this.setState({ userData: this.props.answersPointsArray })
        this.setDataResults();
    }

    setDataResults = () =>{
        
        this.setState(prevState => ({
            data: {
                ...prevState.data,
                datasets: [{
                    ...prevState.data.datasets[0], data: this.props.answersPointsArray
                }, {
                    ...prevState.data.datasets[1], data: this.props.comparisonData || []
                }]
            }
        }))
        
    }

    async componentWillReceiveProps() {
        await this.setDataResults()
        
    }

    render() { 
        if (this.state.userData.length == 4){
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
        comparisonData: state.comparisonData,
        answersPointsArray: state.answersPointsArray
    }
}

export default connect(mapStateToProps, null)(Chart)
