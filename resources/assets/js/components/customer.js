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

  componentDidMount() {
    console.log('App:', App);   
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
      subView = <CustomerList collection={App.getModelCollection('product')} />;
    } else if (this.state.subView === 'add') {
      subView = <CustomerForm collection={this.props.collection} />;
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
                <a className="item" data-view="add" onClick={this.handleMenu}>
                  <i className="add square icon"></i>
                  Add
                </a>
                <a className="item" data-view="list" onClick={this.handleMenu}>
                  <i className="table icon"></i>
                  List
                </a>
              </div>
            </div>
          </div>
        </div>
        {subView}
      </div>
    );
  }
});