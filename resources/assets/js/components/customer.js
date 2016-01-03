import React from 'react';
import ReactDOM from 'react-dom';
var CustomerForm = require('./customer/form');
var CustomerList = require('./customer/list');

module.exports = React.createClass({
  getInitialState() {
    return {
      subView : 'list'
    };
  },

  componentWillMount() {
    this.listView = <CustomerList collection={App.getModelCollection('product')} />;
    this.formView = <CustomerForm collection={this.props.collection} />;
  },

  componentDidUpdate() {
  },

  handleMenu(e) {
    var view = $(e.currentTarget).data('view');
    this.setState({
      subView : view
    });
  },

  render: function() {
    var subView = null;
    if( this.state.subView === 'list'){
      subView = this.listView ;
    } else if (this.state.subView === 'add') {
      subView = this.formView;
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
    if( this.state.subView === view){
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