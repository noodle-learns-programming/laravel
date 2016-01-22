var URL = '/sale/item';
var Model = Backbone.Model.extend({
  urlRoot : URL,
  initialize() {

  },
  getProduct()
  {
    this.get('product');
  },
  getPrice()
  {
    return this.get('price');
  },
  getPayment()
  {
    return this.get('price') * this.get('quality');
  }
});

var Collection = Backbone.Collection.extend({
  url   : URL,
  model : Model,
  parse(response) {
    return response.data;
  },
  addItemWithProduct(product){
    var item = new Model({
      id      : product.id,
      price   : product.get('price'),
      quality : 1,
      product : product
    });
    this.push(item);
  }
});

exports.Model = Model;
exports.Collection = Collection;
