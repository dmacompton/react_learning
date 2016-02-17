var str = 'some string';

const Component = React.createClass({
    render() {
        var str = this.props.children;
        
        return <div>
                <p style={divStyle}>
                    {str ? str : this.props.string}
                </p>
            </div>;
    }
});

var divStyle = {
    color: 'red',
    textDecoration: 'underline',
    backgroundColor: 'black',
    display: 'inline'
};




ReactDOM.render(<Component string={str} style={divStyle}>dmacompton</Component>, document.getElementById('app'));
