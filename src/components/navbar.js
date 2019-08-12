import {NavLink} from "react-router-dom";
import React from "react";


const Navbar = () => {

    return (

        <nav>
            <div className="nav-wrapper">

                <a href="#" className="brand-logo left"><i className="material-icons padding-left">build</i>TCS Engineering</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><NavLink to="/TelescopeControl">Telescope Control</NavLink></li>
                    <li><NavLink to="/PointingCheck">Pointing Check</NavLink></li>
                    <li><NavLink to="/PointingTest">Pointing Test</NavLink></li>
                    <li><NavLink to="/">Component Status/Control</NavLink></li>
                </ul>
            </div>
        </nav>

    )

}
export default Navbar

