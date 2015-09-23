var StartButton = React.createClass({
	render: function(){
		return (
			<button className="start-btn" onClick={this.props.startStopwatch}>
				<span>Start</span>
			</button>
		)
	}
});

var StopButton = React.createClass({
	render: function(){
		return (
			<button className="stop-btn" onClick={this.props.stopStopwatch}>
				<span>Stop</span>
			</button>
		)
	}
});

var ResetButton = React.createClass({
	render: function(){
		return (
			<button className="reset-btn" onClick={this.props.resetStopwatch}>
				<span>Reset</span>
			</button>
		)
	}
});

var Timer = React.createClass({
	render: function(){
		return (
			<div className="timer">
				<span>{this.props.getMinutes()}:{this.props.getSeconds()}</span>
			</div>
		)
	}
});

var Controls = React.createClass({
	render: function(){
		///
		return(
			<div className="controls">
				<StartButton
				startStopwatch={this.props.startStopwatch}/>
				<ResetButton
				resetStopwatch={this.props.resetStopwatch}/>
				<StopButton
				stopStopwatch={this.props.stopStopwatch}/>
			</div>
		)
	}	
});

var Stopwatch = React.createClass({
	getInitialState: function(){
		return {
			secondsElapse: 0
		};
	},
	startStopwatch: function(){
		console.log('starting');
		var _this = this;

		this.incrementer = setInterval(function(){
			_this.setState({
				secondsElapse: (_this.state.secondsElapse + 1)
			})
		}, 1000);
	},
	stopStopwatch: function(){
		console.log('stopping');
		clearInterval(this.incrementer);
	},
	resetStopwatch: function(){
		console.log('resetting');
		this.replaceState(this.getInitialState());
	},
	getSeconds: function(){
		return ('0' + this.state.secondsElapse % 60).slice(-2);
	},
	getMinutes: function(){
		return Math.floor(this.state.secondsElapse / 60);
	},
	render: function(){
		var secondsElapse = this.state.secondsElapse;
		return(
			<div className="stopwatch">
				<Timer
				secondsElapse={secondsElapse}
				getSeconds={this.getSeconds}
				getMinutes={this.getMinutes}/>
				<Controls
				secondsElapse={secondsElapse} 
				startStopwatch={this.startStopwatch}
				stopStopwatch={this.stopStopwatch}
				resetStopwatch={this.resetStopwatch}/>
			</div>
		)
	}
});

React.render(
	<Stopwatch />,
	document.getElementById('container')
)