import React from "react";

import withRouter from "../../../withRouter/withRouter";

function VehicleModel(props) {
    return (
        <React.Fragment>
            <h1>{props.params.id}</h1>
        </React.Fragment>
    );
};

export default withRouter(VehicleModel);
