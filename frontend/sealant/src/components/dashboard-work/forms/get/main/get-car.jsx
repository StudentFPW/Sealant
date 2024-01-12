import React, { useState, useEffect } from "react";

import secureLocalStorage from "react-secure-storage";
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { Tab, initMDB } from "mdb-ui-kit";

import withRouter from "../../../../withRouter/withRouter";
import { main } from '../../../../urls';
import TableCars from "./tables/table-cars";
import TableTo from "./tables/table-to";
import TableComplaints from "./tables/table-complaints";
import Header from "./header";
import Footer from "../../../footer";


function GetCar(props) {
    const [car, setCar] = useState([]);
    const [to, setTo] = useState([]);
    const [complaints, setComplaints] = useState([]);
    const [staffstatus, setStaffStatus] = useState([]);
    initMDB({ Tab });
    let history = useHistory();

    if (!secureLocalStorage.getItem('token')) {
        history.push('/login');
    } else {
        useEffect(() => {
            fetchUser();
            fetchCar();
            fetchTo();
            fetchComplaints();
        }, []);
    };

    const fetchUser = async () => {
        await axios.request({
            headers: {
                Authorization: `Bearer ${secureLocalStorage.getItem('token')}`,
            },
            method: "GET",
            url: `${main}/api/v1/user/`
        }).then(response => {
            let manager = response.data["results"][0]['is_manager'];
            let admin = response.data["results"][0]['is_superuser'];
            if (manager || admin) {
                setStaffStatus('allow');
            };
        }).catch((error) => {
            console.log("Request error: " + error);
        });
    };

    const fetchCar = async () => {
        await axios.request({
            headers: {
                Authorization: `Bearer ${secureLocalStorage.getItem('token')}`,
            },
            method: "GET",
            url: `${main}/api/v1/cars/?factory_number=${props.params.factory_number}`
        }).then(response => {
            setCar(response.data);
        }).catch((error) => {
            console.log("Request error: " + error);
            history.push('/dash');
        });
    };

    const fetchTo = async () => {
        await axios.request({
            headers: {
                Authorization: `Bearer ${secureLocalStorage.getItem('token')}`,
            },
            method: "GET",
            url: `${main}/api/v1/to/?factory_number=${props.params.factory_number}`
        }).then(response => {
            setTo(response.data);
        }).catch((error) => {
            console.log("Request error: " + error);
            history.push('/dash');
        });
    };

    const fetchComplaints = async () => {
        await axios.request({
            headers: {
                Authorization: `Bearer ${secureLocalStorage.getItem('token')}`,
            },
            method: "GET",
            url: `${main}/api/v1/compl/?factory_number=${props.params.factory_number}`
        }).then(response => {
            setComplaints(response.data);
        }).catch((error) => {
            console.log("Request error: " + error);
            history.push('/dash');
        });
    };

    return (
        <React.Fragment>
            <Header car={car} />
            <ul className="nav nav-tabs nav-fill mb-3"
                id="ex1"
                role="tablist"
                style={{ backgroundColor: '#D20A11' }}>
                <li className="nav-item" role="presentation">
                    <a data-mdb-tab-init
                        className="nav-link"
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
                        className="nav-link active"
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
                <div className="tab-pane fade"
                    id="ex2-tabs-1"
                    role="tabpanel"
                    aria-labelledby="ex2-tab-1"
                >{car.length ? <TableCars cars={car} staffstatus={staffstatus} /> :
                    <h5 className="text-center fw-bolder">Пусто !</h5>
                    }</div>

                <div className="tab-pane fade show active"
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
            <Footer />
        </React.Fragment>
    );
};

export default withRouter(GetCar);
