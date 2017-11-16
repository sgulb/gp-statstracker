import React from "react";
import "./game.css"

const ExpandedGame = props =>(
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
							          <label for="opp_name">{props.oppTeamName}</label>
							        </div>
											
							        <div className="input-field col s2 push-s2">
							          <input id="your_fin_score" type="text" className="validate"></input>
							          <label for="your_fin_score">{props.yourFinScore}</label>
											</div>
											
											<div className="input-field col s2 push-s2">
							          <input id="opp_fin_score" type="text" className="validate"></input>
							          <label for="opp_fin_score">{props.oppFinScore}</label>
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
	)

export default ExpandedGame;