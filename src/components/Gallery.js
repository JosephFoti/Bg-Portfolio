import React from 'react';
import ReactDOM from 'react-dom';
import PropType from 'prop-types';
import axios from 'axios';

import Return from './Return';

class Gallery extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: false
    }
  }

  componentDidMount() {
    if (this.props.type) {
      axios.get(`http://localhost:5000/api/collections/${this.props.type}`)
      .then(res => {
        console.log(res.data);
        this.setState({
          data: res.data
        });
        console.log(this.state.data);
      });
    }
  }



  render() {
    const data = this.state.data;
    console.log(data)
    if (this.props.type && data) {
      return (
        <div className="p2 flex flex-wrap" id="Gallery-Container">
        <Return onclick={this.props.reset}/>
          {data.content.map((x,i)=>{
            return (
              <div className="p1" key={i} style={{ flex:"1 0 30%" }}>
                <img className="" width="100%" src={`./images/${data.name}/thumbs/sm-${x.id}.jpg`} alt={x.title}/>
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
