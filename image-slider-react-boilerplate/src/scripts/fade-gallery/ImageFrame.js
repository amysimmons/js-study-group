import React from 'react/addons';

var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

var ImageFrame = React.createClass({
	render: function(){
		var images = this.props.images;
		var currentImage = this.props.currentImage;
		var previousImage = this.props.previousImage;
		var nextImage = this.props.nextImage;

		var imageToDisplay = images[currentImage];

		previousImage = images[previousImage];
		nextImage = images[nextImage];
		
		return (
			<div className="image-frame">		
				<div className="image currentImage">
					{imageToDisplay}
				</div>
			</div>
		)
	}
});

module.exports = ImageFrame;

//className="{imageToDisplay.isActive ? 'active' : '' }"