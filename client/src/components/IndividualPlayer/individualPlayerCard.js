import React from "react";
import "./individualPlayerCard.css"


const IndividualPlayerCard = props => (
	<div className="row">
		<div className="col s6 push-s3">
			<div className="card">

				<div className="row">
					<div className="col s4 push-s4">
						<img className="circle" height="175" src="https://cdn-s3.si.com/s3fs-public/teams/basketball/nba/players/399612-300x300.png"></img>
					</div>
				</div>

				<div id="number-name" className="row">
					<div id="player-number" className="col s1 offset-s4">
						<h5>{...props}</h5>
					</div>
					<div id="player-name" className="col s4">
						<h5>{...props}</h5>
					</div>
				</div>

				<div className="row">
					<div id="player-position" className="col s2 offset-s5">
						<h5>{...props}</h5>
					</div>
				</div>

				<div className="row">
					<div className="skill-status-heading col s2 offset-s2">
						<p>
							Points
						</p>
						<div className="row">
							<div id="points-color" className="skill-color col s12">
						
							</div>
						</div>
					</div>

					<div className="col s1">
					</div>

					<div className="skill-status-heading col s2">
						<p>
							Assists
						</p>
						<div className="row">
							<div id="assists-color" className="skill-color col s12">
						 
							</div>
						</div>
					</div>

					<div className="col s1">
					</div>

					<div className="skill-status-heading col s2">
						<p>
							Rebounds
						</p>
						<div className="row">
							<div id="rebounds-color" className="skill-color col s12">
						
							</div>
						</div>
					</div>
				</div>

				<div className="row">
					<div className="skill-status-heading col s2 offset-s3">
						<p>
							Steals
						</p>
						<div className="row">
							<div id="steals-color" className="skill-color col s12">
						
							</div>
						</div>
					</div>
					
					<div className="col s2">
					</div>

					<div className="skill-status-heading col s2">
						<p>
							Turnovers
						</p>
						<div className="row">
							<div id="turnovers-color" className="skill-color col s12">
							
							</div>
						</div>
					</div>

				</div>

			</div>

		</div>
	</div>
)

export default IndividualPlayerCard;

