import React from 'react';
import ReactDOM from 'react-dom';
var BackboneModelMixin  = require('./../../mixins').BackboneModelMixin;

module.exports = React.createClass({
  mixins : [BackboneModelMixin],
  getInitialState() {
    return {
      collection : App.getModelCollection('stock')
    };
  },
  getBackboneModels(){
    return [this.state.collection];
  },
  componentDidMount() {
    this.state.collection.fetch();
  },
  render: function() {
    var options = [];
    this.state.collection.each(function(stock){
      options.push(<option value={stock.id}>{stock.get('name')}</option>)
    });
    return (<select>
      {options}
    </select>);
  }
});