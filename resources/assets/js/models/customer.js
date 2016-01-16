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
  },
  search(query, done){
    $.get(this.url+'/search', {
      page  : 1,
      limit : 5,
      q     : query
    }).done(done);
  }
});

exports.Model = Model;
exports.Collection = Collection;
