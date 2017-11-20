import React from "react";
import {Card, CardTitle} from 'react-materialize'

export const PlayerImg = ({ children }) => {
    return (
        <div className = "card-image img-con">
            {children}
        </div>
    );
};
