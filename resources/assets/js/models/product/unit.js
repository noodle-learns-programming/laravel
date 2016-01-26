var URL = '/stock/product/unit';
var Model = Backbone.Model.extend({
  rootUrl : URL,
  initialize() {

  }
});

var Collection = Backbone.Collection.extend({
  url   : URL,
  model : Model,
  parse(response) {
    return response;
  }
});

exports.Model = Model;
exports.Collection = Collection;
