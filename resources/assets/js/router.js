var Router = Backbone.Router.extend({
  routes : {
    ""    : "index",
    "foo" : "foo",
    "bar" : "bar"
  },
  index : function() {
    console.log("index");
  },
  foo : function() {
    console.log("foo");
  },
  bar : function() {
    console.log("bar");
  }
});
 
new Router();
 
Backbone.history.start();