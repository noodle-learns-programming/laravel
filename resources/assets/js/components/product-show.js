import React from 'react';
module.exports = React.createClass({
  getInitialState() {
    return {
      pagination : {}
    };
  },

  componentDidMount() {
    $.get('/store/product',{
      page : 1
    }, function(res){
      this.setState({
        pagination : res
      });
    }.bind(this));
  },

  componentDidUpdate() {
  },

  handleSubmit()
  {

  },

  render: function() {
    var rows  = [];
    var footer= '';
    var pagination = this.state.pagination;
    var product = null;
    if( pagination && pagination.data && pagination.data.length ){
      for(var i = 0, n = pagination.data.length; i < n; i++ )
      {
        product = pagination.data[i];
        rows.push((
          <tr key={i}>
            <td>{product.name}</td>
            <td>{product.sku}</td>
            <td>{product.series}</td>
          </tr>
        ));
      }
      footer = (
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
          <tbody>{rows}</tbody>
          <tfoot>{footer}</tfoot>
        </table>
      </form>
    );
  }
});