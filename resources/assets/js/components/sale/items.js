import React from 'react';
var BackboneModelMixin  = require('./../../mixins').BackboneModelMixin;

module.exports = React.createClass({
  mixins : [BackboneModelMixin],

  getBackboneModels(){
    return [this.props.collection];
  },

  render() {
    console.log('Co vao day!');
    return (
      <table className="ui black table">
        <thead>
            <tr>
              <th>{Lang.get('product.name')}</th>
              <th>{Lang.get('product.quality')}</th>
              <th>{Lang.get('product.price')}</th>
              <th>{Lang.get('product.total')}</th>
            </tr>
        </thead>
        <tbody>{this.renderListProduct()}</tbody>
      </table>
    );
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
        </tr>
      );
    });
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