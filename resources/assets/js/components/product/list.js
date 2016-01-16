import React from 'react';
var BackboneModelMixin  = require('./../../mixins').BackboneModelMixin;

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

  searchProductHandle(e){
    var value = e.target.value;
    var $container = $(e.target).parent();
    $container.addClass('loading');
    this.props.collection.fetch({
      data: $.param({
        q : value
      })
    }).done(function(){
      $container.removeClass('loading');
    });
  },

  render() {
    var rows = this.renderBody(this.props.collection);
    return (
      <form ref="form" onSubmit={this.handleSubmit} method="post">
        <div className="ui search">
          <div className="ui icon input">
            <input className="prompt" onChange={this.searchProductHandle}
             placeholder={Lang.get('product.search')} />
            <i className="search icon"></i>
          </div>
          <div className="results"></div>
        </div>
        <div className="ui three cards">
          {rows}
        </div>
      </form>
    );
  },
  renderBody (collection) {
    var rows = [];
    collection.each(function(product, i){
      rows.push((
        <div className="card" key={i}>
            <div className="image">
              <img src={"/upload/product/"+product.get('image')} className="ui mini rounded image" />
            </div>
            <div className="content">
              <div className="header">{product.get('name')}</div>
              <div className="meta">
                <a>100k</a>
              </div>
              <div className="description">
                {product.get('description')}
              </div>
            </div>
          </div>
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