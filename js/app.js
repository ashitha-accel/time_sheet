var React = require('react');
var Router = require('react-router'); // or var Router = ReactRouter; in browsers
var Route = Router.Route, 
	DefaultRoute = Router.DefaultRoute,
  	Link=Router.Link, 
  	RouteHandler = Router.RouteHandler;

var Inbox = React.createClass({
	render:function(){
		return(
		<div>Inbox</div>
		);
	}
});
var Calendar = React.createClass({
	render:function(){
		return(
		<div>Calendar</div>
		);
	}
});
var Dashboard = React.createClass({
	render:function(){
		return(
		<div>Dashboard</div>
		);
	}
});
var App = React.createClass({
  render: function () {  	
    return (    
      <div>
        <header>
          <ul>
            <li><Link to="app">Dashboard</Link></li>
            <li><Link to="inbox">Inbox</Link></li>
            <li><Link to="calendar">Calendar</Link></li>
          </ul>
        <RouteHandler/>
        </header>
      </div>
    );
  }
});

var routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="inbox" handler={Inbox}/>
    <Route name="calendar" handler={Calendar}/>
    <DefaultRoute handler={Dashboard}/>
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body);
});