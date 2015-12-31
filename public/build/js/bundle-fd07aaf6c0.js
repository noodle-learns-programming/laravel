'use strict';

var Breadcrumb = React.createClass({
  displayName: 'Breadcrumb',
  getInitialState: function getInitialState() {
    return {
      fragment: '',
      route: 'Dashboard'
    };
  },
  componentDidMount: function componentDidMount() {
    this.props.router.on("route", this.onRoute);
  },
  componentDidUpdate: function componentDidUpdate() {
    //this.props.router.off("route");
  },

  onRoute: function onRoute(route, params) {
    var fragment = Backbone.history.getFragment();
    this.setState({
      fragment: fragment,
      route: route,
      params: params
    });
  },
  render: function render() {
    var arrFragments = [];
    if (this.state.fragment) {
      arrFragments = this.state.fragment.split('/');
    }
    var href = '';
    return React.createElement(
      'div',
      { className: 'ui breadcrumb' },
      React.createElement(
        'a',
        { className: 'section', href: '#' },
        Lang.get('common.dashboard')
      ),
      arrFragments.map(function (fragment, i) {
        {
          href += (href ? '/' : '') + fragment;
        }
        return [React.createElement(
          'div',
          { className: 'divider' },
          ' / '
        ), React.createElement(
          'a',
          { className: 'active section', href: "#" + href },
          Lang.get('common.' + fragment)
        )];
      })
    );
  }
});
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
        'h2',
        { className: 'ui header' },
        React.createElement('img', { className: 'ui image', src: '/image/school.png' }),
        React.createElement(
          'div',
          { className: 'content' },
          Lang.get('product.add')
        )
      ),
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
		return this;
	},
	run: function run() {
		ReactDOM.render(React.createElement(Breadcrumb, { router: this.router }), document.getElementById('breadcrumb'));
		Backbone.history.start();
		return this;
	}
};
App.Router = Backbone.Router.extend({
	routes: {
		'': 'dashboard',
		'stock/product': 'product'
	},
	dashboard: function dashboard() {
		ReactDOM.render(React.createElement(Dashboard, null), document.getElementById('main'));
	},
	product: function product() {
		ReactDOM.render(React.createElement(Product, null), document.getElementById('main'));
	}
});

App.init().run();
//# sourceMappingURL=app.js.map

//# sourceMappingURL=bundle.js.map
