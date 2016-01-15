var Model = Backbone.RelationalModel.extend({
  initialize() {

  }
});

var Collection = Backbone.Collection.extend({
  url   : '/sale/customer',
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
