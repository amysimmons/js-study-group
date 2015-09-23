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
			<div className="arrow-left" className="arrow"></div>
		)
	}
});

var ArrowRightFrame = React.createClass({
	render: function(){
		return (
			<div className="arrow-right" className="arrow"></div>
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
			currentImage: null
		};
	},

	render: function(){
		///
		return (
			<div className="slider">
				<ImageFrame images={this.state.images}/>
				<ArrowLeftFrame/>
				<ArrowRightFrame/>
				<SelectionDotsFrame/>
			</div>
		)
	}
});

React.render(
	<Slider />,
	document.getElementById('container')
)

