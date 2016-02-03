var Counter = React.createClass({
    getInitialState: function() {
        return { count: 0 }
    },
    increment: function(){
      this.setState({
                count: this.state.count + 1
      });
    },
    render: function() {
        return <div className="my-component">
            <h1>Count: {this.state.count}</h1>
          <button type="button" onClick={this.increment}>+</button>
        </div>;
    }
});
 
React.render(<Counter/>, document.getElementById('container'));
