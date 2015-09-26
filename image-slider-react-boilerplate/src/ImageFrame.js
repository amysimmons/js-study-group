import React from 'react';

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

module.exports = ImageFrame;
