import React ,{Component} from 'react';
import "./Mine.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MineDetails from "../components/MineDetails";


class Mine extends Component{
	constructor(){
		super();
	}
	render(){
		return (
			<div className="mine">
				<Header />
				<MineDetails />
				<Footer />
			</div>
			)
	}
} 

export default Mine;