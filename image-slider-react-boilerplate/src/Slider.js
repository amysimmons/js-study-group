import React from 'react';
import ImageFrame from './ImageFrame';
import ArrowRightFrame from './ArrowRightFrame';
import ArrowLeftFrame from './ArrowLeftFrame';
import ImageSelectors from './ImageSelectors';

var Slider = React.createClass({
	getInitialState: function(){
		var imageUrls = [
				"http://images7.alphacoders.com/311/311271.jpg",
				"http://7-themes.com/data_images/out/73/7022411-water-whale-art.jpg",
				"https://s3-eu-west-1.amazonaws.com/3tags-prod/tag/542d448574cfc/542d44857c54c/original.jpg"
			]

		var images = []

		for (var i = 0; i < imageUrls.length; i++) {
			var imageUrl = imageUrls[i];
			images.push(<img className={i} src={imageUrl}/>)
		};

		return{
			images: images,
			currentImage: 0,
			nextImage: null
		};
	},
	moveLeft: function(){
		console.log('moving left');

		var images = this.state.images;
		var currentImage = this.state.currentImage;
		var nextImage = this.state.nextImage;

		if (currentImage === 0){
			nextImage = images.length -1;
		}
		else {
			nextImage = Math.abs(currentImage - 1);
		}

		currentImage = nextImage;
		this.setState({currentImage: currentImage, nextImage: nextImage});
	},
	moveRight: function(){
		console.log('moving right');

		var images = this.state.images;
		var currentImage = this.state.currentImage;
		var nextImage = this.state.nextImage;

		if (nextImage >= images.length-1){
			nextImage = 0;
		}
		else {
			nextImage = currentImage + 1;
		}
		
		currentImage = nextImage;
		this.setState({currentImage: currentImage, nextImage: nextImage});
	},
	selectImage: function(){

	},
	render: function(){
		var images = this.state.images,
			currentImage = this.state.currentImage,
			nextImage = this.state.nextImage

		return (
			<div className="slider">
				<ImageFrame images={images}
				currentImage={currentImage}
				nextImage={nextImage}/>
				<ArrowRightFrame 
					moveRight={this.moveRight}/>
				<ArrowLeftFrame moveLeft={this.moveLeft}/>
				<ImageSelectors selectSide={this.selectImage}/>
			</div>
		)
	}
});

module.exports = Slider;


