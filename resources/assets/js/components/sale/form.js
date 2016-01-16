import React from 'react';
import ReactDOM from 'react-dom';
var FileUploadMixin     = require('./../../mixins').FileUploadMixin;
var BackboneModelMixin  = require('./../../mixins').BackboneModelMixin;

module.exports = React.createClass({
  mixins : [FileUploadMixin, BackboneModelMixin],
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

  getBackboneModels(){
    return [this.props.invoice, this.props.productCollection];
  },

  searchPhoneHandle(e){
    var value = e.target.value;
    $(e.target).parent().addClass('loading');
    var customerCollection = App.getModelCollection('customer');
    customerCollection.search(value, function(res){
      var customer = res.data[0];
      this.refs.customer_name.value = customer['name'];
      $(e.target).parent().removeClass('loading');
    }.bind(this));
  },

  render: function() {
    var invoice   = this.props.invoice;
    var customer  = invoice.get('customer')
        ? invoice.getCustomer('customer').toJSON()
        : {};
    return (<form ref="form" onSubmit={this.handleSubmit}>
        <div>Invoice : #{invoice.get('id')} | Customer: {invoice.get('customer_id')}</div>
        <div className="ui form">
          <div className="two fields">
            <div className="required field">
              <label>{ Lang.get('customer.mobile_phone') }</label>
              <div className="ui icon input">
                <input ref="mobile_phone" name="mobile_phone" 
                  onChange={this.searchPhoneHandle}
                  defaultValue={customer['mobile_phone']}
                  placeholder={Lang.get('customer.mobile_phone')} />
                <i className="search icon"></i>
              </div>
            </div>
            <div className="required field">
              <label>{ Lang.get('customer.name') }</label>
              <input ref="customer_name" name="customer_name" defaultValue={customer['name']}
                placeholder={Lang.get('customer.name')} type="text" />
            </div>
          </div>
          <div>
            <h4>{Lang.get('invoce.products')}</h4>
            <p>@todo: Danh sach cac san pham</p>
            {this.renderListProduct()}
          </div>
          <div className="ui two column grid">
            <div className="column">
              <div className="required field">
                <label>{Lang.get('invoice.state')}</label>
                <select className="ui dropdown">
                  <option value="1">Đã chốt</option>
                  <option value="2">Suy nghĩ thêm</option>
                  <option value="3">Đổi trả</option>
                  <option value="4">Đã Chuyển</option>
                  <option value="5">Chuyển không thành công</option>
                </select>
              </div>
              <div className="field">
                <div className="ui checkbox">
                  <input type="checkbox" tabIndex="0" className="hidden" />
                  <label>Mua tại công ty</label>
                </div>
              </div>
              <div className="required field">
                <label>{Lang.get('invoice.transfer')}</label>
                <select className="ui dropdown">
                  <option value="1">Bưu điện</option>
                  <option value="2">Khac</option>
                </select>
              </div>
            </div>
            <div className="column">
              <div className="ui list">
                <div className="item">
                  <i className="dollar icon"></i>
                  <div className="ui right aligned content">
                    1.400.000d
                  </div>
                </div>
                <div className="item">
                  <i className="gift icon"></i>
                  <div className="ui right aligned content">
                    100.000d
                  </div>
                </div>
                <div className="item">
                  <i className="payment icon"></i>
                  <div className="ui right aligned content">
                    1.300.000d
                  </div>
                </div>
              </div>
              <div className="required field">
                <label>{Lang.get('invoice.payment_type')}</label>
                <select className="ui dropdown">
                  <option value="1">Chuyển khoản</option>
                  <option value="2">Khac</option>
                </select>
              </div>
              <div className="required field">
                <label>{Lang.get('invoice.payment_state')}</label>
                <select className="ui dropdown">
                  <option value="1">Chưa thanh toán</option>
                  <option value="2">Khac</option>
                </select>
              </div>
            </div>
          </div>
          <div>
            <h4>{Lang.get('invoice.addresses')}</h4>
            <p>@todo: Danh sach dia chi</p>
          </div>
          <div className="field">
            <label>{Lang.get('invoice.note')}</label>
            <textarea rows="2"></textarea>
          </div>
          <div className="actions">
            <button className="ui primary button">Save</button>
            <div className="ui cancel button">Cancel</div>
          </div>
        </div>
      </form>
    );
  },
  renderListProduct(){
    var rows = [];
    this.props.productCollection.each(function(product, i){
      rows.push(
        <p key={i}>{product.get('name')}</p>
      );
    });
    return rows;
  }
});