import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

import './WorkCard.scss';

function WorkCard(props) {
  const { company, position, location, image } = props;
  return (
    <div className="work-card">
      <img src={image} />
      <div className="work-card-text">
        <h3>{company}</h3>
        <h4>{position}</h4>
        <div>
          <FontAwesomeIcon icon={faMapMarkerAlt} className="map-marker" />
          <span>{location}</span>
        </div>
      </div>
    </div>
  );
}

WorkCard.propTypes = {
  company: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default WorkCard;
