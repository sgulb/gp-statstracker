import React from "react";

const AddTeamModal = props =>(
		<div id="add_team_modal" className="modal">

    <div className="modal-header">
      <h4>Add New Team</h4>
    </div>

    <div className="modal-content">

      <div className="input-field">
        <input id="team-name" type="text" className="validate"></input>
        <label for="team-name">Team Name</label>
      </div>
          
    </div>

    <div className="modal-footer">
      <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat">Add Team</a>
      <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat">Cancel</a>
    </div>
    
  </div>
	) 

export default AddTeamModal;