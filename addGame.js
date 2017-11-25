import React, {Component} from "react";
import Btn from "../../components/Btn";
import NavBar from "../../components/NavBar";
import NewGameForm from "../../components/NewGame";
import PageHeader from "../../components/PageHead";
import {Row, Col} from "react-materialize";



class NewGame extends Component {
	state={

	}

	render(){
		return(

			<div>
				<NavBar />
				<PageHeader />
				<NewGameForm />
			</div>

		)
	}
}

export default NewGame;

