import React, { Component } from 'react';

import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {fetchStatus} from "../../actions";
import M from 'materialize-css';

class M2Commands extends Component {

    componentDidMount() {
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('select');
            var instances = M.FormSelect.init(elems, {});
        });
    }


    render() {


        return (
            <div>
                <span>M2 Commands</span>
                <br/>

                <span>Offset M2 Position</span>
                <br/><br/><br/>


                <form>
                    <div className="row">
                        <div className="col s12 input-field" >
                            <select>
                                <option value="#" selected>Piston, Tip, Tilt</option>
                                <option value="#">Piston, Decenter</option>
                                <option value="#">Restore Saved Position</option>
                            </select>
                            <label>Offset method</label>
                        </div>
                        <div className="col s12 input-field" >
                            <label placeholder="" htmlFor="piston">piston (m)</label>
                            <input type="text" name="piston" id="piston"/>
                        </div>

                        <div className="col s12 input-field" >
                            <input type="text" name="tip" id="tip"/>
                            <label htmlFor="tip">tip (degrees)</label>
                        </div>

                        <div className="col s12 input-field" >
                            <input type="text" name="tilt" id="tilt"/>
                            <label htmlFor="tilt">tilt (degrees)</label>
                        </div>

                        <div className="col s4">
                            <a className="waves-effect waves-teal btn-small">Command Offset</a>
                        </div>
                        <div className="col s4">
                            <a className="waves-effect waves-teal btn-small">Clear Offsets</a>
                        </div>
                        <div className="col s4">
                            <a className="waves-effect waves-teal btn-small">Save Position</a>
                        </div>

                    </div>


                </form>


            </div>
        );
    }
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchStatus}, dispatch);
}

export default connect(null, mapDispatchToProps)(M2Commands);
