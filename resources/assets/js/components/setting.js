import React from 'react';
import ReactDOM from 'react-dom';

module.exports = React.createClass({
  getInitialState() {
    return {
    };
  },

  componentWillMount() {
    
  },

  render: function() {
    return (
      <table className="ui black table">
        <thead>
            <tr>
              <th>{Lang.get('setting.manage_list_name')}</th>
              <th>{Lang.get('setting.manage_list_description')}</th>
              <th>{Lang.get('setting.manage_list_category')}</th>
              <th>{Lang.get('setting.manage_list_value')}</th>
              <th>{Lang.get('setting.manage_list_is_system')}</th>
              <th>{Lang.get('setting.manage_list_is_default')}</th>
              <th>{Lang.get('setting.manage_list_user')}</th>
              <th>{Lang.get('setting.manage_list_order')}</th>
              <th>{Lang.get('setting.manage_list_updated_at')}</th>
            </tr>
        </thead>
      </table>
    );
  }
});