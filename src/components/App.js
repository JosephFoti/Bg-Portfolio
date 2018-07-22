import React from 'react';
import Header from './Header';
import '../styles/App.css';
import HomepageGallery from './HomepageGallery';

class App extends React.Component {
    render () {

        const GalleriesTemp = [ "Word Art", "Collage", "Painting", "Comic Concepts" ];

        return (
            <div>
                <Header />
                <h1>hello world</h1>
                {GalleriesTemp.map((x,i)=>{
                  return <HomepageGallery name={x} id={i} />
                })}
            </div>
        );
    }
}

export default App;
