import React from "react";
import {Modal, Input} from "react-materialize";

export const AddTeamModal = props =>(
    <div id="add_team_modal" className="modal">

      <div className="modal-header">
        <h4>Add New Team</h4>
      </div>

      <div className="modal-content">

        <Input 
          value={this.state.teamName}
          onChange={this.handleInputChange}
          name="teamName"
          placeholder="Team Name"/>

       
        <div className="input-field">
          <input id="team-name" type="text" className="validate"></input>
          <label for="team-name">Team Name</label>
        </div>
            
      </div>

      <div className="modal-footer">
        <a onClick={() => this.handleFormSubmit} id="add-team-button" href="#!" className="modal-action modal-close waves-effect waves-green btn-flat">Add Team</a>
        <a id="cancel-team-button" href="#!" className="modal-action modal-close waves-effect waves-green btn-flat">Cancel</a>
      </div>
    
  </div>
) 