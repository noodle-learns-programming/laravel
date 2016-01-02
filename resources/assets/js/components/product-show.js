import React from 'react';
var ProductCollection   = require('./../models/product').Collection;
var BackboneModelMixin  = require('./../mixins').BackboneModelMixin;


module.exports = React.createClass({
  mixins : [BackboneModelMixin],
  getDefaultProps (){
    return {
      'collection' : new ProductCollection()
    };
  },
  componentDidMount() {
    this.props.collection.fetch();
  },

  componentDidUpdate() {
  },

  handleSubmit(){

  },

  getBackboneModels(){
    return [this.props.collection];
  },

  render() {
    var row = this.renderBody(this.props.collection);
    return (
      <form ref="form" onSubmit={this.handleSubmit} method="post">
        <h2 className="ui header">
          <i className="at icon"></i>
          <div className="content">
            { Lang.get('product.list') }
          </div>
        </h2>
        <table className="ui black table">
          <thead>
              <tr>
                <th>Name</th>
                <th>SKU</th>
                <th>Series</th>
              </tr>
          </thead>
          <tbody>{row}</tbody>
          <tfoot>{this.renderFooter(this.props.collection)}</tfoot>
        </table>
      </form>
    );
  },
  renderBody (collection) {
    var rows = [];
    collection.each(function(product, i){
      rows.push((
        <tr key={i}>
          <td>{product.get('name')}</td>
          <td>{product.get('sku')}</td>
          <td>{product.get('series')}</td>
        </tr>
      ));
    });
    return rows;
  },
  renderFooter (collection) {
    if( !collection.length ){
      return '';
    }
    return (
      <tr>
        <th colSpan="3">
          <div className="ui right floated pagination menu">
            <a className="icon item" href="#stock/show-product?page=2">
              <i className="left chevron icon"></i>
            </a>
            <a className="item">1</a>
            <a className="item">2</a>
            <a className="item">3</a>
            <a className="item">4</a>
            <a className="icon item" href="#stock/show-product?page=2">
              <i className="right chevron icon"></i>
            </a>
          </div>
        </th>
      </tr>
    );
  }
});