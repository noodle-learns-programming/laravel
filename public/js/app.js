'use strict';

$('.ui.sidebar').sidebar({
	context: $('.bottom.segment'),
	dimPage: false
}).sidebar('attach events', '#sidebar');

Lang.setLocale('vi');

window.App = {
	Models: {},
	Router: {},
	init: function init() {
		this.router = new App.Router();
		this.router.on("route", function (route, params) {
			console.log("Different Page: " + route, params);
		});
		Backbone.history.start();
		return this;
	},
	run: function run() {
		return this;
	}
};
App.Router = Backbone.Router.extend({
	routes: {
		'': 'index',
		'product': 'product'
	},
	index: function index() {
		ReactDOM.render(React.createElement(Dashboard, null), document.getElementById('main'));
	},
	product: function product() {
		ReactDOM.render(React.createElement(Product, null), document.getElementById('main'));
	}
});

App.init().run();
//# sourceMappingURL=app.js.map
