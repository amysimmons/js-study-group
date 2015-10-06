import React from 'react/addons';

var InputButtons = React.createClass({

  render: function(){
    return (
      <div className="input-buttons">
        <div className="input operation ac">
          <span>AC</span>
        </div>
        <div className="input operation plus-minus">
          <span>+/-</span>
        </div>
        <div className="input operation percent">
          <span>%</span>
        </div>
        <div className="input operation divide">
          <span>/</span>
        </div>
        <div className="input number 7">
          <span>7</span>
        </div>
        <div className="input number 8">
          <span>8</span>
        </div>
        <div className="input number 9">
          <span>9</span>
        </div>
        <div className="input operation multiply">
          <span>x</span>
        </div>
        <div className="input number 4">
          <span>4</span>
        </div>
        <div className="input number 5">
          <span>5</span>
        </div>
        <div className="input number 6">
          <span>6</span>
        </div>
        <div className="input operation minus">
          <span>-</span>
        </div>
        <div className="input number 1">
          <span>1</span>
        </div>
        <div className="input number 2">
          <span>2</span>
        </div>
        <div className="input number 3">
          <span>3</span>
        </div>
        <div className="input operation plus">
          <span>+</span>
        </div>
        <div className="input number zero 0">
          <span>0</span>
        </div>
        <div className="input number decimal">
          <span>.</span>
        </div>
        <div className="input operation equals">
          <span>=</span>
        </div>
      </div>
    )
  }
});

module.exports = InputButtons;