import React from 'react/addons';
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
			images.push(<img className={i} src={imageUrl} key={imageUrl}/>)
		};

		return{
			images: images,
			currentImage: 0,
			nextImage: 1,
			previousImage: images.length - 1
		};
	},
	previous: function(){
		console.log('previous being called');
		var images = this.state.images;
		var currentImage = this.state.previousImage;
		var previousImage = this.state.previousImage;
		var nextImage = this.state.currentImage;

		if (currentImage === 0){
			previousImage = images.length -1;
		}
		else {
			previousImage = Math.abs(currentImage - 1);
		}

		this.setState({currentImage: currentImage, previousImage: previousImage, nextImage: nextImage});
	},
	next: function(){
		var images = this.state.images;
		var currentImage = this.state.nextImage;
		var nextImage = this.state.nextImage;
		var previousImage = this.state.currentImage;

		if (nextImage >= images.length-1){
			nextImage = 0;
		}
		else {
			nextImage = nextImage + 1;
		}

		this.setState({currentImage: currentImage, nextImage: nextImage, previousImage: previousImage});
	},
	selectImage: function(clickedImage){
		var images = this.state.images;
		var currentImage = this.state.currentImage;
		var nextImage = this.state.nextImage;
		var previousImage = this.state.currentImage;
		var selectedImage = clickedImage;

		currentImage = selectedImage;

		if (currentImage >= images.length - 1){
			nextImage = 0;
		}
		else {
			nextImage = currentImage + 1;
		}

		if (currentImage == 0){
			previousImage = images.length -1;
		}
		else {
			previousImage = Math.abs(currentImage - 1);
		}

		this.setState({currentImage: currentImage, nextImage: nextImage, previousImage: previousImage});
	},
	render: function(){
		var images = this.state.images,
			currentImage = this.state.currentImage,
			nextImage = this.state.nextImage,
			previousImage = this.state.previousImage

		return (
			<div className="slider">
				<ImageFrame 
					images={images}
					currentImage={currentImage}
					nextImage={nextImage}
					previousImage={previousImage}/>
				<div className="controls">
					<ArrowLeftFrame 
						previous={this.previous}/>
					<ArrowRightFrame 
						next={this.next}/>
					<ImageSelectors 
						selectImage={this.selectImage}
						images={images}
						currentImage={currentImage}/>
				</div>
			</div>
		)
	}
});

module.exports = Slider;


