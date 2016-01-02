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
    var rows = [];
    var pagination = this.state.pagination;
    var product = null;
    if( pagination && pagination.data && pagination.data.length ){
      for(var i = 0, n = pagination.data.length; i < n; i++ )
      {
        product = pagination.data[i];
        rows.push((
          <tr>
            <td>{product.name}</td>
            <td>{product.sku}</td>
            <td>{product.series}</td>
          </tr>
        ));
      }
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
        </table>
      </form>
    );
  }
});