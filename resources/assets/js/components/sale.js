import React from 'react';
import ReactDOM from 'react-dom';
var SaleForm = require('./sale/form');
var ProductList = require('./product/list');
var ProductCollection = require('./../models/product').Collection;

module.exports = React.createClass({
  getInitialState() {
    var invoiceCollection = App.getModelCollection('invoice');
    var invoice = null;
    if( !this.props.invoiceId ) {
      invoice= invoiceCollection.create({}, {wait: true});
    } else {
      invoiceCollection.add({id: this.props.invoiceId});
      invoice = invoiceCollection.get(this.props.invoiceId);
      invoice.fetch();
    }
    invoice.makeProductItemsCollection();
    return {
      action      : this.props.action || 'list',
      invoice     : invoice
    };
  },

  componentWillMount() {
    this.formView = <SaleForm
      invoice={this.state.invoice} 
      productCollection={this.state.invoice.getProductItemsCollection()} />;
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
    var itemsCollection = this.state.invoice.getProductItemsCollection();
        itemsCollection.push(product);
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