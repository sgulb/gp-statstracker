import React from "react";

export const SubmitChangeBtn = props =>
    <button {...props} className="btn waves-effect waves-light red accent-4" name="action">
        {props.children}
        <i className="material-icons right">send</i>
    </button>;