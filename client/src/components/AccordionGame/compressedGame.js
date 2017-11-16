import React from "react";

const CompressedGame = props =>(
				<div className="collapsible-header">
	      	<ul className="collection">
						<li className="collection-item avatar">
				      <img src="assets/images/logo.svg" alt="" className="circle"></img>
				      	<span className="title">{this.props.oppTeamName}</span>
				      	<p><br></br>
				         	{this.props.finalScore}
				      	</p>
				    </li>
					</ul>
	      </div>
	)

export default CompressedGame;