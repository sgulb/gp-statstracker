import React from "react";
import {Card, CardTitle} from 'react-materialize'

export const PlayersList = ({ children }) => {
    return (
        <div className = "card player-card">
                {children}
        </div>
    );
};
