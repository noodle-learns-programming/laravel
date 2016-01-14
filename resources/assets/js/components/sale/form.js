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
    
  },

  handleSubmit(e){
    e.preventDefault();
  },

  handleMessage(e){
    this.setState({
      showMessage : false
    });
  },

  componentDidUpdate() {
  },

  getImage(){
    if( this.state.uploadFilename )
    {
      return this.state.uploadFilename;
    }
    return '/image/wireframe/square-image.png';
  },

  handleChange(e){
    var el = e.target;
    this.props.model.set(el.name, el.value);
    this.forceUpdate();
  },

  render: function() {
    return (<form ref="form" onSubmit={this.handleSubmit}>
        <div className="ui form">
          <div className="two fields">
            <div className="required field">
              <label>{ Lang.get('customer.mobile_phone') }</label>
              <input ref="mobile_phone" name="mobile_phone"
                placeholder={Lang.get('customer.mobile_phone')} type="text" />
            </div>
            <div className="required field">
              <label>{ Lang.get('customer.fullname') }</label>
              <input ref="fullname" name="fullname"
                placeholder={Lang.get('customer.fullname')} type="text" />
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