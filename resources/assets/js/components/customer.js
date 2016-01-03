import React from 'react';
import ReactDOM from 'react-dom';

module.exports = React.createClass({
  getInitialState() {
    return {
      showMessage : false
    };
  },

  componentDidMount() {
    $(ReactDOM.findDOMNode(this.refs.form))
      .form({
        on: 'blur',
        fields: {
          name    : 'empty'
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
    $.ajax({
      url : '/sale/customer',
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

  handleMessage: function(e){
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
          <p>Save customer is successful.</p>
      </div>);
    }
    return (
      <form ref="form" onSubmit={this.handleSubmit} method="post">
        <h2 className="ui header">
          <img className="ui image" src="/image/school.png" />
          <div className="content">
            { Lang.get('customer.add') }
          </div>
        </h2>
        {message}
        <div className="ui form">
          <div className="required field">
            <label>{ Lang.get('customer.name') }</label>
            <input ref="name" name="name" placeholder={Lang.get('customer.name')} type="text" />
          </div>
          <div className="two fields">
            <div className="required field">
              <label>{ Lang.get('customer.mobile_phone') }</label>
              <input ref="mobile_phone" name="mobile_phone" placeholder={Lang.get('customer.mobile_phone')} type="text" />
            </div>
            <div className="required field">
              <label>{ Lang.get('customer.home_phone') }</label>
              <input ref="home_phone" name="home_phone" placeholder={Lang.get('customer.home_phone')} type="text" />
            </div>
          </div>
          <div className="two fields">
            <div className="required field">
              <label>{ Lang.get('customer.gender') }</label>
              <select ref="gender" name="gender" className="ui fluid simple dropdown">
                <option value="">{Lang.get('customer.gender')}</option>
                <option value="1">Male</option>
                <option value="2">Female</option>
              </select>
            </div>
            <div className="required field">
              <label>{ Lang.get('customer.dob') }</label>
              <input ref="dob" name="dob" placeholder={Lang.get('customer.dob')} type="text" />
            </div>
          </div>
          <div className="required field">
            <label>{ Lang.get('customer.address') }</label>
            <input ref="address" name="address" placeholder={Lang.get('customer.address')} type="text" />
          </div>
          <div className="two fields">
            <div className="field">
              <label>{ Lang.get('customer.image') }</label>
              <input ref="image" name="image" placeholder={Lang.get('customer.image')} type="file" />
            </div>
            <div className="field">
              <label>{ Lang.get('customer.description') }</label>
              <textarea ref="description" name="description" placeholder={Lang.get('customer.description')}></textarea>
            </div>
          </div>
          <button className="ui submit button">Submit</button>
        </div>
      </form>
    );
  }
});