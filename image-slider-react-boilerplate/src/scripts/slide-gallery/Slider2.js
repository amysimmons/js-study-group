import React from 'react/addons';
import Slider2ImageFrame from './Slider2ImageFrame';
import ArrowRightFrame from './ArrowRightFrame';
import ArrowLeftFrame from './ArrowLeftFrame';
import ImageSelectors from './ImageSelectors';

var Slider2 = React.createClass({
	getInitialState: function(){
		var imageUrls = [
				"http://images7.alphacoders.com/311/311271.jpg",
				"http://7-themes.com/data_images/out/73/7022411-water-whale-art.jpg",
				"https://s3-eu-west-1.amazonaws.com/3tags-prod/tag/542d448574cfc/542d44857c54c/original.jpg"
			];

		var images = [];

		for (var i = 0; i < imageUrls.length; i++) {
			var imageUrl = imageUrls[i];

			var cx = React.addons.classSet;
			var slideNo = "slide-"+i;
			var active = this.activeImage ? 'active' : '';
			var imageClases = cx('slide', slideNo, active);

			var slideStyle = {
				backgroundImage: 'url(' + imageUrl + ')',
				backgroundRepeat: 'no-repeat',
    		backgroundPosition: 'center center',
				width: '1000px',
				height: '100%'
			}

			images.push(
				<div className={imageClases} style={slideStyle}>
				</div>
			)
		};

		var trackWidth = 300 * images.length;
		var leftPosition = 0;

		var trackStyles = {
			width: {trackWidth},
			left: {leftPosition}
		};

		return{
			images: images,
			currentImage: 0,
			nextImage: 1,
			trackWidth: trackWidth,
			leftPosition: leftPosition,
			trackStyles: trackStyles
		};
	},
	previous: function(){

		var trackStyles = this.state.trackStyles;
		var images = this.state.images;
		var leftPosition = this.state.leftPosition;
		var trackWidth = this.state.trackWidth;

		if (leftPosition == 0){
			var currentLeftPosition = leftPosition;
			var _this = this;

			this.incrementer = setInterval(function(){
				leftPosition = leftPosition+1
				trackStyles.left = '-'+leftPosition+'%';
				while (leftPosition <= 100 * (images.length-1)){
					_this.setState({
					leftPosition: leftPosition,
					trackStyles: trackStyles
					});
					break;
				}
			}, 2);
		} else {
			var currentLeftPosition = leftPosition;
			var _this = this;

			this.incrementer = setInterval(function(){
				leftPosition = leftPosition-1;
				trackStyles.left = '-'+leftPosition+'%';
				while (leftPosition >= currentLeftPosition-100){
					_this.setState({
					leftPosition: leftPosition,
					trackStyles: trackStyles
					});
					break;
				}
			}, 2);
		}
	},
	next: function(){

		var trackStyles = this.state.trackStyles;
		var images = this.state.images;
		var leftPosition = this.state.leftPosition;
		var trackWidth = this.state.trackWidth;

		if (leftPosition >= 100*(images.length - 1)){

			var currentLeftPosition = leftPosition;
			var _this = this;

			this.incrementer = setInterval(function(){
				leftPosition = leftPosition-1
				trackStyles.left = '-'+leftPosition+'%';
				while (leftPosition >= 0){
					_this.setState({
					leftPosition: leftPosition,
					trackStyles: trackStyles
					});
					break;
				}
			}, 2);

		} else {
			var currentLeftPosition = leftPosition;
			var _this = this;

			this.incrementer = setInterval(function(){
				leftPosition = leftPosition+1
				trackStyles.left = '-'+leftPosition+'%';
				while (leftPosition <= currentLeftPosition+100){
					_this.setState({
					leftPosition: leftPosition,
					trackStyles: trackStyles
					});
					break;
				}
			}, 2);
		}

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
			previousImage = this.state.previousImage,
			trackWidth = this.state.trackWidth,
			leftPosition = this.state.leftPosition,
			trackStyles = this.state.trackStyles;

		return (
			<div className="slider-container">
				<div className="slider2">
					<Slider2ImageFrame
						images={images}
						currentImage={currentImage}
						nextImage={nextImage}
						previousImage={previousImage}
						trackWidth={trackWidth}
						leftPosition={leftPosition}
						trackStyles={trackStyles}/>
				</div>
				<div className="slider-controls">
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

module.exports = Slider2;


