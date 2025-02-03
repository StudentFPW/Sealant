import React, { useState, useEffect } from 'react';

import secureLocalStorage from "react-secure-storage";
import { axiosInstance } from '../../../config/http';
import { useHistory } from 'react-router-dom';
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";

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
        /* eslint-disable-next-line react-hooks/rules-of-hooks */
        useEffect(() => {
            fetchTypeTo();
            fetchMaintenanceCompany();
            fetchCars();
            fetchServices();
        }, []);
    };

    const fetchTypeTo = async () => {
        await axiosInstance.request({
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
        await axiosInstance.request({
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
        await axiosInstance.request({
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
        await axiosInstance.request({
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

    const handleSubmit = (e) => {
        e.preventDefault();
        getFormData();
    };

    const getFormData = () => {
        let data = {
            order_number: document.getElementById('form1').value,
            maintenance_date: document.getElementById('form2').value,
            order_date: document.getElementById('form3').value,
            operating_hours: document.getElementById('form4').value,
            type_of_maintenance: document.getElementById('form5').value,
            maintenance_company: document.getElementById('form6').value,
            car: document.getElementById('form7').value,
            service_company: document.getElementById('form8').value,
        };
        postTo(data);
    };

    const postTo = async (formdata) => {
        await axiosInstance.request({
            headers: {
                Authorization: `Bearer ${secureLocalStorage.getItem('token')}`,
            },
            method: "POST",
            url: `${main}/api/v1/to/`,
            data: formdata
        }).then(() => {
            alert('Техническое обслуживание успешно зафиксировано !');
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
                <Container>
                    <Row className="vh-100 d-flex justify-content-center align-items-center">
                        <Col md={8} lg={10} xs={10}>
                            <Card className="shadow">
                                <Card.Body>
                                    <Form onSubmit={handleSubmit}>

                                        <div className="form-outline" data-mdb-input-init>
                                            <label className="form-label" htmlFor="form1">№ заказ-наряда</label>
                                            <input
                                                type="text"
                                                id="form1"
                                                className="form-control"
                                                required />
                                        </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                                        <div className="form-outline" data-mdb-input-init>
                                            <label className="form-label" htmlFor="form2">Дата проведения ТО - Формат(YYYY-MM-DD)</label>
                                            <input
                                                type="text"
                                                id="form2"
                                                className="form-control"
                                                required />
                                        </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                                        <div className="form-outline" data-mdb-input-init>
                                            <label className="form-label" htmlFor="form3">Дата заказа-наряда - Формат(YYYY-MM-DD)</label>
                                            <input
                                                type="text"
                                                id="form3"
                                                className="form-control"
                                                required />
                                        </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                                        <div className="form-outline" data-mdb-input-init>
                                            <label className="form-label" htmlFor="form4">Наработка, м/час</label>
                                            <input
                                                type="text"
                                                id="form4"
                                                className="form-control"
                                                required />
                                        </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                                        <Form.Label>Вид ТО</Form.Label>
                                        <Form.Select id="form5" required>
                                            <option></option>
                                            {typeto ? typeto.map((typeto, index) => (
                                                <option key={index} value={typeto['id']}>{typeto['name']}</option>
                                            )) : null}
                                        </Form.Select>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                                        <Form.Label>Обслуживающая компания</Form.Label>
                                        <Form.Select id="form6" required>
                                            <option></option>
                                            {maintenancecompany ? maintenancecompany.map((maintenancecompany, index) => (
                                                <option key={index} value={maintenancecompany['service']['id']}>{maintenancecompany['service']['company']}</option>
                                            )) : null}
                                        </Form.Select>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                                        <Form.Label>Машина</Form.Label>
                                        <Form.Select id="form7" required>
                                            <option></option>
                                            {cars ? cars.map((cars, index) => (
                                                <option key={index} value={cars['id']}>{cars['factory_number']}</option>
                                            )) : null}
                                        </Form.Select>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                                        <Form.Label>Сервисная компания</Form.Label>
                                        <Form.Select id="form8" required>
                                            <option></option>
                                            {services ? services.map((services, index) => (
                                                <option key={index} value={services['service']['id']}>{services['service']['company']}</option>
                                            )) : null}
                                        </Form.Select>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                                        <div className="d-grid">
                                            <Button
                                                variant="danger"
                                                type="submit"
                                                style={{ WebkitTextFillColor: "black", backgroundColor: '#D20A11' }}>
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

                                    </Form>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
};
