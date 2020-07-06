import React from 'react';
import { Radar } from 'react-chartjs-2';
import Loading from '../components/Loading';
import { ProgressBar } from 'react-bootstrap';

// Fetch firebase function import from utils
import firebaseFetch from '../utils/firebaseFetch';

// Styles
import './styles/top.css';
import Media from 'react-media';

// Redux
import { connect } from 'react-redux';
import { setUserResponse } from '../actions';
import Poll from '../components/poll';
import HoneyProduct from '../components/HoneyProduct';

class Top extends React.Component {
  state = {
    honeys: [],
    averageResponses: [],
    orderedHoneys: [],
  };

  async componentDidMount() {
    const fetchedHoneys = await firebaseFetch('honeys');
    this.setState({
      honeys: fetchedHoneys,
    });
    this.setAverageData();
    this.orderHoneysByMatches();
  }

  async setAverageData() {
    const fetchedData = await firebaseFetch('history');
    let sweet = [];
    let acid = [];
    let smell = [];
    let hardness = [];

    fetchedData.forEach((answer) => {
      sweet.push(answer.resultData.userPoints[0]);
      acid.push(answer.resultData.userPoints[1]);
      smell.push(answer.resultData.userPoints[2]);
      hardness.push(answer.resultData.userPoints[3]);
    });

    const data = [
      Math.floor(sweet.reduce((a, b) => a + b) / sweet.length),
      Math.floor(acid.reduce((a, b) => a + b) / acid.length),
      Math.floor(smell.reduce((a, b) => a + b) / smell.length),
      Math.floor(hardness.reduce((a, b) => a + b) / hardness.length),
    ];

    this.setState({
      averageResponses: data,
    });
  }

  async orderHoneysByMatches() {
    const orderedHoneys = this.state.honeys.sort(
      (a, b) => b.matchesCounter - a.matchesCounter
    );
    this.setState({ orderedHoneys: orderedHoneys });
  }

  render() {
    if (
      this.state.honeys.length > 4 &&
      this.state.averageResponses.length === 4
    ) {
      return (
        <Media
          queries={{
            small: '(max-width: 599px)',
            medium: '(min-width: 600px) and (max-width: 992px)',
            large: '(min-width: 1200px)',
          }}>
          {(matches) => (
            <div className="top__main__container">
              <div className="top__card__main__container">
                <div className="top__card__container">
                  <div className="top__card">
                    <div className="top__title__container">
                      <h2>La miel perfecta para nuestros usuarios</h2>
                    </div>
                    <div className="row__top__card">
                      <div className="top__progress__bar__container">
                        <div className="progress__bar top__bar">
                          <span>{`Dulzor ${this.state.averageResponses[0]}/10`}</span>
                          <ProgressBar
                            now={this.state.averageResponses[0] * 10}
                          />
                        </div>
                        <div className="progress__bar top__bar">
                          <span>{`Acidez ${this.state.averageResponses[1]}/10`}</span>
                          <ProgressBar
                            now={this.state.averageResponses[1] * 10}
                          />
                        </div>
                        <div className="progress__bar top__bar">
                          <span>{`Aroma ${this.state.averageResponses[2]}/10`}</span>
                          <ProgressBar
                            now={this.state.averageResponses[2] * 10}
                          />
                        </div>
                        <div className="progress__bar top__bar">
                          <span>{`Cristalización ${this.state.averageResponses[3]}/10`}</span>
                          <ProgressBar
                            now={this.state.averageResponses[3] * 10}
                          />
                        </div>
                        <button
                          className="btn__top"
                          onClick={() => this.props.history.push('/')}>
                          Repetir test
                        </button>
                      </div>
                      <div className="top__chart__container">
                        <Radar
                          data={{
                            labels: [
                              'Dulzor',
                              'Acidez',
                              'Aroma',
                              'Cristalización',
                            ],
                            datasets: [
                              {
                                borderColor: 'rgba(221, 146, 38, 1)',
                                backgroundColor: 'rgba(221, 146, 38, 0.2)',
                                data: this.state.averageResponses,
                                label: 'Perfil de la miel más deseada',
                              },
                            ],
                          }}
                          options={{
                            maintainAspectRatio: false,
                            scale: {
                              angleLines: {
                                display: true,
                              },
                              ticks: {
                                suggestedMin: 0,
                                suggestedMax: 10,
                              },
                            },
                            responsive: true,
                            legend: {
                              labels: {
                                fontColor: 'black',
                                defaultFontFamily: 'ABeeZee',
                                defaultFontSize: 28,
                              },
                            },
                          }}
                        />
                      </div>
                    </div>
                    <img
                      src={require('../img/flores.png')}
                      alt="miel las dehesas logo flores"
                      className="top__card__flowers"
                    />
                  </div>
                </div>
              </div>

              <div className="top__poll__container">
                <div className="top__title__container__poll">
                  <h2>El top de nuestros usuarios</h2>
                </div>
                {this.state.orderedHoneys.map((honey, index) => (
                  <div className="top__poll__card" key={honey.id}>
                    <div className="poll__product__container">
                      <HoneyProduct
                        res={matches.medium || matches.small ? true : false}
                        product={honey}
                        topCard={true}
                      />
                    </div>
                    <div className="poll__poll__container">
                      <Poll
                        res={matches.medium || matches.small ? true : false}
                        number={index + 1}
                        matches={honey.matchesCounter}
                        color={honey.color}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </Media>
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

export default connect(mapStateToProps, mapDispatchToProps)(Top);
