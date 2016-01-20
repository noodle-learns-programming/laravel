import React from 'react';
import ReactDOM from 'react-dom';
var AddressForm = require('./../address/form');
var BackboneModelMixin  = require('./../../mixins').BackboneModelMixin;

module.exports = React.createClass({
  mixins : [BackboneModelMixin],
  getBackboneModels(){
    return [this.props.collection];
  },
  componentDidUpdate(){
    var listAddressesEl = this.refs.listAddresses;
    $(listAddressesEl)
      .find('.ui.radio.checkbox')
      .checkbox();
  },
  componentWillReceiveProps(nextProps) {
    this.forceUpdate();
  },
  render() {
    return (
      <div>
        <table ref="listAddresses" className="ui black table">
          <thead>
              <tr>
                <th>{Lang.get('customer.address')}</th>
                <th>{Lang.get('customer.address_is_active')}</th>
              </tr>
          </thead>
          <tbody>{this.renderListAddresses()}</tbody>
          <tfoot>
            <tr>
              <td colSpan="2" className="ui right aligned">
                <div onClick={this.handleAddAnAddress} className="ui primary button">
                  {Lang.get('customer.add_an_address')}
                </div>
              </td>
            </tr>
          </tfoot>
        </table>
        <div ref="modal" className="ui modal">
          <div className="header">Header</div>
          <div className="content" ref="modalContent">
          </div>
        </div>
      </div>
    );
  },

  hideModal(model, isSaved)
  {
    var modal = this.refs.modal;
        $(modal).modal('hide');
    if( isSaved )
    {
      this.props.collection.push(model);
      this.forceUpdate();
    }
  },

  handleAddAnAddress(e)
  {
    var model = this.props.collection.create({}, {wait: true});
    var modal = this.refs.modal;
        $(modal).modal('show');
    var content = this.refs.modalContent;
        ReactDOM.render(<AddressForm model={model} hideModal={this.hideModal}/>, content);
  },

  renderListAddresses(){
    var rows = [];
    this.props.collection.each(function(address, i){
      rows.push(
        <tr key={i}>
          <td>{address.get('address')}</td>
          <td>
            <div className="field">
              <div className="ui radio checkbox">
                <input className="hidden" checked={address.get('is_active')|0}
                  type="radio" name="address[is_active]" />
              </div>
            </div>
          </td>
        </tr>
      );
    }.bind(this));

    if( !rows.length ){
      return (
        <tr>
          <td colSpan="2">{Lang.get('customer.addresses_list_empty')}</td>
        </tr>
      );
    }

    return rows;
  }
});