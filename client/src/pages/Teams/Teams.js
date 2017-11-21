import React, {Component} from "react";
import {AddTeam, AddTeamModal, TeamCard} from "../../components/TeamCard"
import NavBar from "../../components/NavBar";
import {Row, Col, Card} from 'react-materialize';
import PageHeader from "../../components/PageHead";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import "./style.css";



class Teams extends Component {
	state = {
		teams: [],
		teamName: ""
	};

	componentDidMount(){
		this.loadTeams();
	};

	loadTeams = () => {
		API.getTeams()
			.then(res =>
				this.setState({ teams: res.data, teamName: "" })
			)
	};



	render(){
		return(
				<div>
					<NavBar />
					<PageHeader />
					

					<Row>	
						<AddTeam />
						{this.state.teams.length ? (
							<div>
								{this.state.teams.map(team => (
									<Link to={`/players/${team._id}`}>
										<TeamCard>team.name</TeamCard>
									</Link>
								))};
						</div>) : (<div/>)}
					</Row>
				</div>
			)
	}
}


export default Teams;