import React from 'react/addons';

var ArrowLeftFrame = React.createClass({
	render: function(){
		return (
			<div className="arrow-left arrow" onClick={this.props.previous}></div>
		)
	}
});

module.exports = ArrowLeftFrame;