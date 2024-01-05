import React from "react";

export default function FetchCars(props) {
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
                    {props.cars ? props.cars.map((cars, index) => (
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
                            <td>{cars.equipment ? cars.equipment : 'Не указано !'}</td>
                            <td>{cars.client["client"] ? cars.client["client"]['company'] : 'Не указано !'}</td>
                            <td>{cars.service_company["service"] ? cars.service_company["service"]['company'] : 'Не указано !'}</td>
                        </tr>
                    )) : null}
                </tbody>
            </table>
        </React.Fragment>
    );
};