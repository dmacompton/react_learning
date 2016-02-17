const str = '<a href="#">link</a>';

const Component = React.createClass({
    render() {
        return <div>
                <p>{this.props.string}</p>
            </div>;
    }
});

var divStyle = {
    color: 'green',
    textDecoration: 'underline'
};

ReactDOM.render(<Component string={str} style={divStyle}/>, document.getElementById('app'));
