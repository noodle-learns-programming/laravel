$('.ui.sidebar').sidebar({
	context	: $('.bottom.segment'),
	dimPage : false
}).sidebar('attach events', '#sidebar');

window.App = {
	Models: {},
	Collections: {},
	Views: {},
	Router: {}
};
App.Router = Backbone.Router.extend({
	routes: {
		''			: 'index',
		'product'	: 'product'
	},
	index: function(){
		ReactDOM.render(<Dashboard />, document.getElementById('main'));
	},
	product: function(){
		ReactDOM.render(<Product />, document.getElementById('main'));
	}
});

new App.Router;
Backbone.history.start();