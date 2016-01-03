var App = window.App || {};

import React from 'react';
import ReactDOM from 'react-dom';
var injectTapEventPlugin = require("react-tap-event-plugin");
//View
var Breadcrumb  = require('./components/breadcrumb');
var Feed        = require('./components/feed');
var Dashboard   = require('./components/dashboard');
var Product     = require('./components/product');
var ProductShow = require('./components/product-show');
var Customer    = require('./components/customer');
//Model
var ProductCollection   = require('./models/product').Collection;
/**
 |-------------------------------------------------------
 | Only for testing
 |-------------------------------------------------------
 */
/*var TestUpload  = require('./test/upload');
var TestMaterial= require('./test/material');*/

injectTapEventPlugin();

$('.ui.sidebar').sidebar({
  context : $('.bottom.segment'),
  dimPage : false
}).sidebar('attach events', '#sidebar');

Lang.setLocale('vi');

App._modelCollections = {};
App.getModelCollection = function(name){
  if( App._modelCollections[name] ){
    return App._modelCollections[name];
  }
  if( name === 'product') {
    App._modelCollections[name] = new ProductCollection();
  }
  return App._modelCollections[name];
};
App.init = function(){
  this.router   = new App.Router;
  return this;
};
App.run = function(){
  ReactDOM.render(<Breadcrumb router={this.router} />, document.getElementById('breadcrumb'));
  ReactDOM.render(<Feed />, document.getElementById('feed'));
  Backbone.history.start();
  return this;
};
App.Router = Backbone.Router.extend({
  routes: {
    '' : 'dashboard',
    'stock/product' : 'product',
    'stock/show-product' : 'productShow',
    'sale/customer' : 'customer',
    'test/upload' : '_upload',
    'test/material-ui' : '_meterial',
  },
  dashboard(){
    ReactDOM.render(<Dashboard />, document.getElementById('main'));
  },
  product(){
    ReactDOM.render(<Product />, document.getElementById('main'));
  },
  productShow(){
    ReactDOM.render(<ProductShow collection={App.getModelCollection('product')}/>, document.getElementById('main'));
  },
  customer(){
    ReactDOM.render(<Customer />, document.getElementById('main'));
  },
  _upload(){
    ReactDOM.render(<TestUpload />, document.getElementById('main'));
  },
  _meterial(){
    ReactDOM.render(<TestMaterial />, document.getElementById('main'));
  }
});

App.init()
 .run()
;
