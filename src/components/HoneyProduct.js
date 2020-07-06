import React from 'react';
import './styles/honeyproduct.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { ProgressBar } from 'react-bootstrap';

// Redux
import { connect } from 'react-redux';
import { setComparison } from '../actions';

class HoneyProduct extends React.Component {
  handleClick = () => {
    // We make sure that the data was clear
    this.props.setComparison('');

    const honey = this.props.product;
    const array = [];
    const honeyName = this.props.product.name;

    let honeyFeatures = honey.features;
    honeyFeatures = Object.values(honeyFeatures);
    array.push(
      honeyFeatures[0],
      honeyFeatures[1],
      honeyFeatures[2],
      honeyFeatures[3]
    );

    this.props.setComparison(array, honeyName);
  };

  render() {
    const honey = this.props.product;
    return (
      <div className="honey__container">
        <div
          style={{ background: honey.color, borderRadius: honey.borderRadius }}
          className={
            this.props.topCard
              ? this.props.res
                ? 'top__res__container'
                : 'top__border__radius__container'
              : this.props.resultsPadding
              ? 'top__res__paddings prod__container'
              : 'prod__container'
          }>
          <div
            className={
              this.props.res
                ? 'prod__img__container res__img__container'
                : 'prod__img__container'
            }>
            <img
              className="shake-animation"
              src={honey.image}
              alt={honey.name}
              title={honey.name}
            />
          </div>

          <div
            className={
              this.props.res
                ? 'prod__info__container res__info__container'
                : 'prod__info__container'
            }>
            <h2 className="producto__title">{honey.name}</h2>

            <div className="progress__bar__container">
              <div className="progress__Bar">
                <span>{`Dulzor ${honey.features.sweet}/10`}</span>
                <ProgressBar now={honey.features.sweet * 10} />
              </div>
              <div className="progress__Bar">
                <span>{`Acidez ${honey.features.acid}/10`}</span>
                <ProgressBar now={honey.features.acid * 10} />
              </div>
              <div className="progress__Bar">
                <span>{`Aroma ${honey.features.smell}/10`}</span>
                <ProgressBar now={honey.features.smell * 10} />
              </div>
              <div className="progress__Bar">
                <span>{`Cristaliz. ${honey.features.hardness}/10`}</span>
                <ProgressBar now={honey.features.hardness * 10} />
              </div>
            </div>

            {this.props.topCard ? (
              <div></div>
            ) : (
              <button onClick={this.handleClick} className="btn__comprar">
                <span>Comparar</span>
                <FontAwesomeIcon icon={faChartLine} />
              </button>
            )}
            <a href={honey.url} className="btn__comprar">
              <span>Comprar</span>
              <FontAwesomeIcon icon={faShoppingCart} />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  setComparison,
};

export default connect(null, mapDispatchToProps)(HoneyProduct);
