import React from 'react/addons';

var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

var ImageFrame = React.createClass({
	render: function(){
		var images = this.props.images;
		var currentImage = this.props.currentImage;

		var imageToDisplay = images[currentImage];

		return (
			<div className="image-frame">
				<div className="image">
				<ReactCSSTransitionGroup transitionName="example">
					{imageToDisplay}
        		</ReactCSSTransitionGroup>
				</div>
			</div>
		)
	}
});

module.exports = ImageFrame;
