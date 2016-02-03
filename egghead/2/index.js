var Badge = React.createClass({
    displayName: 'Badge',
    handleClick: function() {
    	console.log('click');
    },
    render() {
        return	<button onClick={this.props.handleClick} className="btn btn-primary" type="button">
				  {this.props.title} <span className="badge">{this.props.number}</span>
				</button>
    }
});

var options = {
	title: 'Compton',
	number: 911
};

class App extends React.Component {
	render() {
		return <div>
			<Badge {...options} />
		</div>
	}
}

ReactDOM.render(<App />, root);