import React from "react";

export default function FetchComplaints(props) {
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
                    </tr>
                </thead>

                <tbody>
                    {props.complaints ? props.complaints.map((complaints, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{complaints.refusal_date ? complaints.refusal_date : 'Не указано !'}</td>
                            <td>{complaints.operating_hours ? complaints.operating_hours : 'Не указано !'}</td>
                            <td>{complaints.failure_node ? complaints.failure_node['description'] : 'Не указано !'}</td>
                            <td>{complaints.failure_description ? complaints.failure_description : 'Не указано !'}</td>
                            <td>{complaints.recovery_method ? complaints.recovery_method['description'] : 'Не указано !'}</td>
                            <td>{complaints.parts_used ? complaints.parts_used : 'Не указано !'}</td>
                            <td>{complaints.restore_date ? complaints.restore_date : 'Не указано !'}</td>
                            <td>{complaints.equipment_downtime ? complaints.equipment_downtime : 'Не указано !'} д</td>
                            <td>{complaints.service_company ? complaints.service_company['service']['company'] : 'Не указано !'}</td>
                        </tr>
                    )) : null}
                </tbody>
            </table>
        </React.Fragment>
    );
};