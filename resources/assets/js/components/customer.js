import React from 'react';
import ReactDOM from 'react-dom';
var CustomerModel= require('./../models/customer').Model;
var CustomerForm = require('./customer/form');
var CustomerList = require('./customer/list');

module.exports = React.createClass({
  getInitialState() {
    return {
      action: this.props.action || 'list'
    };
  },

  componentWillMount() {
    this.listView = <CustomerList collection={this.props.collection}/>;

    var model         = null;
    var defaultValue  = {};
    if( this.props.id ){
      defaultValue['id'] = this.props.id;
    }
    model = new CustomerModel(defaultValue);
    this.formView = <CustomerForm model={model} />;
  },

  handleMenu(e) {
    var action = $(e.currentTarget).data('action');
    var fragment = ['sale', 'customer'];
        fragment.push(action);
    App.router.navigate(fragment.join('/'), {trigger: true});
    if( action === 'add' ){
      this.formView = <CustomerForm model={new CustomerModel()} />;
    }
    this.setState({
      action : action
    });
  },

  render: function() {
    var subView = null;
    if( ['add', 'edit'].indexOf(this.state.action) >= 0 ){
      subView = this.formView;
    } else if( this.state.action === 'list' ) {
      subView = this.listView;
    } 
    return (
      <div>
        <div className="ui right aligned grid">
          <div className="left floated middle aligned left aligned six wide column">
            <h4 className="ui header">{ Lang.get('customer.add') }</h4>
          </div>
          <div className="right floated right aligned six wide column">
            <div className="ui secondary  menu">
              <div className="right menu">
                {this.renderMenuItem("add", ["add"].indexOf(this.state.action) >= 0, "Add", "add square")}
                {this.renderMenuItem("list", ["list"].indexOf(this.state.action) >= 0,"List", "table")}
              </div>
            </div>
          </div>
        </div>
        {subView}
      </div>
    );
  },

  renderMenuItem(action, isActive, text, icon){
    var className = "item";
    if( isActive ){
      className += " active"
    }
    icon = icon + " icon";
    return (
      <a className={className} data-action={action} onClick={this.handleMenu}>
        <i className={icon}></i>
        {text}
      </a>
    );
  }
});