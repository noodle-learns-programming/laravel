var App = window.App || {};
App.get = function(name) {
  return this._data[name];
};

import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { Provider } from 'react-redux';
import Page from './containers/page';
import configureStore from './store/configureStore';

require('./overhead/extend');
var injectTapEventPlugin = require("react-tap-event-plugin");
//View
var Breadcrumb  = require('./components/breadcrumb');
var Feed        = require('./components/feed');
var Dashboard   = require('./components/dashboard');
var Product     = require('./components/product');
var ProductShow = require('./components/product-show');
var Sale        = require('./components/sale');
var Invoice     = require('./components/invoice');
var Customer    = require('./components/customer');
//Model
App.Collection  = {
  product   : require('./models/product').Collection,
  customer  : require('./models/customer').Collection,
  invoice   : require('./models/invoice').Collection,
  stock     : require('./models/stock').Collection
};

/**
 |-------------------------------------------------------
 | Only for testing
 |-------------------------------------------------------
 */
var TestUpload  = require('./test/upload');
/*var TestMaterial= require('./test/material');*/

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
  App._modelCollections[name] = new App.Collection[name];
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
const store   = configureStore();
App.Router = Backbone.Router.extend({
    routes: {
    '' : 'dashboard',
    'stock/product' : 'product',
    'stock/show-product' : 'productShow',
    'invoice' : 'invoice',
    'sale(/:id)' : 'sale',
    'sale/customer(/:action)(/:id)' : 'customer',
    'test/redux' : '_redux',
    'test/upload' : '_upload',
    'test/material-ui' : '_meterial'
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
  invoice(){
    ReactDOM.render(<Invoice collection={App.getModelCollection('invoice')}/>, document.getElementById('main'));
  },
  sale(id){
    ReactDOM.render(<Sale invoiceId={id} collection={App.getModelCollection('customer')}/>, document.getElementById('main'));
  },
  customer(action, id){
    ReactDOM.render(<Customer action={action} id={id} collection={App.getModelCollection('customer')}/>, document.getElementById('main'));
  },
  _redux(){
    render(
      <Provider store={store}>
        <Page />
      </Provider>,
      document.getElementById('main')
    );
  },
  _upload(){
    ReactDOM.render(<TestUpload />, document.getElementById('main'));
  },
  _meterial(){
    //ReactDOM.render(<TestMaterial />, document.getElementById('main'));
  }
});

App.init()
 .run()
;
