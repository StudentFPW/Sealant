import React, { useState, useEffect } from 'react';

import secureLocalStorage from "react-secure-storage";
import { axiosInstance } from '../../../config/http';
import { useHistory } from 'react-router-dom';
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";

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
        /* eslint-disable-next-line react-hooks/rules-of-hooks */
        useEffect(() => {
            fetchFailure();
            fetchRecoveryMethod();
            fetchCars();
            fetchServices();
        }, []);
    };

    const fetchFailure = async () => {
        await axiosInstance.request({
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
        await axiosInstance.request({
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
            refusal_date: document.getElementById('form1').value,
            operating_hours: document.getElementById('form2').value,
            failure_description: document.getElementById('form3').value,
            parts_used: document.getElementById('form4').value ? document.getElementById('form4').value : '',
            restore_date: document.getElementById('form5').value,
            equipment_downtime: document.getElementById('form6').value,
            failure_node: document.getElementById('form7').value,
            recovery_method: document.getElementById('form8').value,
            car: document.getElementById('form9').value,
            service_company: document.getElementById('form10').value,
        };
        postComplain(data);
    };

    const postComplain = async (formdata) => {
        await axiosInstance.request({
            headers: {
                Authorization: `Bearer ${secureLocalStorage.getItem('token')}`,
            },
            method: "POST",
            url: `${main}/api/v1/compl/`,
            data: formdata
        }).then(() => {
            alert('Рекламация успешно зафиксирована !');
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
                <Container>
                    <Row className="d-flex justify-content-center align-items-center">
                        <Col md={8} lg={10} xs={10}>
                            <Card className="shadow">
                                <Card.Body>
                                    <Form onSubmit={handleSubmit}>

                                        <div className="form-outline" data-mdb-input-init>
                                            <label className="form-label" htmlFor="form1">Дата отказа - Формат(YYYY-MM-DD)</label>
                                            <input
                                                type="text"
                                                id="form1"
                                                className="form-control"
                                                required />
                                        </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                                        <div className="form-outline" data-mdb-input-init>
                                            <label className="form-label" htmlFor="form2">Наработка, м/час</label>
                                            <input
                                                type="text"
                                                id="form2"
                                                className="form-control"
                                                required />
                                        </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                                        <div className="form-outline" data-mdb-input-init>
                                            <label className="form-label" htmlFor="form3">Описание отказа</label>
                                            <input
                                                type="text"
                                                id="form3"
                                                className="form-control"
                                                required />
                                        </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                                        <div className="form-outline" data-mdb-input-init>
                                            <label className="form-label" htmlFor="form4">Используемые запасные части</label>
                                            <input
                                                type="text"
                                                id="form4"
                                                className="form-control" />
                                        </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                                        <div className="form-outline" data-mdb-input-init>
                                            <label className="form-label" htmlFor="form5">Дата восстановления - Формат(YYYY-MM-DD)</label>
                                            <input
                                                type="text"
                                                id="form5"
                                                className="form-control"
                                                required />
                                        </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                                        <div className="form-outline" data-mdb-input-init>
                                            <label className="form-label" htmlFor="form6">Время простоя техники</label>
                                            <input
                                                type="text"
                                                id="form6"
                                                className="form-control"
                                                required />
                                        </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                                        <Form.Label>Узел отказа</Form.Label>
                                        <Form.Select id="form7" required>
                                            <option></option>
                                            {fail ? fail.map((fail, index) => (
                                                <option key={index} value={fail['id']}>{fail['name']}</option>
                                            )) : null}
                                        </Form.Select>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                                        <Form.Label>Способ восстановления</Form.Label>
                                        <Form.Select id="form8" required>
                                            <option></option>
                                            {reco ? reco.map((reco, index) => (
                                                <option key={index} value={reco['id']}>{reco['name']}</option>
                                            )) : null}
                                        </Form.Select>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                                        <Form.Label>Машина</Form.Label>
                                        <Form.Select id="form9" required>
                                            <option></option>
                                            {cars ? cars.map((cars, index) => (
                                                <option key={index} value={cars['id']}>{cars['factory_number']}</option>
                                            )) : null}
                                        </Form.Select>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                                        <Form.Label>Сервисная компания</Form.Label>
                                        <Form.Select id="form10" required>
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
