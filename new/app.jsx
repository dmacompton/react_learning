var Player = React.createClass({
    render: function() {
        return <video src={this.props.src} width="500" height="500px" controls autoPlay />;
    }
});
 
React.render(<Player src="video/polina.mp4"/>, document.getElementById('container'));
