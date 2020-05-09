import React from 'react';
import loading from '../img/loading.gif'
import './styles/loading.css'

const Loading = () => {
    return ( 
        <div className="center">
            <img src={loading} alt="loading las honey quiz"/>
        </div>
     );
}
 
export default Loading;