import React from 'react';
import Header from './Header';
import '../styles/App.css';
import HomepageGalleries from './HomepageGalleries';
import Gallery from './Gallery';


const GALLERIES_TEMP = [ "Word Art", "Collage", "Painting", "Comic Concepts" ];
const IMAGE_POINTERS = ["word-art", "collage", "painting", "comic-concepts"];

class Home extends React.Component {

    constructor(props) {
      super(props)
      this.state = {
        ACTIVE_GALLERY: false
      }
      this.handleGallery = this.handleGallery.bind(this);
      this.closeGallery = this.closeGallery.bind(this);
    }

    handleGallery(e) {
      let target = e.target.parentElement;
      console.log('handleGallery called');
      if (target.dataset.index) {
        console.log('about to set state');
        let index = parseInt(target.dataset.index);
        this.setState({
          ACTIVE_GALLERY: IMAGE_POINTERS[index]
        })
      }
      console.log(`the state of ACTIVE_GALLERY is ${this.state.ACTIVE_GALLERY}`);

    }

    closeGallery() {
      this.setState({
        ACTIVE_GALLERY: false
      })
    }

    render () {
        const onclick = this.handleGallery
        return (
            <div>
                <Header />
                <h1>hello world</h1>
                <HomepageGalleries galleries={GALLERIES_TEMP} srcValues={IMAGE_POINTERS} onclick={onclick} />
                {this.state.ACTIVE_GALLERY ? <Gallery type={this.state.ACTIVE_GALLERY} reset={this.closeGallery}/> : null}
            </div>
        );
    }
}

export default Home;
