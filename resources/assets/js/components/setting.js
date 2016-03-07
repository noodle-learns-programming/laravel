import React from 'react';
import ReactDOM from 'react-dom';

module.exports = React.createClass({
  getInitialState() {
    return {
    };
  },

  componentWillMount() {
    
  },

  render: function() {
    return (
      <div>
        <div className="ui right aligned grid">
          <div className="left floated middle aligned left aligned six wide column">
            <h4 className="ui header">{ Lang.get('customer.add') }</h4>
          </div>
          <div className="right floated right aligned six wide column">
            <div className="ui secondary  menu">
              <div className="right menu">
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});