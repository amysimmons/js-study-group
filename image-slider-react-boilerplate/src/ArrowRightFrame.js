import React from 'react/addons';

var ArrowRightFrame = React.createClass({
	render: function(){
		return (
			<div className="arrow-right arrow" onClick={this.props.moveRight}></div>
		)
	}
});

module.exports = ArrowRightFrame;