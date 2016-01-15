import React from 'react';
import ReactDOM from 'react-dom';
var FileUploadMixin   = require('./../../mixins').FileUploadMixin;

module.exports = React.createClass({
  mixins : [FileUploadMixin],
  filename  : null,
  getInitialState() {
    return {
      showMessage : false
    };
  },

  componentDidMount() {
    this.setHandleUploadType('customer');

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

  handleSubmit(e){
    e.preventDefault();
    var formDOM = ReactDOM.findDOMNode(this.refs.form);
    if( !$(formDOM).form('is valid') ) {
      return false;
    }
    var fd          = $(formDOM).serializeObject();
    if( this.getUploadFilename() ){
      fd['image']   = this.getUploadFilename();
    }
    var model  = this.props.model;
    /**
     |----------------------------------------------
     | Save model voi isNew = false (tuc la da ton tai)
     | response khong tra ve do dung method PUT
     | Can tim cach fix cho nay de show cai message
     |----------------------------------------------
     */
    model.save(fd,{
      success : function(res){
        /**
         |------------------------------------------
         | @note: res === customer
         |------------------------------------------
         */
        this.setState({
          showMessage : true
        });
        formDOM.reset();
      }.bind(this)
    });
  },

  handleMessage(e){
    this.setState({
      showMessage : false
    });
  },

  componentDidUpdate() {
  },

  getImage(){
    if( this.state.uploadFilename ){
      return this.state.uploadFilename;
    }
    var model = this.props.model;
    if( model.get('image') ){
      return '/upload/customer/' + model.get('image');
    }
    return '/image/wireframe/square-image.png';
  },

  handleChange(e){
    var el = e.target;
    this.props.model.set(el.name, el.value);
    this.forceUpdate();
  },

  render: function() {
    var message = (<div></div>);
    var model   = this.props.model;
    if( this.state.showMessage ) {
      message = (<div ref="message" className="ui success message">
          <i className="close icon" onClick={this.handleMessage}></i>
          <div className="header">
            Message
          </div>
          <p>Save customer is successful.</p>
      </div>);
    }
    return (<form ref="form" onSubmit={this.handleSubmit}>
        {message}
        <div className="ui form">
          <div className="required field">
            <label>{ Lang.get('customer.name') }</label>
            <input ref="name" name="name" value={model.get('name')} onChange={this.handleChange}
              placeholder={Lang.get('customer.name')} type="text" />
          </div>
          <div className="two fields">
            <div className="required field">
              <label>{ Lang.get('customer.mobile_phone') }</label>
              <input ref="mobile_phone" name="mobile_phone" value={model.get('mobile_phone')} onChange={this.handleChange}
                placeholder={Lang.get('customer.mobile_phone')} type="text" />
            </div>
            <div className="required field">
              <label>{ Lang.get('customer.home_phone') }</label>
              <input ref="home_phone" name="home_phone" value={model.get('home_phone')} onChange={this.handleChange}
                placeholder={Lang.get('customer.home_phone')} type="text" />
            </div>
          </div>
          <div className="two fields">
            <div className="required field">
              <label>{ Lang.get('customer.gender') }</label>
              <select ref="gender" name="gender" value={model.get('gender')} onChange={this.handleChange}
                className="ui fluid simple dropdown">
                <option value="">{Lang.get('customer.gender')}</option>
                <option value="1">Male</option>
                <option value="2">Female</option>
              </select>
            </div>
            <div className="required field">
              <label>{ Lang.get('customer.dob') }</label>
              <input ref="dob" name="dob" value={model.get('dob')} onChange={this.handleChange}
                placeholder={Lang.get('customer.dob')} type="text" />
            </div>
          </div>
          <div className="required field">
            <label>{ Lang.get('customer.address') }</label>
            <input ref="address" name="address" value={model.get('address')} onChange={this.handleChange}
              placeholder={Lang.get('customer.address')} type="text" />
          </div>
          <div className="two fields">
            <div className="field">
              <div className="ui two column grid">
                <div className="row">
                  <div className="column">
                    <img className="ui top aligned small image" src={this.getImage()} />
                  </div>
                  <div className="column">
                    <label>{ Lang.get('customer.image') }</label>
                    <input ref="image" name="image" onChange={this.handleUploadFile}
                      placeholder={Lang.get('customer.image')} type="file" />
                  </div>
                </div>
              </div>
            </div>
            <div className="field">
              <label>{ Lang.get('customer.description') }</label>
              <textarea ref="description" name="description" value={model.get('description')} onChange={this.handleChange}
                placeholder={Lang.get('customer.description')}></textarea>
            </div>
          </div>
          <div className="actions">
            <button className="ui primary button">Save</button>
            <div className="ui cancel button">Cancel</div>
          </div>
        </div>
      </form>
    );
  }
});