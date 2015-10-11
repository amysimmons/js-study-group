import React from 'react/addons';

const Button = React.createClass({
  propTypes: {
    action: React.PropTypes.func,
    type: React.PropTypes.string,
    value: React.PropTypes.string,
  },
  doAction () {
    this.props.action(this.props.value);
  },
  render () {
    let className = 'input ' + this.props.type;
    if (this.props.value === '0') {
      className += ' zero';
    }
    return (
      <div className={className} onClick={this.doAction}>
        <span>{this.props.value}</span>
      </div>
    );
  },
});

const ButtonsContainer = React.createClass({
  render (){
    return (
      <div className="input-buttons">
        <Button type="operation" action={this.props.setOperation} value="AC" />
        <Button type="operation" action={this.props.setOperation} value="+/-" />
        <Button type="operation" action={this.props.setOperation} value="%" />
        <Button type="operation" action={this.props.setOperation} value="/" />
        <Button type="number" action={this.props.setNumbersEntered} value="7" />
        <Button type="number" action={this.props.setNumbersEntered} value="8" />
        <Button type="number" action={this.props.setNumbersEntered} value="9" />
        <Button type="operation" action={this.props.setOperation} value="x" />
        <Button type="number" action={this.props.setNumbersEntered} value="4" />
        <Button type="number" action={this.props.setNumbersEntered} value="5" />
        <Button type="number" action={this.props.setNumbersEntered} value="6" />
        <Button type="operation" action={this.props.setOperation} value="-" />
        <Button type="number" action={this.props.setNumbersEntered} value="1" />
        <Button type="number" action={this.props.setNumbersEntered} value="2" />
        <Button type="number" action={this.props.setNumbersEntered} value="3" />
        <Button type="operation" action={this.props.setOperation} value="+" />
        <Button type="number" action={this.props.setNumbersEntered} value="0" />
        <Button type="number" action={this.props.setNumbersEntered} value="." />
        <Button type="operation" action={this.props.getResult} value="=" />
      </div>
    )
  }
});

module.exports = ButtonsContainer;