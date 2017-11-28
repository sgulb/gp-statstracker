import React from "react";
import "./style.css";
import {Row, Icon} from "react-materialize";



export const AddTeam = props =>(
      
      <div>
        <div className="col s4">
          <div data-target="add_team_modal" id="addTeamCard" className="card modal-trigger">
            <div className="card-content">

              <div className="row">
                <div className="col s4 push-s1">
                  <Icon className="plus">add_box</Icon>
                </div>
              </div>

              <div className="row center-align">
                <h2>Add a Team</h2>
              </div>

            </div>
          </div>
        </div>

      </div>
      
  )