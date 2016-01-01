import React from 'react';
module.exports = React.createClass({
  getInitialState() {
    return {
      fragment  : '',
      route     : 'Dashboard'
    };
  },
  componentDidMount() {
    this.props.router.on("route", this.onRoute);
  },
  componentDidUpdate() {
    //this.props.router.off("route");
  },
  onRoute : function(route, params)
  {
    var fragment = Backbone.history.getFragment();
    this.setState({
      fragment  : fragment,
      route     : route,
      params    : params
    })
  },
  render: function() {
    var arrFragments = [];
    if( this.state.fragment ){
      arrFragments = this.state.fragment.split('/');
    }
    var href = '';
    return (
      <div className="ui breadcrumb">
        <a className="section" href="#">{Lang.get('common.dashboard')}</a>
        {arrFragments.map(function(fragment, i){
          {href += (href?'/':'') + fragment}
          return [
            <div className="divider"> / </div>,
            <a className="active section" href={"#"+href}>{Lang.get('common.'+fragment)}</a>
          ]
        })}
      </div>
    );
  }
});