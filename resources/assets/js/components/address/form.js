import React from 'react';
import ReactDOM from 'react-dom';

module.exports = React.createClass({
  getInitialState() {
    return {
      model : this.props.model
    };
  },

  handleSubmit(e){
    e.preventDefault();
    var formDOM = this.refs.form.getDOMNode();
    if( !$(formDOM).form('is valid') ) {
      return false;
    }
    var fd     = $(formDOM).serializeObject();
    var model  = this.props.model;
    model.save(fd)
      .then(function(res, result, xhr){
        var isSuccess = result==='success';
        this.props.hideModal();
      }.bind(this));
  },

  componentWillReceiveProps(nextProps) {
    this.setState({
      model : nextProps.model.clone()
    });
  },

  

  handleChange(e){
    var el = e.target;
    this.state.model.set(el.name, el.value);
    this.forceUpdate();
  },

  render: function() {
    var model   = this.state.model;
    return (<form ref="form" onSubmit={this.handleSubmit}>
        <div className="ui form">
          <div className="required field">
            <label>{ Lang.get('customer.address') }</label>
            <input ref="address" name="address" value={model.get('address')} onChange={this.handleChange}
              placeholder={Lang.get('customer.address')} type="text" />
          </div>
          <div className="actions">
            <button className={"ui primary " + this.state.loading + " button"}>{Lang.get('form.save')}</button>
            <div className="ui cancel button">{Lang.get('form.cancel')}</div>
          </div>
        </div>
      </form>
    );
  }
});