import React from 'react';
import HoneyProduct from './HoneyProduct'
import Honeys from '../data/honeys'
import './styles/honeyselection.css'


class HoneySelection extends React.Component {
    state = { 
        answerPointsArray: this.props.answerPointsArray,
        honeyUser: 0,
        honeysList: [],
        similarHoneys: []
     }
    
    async componentDidMount(){
        await this.setDataFromResults(this.state.answerPointsArray);
        await this.setHoneysArrays()
        await this.filterHoneys()
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
        this.setState({honeyUser: dataArray})
    }

    setHoneysArrays = () => {
        const rawData = Honeys
        const array = []
        function extract () {
            rawData.forEach( honey => {
                let honeyFeatures = honey.features
                honeyFeatures = Object.values(honeyFeatures)
                array.push(honeyFeatures)
            })
        }
        extract();

        this.setState({
            honeysList: array
        })
    }

    filterHoneys = async () => {
        let honeysList = this.state.honeysList

        var comparison = []

        await honeysList.forEach( honey => {
            let result = this.compareHoneys(this.state.honeyUser, honey)
            comparison.push(result)
        })

        comparison.sort((a, b) => a - b)
        
        this.setState({similarHoneys: comparison})
    }

    compareHoneys = (honeyUser, honeyType) => {
        const sweet = Math.abs(honeyUser[0] - honeyType[0])
        const acid = Math.abs(honeyUser[1] - honeyType[1])
        const smell =  Math.abs(honeyUser[2] - honeyType[2])
        const hardness =  Math.abs(honeyUser[3] - honeyType[3])

        const difference = sweet + acid + smell + hardness
        return difference
    }

    render() {
        const honeys = this.state.answerPointsArray;

        return ( 
            <div className="honey__selection">
                {
                honeys.map(function (honey) {
                    return (
                       <HoneyProduct honey={honey}/>
                       )
                })
                }
            </div>
         );
    }
}
 
export default HoneySelection;