import React,{Component} from 'react';
import './JobList.css';
import JobItem from './JobItem';
import {Link} from 'react-router';

class JobList extends Component{
	constructor(){
		super();
		this.state={
			isLogin : JSON.parse(localStorage.getItem("isLogin")),
			to : {
				loginUp : "/",
				loginOut : "/login"
			}
		}
		this.handleLoad = this.handleLoad.bind(this);
	}
	render(){
		var _this = this
		var list = this.props.jobList.map(function(ele,idx){
			return(
					<JobItem key={idx} context={ele} />
				)
		})
		return (
				<div className="jobList">
				<div className="filtrate"><span>{this.state.isLogin ? this.props.reserve.loginUp : this.props.reserve.loginOut}</span><Link to={this.state.isLogin ? this.state.to.loginUp : this.state.to.loginOut} className="login" onClick={this.handleChange} activeClassName="active" >{this.state.isLogin ? this.props.compile.loginUp : this.props.compile.loginOut}</Link></div>
					<ul>
						{list}
						<li className="activeable list-more" onClick={this.handleLoad}>加载更多</li>
					</ul>
					<div className="copyright">
						<p>©2015 lagou.com, all right reserved </p>
						<div className="copyright-item">
							<span className="phone active">移动版&nbsp;·&nbsp;</span>
							<span className="computer">电脑版&nbsp;·&nbsp;</span>
							<a href="#header">回顶部</a>
						</div>
					</div>
				</div>
			)
	}
	handleLoad(){
		this.props.onload();
	}
}

export default JobList;