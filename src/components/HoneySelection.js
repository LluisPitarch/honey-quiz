import React from 'react';
import HoneyProduct from './HoneyProduct'
import Honeys from '../data/honeys'
import './styles/honeyselection.css'

// Redux
import { connect } from 'react-redux';


class HoneySelection extends React.Component {
    state = { 
        honeysList: Honeys,
        similarHoneys: [],
        yourPerfectHoneys: [],
     }
    
    async componentDidMount(){
        // await this.setHoneysArrays()
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
        let comparisonObjectsArray = []

        await honeysList.forEach( honey => {
            let result = this.compareHoneys(this.props.answersPointsArray, Object.values(honey.features))
            let difference = {difference: result}     
            let objectWithComparison = Object.assign(honey, difference)
            comparisonObjectsArray.push(objectWithComparison)
        })

        let arraySort = comparisonObjectsArray.sort(function(a,b) {
            return a.difference - b.difference;
        })

        this.setState({similarHoneys: arraySort})
        this.setState({yourPerfectHoneys: [arraySort[0], arraySort[1]]})
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
                this.state.yourPerfectHoneys.map(function (honey) {
                    return (
                       <HoneyProduct key={honey.id} product={honey}/>
                       )
                })
                }
            </div>
         );
    }
}

const mapStateToProps = (state) => {
    return {
        answersPointsArray: state.answersPointsArray
    }
}
 

export default connect(mapStateToProps, null)(HoneySelection)