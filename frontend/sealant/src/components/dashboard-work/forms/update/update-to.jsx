import React, { useState, useEffect } from 'react';

import secureLocalStorage from "react-secure-storage";
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardBody } from 'mdb-react-ui-kit';
import { Button } from "react-bootstrap";

import withRouter from "../../../withRouter/withRouter";
import './styles/update.css';
import { main } from "../../../urls";


function UpdateTo(props) {
    const [to, setTo] = useState([]);
    let history = useHistory();

    if (!secureLocalStorage.getItem('token')) {
        history.push('/login');
    } else {
        useEffect(() => {
            fetchTo();
        }, []);
    };

    const fetchTo = async () => {
        await axios.request({
            headers: {
                Authorization: `Bearer ${secureLocalStorage.getItem('token')}`,
            },
            method: "GET",
            url: `${main}/api/v1/to/${props.params.id}/`,
        }).then(response => {
            setTo(response.data);
        }).catch((error) => {
            console.log("Request error: " + error);
            history.push('/dash');
        });
    };

    const getFormData = () => {
        let data = {
            type_of_maintenance: document.getElementById('form1').value ? document.getElementById('form1').value : to.type_of_maintenance['description'],
            maintenance_date: document.getElementById('form2').value ? document.getElementById('form2').value : to.maintenance_date,
            operating_hours: document.getElementById('form3').value ? document.getElementById('form3').value : to.operating_hours,
            order_number: document.getElementById('form4').value ? document.getElementById('form4').value : to.order_number,
            order_date: document.getElementById('form5').value ? document.getElementById('form5').value : to.order_date,
            service_company: to.service_company['service']['company'],
        };
        putTo(data);
    };

    const putTo = async (formdata) => {
        await axios.request({
            headers: {
                Authorization: `Bearer ${secureLocalStorage.getItem('token')}`,
            },
            method: "PUT",
            url: `${main}/api/v1/to/${props.params.id}/`,
            data: formdata
        }).then(() => {
            history.push('/dash');
        }).catch((error) => {
            console.log("Request error: " + error);
            history.push('/dash');
        });
    };

    return (
        <div className="vh-100 bg-img">
            <MDBContainer className="container py-5 h-100">
                <MDBRow className="d-flex justify-content-center align-items-center h-100">
                    <MDBCol md="12" xl="10">
                        <MDBCard style={{ borderRadius: '6px' }} className="shadow">
                            <MDBCardBody className="text-center">

                                <div className="form-outline" data-mdb-input-init>
                                    <label className="form-label" htmlFor="form1">Вид ТО</label>
                                    <input
                                        title={to.type_of_maintenance ? to.type_of_maintenance['description'] : ''}
                                        placeholder={to.type_of_maintenance ? to.type_of_maintenance['description'].slice(0, 15) + '...' : 'Отсутствует !'}
                                        type="text"
                                        id="form1"
                                        className="form-control" />
                                </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                                <div className="form-outline" data-mdb-input-init>
                                    <label className="form-label" htmlFor="form2">Дата проведения ТО</label>
                                    <input
                                        placeholder={to.maintenance_date ? to.maintenance_date : 'Отсутствует !'}
                                        type="text"
                                        id="form2"
                                        className="form-control" />
                                </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                                <div className="form-outline" data-mdb-input-init>
                                    <label className="form-label" htmlFor="form3">Наработка, м/час</label>
                                    <input
                                        placeholder={to.operating_hours ? to.operating_hours : 'Отсутствует !'}
                                        type="text"
                                        id="form3"
                                        className="form-control" />
                                </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                                <div className="form-outline" data-mdb-input-init>
                                    <label className="form-label" htmlFor="form4">№ заказ-наряда</label>
                                    <input
                                        placeholder={to.order_number ? to.order_number : 'Отсутствует !'}
                                        type="text"
                                        id="form4"
                                        className="form-control" />
                                </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                                <div className="form-outline" data-mdb-input-init>
                                    <label className="form-label" htmlFor="form5">Дата заказа-наряда</label>
                                    <input
                                        placeholder={to.order_date ? to.order_date : 'Отсутствует !'}
                                        type="text"
                                        id="form5"
                                        className="form-control" />
                                </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                                <div className="d-grid">
                                    <Button
                                        variant="danger"
                                        type="submit"
                                        style={{ WebkitTextFillColor: "black", backgroundColor: '#D20A11' }}
                                        onClick={() => { getFormData() }}>
                                        Сохранить
                                    </Button>
                                </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

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

export default withRouter(UpdateTo);
