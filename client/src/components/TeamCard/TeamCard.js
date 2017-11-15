import React from "react";

export const TeamCard = props =>(

		<div className="col s4">
      <div className="card">
        <div className="card-content center-align">
          <h2>{props.children}</h2>
        </div>
      </div>
    </div>

	)

// export default TeamCard;