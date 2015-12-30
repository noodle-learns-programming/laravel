'use strict';

var Product = React.createClass({
    displayName: 'Product',
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
                    'Dropdown'
                ),
                React.createElement(
                    'div',
                    { className: 'ui fluid multiple search selection dropdown' },
                    React.createElement('input', { type: 'hidden', name: 'repo-ids' }),
                    React.createElement(
                        'div',
                        { className: 'default text' },
                        'Select Repos'
                    ),
                    React.createElement('i', { className: 'dropdown icon' }),
                    React.createElement('div', { className: 'menu' })
                )
            ),
            React.createElement(
                'div',
                null,
                React.createElement('div', { className: 'ui divider' }),
                React.createElement(
                    'b',
                    null,
                    'Selected value'
                ),
                ' ',
                this.state.value
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

window.App = {
	Models: {},
	Collections: {},
	Views: {},
	Router: {}
};
App.Router = Backbone.Router.extend({
	routes: {
		'': 'index',
		'product': 'product'
	},
	index: function index() {
		console.log('Home page');
	},
	product: function product() {
		ReactDOM.render(React.createElement(Product, null), document.getElementById('main'));
	}
});

new App.Router();
Backbone.history.start();
//# sourceMappingURL=app.js.map

//# sourceMappingURL=bundle.js.map
