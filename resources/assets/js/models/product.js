var Brand       = require('./brand').Model;
var Stock       = require('./stock').Model;
var Unit        = require('./product/unit').Model;
var URL = '/stock/product';
var Model = Backbone.Model.extend({
  rootUrl : URL,
  initialize() {

  },
  getBrand(){
    if( this.get('brand') instanceof Brand) {
      return this.get('brand'); 
    }
    var brand = new Brand(this.get('brand'));
    this.set('brand', brand);
    return this.get('brand');
  },
  getStock(){
    if( this.get('stock') instanceof Stock) {
      return this.get('stock'); 
    }
    var stock = new Stock(this.get('stock'));
    this.set('stock', stock);
    return this.get('stock');
  },
  getUnit(){
    if( this.get('unit') instanceof Unit) {
      return this.get('unit'); 
    }
    var unit = new Unit(this.get('unit'));
    this.set('unit', unit);
    return this.get('unit');
  },
  setItem(item){
    this.set('item', item);
    return this;
  },
  updatePrice(value){
    var data = this.toJSON();
      data['price'] = value;
    //Cho nay sao no khong work
    //Va cai method bi override cua backbone no lam gi do
    /*$.ajax({
      type    : 'GET',
      url     : URL+'/price',
      data    : data
    })
    .done(function() {
      console.log('updatePrice: ', arguments)
    });*/
  }
});

var Collection = Backbone.Collection.extend({
  url   : URL,
  model : Model,
  parse(response) {
    return response.data;
  }
});

exports.Model = Model;
exports.Collection = Collection;
