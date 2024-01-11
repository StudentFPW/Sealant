import React, { useState, useEffect } from 'react';

import secureLocalStorage from "react-secure-storage";
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardBody } from 'mdb-react-ui-kit';
import { Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form';

import '../styles/forms.css';
import { main } from "../../../urls";


export default function CreateComplain() {
    const [fail, setFail] = useState([]);
    const [reco, setReco] = useState([]);
    const [cars, setCars] = useState([]);
    const [services, setServices] = useState([]);
    let history = useHistory();

    if (!secureLocalStorage.getItem('token')) {
        history.push('/login');
    } else {
        useEffect(() => {
            fetchFailure();
            fetchRecoveryMethod();
            fetchCars();
            fetchServices();
        }, []);
    };

    const fetchFailure = async () => {
        await axios.request({
            headers: {
                Authorization: `Bearer ${secureLocalStorage.getItem('token')}`,
            },
            method: "GET",
            url: `${main}/api/v1/fail/`
        }).then(response => {
            setFail(response.data);
        }).catch((error) => {
            console.log("Request error: " + error);
            history.push('/dash');
        });
    };

    const fetchRecoveryMethod = async () => {
        await axios.request({
            headers: {
                Authorization: `Bearer ${secureLocalStorage.getItem('token')}`,
            },
            method: "GET",
            url: `${main}/api/v1/reco/`
        }).then(response => {
            setReco(response.data);
        }).catch((error) => {
            console.log("Request error: " + error);
            history.push('/dash');
        });
    };

    const fetchCars = async () => {
        await axios.request({
            headers: {
                Authorization: `Bearer ${secureLocalStorage.getItem('token')}`,
            },
            method: "GET",
            url: `${main}/api/v1/cars/`
        }).then(response => {
            setCars(response.data);
        }).catch((error) => {
            console.log("Request error: " + error);
            history.push('/dash');
        });
    };

    const fetchServices = async () => {
        await axios.request({
            headers: {
                Authorization: `Bearer ${secureLocalStorage.getItem('token')}`,
            },
            method: "GET",
            url: `${main}/api/v1/services/`
        }).then(response => {
            setServices(response.data.results);
        }).catch((error) => {
            console.log("Request error: " + error);
            history.push('/dash');
        });
    };

    const getFormData = () => {
        let data = {
            refusal_date: document.getElementById('form1').value ? document.getElementById('form1').value : alert('Укажите дату отказа !'),
            operating_hours: document.getElementById('form2').value ? document.getElementById('form2').value : alert('Укажите время наработки м/час !'),
            failure_description: document.getElementById('form3').value ? document.getElementById('form3').value : alert('Укажите описание отказа !'),
            parts_used: document.getElementById('form4').value ? document.getElementById('form4').value : alert('Укажите используемые запчасти !'),
            restore_date: document.getElementById('form5').value ? document.getElementById('form5').value : alert('Укажите дату восстановления !'),
            equipment_downtime: document.getElementById('form6').value ? document.getElementById('form6').value : alert('Укажите время простоя техники !'),
            failure_node: document.getElementById('form7').value ? document.getElementById('form7').value : alert('Определите узел отказа !'),
            recovery_method: document.getElementById('form8').value ? document.getElementById('form8').value : alert('Определите метод восстановления !'),
            car: document.getElementById('form9').value ? document.getElementById('form9').value : alert('Определите машину !'),
            service_company: document.getElementById('form10').value ? document.getElementById('form10').value : alert('Определите сервисную компанию !'),
        };
        postComplain(data);
    };

    const postComplain = async (formdata) => {
        await axios.request({
            headers: {
                Authorization: `Bearer ${secureLocalStorage.getItem('token')}`,
            },
            method: "POST",
            url: `${main}/api/v1/compl/`,
            data: formdata
        }).then(() => {
            history.push(`/dash`);
        }).catch((error) => {
            console.log("Request error: " + error);
            alert('Что-то пошло не так, попробуйте попозже !');
            history.push('/dash');
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
                                            type="text"
                                            id="form1"
                                            className="form-control" />
                                    </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                                    <div className="form-outline" data-mdb-input-init>
                                        <label className="form-label" htmlFor="form2">Наработка, м/час</label>
                                        <input
                                            type="text"
                                            id="form2"
                                            className="form-control" />
                                    </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                                    <div className="form-outline" data-mdb-input-init>
                                        <label className="form-label" htmlFor="form3">Описание отказа</label>
                                        <input
                                            type="text"
                                            id="form3"
                                            className="form-control" />
                                    </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                                    <div className="form-outline" data-mdb-input-init>
                                        <label className="form-label" htmlFor="form4">Используемые запасные части</label>
                                        <input
                                            type="text"
                                            id="form4"
                                            className="form-control" />
                                    </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                                    <div className="form-outline" data-mdb-input-init>
                                        <label className="form-label" htmlFor="form5">Дата восстановления</label>
                                        <input
                                            type="text"
                                            id="form5"
                                            className="form-control" />
                                    </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                                    <div className="form-outline" data-mdb-input-init>
                                        <label className="form-label" htmlFor="form6">Время простоя техники</label>
                                        <input
                                            type="text"
                                            id="form6"
                                            className="form-control" />
                                    </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                                    <Form.Select id="form7">
                                        <option>Узел отказа</option>
                                        {fail ? fail.map((fail, index) => (
                                            <option key={index} value={fail['id']}>{fail['name']}</option>
                                        )) : null}
                                    </Form.Select>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                                    <Form.Select id="form8">
                                        <option>Способ восстановления</option>
                                        {reco ? reco.map((reco, index) => (
                                            <option key={index} value={reco['id']}>{reco['name']}</option>
                                        )) : null}
                                    </Form.Select>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                                    <Form.Select id="form9">
                                        <option>Машина</option>
                                        {cars ? cars.map((cars, index) => (
                                            <option key={index} value={cars['id']}>{cars['factory_number']}</option>
                                        )) : null}
                                    </Form.Select>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                                    <Form.Select id="form10">
                                        <option>Сервисная компания</option>
                                        {services ? services.map((services, index) => (
                                            <option key={index} value={services['service']['id']}>{services['service']['company']}</option>
                                        )) : null}
                                    </Form.Select>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

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
        </React.Fragment >
    );
};
