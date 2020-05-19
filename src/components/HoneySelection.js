import React from 'react';
import HoneyProduct from './HoneyProduct'
import Honeys from '../data/honeys'
import './styles/honeyselection.css'

// Redux
import { connect } from 'react-redux';
import Loading from './Loading';


class HoneySelection extends React.Component {
    state = { 
        honeysList: Honeys,
        similarHoneys: [],
        yourPerfectHoneys: [],
        propsUserArray: []

     }
    
    async componentDidMount() {
        await this.setState({propsUserArray: this.props.answerPoints})
        await this.filterHoneys()
        
    }

    filterHoneys = async () => {
        let honeysList = this.state.honeysList
        let comparisonObjectsArray = []
        
        await honeysList.forEach( honey => {
            let result = this.compareHoneys(this.state.propsUserArray, Object.values(honey.features))
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
        
        if (this.state.propsUserArray.length === 4){
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
        else {
            return(
            <Loading/>
            )
        }
    }
}

const mapStateToProps = (state) => {
    return {
        answersPointsArray: state.answersPointsArray
    }
}
 

export default connect(mapStateToProps, null)(HoneySelection)