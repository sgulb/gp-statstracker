import React from "react";

const NavBar = props =>(

	<nav>
    <div className="nav-wrapper white">
        <a href="#!" className="brand-logo red-text text-accent-4"><img className="nav-logo" src="assets/images/logo.svg"></img></a>
        <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
        <ul className="right hide-on-med-and-down">
            <li><a href="#modal1" className="red-text text-accent-4">LOGOUT</a></li>
            <li><a href="#" className="red-text text-accent-4">ABOUT</a></li>
        </ul>
        <ul className="side-nav" id="mobile-demo">
            <li><a href="#modal1" className="red-text text-accent-4">LOGOUT</a></li>
            <li><a href="#" className="red-text text-accent-4">ABOUT</a></li>
        </ul>
    </div>
	</nav>

	)


export default NavBar;