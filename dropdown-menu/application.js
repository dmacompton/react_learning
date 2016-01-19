class App extends React.Component {
	render() {
		return React.createElement("div", null, 
			React.createElement(Dropdown, null)
		)
	}
}
class Dropdown extends React.Component {
	render() {
		return React.createElement("div", {className: "dropdown"}, 
				React.createElement(Badge, null), 
				React.createElement(UnorderedList, null)
			)
	}
}

class Badge extends React.Component {
	render() {
		return React.createElement("button", {className: "btn btn-default dropdown-toggle", type: "button", id: "dropdownMenu1", "data-toggle": "dropdown", "aria-haspopup": "true", "aria-expanded": "true"}, 
				"Dropdown", 
				React.createElement("span", {className: "caret"})
			)
	}
}

class UnorderedList extends React.Component {
	render() {
		return React.createElement("ul", {className: "dropdown-menu", "aria-labelledby": "dropdownMenu1"}, 
			React.createElement("li", null, React.createElement("a", null, "Action")), 
			React.createElement("li", null, React.createElement("a", null, "Another action")), 
			React.createElement("li", null, React.createElement("a", null, "Something else here")), 
			React.createElement("li", {className: "divider"}), 
			React.createElement("li", null, React.createElement("a", null, "Separated link"))
		)
	}
}

ReactDOM.render(React.createElement(App, null), root);