import React from 'react';
import './styles/StageQuestions.css';

import Question from '../components/Question'
import ImageChange from '../components/ImageChange'
import Answers from '../components/Answers'
import Results from './Results'

import Data from '../data/data.js'

import 'react-bootstrap'
import Loading from '../components/Loading';
import flores from '../img/flores.png';

class App extends React.Component {
  state = { 
    questionCount: 1,
    data: [],
    currentQuestion: Data[0],
    answersPoints: [],
    backgroundImage: require('../img/img-quiz-1.jpg'),
  }

  async componentDidMount(){
    await this.setState({data: Data})
    await this.setState(this.currentQuestion = this.state.data[0])
  }

  nextQuestion = () => {
    const nextIndex = this.state.questionCount + 1
    this.state.data.shift()
    this.setState({questionCount: nextIndex})
    this.setState({ currentQuestion: this.state.data[0]})
    this.updateBackground(nextIndex)
  }

  setPoints = (points) => {
    let newAnswerPoints = points
    this.setState({
      answersPoints:[...this.state.answersPoints, newAnswerPoints]
    });
    this.nextQuestion()
  }

  updateBackground = (nextIndex) => {
    const img1 = require('../img/img-quiz-1.jpg')
    const img2 = require('../img/img-quiz-2.jpg')

    let imgBg = ''

    switch (nextIndex || 1) {
        case 1:
            imgBg = img1 
            break;
        case 2:
            imgBg = img2
            break
        default:
            imgBg = img1
            break;
    }
    
    this.setState({
        backgroundImage: imgBg
    })
}
  
render() { 
    if(this.state.data.length >= 1) {
      return (
        <div className="container">
          <div className="row">
            <div className="col-6 card__col">
              <div className="questions__card">
                  <span className="question__count">{`Pregunta ${this.state.questionCount}/8`}</span>
                  <Question question={this.state.currentQuestion.question}/>
                  <div className="answers__container">
                  <Answers  
                    answers={this.state.currentQuestion.answers}
                    points={this.setPoints}
                  />
                  </div>
                  <button className="btn__back">Volver atrás</button>
                  <img className="flores__image" src={flores} alt=""/>
              </div>
            </div>
            <div className="col-6">
              <div style={{backgroundImage: `url(${this.state.backgroundImage})` }} id="imageContainer" className="quiz__image"></div>
            </div>
          </div>
        </div>
      );
    }
    else if(this.state.data.length === 0){
      return (<Results points={this.state.answersPoints}/>)
    }
    else{
      return(
        <Loading/>
      )
    }
  }
}
 
export default App;