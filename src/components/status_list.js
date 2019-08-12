/**
 * Created by smichaels on 6/23/17.
 */
import React, {Component} from 'react';
import StatusListItem from './status_list_item';
import {connect} from 'react-redux';
import axios from 'axios';
import {bindActionCreators} from "redux";
import {fetchStatus} from '../actions/index';



class StatusList extends Component {




    constructor(props) {
        super(props);
        this.renderList = this.renderList.bind(this);





    }

    componentDidMount() {

        console.log("ConfigList::MOUNT")

        // fetch all configs when component first mounts
        this.props.fetchStatus()

    }


    componentDidUpdate() {
        // refresh should reset the data
        console.log("UPDATE")
     }


     // returns the array element where keyName attribute matches the passed value
     // for some reason array.find and array.filter are not recognized on this Firefox

     findField(arr, fieldName) {
         for (var i = 0; i < arr.length; i++) {
             if (arr[i].keyName===fieldName) {
                 return arr[i]
             }
         }
         return arr[0];
     }

    handleCheckboxChange(assemblyName, checkboxState) {

        console.log("assemblyName = " + assemblyName + ", checkboxState = " + checkboxState)

        // accumulate the list here

    }



    renderList() {



        if (this.props.tcsAssembliesStatus == null) {
            return "Error querying assemblies statuses";
        }


        return this.props.tcsAssembliesStatus.map((statusItem) => {

            var paramSet = statusItem.paramSet

            const assemblyName = this.findField(statusItem.paramSet, "assemblyName").values[0]
            const status = this.findField(statusItem.paramSet, "status").values[0]
            const description = this.findField(statusItem.paramSet, "description").values[0]

            return (
                <StatusListItem key={assemblyName} assemblyName={assemblyName}
                                 statusValue={status}  description={description} handleCheckboxChange={this.handleCheckboxChange.bind(this)}/>
            );

        });
    }

    render() {
    return (
        <form className="form-inline">
            <table className="striped">
                <thead>
                <tr>
                    <th>Assembly</th>
                    <th>State</th>
                    <th>Description</th>
                    <th>Select</th>
                </tr>
                </thead>
                <tbody>
                {this.renderList()}
                </tbody>
            </table>


        </form>
    );
    }

}

function mapStateToProps(state) {

        console.log("state.tcsAssembliesStatus = " + state.tcsAssembliesStatus)

        return {
            tcsAssembliesStatus: state.tcsAssembliesStatus

        }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchStatus}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(StatusList);