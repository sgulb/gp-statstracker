import React from "react";
import "./style.css";
import {Button} from "react-materialize";

export const TeamCard = props =>(

		<div className="col s4">
      <div className="card">
        <div className="card-content center-align">
          <h2>{props.children}</h2>
				</div>
      </div>
    </div>
   
	)