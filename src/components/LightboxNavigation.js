import React from 'react';
import PropType from 'prop-types';

const styles = {
  left: {
    height: '100%',
    width: '20%',
    position: 'absolute',
    left: 0,
    top: 0,
    cursor: 'pointer'
  },
  right: {
    height: '100%',
    width: '20%',
    position: 'absolute',
    right: 0,
    top: 0,
    cursor: 'pointer'
  }
};

class LightboxNavigation extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    // const { direction } = this.props;
    return (
      <div style={styles.left}>
        something
      </div>
    );
  }
}

LightboxNavigation.propTypes = {
  direction: PropType.string,
  handleNavigation: PropType.func
};

export default LightboxNavigation;
