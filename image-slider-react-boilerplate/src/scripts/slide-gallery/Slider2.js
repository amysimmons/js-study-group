import React from 'react/addons';
import Slider2ImageFrame from './Slider2ImageFrame';
import ArrowRightFrame from './ArrowRightFrame';
import ArrowLeftFrame from './ArrowLeftFrame';

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
			var slideNo = i;
			var imageClases = cx('slide', slideNo);
			var slideStyle = {
				backgroundImage: 'url(' + imageUrl + ')',
				backgroundRepeat: 'no-repeat',
    		backgroundPosition: 'center center',
				width: '800px',
				height: '100%'
			};
			images.push(
				<div className={imageClases} style={slideStyle}></div>
			)
		};

		var trackWidth = images.length * 100 * images.length;
		var leftPosition = 0;
		var trackStyles = {
			width: {trackWidth},
			left: {leftPosition}
		};

		return{
			images: images,
			trackWidth: trackWidth,
			leftPosition: leftPosition,
			trackStyles: trackStyles
		};
	},
	previous: function(){
		var images = this.state.images;
		var leftPosition = this.state.leftPosition;
		var trackStyles = this.state.trackStyles;

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
		var images = this.state.images;
		var leftPosition = this.state.leftPosition;
		var trackStyles = this.state.trackStyles;

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
	render: function(){
		var images = this.state.images,
			trackStyles = this.state.trackStyles;

		return (
			<div className="slider-container">
				<div className="slider2">
					<Slider2ImageFrame
						images={images}
						trackStyles={trackStyles}/>
				</div>
				<div className="slider-controls">
					<ArrowLeftFrame
						previous={this.previous}/>
					<ArrowRightFrame
						next={this.next}/>
				</div>
			</div>
		)
	}
});

module.exports = Slider2;


