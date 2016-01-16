import React from 'react';
import ReactDOM from 'react-dom';
var SaleForm = require('./sale/form');
var ProductList = require('./product/list');
var ProductCollection = require('./../models/product').Collection;

module.exports = React.createClass({
  getInitialState() {
    return {
      action      : this.props.action || 'list',
      id          : this.props.invoiceId || 0,
      productCollection : new ProductCollection()
    };
  },

  componentWillMount() {
    var invoiceCollection = App.getModelCollection('invoice');
    var invoice = null;
    if( !this.props.invoiceId ) {
      invoice= invoiceCollection.create({}, {wait: true});
    } else {
      invoiceCollection.add({id: this.props.invoiceId});
      invoice = invoiceCollection.get(this.props.invoiceId);
      invoice.fetch();
    }
    this.formView = <SaleForm invoice={invoice} productCollection={this.state.productCollection} />;
    this.listView = <ProductList 
      notifyChooseAProduct={this.notifyChooseAProduct}
      collection={App.getModelCollection('product')} />;
  },

  componentDidUpdate() {
  },

  handleMenu(e) {
    var view = $(e.currentTarget).data('view');
    this.setState({
      action : view
    });
  },

  notifyChooseAProduct(product){
    product.set('quality', (product.get('quality') || 0) + 1);
    this.state.productCollection.push(product);
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