import React from 'react';
var BackboneModelMixin  = require('./../../mixins').BackboneModelMixin;

module.exports = React.createClass({
  mixins : [BackboneModelMixin],

  getBackboneModels(){
    return [this.props.collection];
  },

  render() {
    return (
      <table className="ui black table">
        <thead>
            <tr>
              <th>{Lang.get('product.name')}</th>
              <th>{Lang.get('product.quality')}</th>
              <th>{Lang.get('product.price')}</th>
              <th>{Lang.get('product.total')}</th>
              <th> </th>
            </tr>
        </thead>
        <tbody>{this.renderListProduct()}</tbody>
      </table>
    );
  },

  handleItem(product, action){
    var currentQty = product.get('quality') || 0;
    if( action === 'incr'){
      product.set('quality', ++currentQty);
      this.props.collection.push(product);
    } else if( action === 'decr'){
      if( currentQty > 0 ){
        product.set('quality', --currentQty);  
        this.props.collection.push(product);
      }
    } else if( action === 'remove' ){
      this.props.collection.remove(product);
    }
  },

  renderListProduct(){
    var rows = [];
    this.props.collection.each(function(product, i){
      rows.push(
        <tr key={i}>
          <td>
            <h4 className="ui image header">
              <img src={"/upload/product/"+product.get('image')} className="ui mini rounded image" />
              <div className="content">
                {product.get('name')}
              </div>
            </h4>
          </td>
          <td>{product.get('quality')}</td>
          <td>{product.get('price')}</td>
          <td>{(product.get('quality')*product.get('price')).format()}</td>
          <td>
            <i onClick={this.handleItem.bind(this, product, "incr")}
              className="add circle icon"></i>
            <i onClick={this.handleItem.bind(this, product, "decr")}
              className="minus circle icon"></i>
            <i onClick={this.handleItem.bind(this, product, "remove")}
              className="remove circle icon"></i>
          </td>
        </tr>
      );
    }.bind(this));
    if( !rows.length ){
      return (
        <tr>
          <td colSpan="4">{Lang.get('invoice.products_list_empty')}</td>
        </tr>
      );
    }
    return rows;
  }
});