import React from 'react';
import ReactDOM from 'react-dom';
var SaleForm    = require('./sale/form');
var ProductList = require('./product/list');

module.exports = React.createClass({
  getInitialState() {
    var invoiceCollection = App.getModelCollection('invoice');
    var invoice = null;
    if( !this.props.invoiceId ) {
      invoice= invoiceCollection.create({}, {wait: true});
    } else {
      console.log('this.props.invoiceId:', this.props.invoiceId);
      invoiceCollection.add({id: this.props.invoiceId});
      invoice = invoiceCollection.get(this.props.invoiceId);
      invoice.fetch();
    }
    invoice.on('change:items', function(){
      this.forceUpdate();
    }.bind(this));
    return {
      invoice     : invoice
    };
  },

  componentDidUpdate() {
  },

  notifyChooseAProduct(product){
    this.state.invoice.addItemWithProduct(
      product
    );
    this.refs.form.refresh();
  },

  render: function() {
    return (
      <div className="ui equal width grid">
        <div className="equal width row">
          <div className="column">
            <SaleForm ref="form" invoice={this.state.invoice} />
          </div>
          <div className="column">
            <ProductList 
              notifyChooseAProduct={this.notifyChooseAProduct}
              collection={App.getModelCollection('product')} />
          </div>
        </div>
      </div>
    );
  }
});