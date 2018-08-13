import React from 'react';
import Header from './Header';
import '../styles/App.css';
import HomepageGallery from './HomepageGallery';
import Gallery from './Gallery';

class Home extends React.Component {

    constructor(props) {
      super(props)
      this.state = {
        ACTIVE_GALLERY: false
      }
      this.handleGallery = this.handleGallery.bind(this);
    }

    handleGallery(e) {
      console.log(e.target);
      this.setState({
        ACTIVE_GALLERY: 'clicked'
      });
    }

    render () {

        const GALLERIES_TEMP = [ "Word Art", "Collage", "Painting", "Comic Concepts" ];
        const IMAGE_POINTERS = ["word-art", "collage", "painting", "comic-concepts"];

        return (
            <div>
                <Header />
                <h1>hello world</h1>
                {GALLERIES_TEMP.map((x,i)=>{
                  return <HomepageGallery name={x} key={i} src={IMAGE_POINTERS[i]} onclick={this.handleGallery}/>
                })}
                <Gallery />
            </div>
        );
    }
}

export default Home;
