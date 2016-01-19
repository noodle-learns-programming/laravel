var URL = '/sale/address';
var Model = Backbone.Model.extend({
  urlRoot : URL,
  initialize() {

  },
  setCustomer(customer){
    this.customer = customer;
    this.set('customer_id', customer.id);
    return this;
  },
  getCustomer(customer){
    return this.customer;
  }
});

var Collection = Backbone.Collection.extend({
  url   : URL,
  model : Model,
  parse(response) {
    return response.data;
  },
  setCustomer(customer){
    this.customer = customer;
    return this;
  },
  getCustomer(customer){
    return this.customer;
  },
  create(attributes, options) {
    var model = Backbone.Collection.prototype.create.apply(this, arguments);
    if( this.getCustomer() ) {
      model.setCustomer(this.getCustomer());
    }
    return model;
  }
});

exports.Model = Model;
exports.Collection = Collection;
