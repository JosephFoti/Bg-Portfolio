import React from 'react';
import Header from './Header';
import HomepageGalleries from './HomepageGalleries';
import Gallery from './Gallery';
import '../styles/App.css';

const GALLERIES_TEMP = ["Word Art", "Collage", "Painting", "Comic Concepts"];
const IMAGE_POINTERS = ["word-art", "collage", "painting", "comic-concepts"];

class Home extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      ACTIVE_GALLERY: false
    };
    this.handleGallery = this.handleGallery.bind(this);
    this.closeGallery = this.closeGallery.bind(this);
  }

  handleGallery (e) {
    let target = e.target.parentElement;
    console.log('handleGallery called');
    if (target.dataset.index) {
      let index = parseInt(target.dataset.index, 10);
      this.setState({ ACTIVE_GALLERY: IMAGE_POINTERS[index] });
    }
  }

  closeGallery () {
    this.setState({ ACTIVE_GALLERY: false });
  }

  render () {
    const onclick = this.handleGallery;
    return (
      <div>

        <Header/>
        <h1>hello world</h1>
        <HomepageGalleries galleries={GALLERIES_TEMP} srcValues={IMAGE_POINTERS} onclick={onclick}/>
        {
          this.state.ACTIVE_GALLERY ?
            <Gallery type={this.state.ACTIVE_GALLERY} reset={this.closeGallery}/> :
            null
        }
      </div>);
  }
}

export default Home;
