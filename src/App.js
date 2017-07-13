import React, { Component } from 'react';
import {Link,IndexLink}  from 'react-router';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          {this.props.children}
          <div className="container">
					<div className="row"  role="nav">
						<IndexLink to="/" className="col-xs-4 glyphicon glyphicon-home" activeClassName="active">职位</IndexLink>
						<Link to="/search" className="col-xs-4 glyphicon glyphicon-search" activeClassName="active">搜索</Link>
						<Link to="/mine" className="col-xs-4 glyphicon glyphicon-user" activeClassName="active">我的</Link>
					</div>
				</div>
      </div>
    );
  }
}

export default App;
