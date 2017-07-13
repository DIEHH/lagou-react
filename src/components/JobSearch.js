import React ,{Component} from 'react';
import './JobSearch.css';
import JobItem from './JobItem';


class JobSearch extends Component{
	constructor(){
		super();
		this.state={
			display:{
				display:"none"
			}
		}
		this.handleSearch = this.handleSearch.bind(this);
		this.handleLoad = this.handleLoad.bind(this);
	}

	render(){
		var list = this.props.jobList.map(function(ele,idx){
			return (
					<JobItem key={idx} context={ele} />
				)
		})
		return(
				<div className="linputer">
		            <div className="lbutton">
		                <span className="city">全国</span>
		                <span className="cityicon"></span>
		            </div>
		            <div className="rinput">
		                <input ref="searchInput" className="inputer" type="text" placeholder="搜索职位或公司" />
		                <span className="search" onClick={this.handleSearch}><em className="searchicon"></em></span>
		            </div>
		            <ul className="search-ul">
						{list}
						<li className="activeable list-more" style={this.state.display} onClick={this.handleLoad} >加载更多</li>
					</ul>
        		</div>
			)
	}
	handleLoad(){
		this.props.onload(this.refs.searchInput.value)
	}
	handleSearch(){
		this.props.search(this.refs.searchInput.value)
		this.setState({
			display:{
				display: "block"
			}
		})
	}
}

export default JobSearch;