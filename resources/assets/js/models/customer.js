var Model = Backbone.Model.extend({
  initialize() {

  }
});

var Collection = Backbone.Collection.extend({
  url   : '/sale/customer',
  model : Model,
  parse(response) {
    return response.data;
  }
});

exports.Model = Model;
exports.Collection = Collection;
