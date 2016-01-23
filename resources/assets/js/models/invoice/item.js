var Product = require('./../product').Model;
var URL = '/sale/item';
var Model = Backbone.Model.extend({
  urlRoot : URL,
  idAttribute : 'product_id',
  initialize() {

  },
  getProduct()
  {
    if( this.get('product') instanceof Product) {
      return this.get('product'); 
    }
    var product = new Product(this.get('product'));
    this.set('product', product);
    return this.get('product');
  },
  getPrice()
  {
    return this.get('price');
  },
  getPayment()
  {
    return this.get('price') * this.get('quality');
  },
  incr()
  {
    this.set('quality', this.get('quality') + 1);
    return this;
  },
  decr()
  {
    if( this.get('quality') > 0 ) {
      this.set('quality', this.get('quality') - 1);
    }
    return this;
  }
});

var Collection = Backbone.Collection.extend({
  url   : URL,
  model : Model,
  parse(response)
  {
    return response.data;
  },
  addItemWithProduct(product)
  {
    var item = this.get(product.id);
    if( item ) {
      item.incr();
    } else {
      item = new Model({
        product_id  : product.id,
        price       : product.get('price'),
        quality     : 1,
        product     : product
      });
    }
    this.push(item);
    return this;
  },
  setInvoice(invoice){
    this._invoice = invoice;
    return this;
  },
  getInvoice(){
    return this._invoice;
  },
  push(model)
  {
    /**
     |------------------------------------------------------
     | Custom event - when items of invoice is changed.
     |------------------------------------------------------
     */
    Backbone.Collection.prototype.push.apply(this, arguments);
    this.getInvoice().trigger("items-changed");
  },
  remove(model)
  {
    /**
     |------------------------------------------------------
     | Custom event - when items of invoice is changed.
     |------------------------------------------------------
     */
    Backbone.Collection.prototype.remove.apply(this, arguments);
    this.getInvoice().trigger("items-changed");
  }
});

exports.Model = Model;
exports.Collection = Collection;
