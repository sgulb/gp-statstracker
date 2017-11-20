import React, {Component} from "react";
import {addTeam, addTeamModal, TeamCard} from "../../components/TeamCard"
import NavBar from "../../components/NavBar";
import {Row, Col, Card} from 'react-materialize';
import API from "../../utils/API";
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
					<Row>
						<Col size="s12">
							<div className="header-top">
								<h2 className="center-align header-text">
									MY TEAMS
								</h2>
							</div>
						</Col>
					</Row>

					<Row>	
						<addTeam />
						{this.state.teams.length ?(
								{this.state.teams.map(team => (
									<Link to={`/players/${team.id}`}>
										<TeamCard 
										className=""
										onClick={()=> "/players"}
										>team.name</TeamCard>
									</Link>
								))};
						)};
					</Row>
				</div>
			)
	}
}


export default Teams;



