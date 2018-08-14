import React from 'react';
import PropType from 'prop-types';



// const Image = ({ type,id,title,index }) => (
//   <div className="p1" key={index} style={{ flex: "1 0 30%" }}>
//     <img className="image" width="100%" src={`./images/${type}/thumbs/sm-${id}.jpg`} alt={title}/>
//   </div>
// );

class Image extends React.Component {

  componentWillEnter (cb) {
    console.log('enter hook called');
  }

  componentWillLeave (cb) {
    console.log('Leave hook called');
  }

  render () {
    const { index,type,id,title } = this.props;
    return (
      <div className="p1" key={index} style={{ flex: "1 0 30%" }}>
        <img className="image" width="100%" src={`./images/${type}/thumbs/sm-${id}.jpg`} alt={title}/>
      </div>
    );
  }
}


Image.propTypes = {
  type: PropType.string,
  id: PropType.string,
  title: PropType.string
};

export default Image;
