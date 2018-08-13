import React from 'react';
import PropType from 'prop-types';
import axios from 'axios';

class Gallery extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: false
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/api/collections/collage')
    .then(res => {
      console.log(res.data);
      this.setState({
        data: res.data
      });
      console.log(this.state.data);
    });
  }

  render() {
    const data = this.state.data;
    if (data) {
      return (
        <div className="p2 flex flex-wrap">
          {data.content.map((x,i)=>{
            return (
              <div className="p1" key={i} style={{ flex:"1 0 30%" }}>
                <img className="" width="100%" src={`./images/${data.name}/thumbs/${x.src}`} alt={x.title}/>
              </div>
            )
          })}
        </div>
      );
    } else {
      return null;
    }

  }

}

Gallery.propTypes = {
  data: PropType.object
}

export default Gallery
