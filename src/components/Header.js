import React , {Component} from 'react';
import './Header.css';
import {Link,IndexLink,browserHistory}  from 'react-router';

class Header extends Component{
	constructor(){
		super();
		this.state={
			none : {
				display:"none"
			},
			title : "拉勾网"
		}
		this.handleGoBack = this.handleGoBack.bind(this);
	}
	componentWillMount(){
		if(this.props.isHide){
			this.setState({
				none : {
					display:"none"
				},
				title : "拉勾网"
			})
		}else{
			this.setState({
				none : {
					display:"block"
				},
				title : "职位详情"
			})
		}
	}
	handleGoBack(){
		var url = "/";
		browserHistory.push({
			pathName:url
		})

	}
	render(){

		return(
			<div className='header' id="header" >
				<p className="glyphicon glyphicon-menu-left p1" onClick={this.handleGoBack} style={this.state.none} ></p>
				<p className="glyphicon glyphicon-home p2" style={this.state.none} onClick={this.handleGoBack}></p>
				<p>{this.state.title}</p>
			</div>
			)
	}
}

export default Header;