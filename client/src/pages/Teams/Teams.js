import React, {Component} from "react";
import {AddTeam, TeamCard} from "../../components/TeamCard"
import NavBar from "../../components/NavBar";
import {Row, Input, Button} from 'react-materialize';
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
		API.getTeams(window.sessionStorage.getItem("userId"))
			.then(res => {
				console.log(res.data.team);
				this.setState({ teams: res.data.team, teamName: "" })
			})
	};

	deleteTeam = id => {
		API.deleteTeam(id)
			.then(res => this.loadTeams())
			.catch(err => console.log(err));
	};

	handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.teamName) {
      API.addTeam({
        teamName: this.state.teamName,
        id: window.sessionStorage.getItem("userId")
      })
        .then(res => {
        	this.loadTeams()})
        .catch(err => console.log(err));
    }
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
									
										<TeamCard>
											<Link to={`/teams/${team._id}`}>{team.teamName}</Link>
											<Row>
												<Button className="red accent-4" onClick={() => this.deleteTeam(team._id)}>Delete</Button>
											</Row>
										</TeamCard>
									
								))}
						</div>) : (<div/>)}
					</Row>


					<div id="add_team_modal" className="modal">

				      <div className="modal-header">
				        <h4>Add New Team</h4>
				      </div>

				      <div className="modal-content">
				        <Input 
				          value={this.state.teamName}
				          onChange={this.handleInputChange}
				          name="teamName"
				          label="Team Name"/>
				      </div>

				      <div className="modal-footer">
				        <a onClick={this.handleFormSubmit} id="add-team-button" href="#!" className="modal-action modal-close waves-effect waves-green btn-flat">Add Team</a>
				        <a id="cancel-team-button" href="#!" className="modal-action modal-close waves-effect waves-green btn-flat">Cancel</a>
				      </div>
			    
			 		 </div>

				</div>
			)
	}
}

export default Teams;
