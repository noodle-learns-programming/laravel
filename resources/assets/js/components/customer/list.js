import React from 'react';
import ReactDOM from 'react-dom';
var CustomerForm = require('./form');
var BackboneModelMixin  = require('./../../mixins').BackboneModelMixin;

module.exports = React.createClass({
  mixins : [BackboneModelMixin],
  componentDidMount() {
    console.log('componentDidMount');
    this.props.collection.fetch();
  },

  componentDidUpdate() {
    console.log('componentDidUpdate');
  },

  componentWillUnmount(){
    console.log('componentWillUnmount');
  },

  handleSubmit(){

  },

  handleClick(model, event){
    var modal = ReactDOM.findDOMNode(this.refs.modal);
    $(modal).modal('show');
    var content = ReactDOM.findDOMNode(this.refs.modalContent);
    var f = <CustomerForm model={model} />;
    ReactDOM.render(f, content);
  },

  getBackboneModels(){
    return [this.props.collection];
  },

  render() {
    var rows = this.renderBody(this.props.collection);
    return (
      <div>
        <div ref="list">
          <h3 className="ui header">
            <i className="at icon"></i>
            <div className="content">
              { Lang.get('customer.list') }
            </div>
          </h3>
          <table className="ui black table">
            <thead>
                <tr>
                  <th>{Lang.get('customer.name')}</th>
                  <th>{Lang.get('customer.phone')}</th>
                  <th>{Lang.get('customer.gender')}</th>
                  <th>{Lang.get('customer.dob')}</th>
                  <th>{Lang.get('customer.address')}</th>
                </tr>
            </thead>
            <tbody>{rows}</tbody>
            <tfoot>{this.renderFooter(this.props.collection)}</tfoot>
          </table>
        </div>
        <div ref="modal" className="ui modal">
          <div className="header">Header</div>
          <div className="content" ref="modalContent">
          </div>
        </div>
      </div>
    );
  },
  renderBody (collection) {
    var rows = [];
    collection.each(function(model, i){
      rows.push((
        <tr key={i}>
          <td>
            <h4 className="ui image header">
              <img src={"/upload/customer/"+model.get('image')} className="ui mini rounded image" />
              <div className="content">
                <a onClick={this.handleClick.bind(this, model)} href={"#sale/customer/edit/" + model.get('id')}>{model.get('name')}</a>
                <div className="sub header">
                {model.get('description')}
                </div>
              </div>
            </h4>
          </td>
          <td>
            <div className="ui list">
              <div className="item">
                <i className="phone square icon"></i>
                <div className="content">
                  {model.get('mobile_phone')}
                </div>
              </div>
              <div className="item">
                <i className="phone icon"></i>
                <div className="content">
                  {model.get('home_phone')}
                </div>
              </div>
            </div>
          </td>
          <td>{model.get('gender')}</td>
          <td>{model.get('dob')}</td>
          <td>{model.get('address')}</td>
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
        <th colSpan="5">
          <div className="ui right floated pagination menu">
            <a className="icon item" href="#sale/customer?page=2">
              <i className="left chevron icon"></i>
            </a>
            <a className="item">1</a>
            <a className="item">2</a>
            <a className="item">3</a>
            <a className="item">4</a>
            <a className="icon item" href="#sale/customer?page=2">
              <i className="right chevron icon"></i>
            </a>
          </div>
        </th>
      </tr>
    );
  }
});