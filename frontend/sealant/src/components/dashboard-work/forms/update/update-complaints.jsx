import React from "react";

import secureLocalStorage from "react-secure-storage";
import { useHistory } from 'react-router-dom';

import withRouter from "../../../withRouter/withRouter";

function UpdateComplaints(props) {
    let history = useHistory();

    if (!secureLocalStorage.getItem('token')) {
        history.push('/login');
    };

    return (
        <React.Fragment>
            <h1>{props.params.id}</h1>
        </React.Fragment>
    );
};

export default withRouter(UpdateComplaints);