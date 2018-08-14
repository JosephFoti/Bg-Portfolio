import React from 'react';
import PropType from 'prop-types';
import HomepageGallery from './HomepageGallery'

class HomepageGalleries extends React.Component {
  render() {
    const { galleries, onclick, srcValues} = this.props

    return (
      galleries.map((x,i)=>{
        return <HomepageGallery name={x} key={i} index={i} src={srcValues[i]} onclick={onclick}/>
      })
    )
  }
}

HomepageGalleries.propTypes = {
  galleries: PropType.array,
  handleGallery: PropType.function,
  srcValues: PropType.array
}

export default HomepageGalleries;
