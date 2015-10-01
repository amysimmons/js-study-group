import React from 'react/addons';

var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

var ImageFrame = React.createClass({
	componentDidMount: function(){
		var next = this.props.next;	
		//setInterval(next, 3000);	
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
			<div className="image">

			</div>					
				
				<div className="image previous">
					{previousImage}
				</div>
				
				<div className="image current">
					{imageToDisplay}
				</div>

				<div className="image next">
					{nextImage}
				</div>
				
			</div>
				//<ReactCSSTransitionGroup transitionName="carousel" transitionAppear={true}>
				//{images}
			//</ReactCSSTransitionGroup>
				//<ReactCSSTransitionGroup transitionName="carousel" transitionAppear={true}>
				//</ReactCSSTransitionGroup>
		)
	}
});

module.exports = ImageFrame;

