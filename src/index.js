import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory,IndexRoute,browserHistory } from 'react-router';
import App from './App';
import Home from './pages/Home';
import Search from './pages/Search';
import Mine from './pages/Mine';
import Login from './pages/Login';
import jobs from './pages/JobDetails';

import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
    	<IndexRoute component={Home}/>
    	<Route path="/search" component={Search} />
    	<Route path="/mine" component={Mine} />
    </Route>
    <Route path="/login" component={Login} />
    <Route path="/jobs/*.*" component={jobs} />
  </Router>
), document.getElementById('root'));
registerServiceWorker();
