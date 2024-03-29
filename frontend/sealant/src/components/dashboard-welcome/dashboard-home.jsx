import React, { useState, useEffect } from "react";

import { axiosInstance } from '../config/http';
import secureLocalStorage from "react-secure-storage";
import { useHistory } from 'react-router-dom';
import { Telegram } from 'react-bootstrap-icons';
import { Search } from 'react-bootstrap-icons';
import { ArrowClockwise } from 'react-bootstrap-icons';

import { main } from '../urls';
import RGB1 from './images/RGB1.png';
import './styles/dashboard-home.css';


export default function DashboardHome() {
    const [cars, setCars] = useState([]);
    let history = useHistory();

    if (secureLocalStorage.getItem('token')) {
        history.push('/dash');
    };

    const handleFilter = async () => {
        let item = document.getElementsByClassName('form-control')[0].value;
        if (item) {
            try {
                const response = await axiosInstance.get(`${main}/api/v1/cars/?factory_number=${item}`);
                if (response.data.length) {
                    setCars(response.data);
                } else {
                    alert('Ничего не найдено, попробуйте еще раз!');
                };
            } catch (error) {
                console.log("Request error: " + error);
                alert('Что-то пошло не так, попробуйте попозже!');
                history.push('/');
            };
        } else {
            alert('Пожалуйста введите заводской номер!');
            history.push('/');
        };
    };

    const fetchCars = async () => {
        try {
            const response = await axiosInstance.get(`${main}/api/v1/cars/`);
            setCars(response.data);
        } catch (error) {
            console.log("Request error: " + error);
        };
    };

    useEffect(() => {
        fetchCars();
    }, []);

    return (
        <React.Fragment>
            <header className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "#EBE6D6" }}>
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">

                        <a className="navbar-brand mt-2 mt-lg-0"
                            href="https://silant.com/"
                            target="_blank"
                            rel="noopener noreferrer">
                            <img src={RGB1} height="90" alt="СИЛАНТ logo" loading="lazy" />
                        </a>

                        <a className="text-body"
                            href="tel:+7-8352-20-12-09">
                            +7-8352-20-12-09
                        </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                        <a className="text-body"
                            href="https://t.me/LEON_JOFE"
                            target="_blank"
                            rel="noopener noreferrer">
                            <Telegram size={20} />
                        </a>

                    </div>

                    <div className="w-auto p-3 translucent-bg">
                        Электронная сервисная книжка СИЛАНТ
                    </div>&nbsp;&nbsp;

                    <button
                        onClick={() => { history.push('/login') }}
                        type="button"
                        className="btn"
                        data-mdb-ripple-init
                        style={{ WebkitTextFillColor: "black", backgroundColor: '#D20A11' }}>
                        Войти
                    </button>

                </div>
            </header>

            <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "#EBE6D6" }}>
                <div className="container-fluid">

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <h5>
                            Проверьте комплектацию и технические характеристики техники СИЛАНТ
                        </h5>
                    </div>

                    <div className="d-flex align-items-center">
                        <div className="input-group">

                            <button type="submit"
                                onClick={fetchCars}
                                className="btn btn-danger"
                                data-mdb-ripple-init
                                style={{ WebkitTextFillColor: "black", backgroundColor: '#D20A11' }}>
                                <ArrowClockwise size={20} style={{ color: 'black' }} />
                            </button>

                            <div className="form-outline" data-mdb-input-init>
                                <input type="search" placeholder='Заводской номер' className="form-control" />
                            </div>

                            <button type="submit"
                                onClick={handleFilter}
                                className="btn btn-danger"
                                data-mdb-ripple-init
                                style={{ WebkitTextFillColor: "black", backgroundColor: '#D20A11' }}>
                                <Search size={20} style={{ color: 'black' }} />
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
                        </tr>
                    )) : null}
                </tbody>
            </table>

            <footer className="text-center text-lg-start" id="footer" style={{ backgroundColor: "#EBE6D6" }}>
                <div className="text-center p-3">
                    © 2024 Copyright&nbsp;:&nbsp;

                    <a className="text-body"
                        href="https://silant.com/"
                        target="_blank"
                        rel="noopener noreferrer">
                        Silant.com
                    </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                    <a className="text-body"
                        href="tel:+7-8352-20-12-09">
                        +7-8352-20-12-09
                    </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                    <a className="text-body"
                        href="https://t.me/LEON_JOFE"
                        target="_blank"
                        rel="noopener noreferrer">
                        <Telegram size={20} />
                    </a>
                </div>
            </footer>
        </React.Fragment >
    );
};
