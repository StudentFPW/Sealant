import React, { useState, useEffect } from 'react';

import secureLocalStorage from "react-secure-storage";
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardBody } from 'mdb-react-ui-kit';
import { Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form';

import '../styles/forms.css';
import { main } from "../../../urls";


export default function CreateTo() {
    const [typeto, setTypeTo] = useState([]);
    const [maintenancecompany, setMaintenanceCompany] = useState([]);
    const [cars, setCars] = useState([]);
    const [services, setServices] = useState([]);
    let history = useHistory();

    if (!secureLocalStorage.getItem('token')) {
        history.push('/login');
    } else {
        useEffect(() => {
            fetchTypeTo();
            fetchMaintenanceCompany();
            fetchCars();
            fetchServices();
        }, []);
    };

    const fetchTypeTo = async () => {
        await axios.request({
            headers: {
                Authorization: `Bearer ${secureLocalStorage.getItem('token')}`,
            },
            method: "GET",
            url: `${main}/api/v1/typeto/`
        }).then(response => {
            setTypeTo(response.data);
        }).catch((error) => {
            console.log("Request error: " + error);
            history.push('/dash');
        });
    };

    const fetchMaintenanceCompany = async () => {
        await axios.request({
            headers: {
                Authorization: `Bearer ${secureLocalStorage.getItem('token')}`,
            },
            method: "GET",
            url: `${main}/api/v1/services/`
        }).then(response => {
            setMaintenanceCompany(response.data.results);
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
            order_number: document.getElementById('form1').value ? document.getElementById('form1').value : alert('Укажите номер заказа наряда !'),
            maintenance_date: document.getElementById('form2').value ? document.getElementById('form2').value : alert('Укажите дату проведения то !'),
            order_date: document.getElementById('form3').value ? document.getElementById('form3').value : alert('Укажите дату заказа наряда !'),
            operating_hours: document.getElementById('form4').value ? document.getElementById('form4').value : alert('Укажите наработки м/час !'),
            type_of_maintenance: document.getElementById('form5').value ? document.getElementById('form5').value : alert('Определите вид ТО !'),
            maintenance_company: document.getElementById('form6').value ? document.getElementById('form6').value : alert('Определите обслуживающую компанию !'),
            car: document.getElementById('form7').value ? document.getElementById('form7').value : alert('Определите машину !'),
            service_company: document.getElementById('form8').value ? document.getElementById('form8').value : alert('Определите сервисную компанию !'),
        };
        postTo(data);
    };

    const postTo = async (formdata) => {
        await axios.request({
            headers: {
                Authorization: `Bearer ${secureLocalStorage.getItem('token')}`,
            },
            method: "POST",
            url: `${main}/api/v1/to/`,
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
            <div className="vh-100 bg-img">
                <MDBContainer className="container py-5 h-100">
                    <MDBRow className="d-flex justify-content-center align-items-center h-100">
                        <MDBCol md="12" xl="10">
                            <MDBCard style={{ borderRadius: '6px' }} className="shadow">
                                <MDBCardBody className="text-center">

                                    <div className="form-outline" data-mdb-input-init>
                                        <label className="form-label" htmlFor="form1">№ заказ-наряда</label>
                                        <input
                                            type="text"
                                            id="form1"
                                            className="form-control" />
                                    </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                                    <div className="form-outline" data-mdb-input-init>
                                        <label className="form-label" htmlFor="form2">Дата проведения ТО</label>
                                        <input
                                            type="text"
                                            id="form2"
                                            className="form-control" />
                                    </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                                    <div className="form-outline" data-mdb-input-init>
                                        <label className="form-label" htmlFor="form3">Дата заказа-наряда</label>
                                        <input
                                            type="text"
                                            id="form3"
                                            className="form-control" />
                                    </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                                    <div className="form-outline" data-mdb-input-init>
                                        <label className="form-label" htmlFor="form4">Наработка, м/час</label>
                                        <input
                                            type="text"
                                            id="form4"
                                            className="form-control" />
                                    </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                                    <Form.Select id="form5">
                                        <option>Вид ТО</option>
                                        {typeto ? typeto.map((typeto, index) => (
                                            <option key={index} value={typeto['id']}>{typeto['name']}</option>
                                        )) : null}
                                    </Form.Select>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                                    <Form.Select id="form6">
                                        <option>Обслуживающая компания</option>
                                        {maintenancecompany ? maintenancecompany.map((maintenancecompany, index) => (
                                            <option key={index} value={maintenancecompany['service']['id']}>{maintenancecompany['service']['company']}</option>
                                        )) : null}
                                    </Form.Select>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                                    <Form.Select id="form7">
                                        <option>Машина</option>
                                        {cars ? cars.map((cars, index) => (
                                            <option key={index} value={cars['id']}>{cars['factory_number']}</option>
                                        )) : null}
                                    </Form.Select>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                                    <Form.Select id="form8">
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
