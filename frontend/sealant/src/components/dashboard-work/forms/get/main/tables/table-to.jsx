import React from "react";

import { useHistory } from 'react-router-dom';


export default function TableTo(props) {
    let history = useHistory();

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
                        <th>Обслуживающая компания</th>
                        <th>Сервисная компания</th>
                        {props.staffstatus === "allow" ? <th></th> : ''}
                    </tr>
                </thead>

                <tbody>
                    {props.to ? props.to.map((to, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>

                            <td title={to.type_of_maintenance ? to.type_of_maintenance['description'] : ''}>
                                {to.type_of_maintenance ? to.type_of_maintenance['description'].slice(0, 15) + '...' : 'Не указано !'}
                            </td>

                            <td>{to.maintenance_date ? to.maintenance_date : 'Не указано !'}</td>
                            <td>{to.operating_hours ? to.operating_hours : 'Не указано !'}</td>
                            <td>{to.order_number ? to.order_number : 'Не указано !'}</td>
                            <td>{to.order_date ? to.order_date : 'Не указано !'}</td>
                            <td>{to.maintenance_company ? to.maintenance_company['service']['company'] : 'Не указано !'}</td>
                            <td>{to.service_company ? to.service_company['service']['company'] : 'Не указано !'}</td>

                            {props.staffstatus === "allow" ? <td>
                                <button
                                    type="button"
                                    className="btn btn-link btn-sm btn-rounded"
                                    onClick={() => { history.push(`/updateto/${to.id}`) }}>
                                    🛠️
                                </button>
                            </td> : ""}
                        </tr>
                    )) : null}
                </tbody>
            </table>
        </React.Fragment>
    );
};
