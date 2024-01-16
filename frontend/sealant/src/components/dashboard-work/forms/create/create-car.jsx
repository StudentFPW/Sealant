import React, { useState, useEffect } from 'react';

import secureLocalStorage from "react-secure-storage";
import { axiosInstance } from '../../../config/http';
import { useHistory } from 'react-router-dom';
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";

import '../styles/forms.css';
import { main } from "../../../urls";


export default function CreateCar() {
    const [teh, setTeh] = useState([]);
    const [eng, setEng] = useState([]);
    const [tran, setTran] = useState([]);
    const [axle, setAxle] = useState([]);
    const [steaxle, setSteeringAxle] = useState([]);
    const [clients, setClients] = useState([]);
    const [services, setServices] = useState([]);
    let history = useHistory();

    if (!secureLocalStorage.getItem('token')) {
        history.push('/login');
    } else {
        useEffect(() => {
            fetchTechnique();
            fetchEngine();
            fetchTransmission();
            fetchAxle();
            fetchSteeringAxle();
            fetchClients();
            fetchServices();
        }, []);
    };

    const fetchTechnique = async () => {
        await axiosInstance.request({
            headers: {
                Authorization: `Bearer ${secureLocalStorage.getItem('token')}`,
            },
            method: "GET",
            url: `${main}/api/v1/teh/`
        }).then(response => {
            setTeh(response.data);
        }).catch((error) => {
            console.log("Request error: " + error);
            history.push('/dash');
        });
    };

    const fetchEngine = async () => {
        await axiosInstance.request({
            headers: {
                Authorization: `Bearer ${secureLocalStorage.getItem('token')}`,
            },
            method: "GET",
            url: `${main}/api/v1/eng/`
        }).then(response => {
            setEng(response.data);
        }).catch((error) => {
            console.log("Request error: " + error);
            history.push('/dash');
        });
    };

    const fetchTransmission = async () => {
        await axiosInstance.request({
            headers: {
                Authorization: `Bearer ${secureLocalStorage.getItem('token')}`,
            },
            method: "GET",
            url: `${main}/api/v1/tran/`
        }).then(response => {
            setTran(response.data);
        }).catch((error) => {
            console.log("Request error: " + error);
            history.push('/dash');
        });
    };

    const fetchAxle = async () => {
        await axiosInstance.request({
            headers: {
                Authorization: `Bearer ${secureLocalStorage.getItem('token')}`,
            },
            method: "GET",
            url: `${main}/api/v1/axle/`
        }).then(response => {
            setAxle(response.data);
        }).catch((error) => {
            console.log("Request error: " + error);
            history.push('/dash');
        });
    };

    const fetchSteeringAxle = async () => {
        await axiosInstance.request({
            headers: {
                Authorization: `Bearer ${secureLocalStorage.getItem('token')}`,
            },
            method: "GET",
            url: `${main}/api/v1/steaxle/`
        }).then(response => {
            setSteeringAxle(response.data);
        }).catch((error) => {
            console.log("Request error: " + error);
            history.push('/dash');
        });
    };

    const fetchClients = async () => {
        await axiosInstance.request({
            headers: {
                Authorization: `Bearer ${secureLocalStorage.getItem('token')}`,
            },
            method: "GET",
            url: `${main}/api/v1/clients/`
        }).then(response => {
            setClients(response.data.results);
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
            factory_number: document.getElementById('form1').value,
            engine_number: document.getElementById('form2').value,
            transmission_number: document.getElementById('form3').value,
            drive_axle_number: document.getElementById('form4').value,
            steering_axle_number: document.getElementById('form5').value,
            shipped_from_factory: document.getElementById('form6').value,
            supply_contract_date: document.getElementById('form7').value,
            сonsignee: document.getElementById('form8').value,
            delivery_address: document.getElementById('form9').value,
            equipment: document.getElementById('form10').value ? document.getElementById('form10').value : '',
            vehicle_model: document.getElementById('form11').value,
            engine_model: document.getElementById('form12').value,
            transmission_model: document.getElementById('form13').value,
            drive_axle_model: document.getElementById('form14').value,
            steering_axle_model: document.getElementById('form15').value,
            client: document.getElementById('form16').value,
            service_company: document.getElementById('form17').value,
        };
        postCar(data);
    };

    const postCar = async (formdata) => {
        await axiosInstance.request({
            headers: {
                Authorization: `Bearer ${secureLocalStorage.getItem('token')}`,
            },
            method: "POST",
            url: `${main}/api/v1/cars/`,
            data: formdata
        }).then(() => {
            alert('Техника успешно зарегистрирована !');
            history.push(`/getcar/${document.getElementById('form1').value}`);
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
                                            <label className="form-label" htmlFor="form1">Зав. № машины</label>
                                            <input
                                                type="text"
                                                id="form1"
                                                className="form-control"
                                                required />
                                        </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                                        <div className="form-outline" data-mdb-input-init>
                                            <label className="form-label" htmlFor="form2">Зав. № двигателя</label>
                                            <input
                                                type="text"
                                                id="form2"
                                                className="form-control"
                                                required />
                                        </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                                        <div className="form-outline" data-mdb-input-init>
                                            <label className="form-label" htmlFor="form3">Зав. № трансмиссии</label>
                                            <input
                                                type="text"
                                                id="form3"
                                                className="form-control"
                                                required />
                                        </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                                        <div className="form-outline" data-mdb-input-init>
                                            <label className="form-label" htmlFor="form4">Зав. № ведущего моста</label>
                                            <input
                                                type="text"
                                                id="form4"
                                                className="form-control"
                                                required />
                                        </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                                        <div className="form-outline" data-mdb-input-init>
                                            <label className="form-label" htmlFor="form5">Зав. № управляемого моста</label>
                                            <input
                                                type="text"
                                                id="form5"
                                                className="form-control"
                                                required />
                                        </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                                        <div className="form-outline" data-mdb-input-init>
                                            <label className="form-label" htmlFor="form6">Дата отгрузки - Формат(YYYY-MM-DD)</label>
                                            <input
                                                type="text"
                                                id="form6"
                                                className="form-control"
                                                required />
                                        </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                                        <div className="form-outline" data-mdb-input-init>
                                            <label className="form-label" htmlFor="form7">Договор по ставке №, Дата - Формат(YYYY-MM-DD)</label>
                                            <input
                                                type="text"
                                                id="form7"
                                                className="form-control"
                                                required />
                                        </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                                        <div className="form-outline" data-mdb-input-init>
                                            <label className="form-label" htmlFor="form8">Грузополучатель</label>
                                            <input
                                                type="text"
                                                id="form8"
                                                className="form-control"
                                                required />
                                        </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                                        <div className="form-outline" data-mdb-input-init>
                                            <label className="form-label" htmlFor="form9">Адрес поставки</label>
                                            <input
                                                type="text"
                                                id="form9"
                                                className="form-control"
                                                required />
                                        </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                                        <div className="form-outline" data-mdb-input-init>
                                            <label className="form-label" htmlFor="form10">Оборудование</label>
                                            <input
                                                type="text"
                                                id="form10"
                                                className="form-control" />
                                        </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                                        <Form.Label>Модель техники</Form.Label>
                                        <Form.Select id="form11" required>
                                            <option></option>
                                            {teh ? teh.map((teh, index) => (
                                                <option key={index} value={teh['id']}>{teh['name']}</option>
                                            )) : null}
                                        </Form.Select>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                                        <Form.Label>Модель двигателя</Form.Label>
                                        <Form.Select id="form12" required>
                                            <option></option>
                                            {eng ? eng.map((eng, index) => (
                                                <option key={index} value={eng['id']}>{eng['name']}</option>
                                            )) : null}
                                        </Form.Select>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                                        <Form.Label>Модель трансмиссии</Form.Label>
                                        <Form.Select id="form13" required>
                                            <option></option>
                                            {tran ? tran.map((tran, index) => (
                                                <option key={index} value={tran['id']}>{tran['name']}</option>
                                            )) : null}
                                        </Form.Select>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                                        <Form.Label>Модель ведущего моста</Form.Label>
                                        <Form.Select id="form14" required>
                                            <option></option>
                                            {axle ? axle.map((axle, index) => (
                                                <option key={index} value={axle['id']}>{axle['name']}</option>
                                            )) : null}
                                        </Form.Select>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                                        <Form.Label>Модель управляемого моста</Form.Label>
                                        <Form.Select id="form15" required>
                                            <option></option>
                                            {steaxle ? steaxle.map((steaxle, index) => (
                                                <option key={index} value={steaxle['id']}>{steaxle['name']}</option>
                                            )) : null}
                                        </Form.Select>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                                        <Form.Label>Клиент</Form.Label>
                                        <Form.Select id="form16" required>
                                            <option></option>
                                            {clients ? clients.map((clients, index) => (
                                                <option key={index} value={clients['client']['id']}>{clients['client']['company']}</option>
                                            )) : null}
                                        </Form.Select>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                                        <Form.Label>Сервисная компания</Form.Label>
                                        <Form.Select id="form17" required>
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
        </React.Fragment >
    );
};
