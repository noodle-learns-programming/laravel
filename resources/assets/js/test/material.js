import React from 'react';
import DatePicker from 'material-ui/lib/date-picker/date-picker';
import DatePickerDialog from 'material-ui/lib/date-picker/date-picker-dialog';
import RaisedButton from 'material-ui/lib/raised-button';
import RefreshIndicator from 'material-ui/lib/refresh-indicator';
import TimePicker from 'material-ui/lib/time-picker';

module.exports = React.createClass({
  render: function () {
    return (
      <div>
      	<DatePicker hintText="Inline" container="inline" />
      	<TimePicker format="ampm" hintText="12hr Format" />
      </div>
    );
  }
});