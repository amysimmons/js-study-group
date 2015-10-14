import React from 'react/addons';

var GridSquare = React.createClass({

  propTypes: {
  	//empty, snake, food
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