import React from 'react';
import PropType from 'prop-types';

class HomepageGallery extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      focus: false
    };
  }

  render () {
    return (
      <div className="border-top m3 flex" style={{ cursor: "pointer" }} width="100%" data-index={this.props.index} onClick={this.props.onclick}>
        <div className="p2 mr3 target" data-index={this.props.index} style={{ flex: 3, lineHeight: 0 }}>
          <img src={`./images/featured/${this.props.src}-ft.jpg`} className="fit" alt={this.props.name} />
        </div>
        <div className="p2 target" data-index={this.props.index} style={{ flex: 5 }}>
          <h1 className="h1 my1" style={{ textTransform: "capitalize" }}>{this.props.name}</h1>
          <p className="p p1 mb1 border">
              This is my {this.props.name} gallery! It's made of this and that and such.
          </p>
        </div>
      </div>
    );
  }
}

HomepageGallery.propTypes = {
  name: PropType.string,
  src: PropType.string,
  index: PropType.number,
  onclick: PropType.func
};

export default HomepageGallery;
