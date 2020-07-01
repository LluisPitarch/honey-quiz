import React from 'react';

// Styles
import './styles/poll.css';

// fontAwesome SVG
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const Poll = (props) => {
  const { color, number, matches } = props;

  return (
    <div className="poll__container">
      <div className="poll_subContainer">
        <FontAwesomeIcon
          className="font__awesome__icon__top w-100"
          icon={faTrophy}
          style={{ color: color }}
        />
        <h3>{number}º Que más gusta</h3>
      </div>
      <div className="poll_subContainer">
        <FontAwesomeIcon
          className="font__awesome__icon__top w-100"
          icon={faHeart}
          style={{ color: color }}
        />
        <h3>{matches} Matches</h3>
      </div>
    </div>
  );
};

export default Poll;
