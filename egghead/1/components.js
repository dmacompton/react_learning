var app = app || {};
app.components = app.components || {};

(function () {
		'use strict';
	var HelloMessage = app.components.HelloMessage = React.createClass({
		render: function() {
			return <div>Hello {this.props.name}</div>;
		}
	});

	var Timer = React.createClass({
		getInitialState: function() {
			return {secondsElapsed: 0};
		},
		tick: function() {
			this.setState({secondsElapsed: this.state.secondsElapsed + 1});
		},
		componentDidMount: function() {
			this.interval = setInterval(this.tick, 1000);
		},
		componentWillUnmount: function() {
			clearInterval(this.interval);
		},
		render: function() {
			return (
				<div>Seconds Elapsed: {this.state.secondsElapsed}</div>
			);
		}
	});

	ReactDOM.render(<Timer />, apps);

})();
