import React from "react";


export const AddTeam = props =>(

    <div className="col s4">
      <div data-target="add_team_modal" id="addTeamCard" className="card modal-trigger">
        <div className="card-content">

          <div className="row">
            <div className="col s4 push-s1">
              <i id="add-team-icon" className="large material-icons">add_box</i>
            </div>
          </div>

          <div className="row center-align">
            <h2>Add a Team</h2>
          </div>

        </div>
      </div>
    </div>

	)

// export default AddTeam;