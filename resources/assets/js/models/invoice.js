var Customer       = require('./customer').Model;
var ItemCollection = require('./invoice/item').Collection;
var ItemModel      = require('./invoice/item').Model;
var URL   = '/sale/invoice';
var Model = Backbone.Model.extend({
  urlRoot   : URL,
  defaults : {
    items : function(){
      return new ItemCollection().setInvoice(this)
    }
  },
  initialize() {
    /**
     |-----------------------------------------------
     | Xu ly nhu the nay la sai, vi no mau thuan voi
     | cai ham set ben duoi.
     |-----------------------------------------------
     */
    /*var items = new ItemCollection();
    items.setInvoice(this);
    this.set('items', items);*/
  },
  getCustomer(){
    if( this.get('customer') instanceof Customer) {
      return this.get('customer'); 
    }
    var customer = new Customer(this.get('customer'));
    this.set('customer', customer);
    return this.get('customer');
  },
  setCustomer(customer){
    this.set('customer', new Customer(customer));
    return this;
  },

  getItems()
  {
    return this.get('items');
  },

  addItemWithProduct(product)
  {
    var items = this.get('items');
      items.addItemWithProduct(product);
    return this;
  },

  getTotalPrice()
  {
    var value = 0;
    if( !this.getItems() ){
      return value;
    }
    this.getItems().each(function(item, i){
      value += item.getPayment();
    });
    return value;
  },

  getDiscount()
  {
    var value = 0;
    if( !this.getItems() ){
      return value;
    }
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
  },

  set(attributes, options)
  {
    if( attributes.hasOwnProperty('items') )
    {
      var items = this.get('items');
      if( !(items instanceof ItemCollection) ){
        items = new ItemCollection();
        items.setInvoice(this);
      }
      _.each(attributes['items'], function(item){
        items.push(new ItemModel(item));
      });
      attributes['items'] = items;
    }
    return Backbone.Model.prototype.set.call(this, attributes, options);
  }
});

var Collection = Backbone.Collection.extend({
  url   : URL,
  model : Model,
  parse(response) {
    try {
      return response.data;
    } catch( e ) {
      
    }
  }
});



exports.Model = Model;
exports.Collection = Collection;
