import React, { useState, useEffect } from 'react';

import secureLocalStorage from "react-secure-storage";
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardBody } from 'mdb-react-ui-kit';
import { Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form';

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
        await axios.request({
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
        await axios.request({
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
        await axios.request({
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
        await axios.request({
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
        await axios.request({
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
        await axios.request({
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
            factory_number: document.getElementById('form1').value ? document.getElementById('form1').value : alert('Укажите заводской номер машины !'),
            engine_number: document.getElementById('form2').value ? document.getElementById('form2').value : alert('Укажите заводской номер двигателя !'),
            transmission_number: document.getElementById('form3').value ? document.getElementById('form3').value : alert('Укажите заводской номер трансмиссии !'),
            drive_axle_number: document.getElementById('form4').value ? document.getElementById('form4').value : alert('Укажите заводской номер ведущего моста !'),
            steering_axle_number: document.getElementById('form5').value ? document.getElementById('form5').value : alert('Укажите заводской номер управляемого моста !'),
            shipped_from_factory: document.getElementById('form6').value ? document.getElementById('form6').value : alert('Укажите дату !'),
            supply_contract_date: document.getElementById('form7').value ? document.getElementById('form7').value : alert('Укажите дату !'),
            сonsignee: document.getElementById('form8').value ? document.getElementById('form8').value : alert('Укажите грузополучателя !'),
            delivery_address: document.getElementById('form9').value ? document.getElementById('form9').value : alert('Укажите адрес поставки !'),
            equipment: document.getElementById('form10').value ? document.getElementById('form10').value : '',
            vehicle_model: document.getElementById('form11').value !== 'Модель техники' ? document.getElementById('form11').value : alert('Укажите модель техники !'),
            engine_model: document.getElementById('form12').value !== 'Модель двигателя' ? document.getElementById('form12').value : alert('Укажите модель двигателя !'),
            transmission_model: document.getElementById('form13').value !== 'Модель трансмиссии' ? document.getElementById('form13').value : alert('Укажите модель трансмиссии !'),
            drive_axle_model: document.getElementById('form14').value !== 'Модель ведущего моста' ? document.getElementById('form14').value : alert('Укажите модель ведущего моста !'),
            steering_axle_model: document.getElementById('form15').value !== 'Модель управляемого моста' ? document.getElementById('form15').value : alert('Укажите модель управляемого моста !'),
            client: document.getElementById('form16').value !== 'Клиент' ? document.getElementById('form16').value : alert('Необходимо определить клиента !'),
            service_company: document.getElementById('form17').value !== 'Сервисная компания' ? document.getElementById('form17').value : alert('Необходимо определить сервисную компанию !'),
        };
        postCar(data);
    };

    const postCar = async (formdata) => {
        await axios.request({
            headers: {
                Authorization: `Bearer ${secureLocalStorage.getItem('token')}`,
            },
            method: "POST",
            url: `${main}/api/v1/cars/`,
            data: formdata
        }).then(() => {
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
                <MDBContainer className="container py-5 h-100">
                    <MDBRow className="d-flex justify-content-center align-items-center h-100">
                        <MDBCol md="12" xl="10">
                            <MDBCard style={{ borderRadius: '6px' }} className="shadow">
                                <MDBCardBody className="text-center">

                                    <div className="form-outline" data-mdb-input-init>
                                        <label className="form-label" htmlFor="form1">Зав. № машины</label>
                                        <input
                                            type="text"
                                            id="form1"
                                            className="form-control" />
                                    </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                                    <div className="form-outline" data-mdb-input-init>
                                        <label className="form-label" htmlFor="form2">Зав. № двигателя</label>
                                        <input
                                            type="text"
                                            id="form2"
                                            className="form-control" />
                                    </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                                    <div className="form-outline" data-mdb-input-init>
                                        <label className="form-label" htmlFor="form3">Зав. № трансмиссии</label>
                                        <input
                                            type="text"
                                            id="form3"
                                            className="form-control" />
                                    </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                                    <div className="form-outline" data-mdb-input-init>
                                        <label className="form-label" htmlFor="form4">Зав. № ведущего моста</label>
                                        <input
                                            type="text"
                                            id="form4"
                                            className="form-control" />
                                    </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                                    <div className="form-outline" data-mdb-input-init>
                                        <label className="form-label" htmlFor="form5">Зав. № управляемого моста</label>
                                        <input
                                            type="text"
                                            id="form5"
                                            className="form-control" />
                                    </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                                    <div className="form-outline" data-mdb-input-init>
                                        <label className="form-label" htmlFor="form6">Дата отгрузки</label>
                                        <input
                                            type="text"
                                            id="form6"
                                            className="form-control" />
                                    </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                                    <div className="form-outline" data-mdb-input-init>
                                        <label className="form-label" htmlFor="form7">Договор по ставке №, Дата</label>
                                        <input
                                            type="text"
                                            id="form7"
                                            className="form-control" />
                                    </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                                    <div className="form-outline" data-mdb-input-init>
                                        <label className="form-label" htmlFor="form8">Грузополучатель</label>
                                        <input
                                            type="text"
                                            id="form8"
                                            className="form-control" />
                                    </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                                    <div className="form-outline" data-mdb-input-init>
                                        <label className="form-label" htmlFor="form9">Адрес поставки</label>
                                        <input
                                            type="text"
                                            id="form9"
                                            className="form-control" />
                                    </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                                    <div className="form-outline" data-mdb-input-init>
                                        <label className="form-label" htmlFor="form10">Оборудование</label>
                                        <input
                                            type="text"
                                            id="form10"
                                            className="form-control" />
                                    </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                                    <Form.Select id="form11">
                                        <option>Модель техники</option>
                                        {teh ? teh.map((teh, index) => (
                                            <option key={index} value={teh['id']}>{teh['name']}</option>
                                        )) : null}
                                    </Form.Select>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                                    <Form.Select id="form12">
                                        <option>Модель двигателя</option>
                                        {eng ? eng.map((eng, index) => (
                                            <option key={index} value={eng['id']}>{eng['name']}</option>
                                        )) : null}
                                    </Form.Select>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                                    <Form.Select id="form13">
                                        <option>Модель трансмиссии</option>
                                        {tran ? tran.map((tran, index) => (
                                            <option key={index} value={tran['id']}>{tran['name']}</option>
                                        )) : null}
                                    </Form.Select>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                                    <Form.Select id="form14">
                                        <option>Модель ведущего моста</option>
                                        {axle ? axle.map((axle, index) => (
                                            <option key={index} value={axle['id']}>{axle['name']}</option>
                                        )) : null}
                                    </Form.Select>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                                    <Form.Select id="form15">
                                        <option>Модель управляемого моста</option>
                                        {steaxle ? steaxle.map((steaxle, index) => (
                                            <option key={index} value={steaxle['id']}>{steaxle['name']}</option>
                                        )) : null}
                                    </Form.Select>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                                    <Form.Select id="form16">
                                        <option>Клиент</option>
                                        {clients ? clients.map((clients, index) => (
                                            <option key={index} value={clients['client']['id']}>{clients['client']['company']}</option>
                                        )) : null}
                                    </Form.Select>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                                    <Form.Select id="form17">
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
