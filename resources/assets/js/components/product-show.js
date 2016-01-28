import React from 'react';
var BackboneModelMixin  = require('./../mixins').BackboneModelMixin;

module.exports = React.createClass({
  mixins : [BackboneModelMixin],
  componentDidMount() {
    this.props.collection.fetch();
    this._modal = $(this.refs.form).find('.ui.modal');
  },

  componentDidUpdate() {
  },

  handleSubmit(){

  },

  getBackboneModels(){
    return [this.props.collection];
  },

  updatePriceHandle(product, e){
    this._modal.modal({
      onShow: function(){
        this._modal.find('.product-name').text(product.get('name'));
        this._modal.find('.price').text(product.get('price'));
      }.bind(this),
      onApprove: function(){
        product.updatePrice(this._modal.find(':input').val());
      }.bind(this)
    }).modal('show');
  },

  render() {
    var rows= this.renderBody(this.props.collection);
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
                <th>{Lang.get('product.price')}</th>
                <th>{Lang.get('product.sku')}</th>
                <th>{Lang.get('product.series')}</th>
                <th>{Lang.get('product.unit')}</th>
                <th>{Lang.get('product.brand')}</th>
                <th>{Lang.get('product.stock')}</th>
              </tr>
          </thead>
          <tbody>{rows}</tbody>
          <tfoot>{this.renderFooter(this.props.collection)}</tfoot>
        </table>
        <div className="ui tiny modal">
          <div className="header">
            {Lang.get('product.input_product_price')}
            &nbsp; #<span className="product-name"></span>
          </div>
          <div className="content">
            <p>
              <input name="price" />
            </p>
            <p>
              <label>
                {Lang.get('product.current_price')}: 
                <strong className="price"></strong>
              </label>
            </p>
          </div>
          <div className="actions">
            <div className="ui button cancel">Cancel</div>
            <div className="ui button ok">OK</div>
          </div>
        </div>
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
          <td className="ui right aligned"
            onClick={this.updatePriceHandle.bind(this, product)}>
            {(product.get('price')|0).format()}đ
            &nbsp;<i className="edit icon"></i>
          </td>
          <td>{product.get('sku')}</td>
          <td>{product.get('series')}</td>
          <td>{product.getUnit().get('name')}</td>
          <td>{product.getBrand().get('name')}</td>
          <td>{product.getStock().get('name')}</td>
        </tr>
      ));
    }.bind(this));
    return rows;
  },
  renderFooter (collection) {
    if( !collection.length ){
      return '';
    }
    return (
      <tr>
        <th colSpan="7">
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