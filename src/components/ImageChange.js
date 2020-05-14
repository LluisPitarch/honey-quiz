import React from 'react';
import './styles/imagechange.css'
import {img1} from '../img/img-quiz-1.jpg'
import {img2} from '../img/img-quiz-2.jpg'

class ImageChange extends React.Component {
    state = { 
        questionCount: this.props.index,
        backgroundImage: 0,
    }

    

    render() { 
        
        return ( 
         ''  
        );
    }
}
 
export default ImageChange;