import React from 'react';
import HoneyProduct from './HoneyProduct'
import './styles/honeyselection.css'

class HoneySelection extends React.Component {
    state = { 
        honeys: [1, 2, 4, 4]
     }
    render() { 
        const honeys = this.state.honeys

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