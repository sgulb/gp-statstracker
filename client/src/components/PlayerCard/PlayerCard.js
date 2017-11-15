//TODO: Add removal Btn, fix Routing
import React from "react";
// import "../css/styles.css";

const PlayerCard = props => (
        <div className="col s6 m3">
            {/*fix href to route properley*/}
            <a href="/IndivPlayer">
                <div className="card player-card">
                    <div className="card-image img-con">
                        {/*<img alt={props.name} src={props.image}/>*/}
                        <img src="http://res.cloudinary.com/brooklee/image/upload/v1510618076/playerplaceholder_f9khi0.jpg" />
                    </div>
                    <div className="card-content">
                        {/*<h5 className="player-name">{props.name}</h5>*/}
                        <h5 className="player-name">Player Name</h5>
                        {/*<p>{props.position}</p>*/}
                        <p>Player Position</p>
                        {/*<p>{props.number}</p>*/}
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