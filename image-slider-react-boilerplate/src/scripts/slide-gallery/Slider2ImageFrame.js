import React from 'react/addons';

var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

var Slider2ImageFrame = React.createClass({
	render: function(){
		var images = this.props.images;
		var currentImage = this.props.currentImage;
		var previousImage = this.props.previousImage;
		var nextImage = this.props.nextImage;
		var trackWidth = this.props.trackWidth;
		var trackStyles = this.props.trackStyles;
		var trackClasses = this.props.trackClasses;

		var imageToDisplay = images[currentImage];

		previousImage = images[previousImage];
		nextImage = images[nextImage];

		return (

				<div className="track" style={trackStyles}>
					{images}
				</div>

		)
	}
});

module.exports = Slider2ImageFrame;
