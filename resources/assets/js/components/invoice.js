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
            { Lang.get('invoice.list') }
          </div>
        </h3>
        <table className="ui black table">
          <thead>
              <tr>
                <th>{Lang.get('invoice.id')}</th>
                <th>{Lang.get('invoice.customer')}</th>
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
    collection.each(function(invoice, i){
      rows.push((
        <tr key={i}>
          <td>
            <a href={"#sale/"+invoice.get('id')}>#{invoice.get('id')}</a>
          </td>
          <td>{invoice.getCustomer().get('name')}</td>
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