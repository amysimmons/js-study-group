import React from 'react';

var ImageSelectors = React.createClass({
	render: function(){
		var dots = [];
		return(
			<div className="selection-dots">
				{dots}
			</div>
		)
	}
})

module.exports = ImageSelectors;