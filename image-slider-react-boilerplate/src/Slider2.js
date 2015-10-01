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
			]

		var images = []

		for (var i = 0; i < imageUrls.length; i++) {
			var imageUrl = imageUrls[i];
			
			var cx = React.addons.classSet;
			var slideNo = "slide-"+i;
			var active = this.activeImage ? 'active' : '';
			//var next = this.nextImage ? 'next' : '';
			var imageClases = cx('slide', slideNo, active);

			var imageStyle = {
				backgroundImage: 'url(' + imageUrl + ')',
  				WebkitTransition: 'all', 
  				msTransition: 'all' 
			}

			images.push(
				<div className={imageClases} style={imageStyle}>
				</div>
			)
		};

		return{
			images: images,
			currentImage: 0,
			nextImage: 1,
			previousImage: images.length - 1,
			activeImage: this.isActive(),
			//nextImage: this.isNext(),
			timer: this.setTimer()
		};
	},
	setTimer: function(){
		//return setInterval(this.next, 3000);
	},
	resetTimer: function(){
		//clearInterval(this.state.timer);
		//this.setState({timer: this.setTimer()})
	},
	isActive: function(img){
		if (this.state !=  null){
			if (img == this.state.currentImage) {
				var activeImage = true;
				this.setState({activeImage: activeImage})
			}
		}
		else {
		 	return false;
		}
	},
	isNext: function(img, direction){
		return false;
	},
	previous: function(){

		var images = this.state.images;
		var currentImage = this.state.previousImage;
		var previousImage = this.state.previousImage;
		var nextImage = this.state.currentImage;
		var active = this.state.active;

		if (currentImage === 0){
			previousImage = images.length -1;
		}
		else {
			previousImage = Math.abs(currentImage - 1);
		}

		//this.resetTimer();
		active = this.isActive(currentImage);
		this.setState({currentImage: currentImage, previousImage: previousImage, nextImage: nextImage});
	},
	next: function(){

		var currentImage = this.state.currentImage
		var activeImage = this.state.activeImage;
		activeImage = this.isActive(currentImage);

		var images = this.state.images;
		
		currentImage = this.state.nextImage;
		var nextImage = this.state.nextImage;
		var previousImage = this.state.currentImage;
	

		if (nextImage >= images.length-1){
			nextImage = 0;
		}
		else {
			nextImage = nextImage + 1;
		}

		//this.resetTimer();
		//activeImage = this.isActive(currentImage);
		this.setState({currentImage: currentImage, nextImage: nextImage, previousImage: previousImage, activeImage: activeImage});
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

		this.resetTimer();
		this.setState({currentImage: currentImage, nextImage: nextImage, previousImage: previousImage});
	},
	render: function(){
		var images = this.state.images,
			currentImage = this.state.currentImage,
			nextImage = this.state.nextImage,
			previousImage = this.state.previousImage;

		return (
			<div className="slider2">
				<Slider2ImageFrame 
					images={images}
					currentImage={currentImage}
					nextImage={nextImage}
					previousImage={previousImage}/>
				<div className="controls">
					<ArrowLeftFrame 
						previous={this.previous}/>
					<ArrowRightFrame 
						next={this.next}
						active={this.active}/>
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


