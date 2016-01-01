(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

module.exports = React.createClass({
  displayName: 'exports',
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

},{}]},{},[1]);

//# sourceMappingURL=breadcrumb.js.map
