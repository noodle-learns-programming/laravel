var App = window.App || {};
import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { Provider } from 'react-redux';
import Page from './containers/page';
import configureStore from './store/configureStore';

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
var CustomerCollection  = require('./models/customer').Collection;
/**
 |-------------------------------------------------------
 | Only for testing
 |-------------------------------------------------------
 */
/*var TestUpload  = require('./test/upload');
var TestMaterial= require('./test/material');*/

injectTapEventPlugin();

$.fn.serializeObject = function(){
  var o = {};
  var a = this.serializeArray();
  $.each(a, function() {
    if (o[this.name] !== undefined) {
      if (!o[this.name].push) {
          o[this.name] = [o[this.name]];
      }
      o[this.name].push(this.value || '');
    } else {
      o[this.name] = this.value || '';
    }
  });
  return o;
};

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
  } else if(name === 'customer') {
    App._modelCollections[name] = new CustomerCollection();
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
    'sale/customer(/:action)(/:id)' : 'customer',
    'test/upload' : '_upload',
    'test/material-ui' : '_meterial',
  },
  dashboard(){
    const store = configureStore();
    render(
      <Provider store={store}>
        <Page />
      </Provider>,
      document.getElementById('main')
    );
  },
  product(){
    ReactDOM.render(<Product />, document.getElementById('main'));
  },
  productShow(){
    ReactDOM.render(<ProductShow collection={App.getModelCollection('product')}/>, document.getElementById('main'));
  },
  customer(action, id){
    ReactDOM.render(<Customer action={action} id={id} collection={App.getModelCollection('customer')}/>, document.getElementById('main'));
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
