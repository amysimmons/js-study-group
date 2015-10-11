import React from 'react/addons';

const Button = React.createClass({
  propTypes: {
    action: React.PropTypes.func,
    type: React.PropTypes.string,
    value: React.PropTypes.string,
  },
  doAction () {
    this.props.action(this.props.value, this.props.type);
  },
  render () {
    let className = 'input ' + this.props.type;
    if (this.props.value === '=') {
      className += ' equals';
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
        <Button type="operation" action={this.props.updateQuery} value="(" />
        <Button type="operation" action={this.props.updateQuery} value=")" />
        <Button type="operation" action={this.props.updateQuery} value="%" />
        <Button type="operation" action={this.props.updateQuery} value="AC" />
        <Button type="number" action={this.props.updateQuery} value="7" />
        <Button type="number" action={this.props.updateQuery} value="8" />
        <Button type="number" action={this.props.updateQuery} value="9" />
        <Button type="operation" action={this.props.updateQuery} value="/" />
        <Button type="number" action={this.props.updateQuery} value="4" />
        <Button type="number" action={this.props.updateQuery} value="5" />
        <Button type="number" action={this.props.updateQuery} value="6" />
        <Button type="operation" action={this.props.updateQuery} value="x" />
        <Button type="number" action={this.props.updateQuery} value="1" />
        <Button type="number" action={this.props.updateQuery} value="2" />
        <Button type="number" action={this.props.updateQuery} value="3" />
        <Button type="operation" action={this.props.updateQuery} value="-" />
        <Button type="number" action={this.props.updateQuery} value="0" />
        <Button type="number" action={this.props.updateQuery} value="." />
        <Button type="operation" action={this.props.calculateQuery} value="=" />
        <Button type="operation" action={this.props.updateQuery} value="+" />
      </div>
    )
  }
});

module.exports = ButtonsContainer;