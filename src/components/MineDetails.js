import React ,{Component} from 'react';
import './MineDetails.css';
import {Link,IndexLink,browserHistory}  from 'react-router';


class MineDetails extends Component{
	constructor(){
		super();
		this.state={
			login : {
				no : false,
				yes : true
			},
			none : {
				display : "none"
			},
			block : {
				display : "block"
			},
			userName : localStorage.getItem("userName"),
			isLogin : JSON.parse(localStorage.getItem("isLogin"))

		}
		this.login = this.login.bind(this);
		this.loginOut = this.loginOut.bind(this);
	}
	login(){
		var url = "/login"
        browserHistory.push({
          pathname:url
         })
	}
	loginOut(){
		localStorage.setItem("isLogin",this.state.login.no)
		localStorage.removeItem("userName")
	}
	render(){
		console.log(this.state.isLogin)
		return(
			<div className="cont">

	        	<div className="logininfo">
	                <div className="nologin center" style={ this.state.isLogin ? this.state.none : this.state.block} >
	                    <a className="loginbut" href="/login"  target="_self" onClick={this.login} >登录 / 注册</a>
	                </div>
	                <div className="haslogin center" style={ this.state.isLogin ? this.state.block : this.state.none}>
                        <a className="button" href="http://www.lagou.com/center/preview.html" target="_self"> 简历&gt; </a>
                        <div className="headcon">
                        	<img className="headpic" src="//www.lgstatic.com/i/image/M00/38/50/CgpFT1lKOL2ABeTIAAXnLa9Tbf4827.jpg" />
                   		</div>
                    	<div className="name">何义垚</div>
                	</div>
	            </div>
        
		        <div className="buttons">
		            <a className="button deliver" href="/">
		                <span>投递</span>
		            </a>
		            <a className="button interview" href="/">面试</a>
		            <a className="button invitation" href="/">
		                <span>邀约</span>
		            </a>
		            <a className="button collect" href="/">收藏</a>
		        </div>
		        <a className="logout" href="/" style={ this.state.isLogin ? this.state.block : this.state.none} onClick={this.loginOut} >退出登录</a>

            </div>
			)
	}
}


export default MineDetails;