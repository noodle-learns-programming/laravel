var URL = '/stock/product';
var Model = Backbone.Model.extend({
  rootUrl : URL,
  initialize() {

  },
  setItem(item){
    this.set('item', item);
    return this;
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
