import React from "react";
import "./newGameForm.css";

const NewGameForm = props =>(

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
						    <select multiple>
						      <option value="" disabled selected>Select all particpating players</option>
						      <option value="1">{...props}</option>
						    </select>
						  </div>
			      </div>

			    </form>
			  </div>

	  	</div>
	  </div>
	)

export default NewGameForm;