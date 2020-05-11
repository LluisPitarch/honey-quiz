import React from 'react';
import HoneyProduct from './HoneyProduct'
import Honeys from '../data/honeys'
import './styles/honeyselection.css'


class HoneySelection extends React.Component {
    state = { 
        honeyUser: this.props.answerPointsArray,
        honeysList: [],
        similarHoneys: []
     }
    
    async componentDidMount(){
        await this.setHoneysArrays()
        await this.filterHoneys()
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
        const honeys = this.state.similarHoneys;

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