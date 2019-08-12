/**
 * Created by smichaels on 6/23/17.
 */
import React, {Component} from 'react';

import axios from 'axios';
import {NavLink, Link} from "react-router-dom";

class StatusListItem extends Component {


    constructor(props) {
        super(props);
    }

    state = {
        isChecked: false,
    }

    toggleCheckboxChange = () => {

        this.setState(({ isChecked }) => (
            {
                isChecked: !isChecked,
            }
        ));

        // the redux function to call that accumulates all line item checkbox states
        this.props.handleCheckboxChange(this.props.assemblyName, !this.state.isChecked);

    }



    renderValueField() {
        if (this.props.statusValue === "Ready") {
            return (
            <span className = "green-text text-darken-2" > <i className="material-icons">check</i> {this.props.statusValue} </span>
            )
        } else if (this.props.statusValue === "Shutdown") {
            return (
                <span className = "black-text text-darken-2" > <i className="material-icons">close</i> {this.props.statusValue} </span>
            )
        } else if (this.props.statusValue === "Faulted") {
            return (
                <span className = "red-text text-darken-2" > <i className="material-icons">error</i> {this.props.statusValue} </span>
            )
        } else if (this.props.statusValue === "Tracking") {
            return (
                <span className = "blue-text text-darken-2" > <i className="material-icons">gps_fixed</i> {this.props.statusValue} </span>
            )
        } else if (this.props.statusValue === "Slewing") {
            return (
                <span className = "blue-text text-darken-2" > <i className="material-icons">keyboard_tab</i> {this.props.statusValue} </span>
            )
        } else if (this.props.statusValue === "Degraded") {
            return (
                <span className = "orange-text text-darken-2" > <i className="material-icons">local_hospital</i> {this.props.statusValue} </span>
            )
        } else if (this.props.statusValue === "Offline") {
            return (
                <span className = "grey-text text-darken-2" > <i className="material-icons">signal_wifi_off</i> {this.props.statusValue} </span>
            )
        } else {
            return "Other"
        }
    }

    getAssemblyLink() {
        return "/" + this.props.assemblyName + "Assembly"
    }



    render() {
        return (

            <tr className="small-height">
                <td className="small-height">
                    <div className="form-group blue-text text-darken-2">

                        {/*-- FIXME: not sure why a Link, NavLink cant be used, but without a page reload the Collapsible doesnt work,
                         even though initialization is being called */}
                        <a href={this.getAssemblyLink()}>{this.props.assemblyName}</a>

                    </div>
                </td>
                <td className="small-height">
                    <div className="form-group">


                        {this.renderValueField()}

                    </div>
                </td>
                <td className="small-height">
                    <div className="form-group">

                        {this.props.description}

                    </div>
                </td>
                <td className="small-height">
                    <div className="form-group">

                        <p>
                            <label>
                                <input type="checkbox" />
                                <span> </span>
                            </label>
                        </p>

                    </div>
                </td>

            </tr>

        );
    }


}


export default StatusListItem;

