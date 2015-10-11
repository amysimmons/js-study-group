import React from 'react/addons';

var OutputView = React.createClass({

  render: function(){
    return (
      <div className="output-view">
        <span className="result">{this.props.display || 0}</span>
      </div>
    )
  }
});

module.exports = OutputView;