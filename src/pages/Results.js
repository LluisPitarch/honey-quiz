import React from 'react';
import Chart from '../components/Chart';
import HoneySelection from '../components/HoneySelection';
import Loading from '../components/Loading';
import './styles/results.css';
import { ProgressBar } from 'react-bootstrap';

// Redux
import { connect } from 'react-redux';
import { setUserResponse } from '../actions';

class Results extends React.Component {
  state = {
    points: this.props.answersPoints,
    answersPointsArray: [],
  };

  async componentDidMount() {
    await this.setDataFromResults(this.state.points);
  }

  setDataFromResults = (data) => {
    const sweet = data.slice(0, 2);
    const sweetValue = sweet.reduce((a, b) => a + b, 0);

    const acid = data.slice(2, 4);
    const acidValue = acid.reduce((a, b) => a + b, 0);

    const smell = data.slice(4, 6);
    const smellValue = smell.reduce((a, b) => a + b, 0);

    const hardness = data.slice(6, 8);
    const hardnessValue = hardness.reduce((a, b) => a + b, 0);

    const dataArray = [sweetValue, acidValue, smellValue, hardnessValue];

    // Set data to redux state
    this.props.setUserResponse(dataArray);
    // Set data to component state
    this.setState({ answersPointsArray: dataArray });
  };

  render() {
    if (this.props.answersPointsArray.length === 4) {
      return (
        <div className="main__div_bg">
          <div className="results__container">
            <div className="results__col_l">
              <span className="question__count">Resultados</span>
              <h1>Este es tu perfil de honeyLover</h1>
              <Chart />

              <div className="results__bar-container">
                <div className="progress__bar-user">
                  <span>{`Dulzor ${this.props.answersPointsArray[0]}/10`}</span>
                  <ProgressBar now={this.props.answersPointsArray[0] * 10} />
                </div>
                <div className="progress__bar-user">
                  <span>{`Acidez ${this.props.answersPointsArray[1]}/10`}</span>
                  <ProgressBar now={this.props.answersPointsArray[1] * 10} />
                </div>
                <div className="progress__bar-user">
                  <span>{`Aroma ${this.props.answersPointsArray[2]}/10`}</span>
                  <ProgressBar now={this.props.answersPointsArray[2] * 10} />
                </div>
                <div className="progress__bar-user">
                  <span>{`Cristalización ${this.props.answersPointsArray[3]}/10`}</span>
                  <ProgressBar now={this.props.answersPointsArray[3] * 10} />
                </div>
                <button className="results__btn">Repetir test</button>
              </div>
            </div>

            <div className="results__col_r">
              <HoneySelection answerPoints={this.props.answersPointsArray} />
            </div>
          </div>
        </div>
      );
    } else {
      return <Loading></Loading>;
    }
  }
}

const mapStateToProps = (state) => {
  return {
    answersPoints: state.answersPoints,
    answersPointsArray: state.answersPointsArray,
  };
};

const mapDispatchToProps = {
  setUserResponse,
};

export default connect(mapStateToProps, mapDispatchToProps)(Results);
