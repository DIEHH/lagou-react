import React ,{Component} from 'react';
import './JobDetails.css';
import Header from '../components/Header';

class JobDetails extends Component{
	constructor(){
		super();
        this.state={
            isHide : false
        }
	}
	render(){
		return(
				<div>
					<Header isHide={this.state.isHide} />
					<div id="content">

        				<div className="postitle">
            				<h2 style={{height:"48px","lineHeight":"48px"}} className="title">平面设计实习生</h2>
            				<div className="collicon activeable">
	                			<span className="icon notcoll"></span>
	                			<span className="text">未收藏</span>
            				</div>
        				</div>

        				<div className="detail">
            				<div className="items">
                    			<span className="item salary">
                        			<em className="icon"></em>
                        			<span className="text">2k-3k</span>
                    			</span>
                    			<span className="item workaddress">
                        			<em className="icon"></em>
                        			<span className="text">北京</span>
                    			</span>
			                    <span className="item jobnature">
			                        <em className="icon"></em>
			                        <span className="text">实习</span>
			                    </span>
			                    <span className="item workyear">
			                        <em className="icon"></em>
			                        <span className="text">应届毕业生</span>
			                    </span>
		                   		<span className="item education">
			                        <em className="icon"></em>
			                        <span className="text">本科及以上</span>
		                    	</span>
                			</div>
            				<div className="temptation">职位诱惑：丰富的内部培训机会，加班补助</div>
        				</div>

       					<div className="company activeable">
            				<img src="//www.lgstatic.com/i/image/M00/12/D3/Cgp3O1bmVr-AOGHYAABsWK_3bSI050.JPG" alt="" className="logo" />
            				<div className="desc">
                				<div className="dleft">
                    				<h2 className="title">51Talk 无忧英语</h2>
                    				<p className="info">移动互联网,教育/ 上市公司/ 2000人以上</p>
                				</div>
                                <span className="dright"></span>
                            </div>
        				</div>

        				<div className="positiondesc">
            				<header className="header">职位描述</header>
            				<div className="content">
                				<p>职位描述：</p>
								<p>1、负责广告平面、互联网传播图片等的设计表现执行，确保按时按质按量完成任务；</p>
								<p>2、提出丰富多样或新奇独特想法，运用恰当的手法准确表现创意、有效呈现创意内容；</p>
								<p>3、完成项目执行过程中的相关设计修改；</p>
								<p>4、完成其他创意设计、完稿、美工类工作。</p>
								<p>&nbsp;</p>
								<p>任职资格：</p>
								<p>1、设计相关专业；</p>
								<p>2、有美工手绘功底的优先考虑；</p>
								<p>3、精通各种设计软件，熟练掌握Photoshop、AI、CorelDRAW等设计软件；</p>
								<p>4、具有较强的沟通能力，具有团队合作精神以及服务协作意识；</p>
								<p><br /></p>
            				</div>
        				</div>

        				<div className="positioneval">
            				<div className="eval-title">
            					面试评价
                    			<span id="total">(<span>0</span>)</span>
            				</div>
            				<ul className="list">
            					<li className="list-item-empty list-item">暂无面试评价</li>
            				</ul>
            				<a className="eval-all" href="/user/expsList_3189465.html" style={{display: 'none'}}></a>   
        				</div>

						<div className="deliver" id="deliver_resume">投个简历</div>
        
    				</div>
				</div>
			)
	}
}

export default JobDetails;