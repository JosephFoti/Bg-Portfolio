import React from 'react';
import PropTypes from 'prop-types';

class Return extends React.Component {
    constructor (props) {
        super(props);
    }

    render () {
        return (<div>
            <button onClick={this.props.onclick}/>
        </div>);
    }
}

Return.propTypes = {
    onclick: PropTypes.function
};

export default Return;
