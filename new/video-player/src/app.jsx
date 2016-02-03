var PLAYER_ID = 'player';
var playlist = [
        "video/polina.mp4",
        "video/oceans.mp4"
    ];
var Player = React.createClass({
    componentDidMount: function () {
        document.getElementById(PLAYER_ID).addEventListener('ended', this.props.onEnded);
    },
    componentWillUnmount: function () {
        document.getElementById(PLAYER_ID).removeEventListener('ended', this.props.onEnded);
    },
    render: function() {
        return <video id={PLAYER_ID} src={this.props.src} width="500" height="300px" controls autoPlay />;
    }
});
 
var PlayerContainer = React.createClass({
    getInitialState: function() {
        return {
            current: 0
        }
    },
    onEnded: function() {
        var newCurrent = this.state.current + 1;
        console.log(this.props.playlist);
        if (newCurrent >= this.props.playlist.length) {
            newCurrent = 0;
        }

        this.setState({
            current: newCurrent
        });
    },
    render: function () {
        var src = this.props.playlist[this.state.current];

        return <Player src={src} onEnded={this.onEnded} />
    }
});


React.render(<PlayerContainer playlist={playlist} />, document.getElementById('container'));
