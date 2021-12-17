import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { joinMission } from '../../redux/missions/missions';

const JoinButton = (props) => {
  const { id } = props;
  const dispatch = useDispatch();
  const handleClick = (e) => {
    e.stopPropagation();
    dispatch(joinMission(id));
  };
  return (<button className="join-mission-btn" type="button" onClick={(e) => handleClick(e)}> Join Mission</button>);
};

JoinButton.propTypes = {
  id: PropTypes.string.isRequired,
};

export default JoinButton;
