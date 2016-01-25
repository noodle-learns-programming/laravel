import React from 'react';
import ReactDOM from 'react-dom';
var StockSelect = require('./stock/select');

module.exports = React.createClass({
  getInitialState() {
    return {
      brand       : 0,
      showMessage : false
    };
  },

  componentDidMount() {
    $(ReactDOM.findDOMNode(this.refs.ui_brand))
      .search({
        apiSettings: {
          url: '/api/search?q={query}&type=brand'
        },
        fields: {
          results : 'items',
          title   : 'name'
        },
        minCharacters : 3,
        onSelect: function(result, response) {
          this.setState({
            brand: result.id
          })
        }.bind(this)
      })
    ;
    $(ReactDOM.findDOMNode(this.refs.form))
      .form({
        on: 'blur',
        fields: {
          name    : 'empty',
          sku     : 'empty',
          series  : 'empty',
          brand   : 'empty',
          unit    : 'empty'
        },
        onSuccess : function(e, fields){
          e.preventDefault();
          return false;
        }
      })
    ;
  },

  handleSubmit : function(e){
    e.preventDefault();
    var formDOM = ReactDOM.findDOMNode(this.refs.form);
    var isValid = $(formDOM)
      .form('is valid');
    if( !isValid ) {
      return false;
    }
    var fd    = new FormData(formDOM);
    fd.append('brand_id', this.state.brand);
    $.ajax({
      url : '/stock/product',
      data: fd,
      processData: false,
      contentType: false,
      enctype: 'multipart/form-data',
      type: 'POST',
      success: function(data){
        this.setState({
          showMessage : true
        });
      }.bind(this)
    });
  },

  handleBrand : function(e){

  },

  handleMessage: function(e){
    /*$(e.target)
      .closest('.message')
      .transition('fade')
    ;*/
    this.setState({
      showMessage : false
    });
  },

  componentDidUpdate() {
  },

  render: function() {
    var message = '';
    if( this.state.showMessage ) {
      message = (<div ref="message" className="ui success message">
          <i className="close icon" onClick={this.handleMessage}></i>
          <div className="header">
            Message
          </div>
          <p>Save product is successful.</p>
      </div>);
    }
    return (
      <form ref="form" onSubmit={this.handleSubmit} method="post">
        <h2 className="ui header">
          <img className="ui image" src="/image/school.png" />
          <div className="content">
            { Lang.get('product.add') }
          </div>
        </h2>
        {message}
        <div className="ui form">
          <div className="two fields">
            <div className="required field">
              <label>{ Lang.get('product.name') }</label>
              <input ref="name" name="name" placeholder={Lang.get('product.name')} type="text" />
            </div>
            <div className="required field">
              <label>{ Lang.get('product.stock') }</label>
              <StockSelect field_name="stock_id"/>
            </div>
          </div>
          <div className="two fields">
            <div className="required field">
              <label>{ Lang.get('product.sku') }</label>
              <input ref="sku" name="sku" placeholder={Lang.get('product.sku')} type="text" />
            </div>
            <div className="required field">
              <label>{ Lang.get('product.series') }</label>
              <input ref="series" name="series" placeholder={Lang.get('product.series')} type="text" />
            </div>
          </div>
          <div className="two fields">
            <div className="required field">
              <label>{ Lang.get('product.brand') }</label>
              <div ref="ui_brand" className="ui search">
                <div className="ui icon input">
                  <input className="prompt" type="text" placeholder={Lang.get('product.brand')}
                    ref="brand" name="brand" onChange={this.handleBrand} />
                  <i className="search icon"></i>
                </div>
              </div>
            </div>
            <div className="required field">
              <label>{ Lang.get('product.unit') }</label>
              <input ref="unit" name="unit" placeholder={Lang.get('product.unit')} type="text" />
            </div>
          </div>
          <div className="two fields">
            <div className="field">
              <label>{ Lang.get('product.image') }</label>
              <input ref="image" name="image" placeholder={Lang.get('product.image')} type="file" />
            </div>
            <div className="field">
              <label>{ Lang.get('product.description') }</label>
              <textarea ref="description" name="description" placeholder={Lang.get('product.description')}></textarea>
            </div>
          </div>
          <button className="ui submit button">Submit</button>
        </div>
      </form>
    );
  }
});