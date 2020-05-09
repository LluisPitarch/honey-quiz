import React from 'react';
import './styles/StageQuestions.css';
import logo from '../img/logo-las-dehesas.png'
import Question from '../components/Question'
import Answers from '../components/Answers'
import Data from '../data/data.js'
import 'react-bootstrap'
import Loading from '../components/Loading';

class App extends React.Component {
  state = { 
    questionCount: 0,
    data: [],
    currentQuestion: Data[0],
    answersPoints: []
  }

  async componentDidMount(){
    await this.setState(this.data = Data)
    await this.setState(this.currentQuestion = Data[0])
  }

  nextQuestion = () => {
    const nextIndex = Math.floor(this.state.questionCount + 1)
    this.setState({questionCount: nextIndex})
    this.setState({ currentQuestion: Data[nextIndex]})
  }

  setPoints = (points) => {
    let newAnswerPoints = points
    this.setState({
      answersPoints:[...this.state.answersPoints, newAnswerPoints]
    });
    this.nextQuestion()
  }
  
  render() { 
    if (this.currentQuestion){
      return (
        <div className="container">
          <div className="row">
            <div className="col-12 card">
                <img className="logo" src={logo} alt={logo.title}/>
    
            <div className="questions__card">
                <Question question={this.state.currentQuestion.question}/>
                <Answers  
                  answers={this.state.currentQuestion.answers}
                  points={this.setPoints}
                />
            </div>
            <div className="navigation__container">
                <button onClick={this.nextQuestion} className="btn btn-primary mx-auto d-block bo">Next Question</button>
            </div>
            </div>
          </div>
        </div>
      );
    }
    else{
      return (<Loading />)
    }
  }
}
 
export default App;