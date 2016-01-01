import React from 'react';

module.exports = React.createClass({
  getInitialState() {
    return {
        value: null
    };
  },

  componentDidMount() {
    
  },

  handleSubmit : function(e){
    e.preventDefault();
    var fd = new FormData();    
    fd.append('file', this.refs.file.getDOMNode().files[0]);

    $.ajax({
      url : '/product',
      data: fd,
      processData: false,
      contentType: false,
      type: 'POST',
      success: function(data){
        alert(data);
      }
    });
  },

  componentDidUpdate() {
  },

  render: function() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2 className="ui header">
          <img className="ui image" src="/image/school.png" />
          <div className="content">
            { Lang.get('product.add') }
          </div>
        </h2>
        <div className="ui form">
          <div className="field">
            <label>{ Lang.get('product.name') }</label>
            <input placeholder={Lang.get('product.name')} type="text" />
          </div>
          <div className="two fields">
            <div className="field">
              <label>{ Lang.get('product.sku') }</label>
              <input placeholder={Lang.get('product.sku')} type="text" />
            </div>
            <div className="field">
              <label>{ Lang.get('product.series') }</label>
              <input placeholder={Lang.get('product.series')} type="text" />
            </div>
          </div>
          <div className="two fields">
            <div className="field">
              <label>{ Lang.get('product.brand') }</label>
              <input placeholder={Lang.get('product.brand')} type="text" />
            </div>
            <div className="field">
              <label>{ Lang.get('product.unit') }</label>
              <input placeholder={Lang.get('product.unit')} type="text" />
            </div>
          </div>
          <div className="two fields">
            <div className="field">
              <label>{ Lang.get('product.image') }</label>
              <input ref="file" placeholder={Lang.get('product.image')} type="file" />
            </div>
            <div className="field">
              <label>{ Lang.get('product.description') }</label>
              <textarea placeholder={Lang.get('product.description')}></textarea>
            </div>
          </div>
          <div className="ui submit button">Submit</div>
        </div>
      </form>
    );
  }
});