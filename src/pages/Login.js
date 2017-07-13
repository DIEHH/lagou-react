import React ,{Component} from 'react';
import './Login.css';
import {Link,IndexLink,browserHistory}  from 'react-router';

class Login extends Component{
	constructor(){
		super();
		this.state={
			isLogin : {
				no : false,
				yes : true
			},
			none : {
				display : "none"
			},
			block : {
				display : "block"
			}
		}
		this.handleLogin = this.handleLogin.bind(this)
	}
	handleLogin(){
		var userName = this.refs.userInput.value
		localStorage.setItem("userName",userName);
		localStorage.setItem("isLogin",this.state.isLogin.yes)
		browserHistory.push({
			url: "/"

		})
	}
	render(){
		return (
			<div className="radial">
				<div className="new_wrapper">

	    			<form data-view="loginView">

	    				<div className="new_register">

	    					<div data-propertyname="username" data-controltype="Phone" style={{display:"block"}}>
	    						<input type="text" placeholder="已验证手机/邮箱" className="border_btm r_email top" ref="userInput" />
	    					</div>

	    					<div data-propertyname="password" data-controltype="Password" style={{display:"block"}}>
a
								<div>
									<input type="password" placeholder="密码" className="r_psw btm" maxLength="16" />
									<i className="eye"></i>
								</div>

	    					</div>

	    				</div>

	        			<div id="vcodeWrap" data-propertyname="request_form_verifyCode" data-controltype="VerifyCode" style={{display:"none"}}>
	            			<input type="text" id="vcode" name="vcode" tabIndex="3" placeholder="请证明你不是机器人" /> 
	            			<img src="" width="113" height="42" id="vcodeImg" />
	            			<a>看不清楚，<em>换一张</em></a>   
	          				<span className="error" style={{display:"none"}} id="vcodeError"></span>
	        			</div>
	    				<div data-propertyname="submit" data-controltype="Botton" style={{display:"block"}}>
	    					<input type="button" className="btn_green" value="登录" onClick={this.handleLogin} />
	    				</div>
	    	
	    			</form>
	    			<div className="register_text">还没帐号？</div>
    				<a href="../register/register.html" className="btn_green_border">注册</a>
				</div>
			</div>
			)
	}
}


export default Login;