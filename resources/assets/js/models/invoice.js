var Customer  = require('./customer').Model;
var ProductCollection  = require('./product').Collection;
var URL   = '/sale/invoice';
var Model = Backbone.Model.extend({
  urlRoot   : URL,
  initialize() {

  },
  getCustomer(){
    if( this.get('customer') instanceof Customer) {
      return this.get('customer'); 
    }
    var customer = new Customer(this.get('customer'));
    this.set('customer', customer);
    return customer;
  },
  setCustomer(customer){
    this.set('customer', new Customer(customer));
    return this;
  },

  makeProductItemsCollection(){
    var productCollection = new ProductCollection();
    this.set('items', productCollection);
    return this;
  },

  getProductItemsCollection()
  {
    return this.get('items');
  }
});

var Collection = Backbone.Collection.extend({
  url   : URL,
  model : Model
});



exports.Model = Model;
exports.Collection = Collection;
