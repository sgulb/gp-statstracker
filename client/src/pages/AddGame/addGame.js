import React, {Component} from "react";
import Btn from "../../components/Btn";
import NavBar from "../../components/NavBar";
import NewGameForm from "../../components/NewGame";
import PageHeader from "../../components/PageHead";
import {Row, Col, Input, Button} from "react-materialize";
import API from "../../utils/API";
import {PlayersList, PlayerData} from "../../components/AccordionGame";




class NewGame extends Component {
	state={
		data:[],
		fullName: "",
		selectedPlayers: []
	};


	getPlayers = (event) => {
		event.preventDefault();
		API.getPlayers(this.props.match.params.id)
			 .then(res => {
					this.setState({ data: res.data, fullName: "" })
			 
			 });
	};

	loadPlayers = () => {
        API.getPlayers(this.props.match.params.id)
            .then(res => {
                console.log(res.data);
                this.setState({players: res.data.player, lName: "", fName: "", jersey: ""})
            })
            .catch(err => console.log(err));
    };


	handleInputChange = (event) => {
	  const { name, value } = event.target;
	  this.setState({
	    [name]: value
	  });
	};

	handleSelectChange = event => {
	  const { name, value } = event.target;
	  API.getPlayers(event.value)
	     .then(
					this.setState({
	    			selectedPlayers: [...this.state.selectedPlayers, value]
	  			})
	 			)
	  
	};


