(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var Product = React.createClass({
  displayName: 'Product',
  getInitialState: function getInitialState() {
    return {
      value: null
    };
  },
  componentDidMount: function componentDidMount() {},

  handleSubmit: function handleSubmit(e) {
    e.preventDefault();
    var fd = new FormData();
    fd.append('file', this.refs.file.getDOMNode().files[0]);

    $.ajax({
      url: '/product',
      data: fd,
      processData: false,
      contentType: false,
      type: 'POST',
      success: function success(data) {
        alert(data);
      }
    });
  },

  componentDidUpdate: function componentDidUpdate() {},

  render: function render() {
    return React.createElement(
      'form',
      { onSubmit: this.handleSubmit },
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
          { className: 'two fields' },
          React.createElement(
            'div',
            { className: 'field' },
            React.createElement(
              'label',
              null,
              Lang.get('product.image')
            ),
            React.createElement('input', { ref: 'file', placeholder: Lang.get('product.image'), type: 'file' })
          ),
          React.createElement(
            'div',
            { className: 'field' },
            React.createElement(
              'label',
              null,
              Lang.get('product.description')
            ),
            React.createElement('textarea', { placeholder: Lang.get('product.description') })
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

exports.Product = Product;

},{}]},{},[1]);

//# sourceMappingURL=product.js.map
