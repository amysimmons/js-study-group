import React from 'react';
import GridSquare from './GridSquare';

var GridRow = React.createClass({
  render () {
    let className = 'grid-row ';

      var gridRow = [];

      for (var x = 0; x < this.props.squares.length; x++) {
        var square = <GridSquare type={this.props.squares[x]} key={x}/>;
        gridRow.push(square);
      };

    return (
      <div className={className}>{gridRow}</div>
    );
  },
  propTypes:{
    squares : React.PropTypes.array
  }
});

module.exports = GridRow;