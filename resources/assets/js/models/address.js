var URL = '/customer/address';
var Model = Backbone.Model.extend({
  urlRoot : URL,
  initialize() {

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
