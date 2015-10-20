import React from 'react';

var GridSquare = React.createClass({

  propTypes: {
    type: React.PropTypes.string
  },

  render () {
    let className = 'grid-square ' + this.props.type;
    return (
      <div className={className}></div>
    );
  },

});

module.exports = GridSquare;