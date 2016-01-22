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

  handleItem(item, action){
    if( action === 'incr'){
      item.incr();
      this.props.collection.push(item);
    } else if( action === 'decr'){
      item.decr();
      this.props.collection.push(item);
    } else if( action === 'remove' ){
      this.props.collection.remove(item);
    }
  },

  renderListProduct(){
    var rows = [];
    this.props.collection.each(function(item, i){
      var product = item.get('product');
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
          <td>{item.get('quality')}</td>
          <td>{item.get('price')}</td>
          <td>{item.getPayment().format()}</td>
          <td>
            <i onClick={this.handleItem.bind(this, item, "incr")}
              className="add circle icon"></i>
            <i onClick={this.handleItem.bind(this, item, "decr")}
              className="minus circle icon"></i>
            <i onClick={this.handleItem.bind(this, item, "remove")}
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