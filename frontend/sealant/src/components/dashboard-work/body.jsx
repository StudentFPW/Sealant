import React, { useState, useEffect } from "react";

import secureLocalStorage from "react-secure-storage";
import axios from 'axios';

import { main } from '../dashboard-welcome/urls';


export default function Body() {
    const [cars, setCars] = useState([]);
    const [to, setTo] = useState([]);
    const [complaints, setComplaints] = useState([]);

    // const fetchUserClient = async (car_id, id) => {
    //     await axios.request({
    //         headers: {
    //             Authorization: `Bearer ${secureLocalStorage.getItem('token')}`,
    //         },
    //         method: "GET",
    //         url: `${main}/api/v1/users/?id=${id}`
    //     }).then(response => {
    //         if (response.data) {
    //             cars[car_id]['client'] = response.data["results"][0].company
    //         }
    //     });
    // };

    // const fetchUserService = async (car_id, id) => {
    //     await axios.request({
    //         headers: {
    //             Authorization: `Bearer ${secureLocalStorage.getItem('token')}`,
    //         },
    //         method: "GET",
    //         url: `${main}/api/v1/users/?id=${id}`
    //     }).then(response => {
    //         if (response.data) {
    //             cars[car_id]['service'] = response.data["results"][0].company
    //         }
    //     });
    // };

    // const spiner = () => {
    //     for (let i = 0; i < cars.length; i++) {
    //         fetchUserClient(cars[i]['id'], cars[i]['client']['client']);
    //         fetchUserService(cars[i]['id'], cars[i]['service_company']['service']);
    //     };
    // };

    const fetchCars = async () => {
        await axios.request({
            headers: {
                Authorization: `Bearer ${secureLocalStorage.getItem('token')}`,
            },
            method: "GET",
            url: `${main}/api/v1/cars/`
        }).then(response => {
            setCars(response.data);
            // spiner();
        });
    };

    const fetchTo = async () => {
        await axios.request({
            headers: {
                Authorization: `Bearer ${secureLocalStorage.getItem('token')}`,
            },
            method: "GET",
            url: `${main}/api/v1/to/`
        }).then(response => {
            setTo(response.data);
        });
    };

    const fetchComplaints = async () => {
        await axios.request({
            headers: {
                Authorization: `Bearer ${secureLocalStorage.getItem('token')}`,
            },
            method: "GET",
            url: `${main}/api/v1/compl/`
        }).then(response => {
            setComplaints(response.data);
        });
    };

    useEffect(() => {
        fetchCars();
    }, []);

    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "#ebe5d6" }}>
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <h5>Информация о комплектации и технических характеристиках вашей техники</h5>
                    </div>
                    <div className="d-flex align-items-center">
                        <button type="submit" onClick={fetchCars} className="btn btn-danger" data-mdb-ripple-init>
                            Общая информация
                        </button>
                        &nbsp;
                        &nbsp;
                        <button type="submit" onClick={fetchTo} className="btn btn-danger" data-mdb-ripple-init>
                            Техническое обслуживание
                        </button>
                        &nbsp;
                        &nbsp;
                        <button type="submit" onClick={fetchComplaints} className="btn btn-danger" data-mdb-ripple-init>
                            Рекламации
                        </button>
                    </div>
                </div>
            </nav>

            <table className="table align-middle mb-0 bg-white">
                <thead className="bg-light">
                    <tr>
                        <th>№</th>
                        <th>Зав. № машины</th>
                        <th>Модель техники</th>
                        <th>Модель двигателя</th>
                        <th>Зав. № двигателя</th>
                        <th>Модель трансмиссии</th>
                        <th>Зав. № трансмиссии</th>
                        <th>Модель ведущего моста</th>
                        <th>Зав. № ведущего моста</th>
                        <th>Модель управляемого моста</th>
                        <th>Зав. № управляемого моста</th>
                        <th>Договор по ставке №, Дата</th>
                        <th>Дата отгрузки</th>
                        <th>Грузополучатель</th>
                        <th>Адрес поставки</th>
                        <th>Комплектация</th>
                        <th>Клиент</th>
                        <th>Сервисная организация</th>
                    </tr>
                </thead>

                <tbody>
                    {cars ? cars.map((cars, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{cars.factory_number ? cars.factory_number : 'Не указано !'}</td>
                            <td>{cars.vehicle_model['name'] ? cars.vehicle_model['name'] : 'Не указано !'}</td>
                            <td>{cars.engine_model['name'] ? cars.engine_model['name'] : 'Не указано !'}</td>
                            <td>{cars.engine_number ? cars.engine_number : 'Не указано !'}</td>
                            <td>{cars.transmission_model['name'] ? cars.transmission_model['name'] : 'Не указано !'}</td>
                            <td>{cars.transmission_number ? cars.transmission_number : 'Не указано !'}</td>
                            <td>{cars.drive_axle_model['name'] ? cars.drive_axle_model['name'] : 'Не указано !'}</td>
                            <td>{cars.drive_axle_number ? cars.drive_axle_number : 'Не указано !'}</td>
                            <td>{cars.steering_axle_model['name'] ? cars.steering_axle_model['name'] : 'Не указано !'}</td>
                            <td>{cars.steering_axle_number ? cars.steering_axle_number : 'Не указано !'}</td>
                            <td>{cars.supply_contract_date ? cars.supply_contract_date : 'Не указано !'}</td>
                            <td>{cars.shipped_from_factory ? cars.shipped_from_factory : 'Не указано !'}</td>
                            <td>{cars.сonsignee ? cars.сonsignee : 'Не указано !'}</td>
                            <td>{cars.delivery_address ? cars.delivery_address : 'Не указано !'}</td>
                            <td>{cars.equipment ? cars.equipment.slice(0, 15) + '...' : 'Не указано !'}</td>
                            <td>{cars.client["client"] ? cars.client["client"] : 'Не указано !'}</td>
                            <td>{cars.service_company["service"] ? cars.service_company["service"] : 'Не указано !'}</td>
                        </tr>
                    )) : null}
                </tbody>
            </table>
        </React.Fragment>
    );
};