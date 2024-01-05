import React, { useState, useEffect } from "react";

import secureLocalStorage from "react-secure-storage";
import axios from 'axios';
import { Tab, initMDB } from "mdb-ui-kit";

import { main } from '../dashboard-welcome/urls';
import FetchCars from "./tables/fetch-cars";
import FetchComplaints from "./tables/fetch-complaints";
import FetchTo from "./tables/fetch-to";


export default function Body(props) {
    const [cars, setCars] = useState([]);
    const [to, setTo] = useState([]);
    const [complaints, setComplaints] = useState([]);
    initMDB({ Tab });

    const fetchCars = async (e) => {
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
        fetchTo();
        fetchComplaints();
    }, []);

    return (
        <React.Fragment>
            <nav class="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "#ebe5d6" }}>
                <div class="container-fluid justify-content-between">
                    <div class="d-flex">
                    </div>

                    <ul class="navbar-nav flex-row d-none d-md-flex">
                        <li class="nav-item me-3 me-lg-1 active">
                            <h5>Информация о комплектации и технических характеристиках вашей техники</h5>
                        </li>
                    </ul>

                    <ul class="navbar-nav flex-row">
                    </ul>
                </div>
            </nav>

            <ul className="nav nav-tabs nav-fill mb-3" id="ex1" role="tablist" style={{ backgroundColor: "#dc3545" }}>
                <li className="nav-item" role="presentation">
                    <a
                        data-mdb-tab-init
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
                    <a
                        data-mdb-tab-init
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
                    <a
                        data-mdb-tab-init
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
                <div
                    className="tab-pane fade show active"
                    id="ex2-tabs-1"
                    role="tabpanel"
                    aria-labelledby="ex2-tab-1"
                ><FetchCars cars={cars} /></div>
                <div
                    className="tab-pane fade"
                    id="ex2-tabs-2"
                    role="tabpanel"
                    aria-labelledby="ex2-tab-2"
                ><FetchTo to={to} /></div>
                <div
                    className="tab-pane fade"
                    id="ex2-tabs-3"
                    role="tabpanel"
                    aria-labelledby="ex2-tab-3"
                ><FetchComplaints complaints={complaints} /></div>
            </div>

        </React.Fragment>
    );
};