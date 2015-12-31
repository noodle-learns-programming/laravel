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
		return this;
	},
	run: function run() {
		ReactDOM.render(React.createElement(Breadcrumb, { router: this.router }), document.getElementById('breadcrumb'));
		Backbone.history.start();
		return this;
	}
};
App.Router = Backbone.Router.extend({
	routes: {
		'': 'dashboard',
		'stock/product': 'product'
	},
	dashboard: function dashboard() {
		ReactDOM.render(React.createElement(Dashboard, null), document.getElementById('main'));
	},
	product: function product() {
		ReactDOM.render(React.createElement(Product, null), document.getElementById('main'));
	}
});

App.init().run();
//# sourceMappingURL=app.js.map
