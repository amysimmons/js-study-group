import React from 'react';

var Score = React.createClass({

  render: function(){
    return (
      <div className="score">
        <span>Score: {this.props.score}</span>
      </div>
    )
  }
});

module.exports = Score;