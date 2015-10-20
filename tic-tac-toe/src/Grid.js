import React from 'react';
import GridRow from './GridRow';

var Grid = React.createClass({
  render: function(){
    var grid = [];

    for (var i = 0; i < this.props.grid.length; i++) {
      var row = (<GridRow squares={this.props.grid[i]} key={i}/>);
      grid.push(row);
    };

    return (
      <div className="grid">
      {grid}
      </div>
    )
  },
  propTypes:{
    grid : React.PropTypes.array
  }
});

module.exports = Grid;