	render(){
		return(

			<div>
				<NavBar />
				<PageHeader />

							<div className="row">
								<div className="col s10 push-s1">
									  <div className="card medium z-depth-3">

								    <form className="col s12">

								    	<div className="row"> 
								    		<div className="col s3 push-s2">
								    			<h5 id="opposingHeader">OPPOSING TEAM</h5>
								    		</div>
								    		<div className="col s3 push-s4">
								    			<h5 id="finalHeader" className="right">FINAL SCORE</h5>
								    		</div>
								    	</div>

								      <div className="row">
								        <div className="input-field col s5 push-s1">
								          <input id="opp_name" type="text" className="validate"></input>
								          <label for="opp_name">Opposing Team Name</label>
								        </div>
												
								        <div className="input-field col s2 push-s2">
								          <input id="your_fin_score" type="text" className="validate"></input>
								          <label for="your_fin_score">Your Score</label>
												</div>
												
												<div className="input-field col s2 push-s2">
								          <input id="opp_fin_score" type="text" className="validate"></input>
								          <label for="opp_fin_score">Their Score</label>
								        </div>
								      </div>
											
											<br></br>
											<br></br>

											<div className="row">
												<div className="col s4 push-s4">
													<h5 className="center">PARTICIPATING PLAYERS</h5>
												</div>
											</div>
								      <div className="row">
											  <div className="input-field col s4 push-s4">
													<Input multiple s={12} type='select' onChange={this.handleSelectChange}>
															<option value="" disabled selected>Select all particpating players</option>
															<option value='2'>Mya Nguyen</option>
															<option value='2'>Grace Sunderland</option>
															<option value='2'>Calysta Hardy</option>
															<option value='2'>Madison Alder</option>
													</Input>	  	
											  </div>
								      </div>

								    </form>
								  </div>
								  <Row>
								  	<div class="col s12 offset-s8">
								  		<Button>
								  			Add Game
								  		</Button>
								  		<Button>
								  			Cancel
								  		</Button>
								  	</div>
								  </Row>
						  	</div>
						  </div>

						  {this.state.selectedPlayers.map(gameData => (
						  <ul class="collapsible" data-collapsible="accordion">
	    					<li>
								  <div className="collapsible-header">
						      	<ul className="collection">
											<li className="collection-item avatar">
									      <img src="assets/images/logo.svg" alt="" className="circle"></img>
									      	<Row>
									      		<span className="title">{this.gameData.opposingTeam}</span>
									      		<Col s={6}>
											      	<p>
											      	<br></br>
											         	{this.gameData.yourScore}
											      	</p>
										      	</Col>

										      	<Col s={6}>
										      		<p>
										      		<br></br>
										      			{this.gameData.opposingScore}
										      		</p>
										      	</Col>

									      	</Row>
									    </li>
										</ul>
						      </div>

						      <div className="collapsible-body">
						      	<span>
						      		
										  <div className="row">
												<div className="col s10 push-s1">

												    <form className="col s12">

															<blockquote>
																<h4>Game Results</h4>
															</blockquote>

												    	<div className="row"> 
												    		<div className="col s3 push-s2">
												    			<h5 id="opposingHeader">OPPOSING TEAM</h5>
												    		</div>
												    		<div className="col s3 push-s4">
												    			<h5 id="finalHeader" className="right">FINAL SCORE</h5>
												    		</div>
												    	</div>

												      <div className="row">
												        <div className="input-field col s5 push-s1">
												          <input id="opp_name" type="text" className="validate"></input>
												          <label for="opp_name">{gameData.opposingTeam}</label>
												        </div>
																
												        <div className="input-field col s2 push-s2">
												          <input id="your_fin_score" type="text" className="validate"></input>
												          <label for="your_fin_score">{gameData.yourScore}</label>
																</div>
																
																<div className="input-field col s2 push-s2">
												          <input id="opp_fin_score" type="text" className="validate"></input>
												          <label for="opp_fin_score">{gameData.opposingScore}</label>
												        </div>
												      </div>
															
															<br></br>
															<br></br>
															
															<div className="row">

																<div className="input-field col s2 push-s1">
																	<input id="act_points" type="text" className="validate"></input>
																	<label for="act_points">Points</label>
																</div>
																
																<div className="col s2">
																</div>

																<div className="input-field col s2 push-s1">
																	<input id="act_assists" type="text" className="validate"></input>
																	<label for="act_assists">Assists</label>
																</div>

																<div className="col s2">
																</div>

																<div className="input-field col s2 push-s1">
																	<input id="act_rebounds" type="text" className="validate"></input>
																	<label for="act_rebounds">Rebounds</label>
																</div>

															</div>
															
															<div className="row">
																<div className="col s12">

																	<div className="input-field col s2 offset-s3">
																		<input id="act_steals" type="text" className="validate"></input>
																		<label for="act_steals">Steals</label>
																	</div>

																	<div className="input-field col s2 push-s2">
																		<input id="act_turnovers" type="text" className="validate"></input>
																		<label for="act_turnovers">Turnovers</label>
																	</div>

																</div>
															</div>
															
															<hr></hr>
															<br></br>
															<br></br>

															<blockquote>
																<h4>Expected Results</h4>
															</blockquote>
															<div className="row">

																<div className="input-field col s2 push-s1">
																	<input id="act_points" type="text" className="validate"></input>
																	<label for="act_points">Points</label>
																</div>
																
																<div className="col s2">
																</div>

																<div className="input-field col s2 push-s1">
																	<input id="act_assists" type="text" className="validate"></input>
																	<label for="act_assists">Assists</label>
																</div>

																<div className="col s2">
																</div>

																<div className="input-field col s2 push-s1">
																	<input id="act_rebounds" type="text" className="validate"></input>
																	<label for="act_rebounds">Rebounds</label>
																</div>

																</div>

																<div className="row">
																	<div className="col s12">

																		<div className="input-field col s2 offset-s3">
																			<input id="act_steals" type="text" className="validate"></input>
																			<label for="act_steals">Steals</label>
																		</div>

																		<div className="input-field col s2 push-s2">
																			<input id="act_turnovers" type="text" className="validate"></input>
																			<label for="act_turnovers">Turnovers</label>
																		</div>

																	</div>
																</div>
																
												    </form>

												  
										  	</div>
										  </div>

						      	</span>
						      </div>
						    </li>
						  </ul>
						  ))}


				</div>

		)
	}
}


export default NewGame;