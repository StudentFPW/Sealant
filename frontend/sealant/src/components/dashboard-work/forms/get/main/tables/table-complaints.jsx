import React from "react";

import { useHistory } from 'react-router-dom';


export default function TableComplaints(props) {
    let history = useHistory();

    return (
        <React.Fragment>
            <table className="table align-middle mb-0 bg-white">
                <thead className="bg-light">
                    <tr>
                        <th>№</th>
                        <th>Дата отказа</th>
                        <th>Наработка, м/час</th>
                        <th>Узел отказа</th>
                        <th>Описание отказа</th>
                        <th>Способ восстановления</th>
                        <th>Используемые запасные части</th>
                        <th>Дата восстановления</th>
                        <th>Время простоя техники</th>
                        <th>Сервисная компания</th>
                        {props.staffstatus === "allow" ? <th></th> : ''}
                    </tr>
                </thead>

                <tbody>
                    {props.complaints ? props.complaints.map((complaints, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{complaints.refusal_date ? complaints.refusal_date : 'Не указано !'}</td>
                            <td>{complaints.operating_hours ? complaints.operating_hours : 'Не указано !'}</td>

                            <td title={complaints.failure_node ? complaints.failure_node['description'] : 'Не указано !'}>
                                {complaints.failure_node ? complaints.failure_node['description'].slice(0, 15) + '...' : 'Не указано !'}
                            </td>

                            <td title={complaints.failure_description ? complaints.failure_description : ''}>
                                {complaints.failure_description ? complaints.failure_description.slice(0, 15) + '...' : 'Не указано !'}
                            </td>

                            <td title={complaints.recovery_method ? complaints.recovery_method['description'] : ''}>
                                {complaints.recovery_method ? complaints.recovery_method['description'].slice(0, 15) + '...' : 'Не указано !'}
                            </td>

                            <td title={complaints.parts_used ? complaints.parts_used : ''}>
                                {complaints.parts_used ? complaints.parts_used.slice(0, 15) + '...' : 'Не указано !'}
                            </td>

                            <td>{complaints.restore_date ? complaints.restore_date : 'Не указано !'}</td>
                            <td>{complaints.equipment_downtime ? complaints.equipment_downtime : 'Не указано !'} д</td>
                            <td>{complaints.service_company ? complaints.service_company['service']['company'] : 'Не указано !'}</td>

                            {props.staffstatus === "allow" ? <td>
                                <button
                                    type="button"
                                    className="btn btn-link btn-sm btn-rounded"
                                    onClick={() => { history.push(`/updatecomplaints/${complaints.id}`) }}>
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
