var Customer  = require('./customer').Model;
var Model = Backbone.RelationalModel.extend({
  urlRoot   : '/sale/invoice',
  relations: [
    {
      type: Backbone.HasOne,
      key: 'customer',
      relatedModel: Customer,
      autoFetch: true
    }
  ],
  initialize() {

  }
});

var Collection = Backbone.Collection.extend({
  url   : '/sale/invoice',
  model : Model
});



exports.Model = Model;
exports.Collection = Collection;
