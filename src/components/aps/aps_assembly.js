import React, { Component } from 'react';

import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {fetchStatus} from "../../actions";
import M from 'materialize-css';
import M2Commands from "./m2_commands";

class ApsAssembly extends Component {

    componentDidMount() {

        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.collapsible');
            var instances = M.Collapsible.init(elems, {});
        });

    }



    render() {



        return (
            <div>
                <h5>APS Assembly</h5>

            <ul className="collapsible">
                <li>
                    <div className="collapsible-header"><i className="material-icons">filter_drama</i>Assembly Commands/Events</div>
                    <div className="collapsible-body">

                        <div className="row">
                            <div className="col s4">

                                <div className="card-panel amber lighten-5">

                            <M2Commands/>
                            </div>
                            </div>
                            <div className="col s4">
                                <div className="card-panel teal lighten-5">
                                <fieldset>
                                    <legend>M3 Commands</legend>
                                    <label htmlFor="name">Username:</label>
                                    <input type="text" name="name" id="name"/>
                                    <br/>
                                    <label htmlFor="mail">E-mail:</label>
                                    <input type="text" name="mail" id="mail"/>
                                    <br/>
                                    <label htmlFor="address">Address:</label>
                                    <input type="text" name="address" id="address" size="40"/>
                                </fieldset>
                                </div>
                            </div>
                            <div className="col s4 ">
                                <div className="card-panel orange lighten-5">
                                <fieldset>
                                    <legend>Telescope Commands</legend>
                                    <label htmlFor="name">Username:</label>
                                    <input type="text" name="name" id="name"/>
                                    <br/>
                                    <label htmlFor="mail">E-mail:</label>
                                    <input type="text" name="mail" id="mail"/>
                                    <br/>
                                    <label htmlFor="address">Address:</label>
                                    <input type="text" name="address" id="address" size="40"/>
                                </fieldset>
                                </div>
                            </div>
                        </div>


                    </div>
                </li>
                <li>
                    <div className="collapsible-header"><i className="material-icons">place</i>Assembly Configuration</div>
                    <div className="collapsible-body"><span>To be implemented.</span></div>
                </li>
                <li>
                    <div className="collapsible-header"><i className="material-icons">whatshot</i>HCD Commands/Events</div>
                    <div className="collapsible-body"><span>To be implemented.</span></div>
                </li>
                <li>
                    <div className="collapsible-header"><i className="material-icons">whatshot</i>HCD Configuration</div>
                    <div className="collapsible-body"><span>To be implemented.</span></div>
                </li>
            </ul>

            </div>
        );
    }
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchStatus}, dispatch);
}

export default connect(null, mapDispatchToProps)(ApsAssembly);
