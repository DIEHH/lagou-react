import React ,{Component} from 'react';
import "./Search.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import JobSearch from "../components/JobSearch";
import JobItem from "../components/JobItem";


class Search extends Component{
	constructor(){
		super();
		this.state= {
			pageNo : 1,
			jobList : []
		}
		this.handleSearch = this.handleSearch.bind(this);
		this.handleLoad = this.handleLoad.bind(this);
	}
	handleSearch(val){
		var _this = this;
			fetch('https://m.lagou.com/search.json?city=%E5%85%A8%E5%9B%BD&positionName='+ val +'&pageNo=' + this.state.pageNo + '&pageSize=15', {
				method: 'GET'
			})
			.then(function(response) {
			    return response.text()
			}).then(function(res) {

				var list = JSON.parse(res)
				_this.setState({
					jobList : list.content.data.page.result
				})
			})
	}
	handleLoad(val){
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
			<div className="search">
				<Header />
				<JobSearch search={this.handleSearch} onload={this.handleLoad} jobList={this.state.jobList} />
				<Footer />
			</div>
			)
	}
} 

export default Search;