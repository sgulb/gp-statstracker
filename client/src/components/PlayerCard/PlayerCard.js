import React from "react";
// import "../css/styles.css";

const PlayerCard = props => (
    <div className="col s6 m3">
        <a href="#">
            <div className="card player-card">
                <div className="card-image img-con">
                    <img alt={props.name} src={props.image}/>
                </div>
                <div className="card-content">
                    <h5 className="player-name">{props.name}</h5>
                    <p>{props.position}</p>
                    <p>55</p>
                </div>
            </div>
        </a>
    </div>
);

export default PlayerCard;


{/*<span onClick={() => props.removeFriend(props.id)} className="remove">*/}
      {/*𝘅*/}
    {/*</span>*/}