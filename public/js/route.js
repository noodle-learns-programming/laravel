var Router = Backbone.Router.extend({
	routes : {
		""                : "index",
		"product"         : "product"
	},
	index : function() {
		console.log("index");
	},
	product : function() {
		console.log("foo");
	}
});

new Router();

Backbone.history.start();