import React from 'react/addons';

var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

var ImageFrame = React.createClass({
	componentDidMount: function(){
		var moveRight = this.props.moveRight;	
		//setInterval(moveRight, 3000);	
	},
	componentWillUpdate: function(){
		var currentImage = this.props.currentImage;
		var images = this.props.images;
		var imageToDisplay = images[currentImage];

		imageToDisplay.props.className = currentImage + " hidden";
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
		var imageToDisplay = images[currentImage];

		imageToDisplay.props.className = currentImage + " visible";
		
		return (
			<div className="image-frame">
				<div className="image">
				<ReactCSSTransitionGroup transitionName="carousel" transitionAppear={true}>
					{imageToDisplay}
        		</ReactCSSTransitionGroup>
				</div>
			</div>
		)
	}
});

module.exports = ImageFrame;