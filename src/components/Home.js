import React from 'react';
import Header from './Header';
import HomepageGalleries from './HomepageGalleries';
import Gallery from './Gallery';
import Lightbox from './Lightbox';
import Loader from './Loader';
import axios from 'axios';
import '../styles/App.css';

// Strings that match with gallery names, to be replaced with an axios call
const API_ACCESS = "bg-admin";

class Home extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      COLLECTIONS: false,
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

  componentDidMount () {
    axios.get(`http://localhost:5000/api/configs/${API_ACCESS}`).then(res => {
      let galleryNames = res.data.map(x => {
        let split = x.split('');
        if (split.includes('-')) {
          return x.split('-').join(' ');
        }
        return x;
      });

      let collections = {
        POINTERS: res.data,
        NAMES: galleryNames
      };
      console.log(`Initial Config data recieved`, collections);
      this.setState({ COLLECTIONS: collections });
    });
  }

  handleGallery (e) {
    let target = e.target.parentElement;
    console.log('handleGallery called');
    if (target.dataset.index) {
      let index = parseInt(target.dataset.index, 10);
      this.setState({ ACTIVE_GALLERY: this.state.COLLECTIONS.POINTERS[index], ACTIVE_INDEX: index });
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
        <Header />
        {
          this.state.COLLECTIONS ?
            <HomepageGalleries
              galleries={this.state.COLLECTIONS.NAMES}
              srcValues={this.state.COLLECTIONS.POINTERS}
              onclick={this.handleGallery}
              activeGallery={this.state.ACTIVE_GALLERY}
              activeIndex={this.state.ACTIVE_INDEX}
            /> :
            <Loader />
        }
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
