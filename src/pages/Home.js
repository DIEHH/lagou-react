import React ,{Component} from 'react';
import "./Home.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import JobList from "../components/JobList";


class Home extends Component{
	constructor(){
		super();
		this.state={
			compile : {
				loginOut : "去登陆",
				loginUp : "编辑"
			},
			reserve : {
				loginOut : "10秒钟定制职位",
				loginUp : ""
			},
			pageNo : 1,
			jobList : [],
			isHide : true
		}
		this.onload = this.onload.bind(this);
	}
	componentDidMount(){
		var _this = this;
			fetch('https://m.lagou.com/listmore.json?pageNo='+ _this.state.pageNo +'&pageSize=15', {
				method: 'GET'
			})
			.then(function(response) {
			    return response.text()
			}).then(function(res) {
				_this.setState({
					jobList : _this.state.jobList.concat(JSON.parse(res).content.data.page.result)
				})
			})

	}
	onload(){
		var _this = this
		this.setState({
			pageNo : ++this.state.pageNo
		})
		fetch('https://m.lagou.com/listmore.json?pageNo='+ _this.state.pageNo +'&pageSize=15', {
				method: 'GET'
			})
			.then(function(response) {
			    return response.text()
			}).then(function(res) {
				_this.setState({
					jobList : _this.state.jobList.concat(JSON.parse(res).content.data.page.result)
				})
			})
	}
	render(){

		return (
			<div className="content">
				<Header isHide={this.state.isHide} />
				<JobList jobList={this.state.jobList} compile={this.state.compile} reserve={this.state.reserve} onload={this.onload}/>
			</div>
			)
	}
} 

export default Home;