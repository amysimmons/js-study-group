import React from 'react/addons';

var GridSquare = React.createClass({

  propTypes: {
    type: React.PropTypes.string,
    action: React.PropTypes.func,
  },

  render: function(){
    return (
      <div className="grid-square">
      </div>
    )
  }
});

module.exports = GridSquare;