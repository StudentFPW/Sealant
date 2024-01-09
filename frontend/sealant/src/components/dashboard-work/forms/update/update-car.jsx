import React, { useState, useEffect } from 'react';

import secureLocalStorage from "react-secure-storage";
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardBody } from 'mdb-react-ui-kit';
import { Button } from "react-bootstrap";

import withRouter from "../../../withRouter/withRouter";
import './styles/update.css';
import { main } from "../../../urls";


function UpdateCars(props) {
    const [car, setCar] = useState([]);
    let history = useHistory();

    if (!secureLocalStorage.getItem('token')) {
        history.push('/login');
    } else {
        useEffect(() => {
            fetchCar();
        }, []);
    };

    const fetchCar = async () => {
        await axios.request({
            headers: {
                Authorization: `Bearer ${secureLocalStorage.getItem('token')}`,
            },
            method: "GET",
            url: `${main}/api/v1/cars/${props.params.id}/`,
        }).then(response => {
            setCar(response.data);
        }).catch((error) => {
            console.log("Request error: " + error);
            history.push('/dash');
        });
    };

    const getFormData = () => {
        let data = {
            factory_number: document.getElementById('form1').value ? document.getElementById('form1').value : car.factory_number,
            vehicle_model: document.getElementById('form2').value ? document.getElementById('form2').value : car.vehicle_model['name'],
            engine_model: document.getElementById('form3').value ? document.getElementById('form3').value : car.engine_model['name'],
            engine_number: document.getElementById('form4').value ? document.getElementById('form4').value : car.engine_number,
            transmission_model: document.getElementById('form5').value ? document.getElementById('form5').value : car.transmission_model['name'],
            transmission_number: document.getElementById('form6').value ? document.getElementById('form6').value : car.transmission_number,
            drive_axle_model: document.getElementById('form7').value ? document.getElementById('form7').value : car.drive_axle_model['name'],
            drive_axle_number: document.getElementById('form8').value ? document.getElementById('form8').value : car.drive_axle_number,
            steering_axle_model: document.getElementById('form9').value ? document.getElementById('form9').value : car.steering_axle_model['name'],
            steering_axle_number: document.getElementById('form10').value ? document.getElementById('form10').value : car.steering_axle_number,
            supply_contract_date: document.getElementById('form11').value ? document.getElementById('form11').value : car.supply_contract_date,
            shipped_from_factory: document.getElementById('form12').value ? document.getElementById('form12').value : car.shipped_from_factory,
            сonsignee: document.getElementById('form13').value ? document.getElementById('form13').value : car.сonsignee,
            delivery_address: document.getElementById('form14').value ? document.getElementById('form14').value : car.delivery_address,
        };
        putCar(data);
    };

    const putCar = async (formdata) => {
        await axios.request({
            headers: {
                Authorization: `Bearer ${secureLocalStorage.getItem('token')}`,
            },
            method: "PUT",
            url: `${main}/api/v1/cars/${props.params.id}/`,
            data: formdata
        }).then(() => {
            history.push('/dash');
        }).catch((error) => {
            console.log("Request error: " + error);
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
                                            placeholder={car.factory_number ? car.factory_number : 'Отсутствует !'}
                                            type="text"
                                            id="form1"
                                            className="form-control" />
                                    </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                                    <div className="form-outline" data-mdb-input-init>
                                        <label className="form-label" htmlFor="form2">Модель техники</label>
                                        <input
                                            placeholder={car.vehicle_model ? car.vehicle_model['name'] : 'Отсутствует !'}
                                            type="text"
                                            id="form2"
                                            className="form-control" />
                                    </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                                    <div className="form-outline" data-mdb-input-init>
                                        <label className="form-label" htmlFor="form3">Модель двигателя</label>
                                        <input
                                            placeholder={car.engine_model ? car.engine_model['name'] : 'Отсутствует !'}
                                            type="text"
                                            id="form3"
                                            className="form-control" />
                                    </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                                    <div className="form-outline" data-mdb-input-init>
                                        <label className="form-label" htmlFor="form4">Зав. № двигателя</label>
                                        <input
                                            placeholder={car.engine_number ? car.engine_number : 'Отсутствует !'}
                                            type="text"
                                            id="form4"
                                            className="form-control" />
                                    </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                                    <div className="form-outline" data-mdb-input-init>
                                        <label className="form-label" htmlFor="form5">Модель трансмиссии</label>
                                        <input
                                            placeholder={car.transmission_model ? car.transmission_model['name'] : 'Отсутствует !'}
                                            type="text"
                                            id="form5"
                                            className="form-control" />
                                    </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                                    <div className="form-outline" data-mdb-input-init>
                                        <label className="form-label" htmlFor="form6">Зав. № трансмиссии</label>
                                        <input
                                            placeholder={car.transmission_number ? car.transmission_number : 'Отсутствует !'}
                                            type="text"
                                            id="form6"
                                            className="form-control" />
                                    </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                                    <div className="form-outline" data-mdb-input-init>
                                        <label className="form-label" htmlFor="form7">Модель ведущего моста</label>
                                        <input
                                            placeholder={car.drive_axle_model ? car.drive_axle_model['name'] : 'Отсутствует !'}
                                            type="text"
                                            id="form7"
                                            className="form-control" />
                                    </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                                    <div className="form-outline" data-mdb-input-init>
                                        <label className="form-label" htmlFor="form8">Зав. № ведущего моста</label>
                                        <input
                                            placeholder={car.drive_axle_number ? car.drive_axle_number : 'Отсутствует !'}
                                            type="text"
                                            id="form8"
                                            className="form-control" />
                                    </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                                    <div className="form-outline" data-mdb-input-init>
                                        <label className="form-label" htmlFor="form9">Модель управляемого моста</label>
                                        <input
                                            placeholder={car.steering_axle_model ? car.steering_axle_model['name'] : 'Отсутствует !'}
                                            type="text"
                                            id="form9"
                                            className="form-control" />
                                    </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                                    <div className="form-outline" data-mdb-input-init>
                                        <label className="form-label" htmlFor="form10">Зав. № управляемого моста</label>
                                        <input
                                            placeholder={car.steering_axle_number ? car.steering_axle_number : 'Отсутствует !'}
                                            type="text"
                                            id="form10"
                                            className="form-control" />
                                    </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                                    <div className="form-outline" data-mdb-input-init>
                                        <label className="form-label" htmlFor="form11">Договор по ставке №, Дата</label>
                                        <input
                                            placeholder={car.supply_contract_date ? car.supply_contract_date : 'Отсутствует !'}
                                            type="text"
                                            id="form11"
                                            className="form-control" />
                                    </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                                    <div className="form-outline" data-mdb-input-init>
                                        <label className="form-label" htmlFor="form12">Дата отгрузки</label>
                                        <input
                                            placeholder={car.shipped_from_factory ? car.shipped_from_factory : 'Отсутствует !'}
                                            type="text"
                                            id="form12"
                                            className="form-control" />
                                    </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                                    <div className="form-outline" data-mdb-input-init>
                                        <label className="form-label" htmlFor="form13">Грузополучатель</label>
                                        <input
                                            placeholder={car.сonsignee ? car.сonsignee : 'Отсутствует !'}
                                            type="text"
                                            id="form13"
                                            className="form-control" />
                                    </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                                    <div className="form-outline" data-mdb-input-init>
                                        <label className="form-label" htmlFor="form14">Адрес поставки</label>
                                        <input
                                            placeholder={car.delivery_address ? car.delivery_address : 'Отсутствует !'}
                                            type="text"
                                            id="form14"
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
        </React.Fragment >
    );
};

export default withRouter(UpdateCars);