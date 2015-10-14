import React from 'react/addons';
import GridSquare from './GridSquare';

var GridRow = React.createClass({
  render () {
    let className = 'grid-row ';

      var gridSquares = [];

      for (var x = 0; x < this.props.squareCount; x++) {
        var square = <GridSquare type="empty"/>;
        gridSquares.push(square);
      };

    return (
      <div className={className}>{gridSquares}</div>
    );
  },

});

module.exports = GridRow;