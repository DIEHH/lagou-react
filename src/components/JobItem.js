import React,{Component} from 'react';
import './JobItem.css';
import {Link,IndexLink,browserHistory}  from 'react-router';


class JobItem extends Component{
	constructor(){
		super();
        this.goJobDetails = this.goJobDetails.bind(this);
	}
    goJobDetails(){
        var url = "/jobs/" + this.props.context.positionId + ".html"
        browserHistory.push({
          pathname:url
         })
    }
	render(){
       var {context} = this.props;
       var imgSrc = "https://www.lgstatic.com/" + context.companyLogo;
		return (
			<li className="activeable list-item" data-positionid={context.positionId} data-companyid={context.companyId} onClick={this.goJobDetails} >
            <img src={imgSrc} className="item-logo" />
            <div className="item-desc">
                <h2 className="item-title">{context.companyName}</h2>
                <p className="item-info">
                    <span className="item-pos">
                        {context.positionName} [{context.city}]
                    </span>
                    <span className="item-salary">{context.salary}</span>
                </p>
                <p className="item-time">{context.createTime}</p>
            </div>
        </li>
			)
	}
}

export default JobItem;