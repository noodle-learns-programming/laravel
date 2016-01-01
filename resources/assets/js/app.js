var Breadcrumb 	= require('./components/breadcrumb');
var Product	  	= require('./components/product');
var Dashboard	= require('./components/dashboard');

$('.ui.sidebar').sidebar({
	context	: $('.bottom.segment'),
	dimPage : false
}).sidebar('attach events', '#sidebar');

Lang.setLocale('vi');

window.App = {
	Models: {},
	Router: {},
	init: function()
	{
		this.router 	= new App.Router;
		return this;
	},
	run : function()
	{
		ReactDOM.render(<Breadcrumb router={this.router} />, document.getElementById('breadcrumb'))
		Backbone.history.start();
		return this;
	}
};
App.Router = Backbone.Router.extend({
	routes: {
		''				: 'dashboard',
		'stock/product'	: 'product'
	},
	dashboard: function(){
		ReactDOM.render(<Dashboard />, document.getElementById('main'));
	},
	product: function(){
		ReactDOM.render(<Product />, document.getElementById('main'));
	}
});

App.init()
   .run();
