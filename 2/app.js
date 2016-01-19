var ServiceChooser = React.createClass({
    getInitialState: function(){
        return { total: 0 };
    },
    addTotal: function( price ){
        this.setState( { total: this.state.total + price } );
    },
    render: function() {
        var self = this;
        var services = this.props.items.map(function(s){
            return <Service name={s.name} price={s.price} active={s.active} addTotal={self.addTotal} />;
        });
        return <div>
                    <h1>Our services</h1>
                    
                    <div id="services">
                        {services}

                        <p id="total">Total <b>${this.state.total.toFixed(2)}</b></p>

                    </div>

                </div>;
    }
});

var Service = React.createClass({
    getInitialState: function(){
        return { active: false };
    },
    clickHandler: function (){
        var active = !this.state.active;
        this.setState({ active: active });
        this.props.addTotal( active ? this.props.price : -this.props.price );
    },
    render: function(){
        return  <p className={ this.state.active ? 'active' : '' } onClick={this.clickHandler}>
                    {this.props.name} <b>${this.props.price.toFixed(2)}</b>
                </p>;
    }

});

var SearchExample = React.createClass({
    getInitialState: function(){
        return { searchString: '' };
    },
    handleChange: function(e){
        this.setState({searchString:e.target.value});
    },
    render: function() {
        var libraries = this.props.items,
            searchString = this.state.searchString.trim().toLowerCase();
        if(searchString.length > 0){
            libraries = libraries.filter(function(l){
                return l.url.toLowerCase().match( searchString );
            });
        }
        return <div>
                    <input type="text" value={this.state.searchString} onChange={this.handleChange} placeholder="Type here" />
                    <ul className="search">{ libraries.map(function(l){
                            return <li>{l.name} <a href={l.url}>{l.url}</a></li>
                        }) }</ul>
                </div>;
    }
});

var MenuExample = React.createClass({
    getInitialState: function(){
        return { focused: 0 };
    },
    clicked: function(index){
        this.setState({focused: index});
    },
    render: function() {
        var self = this;
        return (
            <div>
                <ul className="menu">{ this.props.items.map(function(m, index){
                    var style = '';
                    if(self.state.focused == index){
                        style = 'focused';
                    }
                    return <li className={style} onClick={self.clicked.bind(self, index)}>{m}</li>;
                }) }
                </ul>
                <p>Selected: {this.props.items[this.state.focused]}</p>
            </div>
        );
    }
});

var Picture = React.createClass({
    clickHandler: function(){
        this.props.onClick(this.props.ref);
    },
    render: function(){
        var cls = 'picture ' + (this.props.favorite ? 'favorite' : '');
        return (
            <div className={cls} onClick={this.clickHandler}>
                <img src={this.props.src} width="200" title={this.props.title} />
            </div>
        );
    }
});

var PictureList = React.createClass({
    getInitialState: function(){
        return { pictures: [], favorites: [] };
    },
    componentDidMount: function(){
        var self = this;
        var url = 'https://api.instagram.com/v1/media/popular?client_id=' + this.props.apiKey + '&callback=?';
        $.getJSON(url, function(result){
            if(!result || !result.data || !result.data.length){
                return;
            }
            var pictures = result.data.map(function(p){
                return { 
                    id: p.id, 
                    url: p.link, 
                    src: p.images.low_resolution.url, 
                    title: p.caption ? p.caption.text : '', 
                    favorite: false 
                };
            });
            self.setState({ pictures: pictures });
        });
    },
    pictureClick: function(id){
        var favorites = this.state.favorites,
            pictures = this.state.pictures;
        for(var i = 0; i < pictures.length; i++){
            if(pictures[i].id == id) {                  
                if(pictures[i].favorite){
                    return this.favoriteClick(id);
                }
                favorites.push(pictures[i]);
                pictures[i].favorite = true;
                break;
            }
        }
        this.setState({pictures: pictures, favorites: favorites});
    },
    favoriteClick: function(id){
        var favorites = this.state.favorites,
            pictures = this.state.pictures;
        for(var i = 0; i < favorites.length; i++){
            if(favorites[i].id == id) break;
        }
        favorites.splice(i, 1);
        for(i = 0; i < pictures.length; i++){
            if(pictures[i].id == id) {
                pictures[i].favorite = false;
                break;
            }
        }
        this.setState({pictures: pictures, favorites: favorites});
    },

    render: function() {

        var self = this;

        var pictures = this.state.pictures.map(function(p){
            return <Picture ref={p.id} src={p.src} title={p.title} favorite={p.favorite} onClick={self.pictureClick} />
        });

        if(!pictures.length){
            pictures = <p>Loading images..</p>;
        }

        var favorites = this.state.favorites.map(function(p){
            return <Picture ref={p.id} src={p.src} title={p.title} favorite={true} onClick={self.favoriteClick} />
        });

        if(!favorites.length){
            favorites = <p>Click an image to mark it as a favorite.</p>;
        }

        return (

            <div>
                <h1>Popular Instagram pics</h1>
                <div className="pictures"> {pictures} </div>
                    
                <h1>Your favorites</h1>
                <div className="favorites"> {favorites} </div>
            </div>

        );
    }
});

var options = {
    items: ['Home', 'Services', 'About', 'Contact us']
}

var libraries = [
    { name: 'Backbone.js', url: 'http://documentcloud.github.io/backbone/'},
    { name: 'AngularJS', url: 'https://angularjs.org/'},
    { name: 'jQuery', url: 'http://jquery.com/'},
    { name: 'Prototype', url: 'http://www.prototypejs.org/'},
    { name: 'React', url: 'http://facebook.github.io/react/'},
    { name: 'Ember', url: 'http://emberjs.com/'},
    { name: 'Knockout.js', url: 'http://knockoutjs.com/'},
    { name: 'Dojo', url: 'http://dojotoolkit.org/'},
    { name: 'Mootools', url: 'http://mootools.net/'},
    { name: 'Underscore', url: 'http://documentcloud.github.io/underscore/'},
    { name: 'Lodash', url: 'http://lodash.com/'},
    { name: 'Moment', url: 'http://momentjs.com/'},
    { name: 'Express', url: 'http://expressjs.com/'},
    { name: 'Koa', url: 'http://koajs.com/'},
];



var services = [
    { name: 'Web Development', price: 300 },
    { name: 'Design', price: 400 },
    { name: 'Integration', price: 250 },
    { name: 'Training', price: 220 }
];

ReactDOM.render(
    <div>
        <MenuExample {...options} />
        <PictureList apiKey="642176ece1e7445e99244cec26f4de1f" />
        <ServiceChooser items={ services } />
        <SearchExample items={ libraries } />
    </div>,
    root
);