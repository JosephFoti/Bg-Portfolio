import React from 'react';
import PropType from 'prop-types';
import { TweenMax, Power2 } from 'gsap/TweenMax';

import LightboxNavigation from './LightboxNavigation';

const styles = {
  detailStyles: {
    color: 'white'
  },
  button: {
    border: "white 1px solid",
    borderRadius: "50%",
    background: "none",
    color: "white",
    lineHeight: "12px",
    padding: "10px",
    fontSize: "20px",
    position: "absolute",
    top: "10px",
    right: "10px",
    opacity: 0,
    zIndex: 10
  },
  container: {
    width: '100vw',
    height: '100vh',
    position: "fixed",
    backgroundColor: "rgba(0, 0, 0, 0)",
    top: 0,
    left: 0,
    zIndex: 1,
    boxSizing: 'border-box'
  },
  information: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    padding: "25px",
    boxSizing: "border-box",
    lineHeight: "22px",
    fontWeight: "100",
    letterSpacing: "1px",
    opacity: 0
  },
  image: {
    opacity: 0
  },
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

class Lightbox extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      SELECTION_DATA: false,
      FULL_GALLERY_DATA: false,
      LOADING_ERROR: false,
      CURRENT_INDEX: null
    };
    this.lightboxContainer = React.createRef();
    this.handleCloseAnimation = this.handleCloseAnimation.bind(this);
    this.handleForward = this.handleForward.bind(this);
    this.handleBackward = this.handleBackward.bind(this);
  }

  componentDidMount () {
    this.setState({
      SELECTION_DATA: this.props.targetData,
      FULL_GALLERY_DATA: this.props.fullData,
      CURRENT_INDEX: this.props.targetData.index
    });
    // wait for target
    new Promise((res, rej) => {
      let count = 0;
      let checkTarget = setInterval(() => {
        console.log(this.lightboxContainer.current);
        if (this.lightboxContainer.current) {
          console.log(this.lightboxContainer.current.childNodes);
          clearInterval(checkTarget);
          res();
        } else if (count > 20) {
          clearInterval(checkTarget);
          rej();
        } else {
          count++;
        }
      }, 250);
    }).then(() => {
      TweenMax.to(this.lightboxContainer.current, 0.5, { backgroundColor: 'rgba(0, 0, 0, 0.8)', ease: Power2.easeIn });
      TweenMax.to(this.lightboxContainer.current.childNodes, 0.5, { delay: 0.25, alpha: 1, ease: Power2.easeIn });
    }).catch(() => {
      this.setState({ LOADING_ERROR: true });
    });
    console.log('lighbox mounts');
    // console.log(this.props.fullData);
    console.log(this.props.targetData);
  }

  handleCloseAnimation () {
    console.log('handle close animation -----');
    TweenMax.to(this.lightboxContainer.current, 1, { alpha: 0, ease: Power2.easeIn });
    setTimeout(() => {
      this.props.close();
    }, 1000);
  }

  handleBackward () {
    const nextIndex = this.state.CURRENT_INDEX - 1;
    if (this.state.FULL_GALLERY_DATA && this.state.FULL_GALLERY_DATA.content[nextIndex]) {
      this.setState({ SELECTION_DATA: this.state.FULL_GALLERY_DATA.content[nextIndex], CURRENT_INDEX: nextIndex });
    }
  }

  handleForward () {
    const nextIndex = this.state.CURRENT_INDEX + 1;
    if (this.state.FULL_GALLERY_DATA && this.state.FULL_GALLERY_DATA.content[nextIndex]) {
      this.setState({ SELECTION_DATA: this.state.FULL_GALLERY_DATA.content[nextIndex], CURRENT_INDEX: nextIndex });
    }
  }

  render () {
    var { id, info, title, year, type } = this.state.SELECTION_DATA;
    if (!type && id) {
      const reg = /^\D+/;
      type = id.match(reg)[0];
    }
    return (
      <div
        className="absolute p4 center"
        ref={this.lightboxContainer}
        style={styles.container}>
        <button onClick={this.handleCloseAnimation} style={styles.button}>X</button>
        {
          this.state.LOADING_ERROR ?
            <h1>Oops! and error has occured, try reloading the page</h1> :
            <img src={`./images/${type}/${id}.jpg`} style={styles.image} width="auto" height="80%"/>
        }
        <div style={styles.information}>
          <h1 style={styles.detailStyles}>{title}</h1>
          <h4 style={styles.detailStyles}>{year}</h4>
          <h4 style={styles.detailStyles}>{info}</h4>
        </div>
        <div style={styles.left} onClick={this.handleBackward}>
          {'<'}
        </div>
        <div style={styles.right} onClick={this.handleForward}>
          {'>'}
        </div>

      </div>
    );
  }
}

Lightbox.propTypes = {
  close: PropType.func,
  targetData: PropType.object,
  fullData: PropType.object
};

export default Lightbox;
