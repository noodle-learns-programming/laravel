var URL = '/sale/customer';
var Model = Backbone.Model.extend({
  urlRoot : URL,
  initialize() {

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
