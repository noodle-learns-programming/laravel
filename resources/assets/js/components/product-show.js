import React from 'react';
var BackboneModelMixin  = require('./../mixins').BackboneModelMixin;

module.exports = React.createClass({
  mixins : [BackboneModelMixin],
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
        <h3 className="ui header">
          <i className="at icon"></i>
          <div className="content">
            { Lang.get('product.list') }
          </div>
        </h3>
        <table className="ui black table">
          <thead>
              <tr>
                <th>{Lang.get('product.name')}</th>
                <th>{Lang.get('product.sku')}</th>
                <th>{Lang.get('product.series')}</th>
                <th>{Lang.get('product.unit')}</th>
                <th>{Lang.get('product.brand')}</th>
                <th>{Lang.get('product.stock')}</th>
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
          <td>
            <h4 className="ui image header">
              <img src={"/upload/product/"+product.get('image')} className="ui mini rounded image" />
              <div className="content">
                {product.get('name')}
                <div className="sub header">
                {product.get('description')}
                </div>
              </div>
            </h4>
          </td>
          <td>{product.get('sku')}</td>
          <td>{product.get('series')}</td>
          <td>{product.getUnit().get('name')}</td>
          <td>{product.getBrand().get('name')}</td>
          <td>{product.getStock().get('name')}</td>
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
        <th colSpan="5">
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