import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { leaveMission } from '../../redux/missions/missions';

const LeaveButton = (props) => {
  const { id } = props;
  const dispatch = useDispatch();
  const handleClick = (e) => {
    e.stopPropagation();
    dispatch(leaveMission(id));
  };
  return (<button type="button" onClick={(e) => handleClick(e)}> Leave Mission</button>);
};

LeaveButton.propTypes = {
  id: PropTypes.string.isRequired,
};

export default LeaveButton;
