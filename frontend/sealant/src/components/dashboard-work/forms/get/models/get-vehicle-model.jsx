import { useState, useEffect } from "react";

import secureLocalStorage from "react-secure-storage";
import { useHistory } from 'react-router-dom';
import { axiosInstance } from '../../../../config/http';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardBody } from 'mdb-react-ui-kit';
import { Button } from "react-bootstrap";

import withRouter from "../../../../withRouter/withRouter";
import { main } from "../../../../urls";
import '../../styles/forms.css';


function VehicleModel(props) {
    const [vehicle, setVehicle] = useState([]);
    let history = useHistory();

    if (!secureLocalStorage.getItem('token')) {
        history.push('/login');
    } else {
        /* eslint-disable-next-line react-hooks/rules-of-hooks */
        useEffect(() => {
            fetchVehicle();
        }, []);
    };

    const fetchVehicle = async () => {
        await axiosInstance.request({
            headers: {
                Authorization: `Bearer ${secureLocalStorage.getItem('token')}`,
            },
            method: "GET",
            url: `${main}/api/v1/teh/${props.params.id}/`
        }).then(response => {
            setVehicle(response.data);
        }).catch((error) => {
            console.log("Request error: " + error);
            history.push('/dash');
        });
    };

    return (
        <div className="vh-100 bg-img">
            <MDBContainer className="container py-5 h-100">
                <MDBRow className="d-flex justify-content-center align-items-center h-100">
                    <MDBCol md="12" xl="5">
                        <MDBCard style={{ borderRadius: '6px' }} className="shadow">
                            <MDBCardBody className="text-center">
                                <p class="text-center">{vehicle.name ? vehicle.name : ""}</p>
                                <p class="text-center">{vehicle.description ? vehicle.description : ""}</p>
                                <div className="d-grid">
                                    <Button
                                        variant="primary"
                                        type="submit"
                                        style={{ WebkitTextFillColor: "white", backgroundColor: '#163E6C' }}
                                        onClick={() => { history.push('/dash') }}>
                                        Вернуться
                                    </Button>
                                </div>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </div>
    );
};

export default withRouter(VehicleModel);
