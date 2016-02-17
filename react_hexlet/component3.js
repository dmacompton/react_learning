'use strict';

var str = 'some string';

var ButtonCount = React.createClass({
    getInitialState: function () {
        return { count: this.props.initCount || 0 };
    },
    handleClick: function () {
        this.setState({
            count: this.state.count + 1
        });
    },
    render() {
        var count = this.state.count;
        return <input type="button" value={"value: " + count} onClick={this.handleClick}/>;
    }
});

ReactDOM.render(<ButtonCount initCount={2} />, document.getElementById('app'));
