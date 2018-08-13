import React from 'react';
import Header from './Header';
import '../styles/App.css';
import HomepageGallery from './HomepageGallery';
import Gallery from './Gallery';

class Home extends React.Component {

    render () {

        const GALLERIES_TEMP = [ "Word Art", "Collage", "Painting", "Comic Concepts" ];
        const IMAGE_POINTERS = ["word-art", "collage", "painting", "comic-concepts"];

        return (
            <div>
                <Header />
                <h1>hello world</h1>
                {GALLERIES_TEMP.map((x,i)=>{
                  return <HomepageGallery name={x} key={i} src={IMAGE_POINTERS[i]} />
                })}
                <Gallery /> 
            </div>
        );
    }
}

export default Home;
