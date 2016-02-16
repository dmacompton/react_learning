class Card extends React.Component {
	render() {
		console.log(this)
		return <div className="col-sm-6 col-md-4">
					<div className="thumbnail card">
						<div className="img" style={{backgroundImage: 'url(' + this.props.card.img + ')'}}>
							<a href="#">{this.props.card.title}</a>
						</div>
						<div className="caption">
							<div className="info-block">
								<a href="#" className="chip">
									<div className="img-circle mini-circle" style={{backgroundImage: "url('https://pp.vk.me/c625329/v625329912/1bba3/WEa9hxMpqIY.jpg')"}} alt="Contact Person"></div>
									<span>{this.props.card.name}</span>
								</a>
								<span className="chip f-right">
									<span>{this.props.card.date}</span>
								</span>
							</div>
							<br />
							<p className="press-desc">{this.props.card.desc}</p>
							<hr />
							<p className="text-center"><a href="#" className="btn btn-default" role="button"><i className="fa fa-eye m-r-sm"></i>Read</a></p>
						</div>
					</div>
				</div>
	};
}

class Cards extends React.Component {
	constructor(props) {
		super(props);
		this.state = {cards: props.cards};
	};
	render() {
		return <div>
	        {this.props.cards.map(function(element, index) {
	        	return <Card key={index} card={element} />;
	        })}
		</div>
	}
}
Cards.defaultProps = { cards: 
		[
			{
				name: 'dmacompton1',
				date: '14/02/16',
				img: 'http://blog.ringostat.com/wp-content/uploads/2016/01/call-track-2-0.jpg',
	            title: 'Ringostat попал в первый в 2016 году обзор сервисов call tracking',
	            desc: 'Чем мы хотим порадовать пользователей нашего сервиса: новый внешний вид административной панели, увеличение быстродействия функционала, новые отчеты, улучшенное юзабилити.'
			},
			{
				name: 'dmacompton2',
				date: '14/02/16',
				img: 'http://blog.ringostat.com/wp-content/uploads/2016/01/call-track-2-0.jpg',
	            title: 'Ringostat попал в первый в 2016 году обзор сервисов call tracking',
	            desc: 'Чем мы хотим порадовать пользователей нашего сервиса: новый внешний вид административной панели, увеличение быстродействия функционала, новые отчеты, улучшенное юзабилити.'
			}
		]
	 };


class App extends React.Component {
	render() {
		return <div>
			<Cards />
		</div>
	}
}

ReactDOM.render(<App />, root);