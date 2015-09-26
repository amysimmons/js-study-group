import React from 'react';

var ArrowLeftFrame = React.createClass({
	render: function(){
		return (
			<div className="arrow-left arrow" onClick={this.props.moveLeft}></div>
		)
	}
});

module.exports = ArrowLeftFrame;