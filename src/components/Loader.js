import React from 'react';

const styles = {
  div: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: "0",
    left: "0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  img: {
    maxWidth: "initial",
    maxHeight: "initial"
  }

};

class Loader extends React.Component {
  render () {
    return (
      <div style={styles.div}>
        <img src="./images/misc/loader.gif" style={styles.img} />
      </div>
    );
  }
}

export default Loader;
