import React from 'react';
import PropType from 'prop-types';
import { TweenMax, Power2 } from 'gsap/TweenMax';

class Lightbox extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      SELECTION_DATA: false
    };
    this.lightboxContainer = React.createRef();
    this.detailStyles = {
      color: 'white'
    };
  }

  componentDidMount () {
    this.setState({ SELECTION_DATA: this.props.targetData });
    // wait for target
    new Promise((res, rej) => {
      let count = 0;
      let checkTarget = setInterval(() => {
        console.log(this.lightboxContainer.current);
        if (this.lightboxContainer.current) {
          clearInterval(checkTarget);
          res();
        } else if (count > 20) {
          clearInterval(checkTarget);
        } else {
          count++;
          console.log('no joy');
        }
      }, 250);
    }).then(() => {
      TweenMax.to(this.lightboxContainer.current, 1, { backgroundColor: 'rgba(0, 0, 0, 0.8)', ease: Power2.easeIn });
    });
  }

  render () {
    const { id, info, title, year, type } = this.state.SELECTION_DATA;

    return (
      <div
        className="absolute p4 center"
        ref={this.lightboxContainer}
        style={{
          width: '100vw',
          height: '100vh',
          position: "absolute",
          backgroundColor: "rgba(0, 0, 0, 0)",
          top: 0,
          left: 0,
          zIndex: 1,
          boxSizing: 'border-box'
        }}>
        <button onClick={this.props.close}>Close</button>
        <img src={`./images/${type}/${id}.jpg`} width="auto" height="80%"/>
        <div>
          <h1 style={this.detailStyles}>{title}</h1>
          <h4 style={this.detailStyles}>{year}</h4>
          <h4 style={this.detailStyles}>{info}</h4>
        </div>
      </div>
    );
  }
}

Lightbox.propTypes = {
  close: PropType.func,
  targetData: PropType.object
};

export default Lightbox;
