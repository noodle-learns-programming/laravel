var Customer       = require('./customer').Model;
var ItemCollection = require('./invoice/item').Collection;
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

  setItems(items){
    var itemCollection = new ItemCollectionitems();
    this.set('items', itemCollection);
    return this;
  },

  getItems()
  {
    if( this.get('items') instanceof ItemCollection) {
      return this.get('items'); 
    }
    var items = new ItemCollection(this.get('items'));
    this.set('items', items);
    return items;
  },

  getTotalPrice()
  {
    var value = 0;
    this.getItems().each(function(item, i){
      value += item.getPayment();
    });
    return value;
  },

  getDiscount()
  {
    var value = 0;
    /*this.getItems().each(function(item, i){
      value += 0;
    });*/
    return value;
  },

  getPaymentPrice()
  {
    var value = this.getTotalPrice() - this.getDiscount();
    return value;
  }
});

var Collection = Backbone.Collection.extend({
  url   : URL,
  model : Model
});



exports.Model = Model;
exports.Collection = Collection;
