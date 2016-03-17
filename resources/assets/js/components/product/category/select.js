import React from 'react';
import ReactDOM from 'react-dom';
var BackboneModelMixin  = require('./../../../mixins').BackboneModelMixin;

module.exports = React.createClass({
  mixins : [BackboneModelMixin],
  getInitialState() {
    return {
      collection : App.getModelCollection('category')
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
      <option value="">--{Lang.get('product.category_select')}--</option>
    ];
    this.state.collection.each(function(item){
      options.push(<option value={item.id} key={item.id}>
        {item.get('name')}
      </option>);
    });
    return (<select value={this.props.value}
      name={this.props.field_name}>
      {options}
    </select>);
  }
});