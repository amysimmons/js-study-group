import React from 'react';

var ImageFrame = React.createClass({
	render: function(){
		var images = this.props.images;
		var currentImage = this.props.currentImage;
		var nextImage = this.props.nextImage;

		var imageToDisplay = images[currentImage];

		return (
			<div className="image-frame">
				<div className="image">
					{imageToDisplay}
				</div>
			</div>
		)
	}
});

module.exports = ImageFrame;
