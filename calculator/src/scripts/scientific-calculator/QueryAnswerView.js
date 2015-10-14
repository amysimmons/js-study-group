import React from 'react/addons';

var OutputView = React.createClass({

  render: function(){
    return (
      <div className="query-answer-view">
        <span className="query-answer">{this.props.lastQueryOrResult}</span>
      </div>
    )
  }
});

module.exports = OutputView;