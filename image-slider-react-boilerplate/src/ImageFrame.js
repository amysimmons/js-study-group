import React from 'react/addons';

var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

var ImageFrame = React.createClass({
	componentDidMount: function(){
		var next = this.props.next;	
		//setInterval(next, 3000);	
	},
	componentWillUpdate: function(){
		var currentImage = this.props.currentImage;
		var images = this.props.images;
		var imageToDisplay = images[currentImage];
	},
	componentDidUpdate: function(){
		//do i need this?! 
		var currentImage = this.props.currentImage;
		var images = this.props.images;
		var imageToDisplay = images[currentImage];
	},
	render: function(){
		var images = this.props.images;
		var currentImage = this.props.currentImage;
		var previousImage = this.props.previousImage;
		var nextImage = this.props.nextImage;

		var imageToDisplay = images[currentImage];

		previousImage = images[previousImage];
		nextImage = images[nextImage];

		//imageToDisplay.props.className = currentImage + " visible";
		
		return (
			<div className="image-frame">
				<ReactCSSTransitionGroup transitionName="carousel" transitionAppear={true}>
				<div className="image previous">
					{previousImage}
				</div>
				<div className="image">
					{imageToDisplay}
				</div>
				<div className="image next">
					{nextImage}
				</div>
				</ReactCSSTransitionGroup>
			</div>
		)
	}
});

module.exports = ImageFrame;