import React from 'react';
import Header from './Header';
import HomepageGalleries from './HomepageGalleries';
import Gallery from './Gallery';
import Lightbox from './Lightbox';
import '../styles/App.css';

// Strings that match with gallery names, to be replaced with an axios call
const GALLERIES_TEMP = ["Word Art", "Collage", "Painting", "Comic Concepts"];
const IMAGE_POINTERS = ["word-art", "collage", "painting", "comic-concepts"];

class Home extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      ACTIVE_GALLERY: false,
      ACTIVE_INDEX: null,
      ACTIVE_LIGHTBOX: false,
      ACTIVE_DATA: false
    };
    this.handleGallery = this.handleGallery.bind(this);
    this.handleLightbox = this.handleLightbox.bind(this);
    this.closeGallery = this.closeGallery.bind(this);
    this.closeLightbox = this.closeLightbox.bind(this);
  }

  handleGallery (e) {
    let target = e.target.parentElement;
    console.log('handleGallery called');
    if (target.dataset.index) {
      let index = parseInt(target.dataset.index, 10);
      this.setState({ ACTIVE_GALLERY: IMAGE_POINTERS[index], ACTIVE_INDEX: index });
    }
  }

  closeGallery () {
    this.setState({ ACTIVE_GALLERY: false, ACTIVE_INDEX: null });
  }

  handleLightbox (targetData, fullData) {
    this.setState({ ACTIVE_LIGHTBOX: targetData[0], ACTIVE_DATA: fullData });
    console.log('--------');
    console.log(targetData[0]);
    document.documentElement.style.overflow = 'hidden';
  }

  closeLightbox () {
    this.setState({ ACTIVE_LIGHTBOX: false });
    document.documentElement.style.overflow = 'scroll';
  }

  render () {
    return (
      <div>
        {
          this.state.ACTIVE_LIGHTBOX ?
            <Lightbox
              targetData={this.state.ACTIVE_LIGHTBOX}
              fullData={this.state.ACTIVE_DATA}
              close={this.closeLightbox}
            /> :
            null
        }
        <Header/>
        <HomepageGalleries
          galleries={GALLERIES_TEMP}
          srcValues={IMAGE_POINTERS}
          onclick={this.handleGallery}
          activeGallery={this.state.ACTIVE_GALLERY}
          activeIndex={this.state.ACTIVE_INDEX}
        />
        {
          this.state.ACTIVE_GALLERY ?
            <Gallery
              type={this.state.ACTIVE_GALLERY}
              reset={this.closeGallery}
              handleLightbox={this.handleLightbox}
            /> :
            null
        }
      </div>);
  }
}

export default Home;
