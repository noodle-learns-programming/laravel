var React = require('react');
var ReactDOM = require('react-dom');
import Hello from './../jsx/test.jsx';


(function(){

window.App = {
	Models: {},
	Collections: {},
	Views: {},
	Router: {}
};
App.Router = Backbone.Router.extend({
	routes: {
		'': 'index'
	},
	index: function(){
	}
});

new App.Router;
Backbone.history.start();

$('.ui.sidebar').sidebar({
	context	: $('.bottom.segment'),
	dimPage : false
}).sidebar('attach events', '#sidebar');

})();