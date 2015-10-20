import React from 'react';

var GridSquare = React.createClass({

  propTypes: {
    type: React.PropTypes.string
  },

  render () {
    let className = 'grid-square ' + this.props.type;
    let position = [this.props.yPos,this.props.xPos];

    return (
      <div className={className} onClick={this.props.playerTurn.bind(this, position)}></div>
    );
  },

});

module.exports = GridSquare;