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
		this.router = new App.Router;
		this.router.on("route", function(route, params) {
		    console.log("Different Page: " + route, params);
		});
		Backbone.history.start();
		return this;
	},
	run : function()
	{
		return this;
	}
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

App.init()
   .run();
