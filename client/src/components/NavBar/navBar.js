import React from "react";

const NavBar = props =>(
    <div>
        <nav>
            <div className="nav-wrapper white">
                <a href="/" className="brand-logo red-text text-accent-4"><img className="nav-logo" src="http://res.cloudinary.com/brooklee/image/upload/v1510618073/Logo_tt8muh.svg"></img></a>
                <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
                <ul className="right hide-on-med-and-down">
                    <li><a href="#modal1" className="red-text text-accent-4 modal-trigger">LOG IN/OUT</a></li>
                    <li><a href="/teams" className="red-text text-accent-4">TEAMS</a></li>
                    <li><a href="/players" className="red-text text-accent-4">PLAYERS</a></li>

                </ul>
                <ul className="side-nav" id="mobile-demo">
                    <li><a href="#modal1" className="red-text text-accent-4">LOGOUT</a></li>
                    <li><a href="/teams" className="red-text text-accent-4">TEAMS</a></li>
                    <li><a href="/players" className="red-text text-accent-4">PLAYERS</a></li>
                </ul>
            </div>
        </nav>

    </div>

	)


export default NavBar;