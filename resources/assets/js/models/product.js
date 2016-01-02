var Model = Backbone.Model.extend({
  initialize() {

  }
});

var Collection = Backbone.Collection.extend({
  url   : '/stock/product',
  model : Model,
  parse(response) {
    console.log('This is response from Product Collection');
    return response.data;
  }
});

exports.Model = Model;
exports.Collection = Collection;
