import React from 'react';
import ReactDOM from 'react-dom';
var injectTapEventPlugin = require("react-tap-event-plugin");
var Breadcrumb 	= require('./components/breadcrumb');
var Product	  	= require('./components/product');
var ProductShow	= require('./components/product-show');
var Dashboard	= require('./components/dashboard');
/**
 |-------------------------------------------------------
 | Only for testing
 |-------------------------------------------------------
 */
/*var TestUpload	= require('./test/upload');
var TestMaterial= require('./test/material');*/

injectTapEventPlugin();
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
		''						: 'dashboard',
		'stock/product'			: 'product',
		'stock/show-product'	: 'productShow',
		'test/upload'			: '_upload',
		'test/material-ui'		: '_meterial'
	},
	dashboard: function(){
		ReactDOM.render(<Dashboard />, document.getElementById('main'));
	},
	product: function(){
		ReactDOM.render(<Product />, document.getElementById('main'));
	},
	productShow: function(){
		ReactDOM.render(<ProductShow />, document.getElementById('main'));
	},
	_upload : function(){
		ReactDOM.render(<TestUpload />, document.getElementById('main'));
	},
	_meterial: function(){
		ReactDOM.render(<TestMaterial />, document.getElementById('main'));
	}
});

App.init()
   .run();
