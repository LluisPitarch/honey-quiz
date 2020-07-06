import React from 'react';

// Styles
import './styles/StageQuestions.css';
import Media from 'react-media';

// Components
import Question from '../components/Question';
import Answers from '../components/Answers';
import Results from './Results';
import Loading from '../components/Loading';

// Utils
import updateBackground from '../utils/updateBackground';
import 'react-bootstrap';

// Img
import flores from '../img/flores.png';

// Fetch firebase function import from utils
import firebaseFetch from '../utils/firebaseFetch';

// Redux
import { connect } from 'react-redux';
import { setPoints } from '../actions';

// ***********************
// -------COMPONENT-------
// ***********************

class App extends React.Component {
  state = {
    questionCount: 1,
    data: [],
    currentQuestion: '',
    backgroundImage: require('../img/img-quiz-1.jpg'),
  };

  async componentDidMount() {
    const fetchedData = await firebaseFetch('questions');
    fetchedData.sort((a, b) => a.id - b.id);
    await this.setState({ data: fetchedData });
    await this.setState({ currentQuestion: fetchedData[0] });
  }

  nextQuestion = () => {
    const nextIndex = this.state.questionCount + 1;
    this.state.data.shift();
    this.setState({ questionCount: nextIndex });
    this.setState({ currentQuestion: this.state.data[0] });
    this.updateBackgroundCall(nextIndex);
  };

  setPointsToState = (points) => {
    let newAnswerPoints = points;
    this.props.setPoints(newAnswerPoints);
    this.nextQuestion();
  };

  updateBackgroundCall = (nextIndex) => {
    this.setState({
      backgroundImage: updateBackground(nextIndex),
    });
  };

  render() {
    if (this.state.data.length >= 1 && this.state.currentQuestion) {
      return (
        <Media
          queries={{
            small: '(max-width: 599px)',
            medium: '(min-width: 600px) and (max-width: 992px)',
            large: '(min-width: 1200px)',
          }}>
          {(matches) => (
            <div className="container">
              <div className="row">
                <div className="col-md-12 col-lg-6 card__col">
                  <div className="questions__card">
                    <span className="question__count">{`Pregunta ${this.state.questionCount}/8`}</span>
                    <Question
                      res={matches.small ? true : false}
                      question={this.state.currentQuestion.question}
                    />
                    <div className="answers__container">
                      <Answers
                        res={matches.small ? true : false}
                        answers={this.state.currentQuestion.answers}
                        points={this.setPointsToState}
                      />
                    </div>
                    <button className="btn__back">Volver atrás</button>
                    <img className="flores__image" src={flores} alt="" />
                  </div>
                </div>
                <div className="d-none d-lg-block col-6">
                  <div
                    style={{
                      backgroundImage: `url(${this.state.backgroundImage})`,
                    }}
                    id="imageContainer"
                    className="quiz__image"></div>
                </div>
              </div>
            </div>
          )}
        </Media>
      );
    } else if (this.state.data.length === 0 && this.state.questionCount === 9) {
      return <Results />;
    } else {
      return <Loading />;
    }
  }
}

const mapDispatchToProps = {
  setPoints,
};

export default connect(null, mapDispatchToProps)(App);
