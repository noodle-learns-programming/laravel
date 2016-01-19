var Customer  = require('./customer').Model;
var URL   = '/sale/invoice';
var Model = Backbone.Model.extend({
  urlRoot   : URL,
  initialize() {

  },
  getCustomer(){
    if( this.get('customer') instanceof Customer) {
      return this.get('customer'); 
    }
    return new Customer(this.get('customer'));
  },
  setCustomer(customer){
    this.set('customer', new Customer(customer));
    return this;
  }
});

var Collection = Backbone.Collection.extend({
  url   : URL,
  model : Model
});



exports.Model = Model;
exports.Collection = Collection;
