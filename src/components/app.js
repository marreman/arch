var React = require("react");

var App = React.createClass({
	render: function() {
		return (
			<div className="app">
				<a href onClick={this.showAlert}>This is a test app</a>	
			</div>
		);
	},
	showAlert: function (event) {
		event.preventDefault();
		window.alert("This shows that browser-side React has hooked up to the server rendered markup");
	}
});

module.exports = App;
