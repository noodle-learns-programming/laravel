import React from 'react';
import ReactDOM from 'react-dom';
var SaleForm = require('./sale/form');
var ProductList = require('./product/list');

module.exports = React.createClass({
  getInitialState() {
    return {
      action: this.props.action || 'list',
      id    : this.props.invoiceId || 0,
    };
  },

  componentWillMount() {
    this.listView = <ProductList collection={App.getModelCollection('product')} />;
    this.formView = <SaleForm id={this.props.invoiceId} />;
  },

  componentDidUpdate() {
  },

  handleMenu(e) {
    var view = $(e.currentTarget).data('view');
    this.setState({
      action : view
    });
  },

  render: function() {
    return (
      <div className="ui equal width grid">
        <div className="equal width row">
          <div className="column">
            {this.formView}
          </div>
          <div className="column">
            {this.listView}
          </div>
        </div>
      </div>
    );
  }
});