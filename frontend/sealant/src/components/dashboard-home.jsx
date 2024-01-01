import React, { useState, useEffect } from "react";

import axios from 'axios';
import { Telegram } from 'react-bootstrap-icons';
import { Search } from 'react-bootstrap-icons';

import { main } from './urls';

import RGB1 from '../images/RGB1.png';

export default function DashboardHome() {
    const [cars, setCars] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        let item = document.getElementsByClassName('form-control')[0].value;
        // axios.request({
        //     method: "GET",
        //     url: `${main}/api/v1/cars/${item}`
        // }).then(response => {
        //     setCars(response.data);
        // });
    };

    const fetchCars = async () => {
        axios.request({
            method: "GET",
            url: `${main}/api/v1/cars/`
        }).then(response => {
            setCars(response.data);
        });
    };

    useEffect(() => {
        fetchCars();
    }, []);

    return (
        <React.Fragment>
            <header className="navbar navbar-expand-lg navbar-light bg-body-tertiary">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <a className="navbar-brand mt-2 mt-lg-0" href="https://silant.com/" target="_blank" rel="noopener noreferrer">
                            <img src={RGB1} height="90" alt="СИЛАНТ logo" loading="lazy" />
                        </a>
                        <a className="text-body" href="tel:+7-8352-20-12-09">
                            +7-8352-20-12-09
                        </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <a className="text-body" href="https://t.me/LEON_JOFE" target="_blank" rel="noopener noreferrer">
                            <Telegram size={20} />
                        </a>
                    </div>
                    <div className="w-auto p-3 translucent-bg">Электронная сервисная книжка СИЛАНТ</div>
                    &nbsp;&nbsp;
                    <a href="/login" target="_blank" rel="noopener noreferrer">
                        <button type="button" className="btn btn-danger" data-mdb-ripple-init>Войти</button>
                    </a>
                </div>
            </header>

            <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <h5>Проверьте комплектацию и технические характеристики техники СИЛАНТ</h5>
                    </div>
                    <div className="d-flex align-items-center">
                        <div className="input-group">
                            <div className="form-outline" data-mdb-input-init>
                                <input type="search" placeholder='Заводской номер' className="form-control" />
                            </div>
                            <button type="submit" onClick={handleSubmit} className="btn btn-danger" data-mdb-ripple-init>
                                <Search size={20} />
                            </button>
                        </div>
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
                        {/* <th>Договор по ставке №, Дата</th> */}
                        {/* <th>Дата отгрузки с завода</th> */}
                        {/* <th>Грузополучатель (конечный потребитель)</th> */}
                        {/* <th>Адрес поставки (эксплуатации)</th> */}
                        <th>Комплектация (доп. опции)</th>
                        {/* <th>Клиент</th> */}
                        {/* <th>Сервисная организация</th> */}
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
                            <td>{cars.equipment ? cars.equipment.slice(0, 20) + '...' : 'Не указано !'}</td>
                        </tr>
                    )) : <h6>Ничего не найдено !</h6>}
                </tbody>
            </table>

            <footer className="bg-body-tertiary text-center text-lg-start">
                <div className="text-center p-3">
                    © 2024 Copyright&nbsp;:&nbsp;
                    <a className="text-body" href="https://silant.com/" target="_blank" rel="noopener noreferrer">
                        Silant.com
                    </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <a className="text-body" href="tel:+7-8352-20-12-09">
                        +7-8352-20-12-09
                    </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <a className="text-body" href="https://t.me/LEON_JOFE" target="_blank" rel="noopener noreferrer">
                        <Telegram size={20} />
                    </a>
                </div>
            </footer>
        </React.Fragment >
    );
};
