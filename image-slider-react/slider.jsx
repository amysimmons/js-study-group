var ImageFrame = React.createClass({
	render: function(){
		var images = this.props.images;
		return (
			<div className="image-frame">
				<div className="image">
					{images}
				</div>
			</div>
		)
	}
});

var ArrowLeftFrame = React.createClass({
	render: function(){
		return (
			<div className="arrow-left arrow" onClick={this.props.moveLeft}></div>
		)
	}
});

var ArrowRightFrame = React.createClass({
	render: function(){
		return (
			<div className="arrow-right arrow" onClick={this.props.moveRight}></div>
		)
	}
});

var SelectionDotsFrame = React.createClass({
	render: function(){
		var dots = [];
		return(
			<div className="selection-dots">
				{dots}
			</div>
		)
	}
})

var Slider = React.createClass({
	getInitialState: function(){
		return{
			images: [
				<img src="http://images7.alphacoders.com/311/311271.jpg"/>,
				<img src="http://7-themes.com/data_images/out/73/7022411-water-whale-art.jpg"/>,
				<img src="https://s3-eu-west-1.amazonaws.com/3tags-prod/tag/542d448574cfc/542d44857c54c/original.jpg"/>
			],
			currentImage: 0,
			previousImage: null,
			nextImage: null,
		};
	},
	moveLeft: function(){
		var currentImage = this.state.currentImage;
		var previousImage = this.state.previousImage;


		console.log('moving left');
	},
	moveRight: function(){
		console.log('moving right');

		var images = this.state.images;
		var currentImage = this.state.currentImage;
		var nextImage = this.state.nextImage;

		nextImage = currentImage ++;

		if (nextImage > images.length -1){
			nextImage = 0;
		}

		currentImage = nextImage;
		this.state.render;
	},
	selectImage: function(){

	},
	render: function(){
		///
		return (
			<div className="slider">
				<ImageFrame images={this.state.images}/>
				<ArrowRightFrame
				moveRight={this.moveRight}/>
				<ArrowLeftFrame
				moveLeft={this.moveLeft}/>
				<SelectionDotsFrame
				selectSide={this.selectImage}/>
			</div>
		)
	}
});

React.render(
	<Slider />,
	document.getElementById('container')
)

