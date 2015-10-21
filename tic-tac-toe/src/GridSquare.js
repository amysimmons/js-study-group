import React from 'react';

var GridSquare = React.createClass({

  propTypes: {
    type: React.PropTypes.string
  },

  render () {
    let className = 'grid-square ' + this.props.type;
    let position = [this.props.yPos,this.props.xPos];

    var display;

    switch(this.props.type) {
    case 'empty':
        display = "";
        break;
    case 'naught':
        display = 'o'
        break;
    case 'cross':
        display = 'x'
        break;
    }

    return (
      <div className={className} onClick={this.props.playerTurn.bind(null, position)}><span>{display}</span></div>
    );
  },

});

module.exports = GridSquare;