import React from 'react';

module.exports = React.createClass({
  componentDidUpdate(){
    var listAddressesEl = this.refs.listAddresses.getDOMNode();
    $(listAddressesEl)
      .find('.ui.radio.checkbox')
      .checkbox();
  },
  render() {
    return (
      <table ref="listAddresses" className="ui black table">
        <thead>
            <tr>
              <th>{Lang.get('customer.address')}</th>
              <th>{Lang.get('customer.address_is_active')}</th>
            </tr>
        </thead>
        <tbody>{this.renderListAddresses()}</tbody>
      </table>
    );
  },

  handleItem(product, action){
    var currentQty = product.get('quality') || 0;
    if( action === 'incr'){
      product.set('quality', ++currentQty);
      this.props.collection.push(product);
    } else if( action === 'decr'){
      if( currentQty > 0 ){
        product.set('quality', --currentQty);  
        this.props.collection.push(product);
      }
    } else if( action === 'remove' ){
      this.props.collection.remove(product);
    }
  },

  renderListAddresses(){
    var invoice   = this.props.invoice;
    var rows = [];
    if( invoice.get('customer') )
    {
      var customer  = invoice.get('customer');
      customer.getAddresses().each(function(address, i){
        console.log(address);
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
    }
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