import React, { Component } from 'react';


import StatusList from './status_list';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {fetchStatus} from "../actions";


class Status extends Component {




    render() {


        return (

            <div>
            <div>
                <h4>Component Status/Control</h4>


                <div>

                    <StatusList target="status" />

                </div>


            </div>
            <div>

            </div>
            </div>
        );
    }
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchStatus}, dispatch);
}

export default connect(null, mapDispatchToProps)(Status);
