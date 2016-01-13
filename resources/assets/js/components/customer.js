import React from 'react';
import ReactDOM from 'react-dom';
var CustomerForm = require('./customer/form');
var CustomerList = require('./customer/list');

module.exports = React.createClass({
  getInitialState() {
    return {
      action: this.props.action || 'list',
      id    : this.props.id || 0,
    };
  },

  componentWillMount() {
    this.listView = <CustomerList collection={this.props.collection} />;
    this.formView = <CustomerForm model={this.props.collection.create({}, {wait: true})} />;
  },

  componentDidUpdate() {
  },

  handleMenu(e) {
    var view = $(e.currentTarget).data('view');
    this.setState({
      action : view
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
                {this.renderMenuItem("add", "Add", "add square")}
                {this.renderMenuItem("list", "List", "table")}
              </div>
            </div>
          </div>
        </div>
        {subView}
      </div>
    );
  },

  renderMenuItem(view, text, icon){
    var className = "item";
    if( this.state.action === view){
      className += " active"
    }
    icon = icon + " icon";
    return (
      <a className={className} data-view={view} onClick={this.handleMenu}>
        <i className={icon}></i>
        {text}
      </a>
    );
  }
});