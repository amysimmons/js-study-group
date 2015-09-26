import React from 'react';

var ArrowRightFrame = React.createClass({
	render: function(){
		return (
			<div className="arrow-right arrow" onClick={this.props.moveRight}></div>
		)
	}
});

module.exports = ArrowRightFrame;