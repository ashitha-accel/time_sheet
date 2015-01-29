var React = require('react');
var Router = require('react-router'); // or var Router = ReactRouter; in browsers
var Route = Router.Route, DefaultRoute = Router.DefaultRoute, Link=Router.Link, RouteHandler = Router.RouteHandler;

var Header = require('./components/Header');
var Footer = require('./components/Footer');

var Dashboard = require('./components/Dashboard');
var Project = require('./components/Project');
var Tasks = require('./components/Tasks');
var User = require('./components/User');


var App = React.createClass({
  render: function () {  	
    return (    
      <div>
        <header>
          <Header/>
          <ul>
            <li><Link to="app">Dashboard</Link></li>
            <li><Link to="project">Project</Link></li>
            <li><Link to="tasks">Tasks</Link></li>
            <li><Link to="user">User</Link></li>
          </ul>
        <RouteHandler/>
        </header>
        <Footer/>
      </div>
    );
  }
});

var routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="project" handler={Project}/>
    <Route name="tasks" handler={Tasks}/>
    <Route name="user" handler={User}/>
    <DefaultRoute handler={Dashboard}/>
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body);
});
