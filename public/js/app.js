'use strict';

$('.ui.sidebar').sidebar({
	context: $('.bottom.segment'),
	dimPage: false
}).sidebar('attach events', '#sidebar');

window.App = {
	Models: {},
	Collections: {},
	Views: {},
	Router: {}
};
App.Router = Backbone.Router.extend({
	routes: {
		'': 'index',
		'product': 'product'
	},
	index: function index() {
		console.log('Home page');
	},
	product: function product() {
		ReactDOM.render(React.createElement(Product, null), document.getElementById('main'));
	}
});

new App.Router();
Backbone.history.start();
//# sourceMappingURL=app.js.map
