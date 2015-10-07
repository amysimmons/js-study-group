import React from 'react/addons';

var ButtonsContainer = React.createClass({
  render: function(){
    return (
      <div className="input-buttons">
        <div className="input operation ac" onClick={this.props.setOperation.bind(this, "ac")}>
          <span>AC</span>
        </div>
        <div className="input operation plus-minus" onClick={this.props.setOperation.bind(this, "+/-")}>
          <span>+/-</span>
        </div>
        <div className="input operation percent" onClick={this.props.setOperation.bind(this, "%")}>
          <span>%</span>
        </div>
        <div className="input operation divide" onClick={this.props.setOperation.bind(this, "/")}>
          <span>/</span>
        </div>
        <div className="input number 7" onClick={this.props.setNumbersEntered.bind(this, 7)}>
          <span>7</span>
        </div>
        <div className="input number 8" onClick={this.props.setNumbersEntered.bind(this, 8)}>
          <span>8</span>
        </div>
        <div className="input number 9" onClick={this.props.setNumbersEntered.bind(this, 9)}>
          <span>9</span>
        </div>
        <div className="input operation multiply" onClick={this.props.setOperation.bind(this, "x")}>
          <span>x</span>
        </div>
        <div className="input number 4" onClick={this.props.setNumbersEntered.bind(this, 4)}>
          <span>4</span>
        </div>
        <div className="input number 5" onClick={this.props.setNumbersEntered.bind(this, 5)}>
          <span>5</span>
        </div>
        <div className="input number 6" onClick={this.props.setNumbersEntered.bind(this, 6)}>
          <span>6</span>
        </div>
        <div className="input operation minus" onClick={this.props.setOperation.bind(this, "-")}>
          <span>-</span>
        </div>
        <div className="input number 1" onClick={this.props.setNumbersEntered.bind(this, 1)}>
          <span>1</span>
        </div>
        <div className="input number 2" onClick={this.props.setNumbersEntered.bind(this, 2)}>
          <span>2</span>
        </div>
        <div className="input number 3" onClick={this.props.setNumbersEntered.bind(this, 3)}>
          <span>3</span>
        </div>
        <div className="input operation plus" onClick={this.props.setOperation.bind(this, "+")}>
          <span>+</span>
        </div>
        <div className="input number zero 0" onClick={this.props.setNumbersEntered.bind(this, 0)}>
          <span>0</span>
        </div>
        <div className="input number decimal" onClick={this.props.setNumbersEntered.bind(this, ".")}>
          <span>.</span>
        </div>
        <div className="input operation equals" onClick={this.props.getResult}>
          <span>=</span>
        </div>
      </div>
    )
  }
});

module.exports = ButtonsContainer;