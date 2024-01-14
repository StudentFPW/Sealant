import React, { useState, useEffect } from "react";

import { axiosInstance } from '../config/http';
import { useHistory } from 'react-router-dom';
import secureLocalStorage from "react-secure-storage";
import { Tab, initMDB } from "mdb-ui-kit";

import { main } from '../urls';
import Navbar from "./navbar";
import TableCars from "./tables/table-cars";
import TableTo from "./tables/table-to";
import TableComplaints from "./tables/table-complaints";


export default function Body() {
    const [cars, setCars] = useState([]);
    const [to, setTo] = useState([]);
    const [complaints, setComplaints] = useState([]);
    const [staffstatus, setStaffStatus] = useState([]);
    const [clientstatus, setClientStatus] = useState([]);
    let history = useHistory();
    initMDB({ Tab });

    const fetchUser = async () => {
        await axiosInstance.request({
            headers: {
                Authorization: `Bearer ${secureLocalStorage.getItem('token')}`,
            },
            method: "GET",
            url: `${main}/api/v1/user/`
        }).then(response => {
            let manager = response.data["results"][0]['is_manager'];
            let admin = response.data["results"][0]['is_superuser'];
            let client = response.data["results"][0]['is_client'];
            if (manager || admin) {
                setStaffStatus('allow');
            };
            if (client) {
                setClientStatus('disallow');
            };
        }).catch((error) => {
            console.log("Request error: " + error);
            history.push('/dash');
        });
    };

    const fetchCars = async () => {
        await axiosInstance.request({
            headers: {
                Authorization: `Bearer ${secureLocalStorage.getItem('token')}`,
            },
            method: "GET",
            url: `${main}/api/v1/cars/`
        }).then(response => {
            setCars(response.data);
        }).catch((error) => {
            console.log("Request error: " + error);
        });
    };

    const fetchTo = async () => {
        await axiosInstance.request({
            headers: {
                Authorization: `Bearer ${secureLocalStorage.getItem('token')}`,
            },
            method: "GET",
            url: `${main}/api/v1/to/`
        }).then(response => {
            setTo(response.data);
        }).catch((error) => {
            console.log("Request error: " + error);
        });
    };

    const fetchComplaints = async () => {
        await axiosInstance.request({
            headers: {
                Authorization: `Bearer ${secureLocalStorage.getItem('token')}`,
            },
            method: "GET",
            url: `${main}/api/v1/compl/`
        }).then(response => {
            setComplaints(response.data);
        }).catch((error) => {
            console.log("Request error: " + error);
        });
    };

    useEffect(() => {
        fetchCars();
        fetchTo();
        fetchComplaints();
        fetchUser();
    }, []);

    return (
        <React.Fragment>
            <Navbar staff={staffstatus} client={clientstatus} />

            <ul className="nav nav-tabs nav-fill mb-3"
                id="ex1"
                role="tablist"
                style={{ backgroundColor: '#D20A11' }}>
                <li className="nav-item" role="presentation">
                    <a data-mdb-tab-init
                        className="nav-link active"
                        id="ex2-tab-1"
                        href="#ex2-tabs-1"
                        role="tab"
                        aria-controls="ex2-tabs-1"
                        aria-selected="true"
                        style={{ WebkitTextFillColor: "black" }}
                    >Общая информация</a>
                </li>

                <li className="nav-item" role="presentation">
                    <a data-mdb-tab-init
                        className="nav-link"
                        id="ex2-tab-2"
                        href="#ex2-tabs-2"
                        role="tab"
                        aria-controls="ex2-tabs-2"
                        aria-selected="false"
                        style={{ WebkitTextFillColor: "black" }}
                    >Техническое обслуживание</a>
                </li>

                <li className="nav-item" role="presentation">
                    <a data-mdb-tab-init
                        className="nav-link"
                        id="ex2-tab-3"
                        href="#ex2-tabs-3"
                        role="tab"
                        aria-controls="ex2-tabs-3"
                        aria-selected="false"
                        style={{ WebkitTextFillColor: "black" }}
                    >Рекламация</a>
                </li>
            </ul>

            <div className="tab-content" id="ex2-content">
                <div className="tab-pane fade show active"
                    id="ex2-tabs-1"
                    role="tabpanel"
                    aria-labelledby="ex2-tab-1"
                >{cars.length ? <TableCars cars={cars} staffstatus={staffstatus} /> :
                    <h5 className="text-center fw-bolder">Пусто !</h5>
                    }</div>

                <div className="tab-pane fade"
                    id="ex2-tabs-2"
                    role="tabpanel"
                    aria-labelledby="ex2-tab-2"
                >{to.length ? <TableTo to={to} staffstatus={staffstatus} /> :
                    <h5 className="text-center fw-bolder">Пусто !</h5>
                    }</div>

                <div className="tab-pane fade"
                    id="ex2-tabs-3"
                    role="tabpanel"
                    aria-labelledby="ex2-tab-3"
                >{complaints.length ? <TableComplaints complaints={complaints} staffstatus={staffstatus} /> :
                    <h5 className="text-center fw-bolder">Пусто !</h5>
                    }</div>
            </div>
        </React.Fragment>
    );
};
