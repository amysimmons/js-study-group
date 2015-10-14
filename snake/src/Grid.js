import React from 'react/addons';
import GridRow from './GridRow';

var Grid = React.createClass({
  render: function(){
  	var grid = [];

  	for (var i = 0; i < this.props.rowCount; i++) {
  		var row = (<GridRow squareCount={this.props.squareCount}/>);
  		grid.push(row);
  	};

    return (
      <div className="grid">
	  	{grid}
      </div>
    )
  }
});

module.exports = Grid;


/*

		var stars = [];
		for(var i=0; i<this.props.numberOfStars; i++){
			stars.push(
				<span className="glyphicon glyphicon-star"></span>
			)
		}
		return (
			<div id="stars-frame">
				<div className="well">
					{stars}
				</div>
			</div>
		)
*/