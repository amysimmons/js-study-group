import React from 'react/addons';

var Slider2ImageFrame = React.createClass({
	render: function(){
		var images = this.props.images;
		var trackStyles = this.props.trackStyles;

		return (
			<div className="track" style={trackStyles}>
				{images}
			</div>
		)
	}
});

module.exports = Slider2ImageFrame;
