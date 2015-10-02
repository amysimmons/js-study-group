import React from 'react';

var ImageSelectors = React.createClass({
	render: function(){
		var images = this.props.images,
			selectors = [],
			selectImage = this.props.selectImage,
			currentImage = this.props.currentImage;

		for (var i = 0; i < images.length; i++) {
			if (currentImage == i){
				selectors.push(<div className={"selector selected " + i} onClick={selectImage.bind(null,i)}></div>);
			}
			else {
				selectors.push(<div className={"selector " + i} onClick={selectImage.bind(null,i)}></div>);
			}	
		};

		return(
			<div className="selection-dots">
				{selectors}
			</div>
		)
	}
})

module.exports = ImageSelectors;