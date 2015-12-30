'use strict';

var Dashboard = React.createClass({
  displayName: 'Dashboard',
  getInitialState: function getInitialState() {
    return {
      value: null
    };
  },
  componentDidMount: function componentDidMount() {
    var _this = this;

    $('.ui.selection.dropdown').dropdown({
      dataType: 'jsonp',
      apiSettings: {
        onResponse: function onResponse(githubResponse) {
          var response = {
            results: []
          };
          // translate github api response to work with dropdown
          $.each(githubResponse.items, function (index, item) {
            response.results.push({
              name: item.name,
              value: item.id
            });
          });
          return response;
        },
        url: '//api.github.com/search/repositories?q={query}'
      },
      onChange: function onChange(value) {
        _this.setState({
          value: value
        });
      }
    });
  },
  componentDidUpdate: function componentDidUpdate() {
    $('.ui.dropdown').dropdown('refresh');
  },

  render: function render() {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'div',
        null,
        React.createElement(
          'h2',
          null,
          'Dashboard page'
        )
      )
    );
  }
});
var Product = React.createClass({
  displayName: 'Product',
  getInitialState: function getInitialState() {
    return {
      value: null
    };
  },
  componentDidMount: function componentDidMount() {
    var _this2 = this;

    $('.ui.selection.dropdown').dropdown({
      dataType: 'jsonp',
      apiSettings: {
        onResponse: function onResponse(githubResponse) {
          var response = {
            results: []
          };
          // translate github api response to work with dropdown
          $.each(githubResponse.items, function (index, item) {
            response.results.push({
              name: item.name,
              value: item.id
            });
          });
          return response;
        },
        url: '//api.github.com/search/repositories?q={query}'
      },
      onChange: function onChange(value) {
        _this2.setState({
          value: value
        });
      }
    });
  },
  componentDidUpdate: function componentDidUpdate() {
    $('.ui.dropdown').dropdown('refresh');
  },

  render: function render() {
    return React.createElement(
      'form',
      null,
      React.createElement(
        'div',
        { className: 'ui form' },
        React.createElement(
          'div',
          { className: 'field' },
          React.createElement(
            'label',
            null,
            Lang.get('product.name')
          ),
          React.createElement('input', { placeholder: Lang.get('product.name'), type: 'text' })
        ),
        React.createElement(
          'div',
          { className: 'two fields' },
          React.createElement(
            'div',
            { className: 'field' },
            React.createElement(
              'label',
              null,
              Lang.get('product.sku')
            ),
            React.createElement('input', { placeholder: Lang.get('product.sku'), type: 'text' })
          ),
          React.createElement(
            'div',
            { className: 'field' },
            React.createElement(
              'label',
              null,
              Lang.get('product.series')
            ),
            React.createElement('input', { placeholder: Lang.get('product.series'), type: 'text' })
          )
        ),
        React.createElement(
          'div',
          { className: 'two fields' },
          React.createElement(
            'div',
            { className: 'field' },
            React.createElement(
              'label',
              null,
              Lang.get('product.brand')
            ),
            React.createElement('input', { placeholder: Lang.get('product.brand'), type: 'text' })
          ),
          React.createElement(
            'div',
            { className: 'field' },
            React.createElement(
              'label',
              null,
              Lang.get('product.unit')
            ),
            React.createElement('input', { placeholder: Lang.get('product.unit'), type: 'text' })
          )
        ),
        React.createElement(
          'div',
          { className: 'ui submit button' },
          'Submit'
        )
      )
    );
  }
});
//# sourceMappingURL=components.js.map

'use strict';

$('.ui.sidebar').sidebar({
	context: $('.bottom.segment'),
	dimPage: false
}).sidebar('attach events', '#sidebar');

Lang.setLocale('vi');

window.App = {
	Models: {},
	Router: {},
	init: function init() {
		this.router = new App.Router();
		this.router.on("route", function (route, params) {
			console.log("Different Page: " + route, params);
		});
		Backbone.history.start();
		return this;
	},
	run: function run() {
		return this;
	}
};
App.Router = Backbone.Router.extend({
	routes: {
		'': 'index',
		'product': 'product'
	},
	index: function index() {
		ReactDOM.render(React.createElement(Dashboard, null), document.getElementById('main'));
	},
	product: function product() {
		ReactDOM.render(React.createElement(Product, null), document.getElementById('main'));
	}
});

App.init().run();
//# sourceMappingURL=app.js.map

//# sourceMappingURL=bundle.js.map
