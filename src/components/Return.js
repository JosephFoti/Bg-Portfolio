import React from 'react';
import PropTypes from 'prop-types';

const Return = ({ onclick }) => (
  <div>
    <button onClick={onclick}>Return Home</button>
  </div>
);

Return.propTypes = {
  onclick: PropTypes.func
};

export default Return;
