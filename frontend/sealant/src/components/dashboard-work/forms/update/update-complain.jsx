import React, { useState, useEffect } from 'react';

import secureLocalStorage from "react-secure-storage";
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardBody } from 'mdb-react-ui-kit';
import { Button } from "react-bootstrap";

import withRouter from "../../../withRouter/withRouter";
import './styles/update.css';
import { main } from "../../../urls";


function UpdateComplaints(props) {
    const [complain, setComplain] = useState([]);
    let history = useHistory();

    if (!secureLocalStorage.getItem('token')) {
        history.push('/login');
    } else {
        useEffect(() => {
            fetchComplain();
        }, []);
    };

    const fetchComplain = async () => {
        await axios.request({
            headers: {
                Authorization: `Bearer ${secureLocalStorage.getItem('token')}`,
            },
            method: "GET",
            url: `${main}/api/v1/compl/${props.params.id}/`,
        }).then(response => {
            setComplain(response.data);
        }).catch((error) => {
            console.log("Request error: " + error);
        });
    };

    const getFormData = () => {
        let data = {
            refusal_date: document.getElementById('form1').value ? document.getElementById('form1').value : complain.refusal_date,
            operating_hours: document.getElementById('form2').value ? document.getElementById('form2').value : complain.operating_hours,
            failure_node: document.getElementById('form3').value ? document.getElementById('form3').value : complain.failure_node['description'],
            failure_description: document.getElementById('form4').value ? document.getElementById('form4').value : complain.failure_description,
            recovery_method: document.getElementById('form5').value ? document.getElementById('form5').value : complain.recovery_method['description'],
            parts_used: document.getElementById('form6').value ? document.getElementById('form6').value : complain.parts_used,
            restore_date: document.getElementById('form7').value ? document.getElementById('form7').value : complain.restore_date,
            equipment_downtime: document.getElementById('form8').value ? document.getElementById('form8').value : complain.equipment_downtime,
            service_company: complain.service_company['service']['company'],
        };
        putComplain(data);
    };

    const putComplain = async (formdata) => {
        await axios.request({
            headers: {
                Authorization: `Bearer ${secureLocalStorage.getItem('token')}`,
            },
            method: "PUT",
            url: `${main}/api/v1/compl/${props.params.id}/`,
            data: formdata
        }).then(() => {
            history.push('/dash');
        }).catch((error) => {
            console.log("Request error: " + error);
        });
    };

    return (
        <React.Fragment>
            <div className="bg-img">
                <MDBContainer className="container py-5 h-100">
                    <MDBRow className="d-flex justify-content-center align-items-center h-100">
                        <MDBCol md="12" xl="10">
                            <MDBCard style={{ borderRadius: '6px' }} className="shadow">
                                <MDBCardBody className="text-center">

                                    <div className="form-outline" data-mdb-input-init>
                                        <label className="form-label" htmlFor="form1">Дата отказа</label>
                                        <input
                                            placeholder={complain.refusal_date ? complain.refusal_date : 'Отсутствует !'}
                                            type="text"
                                            id="form1"
                                            className="form-control" />
                                    </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                                    <div className="form-outline" data-mdb-input-init>
                                        <label className="form-label" htmlFor="form2">Наработка, м/час</label>
                                        <input
                                            placeholder={complain.operating_hours ? complain.operating_hours : 'Отсутствует !'}
                                            type="text"
                                            id="form2"
                                            className="form-control" />
                                    </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                                    <div className="form-outline" data-mdb-input-init>
                                        <label className="form-label" htmlFor="form3">Узел отказа</label>
                                        <input
                                            title={complain.failure_node ? complain.failure_node['description'] : 'Не указано !'}
                                            placeholder={complain.failure_node ? complain.failure_node['description'].slice(0, 15) + '...' : 'Отсутствует !'}
                                            type="text"
                                            id="form3"
                                            className="form-control" />
                                    </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                                    <div className="form-outline" data-mdb-input-init>
                                        <label className="form-label" htmlFor="form4">Описание отказа</label>
                                        <input
                                            title={complain.failure_description ? complain.failure_description : ''}
                                            placeholder={complain.failure_description ? complain.failure_description.slice(0, 15) + '...' : 'Отсутствует !'}
                                            type="text"
                                            id="form4"
                                            className="form-control" />
                                    </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                                    <div className="form-outline" data-mdb-input-init>
                                        <label className="form-label" htmlFor="form5">Способ восстановления</label>
                                        <input
                                            title={complain.recovery_method ? complain.recovery_method['description'] : ''}
                                            placeholder={complain.recovery_method ? complain.recovery_method['description'].slice(0, 15) + '...' : 'Отсутствует !'}
                                            type="text"
                                            id="form5"
                                            className="form-control" />
                                    </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                                    <div className="form-outline" data-mdb-input-init>
                                        <label className="form-label" htmlFor="form6">Используемые запасные части</label>
                                        <input
                                            title={complain.parts_used ? complain.parts_used : ''}
                                            placeholder={complain.parts_used ? complain.parts_used.slice(0, 15) + '...' : 'Отсутствует !'}
                                            type="text"
                                            id="form6"
                                            className="form-control" />
                                    </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                                    <div className="form-outline" data-mdb-input-init>
                                        <label className="form-label" htmlFor="form7">Дата восстановления</label>
                                        <input
                                            placeholder={complain.restore_date ? complain.restore_date : 'Отсутствует !'}
                                            type="text"
                                            id="form7"
                                            className="form-control" />
                                    </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                                    <div className="form-outline" data-mdb-input-init>
                                        <label className="form-label" htmlFor="form8">Время простоя техники</label>
                                        <input
                                            placeholder={complain.equipment_downtime ? complain.equipment_downtime : 'Отсутствует !'}
                                            type="text"
                                            id="form8"
                                            className="form-control" />
                                    </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                                    <div className="d-grid">
                                        <Button
                                            variant="danger"
                                            type="submit"
                                            style={{ WebkitTextFillColor: "black" }}
                                            onClick={() => { getFormData() }}>
                                            Сохранить
                                        </Button>
                                    </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                                    <div className="d-grid">
                                        <Button
                                            variant="primary"
                                            type="submit"
                                            style={{ WebkitTextFillColor: "black" }}
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
        </React.Fragment >
    );
};

export default withRouter(UpdateComplaints);