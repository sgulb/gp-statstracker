import React from "react";

const AddPlayerForm = props => (
    <div className="container">
        <div className="row">
            <div className="input-field col s6">
                <input id="first_name" type="text" className="validate" />
                <label for="first_name">First Name </label>
            </div>
            <div className="input-field col s6">
                <input id="last_name" type="text" className="validate" />
                <label for="last_name"> Last Name </label>
            </div>
        </div>

        <div className="row">
            <div className="input-field col s6">
                <input id="jersey_number" type="text" className="validate" />
                <label for="jersey_number">Jersey Number</label>
            </div>
            <div className="input-field col s6">
                <div className="file-field input-field">
                    <div className="btn red accent-4">
                        <span>File</span>
                        <input type="file" />
                    </div>
                    <div className="file-path-wrapper">
                        <input className="file-path validate" type="text" />
                    </div>
                </div>
            </div>
            <button className="btn waves-effect waves-light red accent-4" type="submit" name="action">Submit
                <i className="material-icons right">send</i>
            </button>
        </div>

    </div>
);

export default AddPlayerForm;