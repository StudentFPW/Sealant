import React, { useState, useEffect } from "react";

import secureLocalStorage from "react-secure-storage";
import axios from 'axios';

import { main } from '../urls';


export default function Body() {
    const [cars, setCars] = useState([]);

    const fetchCars = async () => {
        await axios.request({
            headers: {
                Authorization: `Bearer ${secureLocalStorage.getItem('token')}`,
            },
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
                        {/* <th>Комплектация (доп. опции)</th> */}
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
                        </tr>
                    )) : null}
                </tbody>
            </table>
        </React.Fragment>
    );
};