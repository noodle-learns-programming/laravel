import React from 'react';
import ReactDOM from 'react-dom';

module.exports = React.createClass({
  getInitialState() {
    return {
        value: null
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
          console.log(result, response)
        }
      })
    ;
  },

  handleSubmit : function(e){
    e.preventDefault();
    var fd = new FormData();
    console.log('2222222:', $(ReactDOM.findDOMNode(this.refs.form)));
    console.log('2222222:', $(ReactDOM.findDOMNode(this.refs.form)).serialize());
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
      <form ref="form" onSubmit={this.handleSubmit}>
        <h2 className="ui header">
          <img className="ui image" src="/image/school.png" />
          <div className="content">
            { Lang.get('product.add') }
          </div>
        </h2>
        <div className="ui form">
          <div className="field">
            <label>{ Lang.get('product.name') }</label>
            <input ref="name" name="name" placeholder={Lang.get('product.name')} type="text" />
          </div>
          <div className="two fields">
            <div className="field">
              <label>{ Lang.get('product.sku') }</label>
              <input ref="sku" name="sku" placeholder={Lang.get('product.sku')} type="text" />
            </div>
            <div className="field">
              <label>{ Lang.get('product.series') }</label>
              <input ref="series" name="series" placeholder={Lang.get('product.series')} type="text" />
            </div>
          </div>
          <div className="two fields">
            <div className="field">
              <label>{ Lang.get('product.brand') }</label>
              <div ref="ui_brand" className="ui search">
                <div className="ui icon input">
                  <input className="prompt" type="text" placeholder={Lang.get('product.brand')} value={this.state.brand}/>
                  <i className="github icon"></i>
                </div>
              </div>
            </div>
            <div className="field">
              <label>{ Lang.get('product.unit') }</label>
              <input placeholder={Lang.get('product.unit')} type="text" />
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