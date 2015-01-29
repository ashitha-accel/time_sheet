/**
 * Header
 */

var React = require('react');
var ReactPropTypes = React.PropTypes;

var Header = React.createClass({

  render: function() {
    return (
	      <div><h1>Timesheet</h1></div>
    );
  }

});

module.exports = Header;