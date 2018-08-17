import React from 'react';
import PropType from 'prop-types';
import HomepageGallery from './HomepageGallery'

class HomepageGalleries extends React.Component {

  componentDidMount() {
    console.log('a gallery mounted');
  }

  render() {
    const { galleries, onclick, srcValues, activeIndex } = this.props

    if (activeIndex || activeIndex === 0) {
      console.log(`activeIndex ${activeIndex}`);
      return (
        <HomepageGallery name={galleries[activeIndex]} key={activeIndex} index={activeIndex} src={srcValues[activeIndex]} onclick={onclick}/>
      )
    }

    return (
      galleries.map((x,i)=>{
        return <HomepageGallery name={x} key={i} index={i} src={srcValues[i]} onclick={onclick}/>
      })
    );
  }
}

HomepageGalleries.propTypes = {
  galleries: PropType.array,
  handleGallery: PropType.func,
  srcValues: PropType.array,
  activeGallery: PropType.oneOfType([
    PropType.bool,
    PropType.string
  ]),
  activeIndex: PropType.number
}

export default HomepageGalleries;
