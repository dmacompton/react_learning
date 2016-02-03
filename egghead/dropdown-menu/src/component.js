class Dropdown extends React.Component {
	render() {
		return <div className="dropdown">
				<Badge />
				<UnorderedList />
			</div>
	}
}

class Badge extends React.Component {
	render() {
		return <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
				Dropdown
				<span className="caret"></span>
			</button>
	}
}

class UnorderedList extends React.Component {
	render() {
		return <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
			<li><a>Action</a></li>
			<li><a>Another action</a></li>
			<li><a>Something else here</a></li>
			<li className="divider"></li>
			<li><a>Separated link</a></li>
		</ul>
	}
}

ReactDOM.render(<App />, root);