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
            <div className="border-top p3 my2 flex" width="100%" key={this.props.id}>
                <div className="p2 mr3" style={{ flex: 3 }}>
                    <img src="#" className="fit" />
                </div>
                <div className="p2" style={{ flex: 5 }}>
                    <h1 className="h1 my1">{this.props.name}</h1>
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
    id: PropType.number
};

export default HomepageGallery;
