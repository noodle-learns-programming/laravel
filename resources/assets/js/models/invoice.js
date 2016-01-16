var Customer  = require('./customer').Model;
var URL   = '/sale/invoice';
var Model = Backbone.Model.extend({
  urlRoot   : URL,
  initialize() {

  },
  getCustomer(){
    return new Customer(this.get('customer'));
  }
});

var Collection = Backbone.Collection.extend({
  url   : URL,
  model : Model
});



exports.Model = Model;
exports.Collection = Collection;
