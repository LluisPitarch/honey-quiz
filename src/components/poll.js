import React from 'react';

// Styles
import './styles/poll.css';

// fontAwesome SVG
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const Poll = (props) => {
  const { color, number, matches, res } = props;

  return (
    <div
      className={
        res ? 'poll__container res__poll__container' : 'poll__container'
      }>
      <div
        className={
          res
            ? 'poll_subContainer res__poll__subContainer'
            : 'poll_subContainer'
        }>
        <FontAwesomeIcon
          className="font__awesome__icon__top w-100"
          icon={faTrophy}
          style={{ color: color }}
        />
        <h3 className={res ? 'res__poll__h3' : ''}>{number}º Que más gusta</h3>
      </div>
      <div
        className={
          res
            ? 'poll_subContainer res__poll__subContainer'
            : 'poll_subContainer'
        }>
        <FontAwesomeIcon
          className="font__awesome__icon__top w-100"
          icon={faHeart}
          style={{ color: color }}
        />
        <h3 className={res ? 'res__poll__h3' : ''}>{matches} Matches</h3>
      </div>
    </div>
  );
};

export default Poll;
