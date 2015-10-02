import React from 'react/addons';

var ArrowRightFrame = React.createClass({
	render: function(){
		return (
			<div className="arrow-right arrow" onClick={this.props.next}></div>
		)
	}
});

module.exports = ArrowRightFrame;