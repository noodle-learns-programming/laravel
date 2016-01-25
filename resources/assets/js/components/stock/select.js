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
    var options = [
      <option value="0">--{Lang.get('stock.please_select_one')}--</option>
    ];
    this.state.collection.each(function(stock){
      options.push(<option value={stock.id}>
        {stock.get('name')} - {stock.get('address')}
      </option>);
    });
    return (<select name={this.props.field_name}>
      {options}
    </select>);
  }
});