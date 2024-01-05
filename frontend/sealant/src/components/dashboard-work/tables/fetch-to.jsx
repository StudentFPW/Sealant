import React from "react";

export default function FetchTo(props) {
    return (
        <React.Fragment>
            <table className="table align-middle mb-0 bg-white">
                <thead className="bg-light">
                    <tr>
                        <th>№</th>
                        <th>Вид ТО</th>
                        <th>Дата проведения ТО</th>
                        <th>Наработка, м/час</th>
                        <th>№ заказ-наряда</th>
                        <th>Дата заказа-наряда</th>
                        <th>Сервисная компания</th>
                    </tr>
                </thead>

                <tbody>
                    {props.to ? props.to.map((to, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{to.type_of_maintenance ? to.type_of_maintenance['description'] : 'Не указано !'}</td>
                            <td>{to.maintenance_date ? to.maintenance_date : 'Не указано !'}</td>
                            <td>{to.operating_hours ? to.operating_hours : 'Не указано !'}</td>
                            <td>{to.order_number ? to.order_number : 'Не указано !'}</td>
                            <td>{to.order_date ? to.order_date : 'Не указано !'}</td>
                            <td>{to.service_company ? to.service_company['service']['company'] : 'Не указано !'}</td>
                        </tr>
                    )) : null}
                </tbody>
            </table>
        </React.Fragment>
    );
};