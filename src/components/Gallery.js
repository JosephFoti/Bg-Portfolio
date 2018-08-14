import React from 'react';
import PropType from 'prop-types';
import axios from 'axios';
import { TweenMax, Power2 } from 'gsap/TweenMax'

import Return from './Return';
import Image from './Image';

class Gallery extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      data: false,
      loading: false,
    };
    this.GalleryRef = React.createRef();
    this.handleAnimation = this.handleAnimation.bind(this);
  }

  componentDidMount () {
    if (this.props.type) {
      this.setState({ loading: true });
      axios.get(`http://localhost:5000/api/collections/${this.props.type}`).then(res => {
        this.setState({ data: res.data });
        console.log(`data recieved for ${this.props.type} from API`);
        this.handleAnimation();
      });
    }
  }

  handleAnimation() {
    setTimeout(()=>{
      this.setState({ loading: false });
    },1000);
    TweenMax.from(this.GalleryRef.current, 2, {delay:1, alpha:0});
  }

  render () {
    const data = this.state.data;
    console.log(`data to render in gallery`);
    if (this.props.type && data) {
      return (
        <div>
          <Return onclick={this.props.reset}/>
          {this.state.loading ? <h1 className="center p2" id="loading">Loading...</h1> : <h1></h1>}
          <div className="p2 flex flex-wrap" id="Gallery-Container" ref={this.GalleryRef} >
            {
              data.content.map((x, i) => {
                return <Image type={data.name} id={x.id} index={i} title={x.title} key={i} />;
              })
            }
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

Gallery.propTypes = {
  data: PropType.object,
  type: PropType.string,
  reset: PropType.func
};

export default Gallery;
