import { useState, useEffect } from 'react';

import secureLocalStorage from "react-secure-storage";
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography } from 'mdb-react-ui-kit';

import { main } from './urls';

import RGB1 from '../images/RGB1.jpg';


export default function Profile() {
    const [user, setUser] = useState([]);
    const [cars, setCars] = useState([]);
    const [typeto, setTypeTo] = useState([]);
    const [complaints, setComplaints] = useState([]);
    let history = useHistory();

    if (!secureLocalStorage.getItem('token')) {
        history.push('/login');
    } else {
        useEffect(() => {
            fetchUser();
            fetchCars();
            fetchTypeTo();
            fetchComplaints();
        }, []);
    };

    const fetchUser = async () => {
        axios.request({
            headers: {
                Authorization: `Bearer ${secureLocalStorage.getItem('token')}`,
            },
            method: "GET",
            url: `${main}/api/v1/user/`
        }).then(response => {
            // Это не совсем безопасно по отношению к приватным данным ! ↓↓↓
            setUser(response.data["results"][0])

            // Через secureLocalStorage не получается вывести данные должным образом !
            // Сам метод работает <<иногда>> !
            // secureLocalStorage.setItem('user', response.data["results"][0]);
        });
    };

    const fetchCars = async () => {
        axios.request({
            headers: {
                Authorization: `Bearer ${secureLocalStorage.getItem('token')}`,
            },
            method: "GET",
            url: `${main}/api/v1/cars/`
        }).then(response => {
            setCars(response.data);
        });
    };

    const fetchTypeTo = async () => {
        axios.request({
            headers: {
                Authorization: `Bearer ${secureLocalStorage.getItem('token')}`,
            },
            method: "GET",
            url: `${main}/api/v1/typeto/`
        }).then(response => {
            setTypeTo(response.data);
        });
    };

    const fetchComplaints = async () => {
        axios.request({
            headers: {
                Authorization: `Bearer ${secureLocalStorage.getItem('token')}`,
            },
            method: "GET",
            url: `${main}/api/v1/compl/`
        }).then(response => {
            setComplaints(response.data);
        });
    };

    return (
        <div className="vh-100">
            <MDBContainer className="container py-5 h-100">
                <MDBRow className="d-flex justify-content-center align-items-center h-100">
                    <MDBCol md="12" xl="4">
                        <MDBCard style={{ borderRadius: '6px' }} className="shadow">
                            <MDBCardBody className="text-center">

                                <div className="mt-3 mb-4">
                                    <MDBCardImage src={user.foto !== null ? user.foto : RGB1}
                                        className="rounded-circle" fluid style={{ width: '100px' }} />
                                </div>

                                <MDBTypography tag="h4">
                                    Фио - {user.first_name} {user.last_name ? user.last_name : ''}
                                </MDBTypography>

                                <MDBCardText className="text-muted mb-4">
                                    @ {user.username} <span className="mx-2">|</span> {user.email}
                                </MDBCardText>

                                <MDBCardText className="text-muted mb-4">
                                    Компания - {user.company ? user.company : 'Отсутствует'}
                                </MDBCardText>

                                <MDBCardText className="text-muted mb-4">
                                    Присоединился - {Date(user.date_joined).slice(0, 10)}
                                </MDBCardText>

                                <MDBCardText className="text-muted mb-4">
                                    Веб сайт - {user.website ? <a href={user.website} target="_blank" rel="noopener noreferrer">{user.website}</a> : 'Отсутствует'}
                                </MDBCardText>

                                <div className="d-flex justify-content-between text-center mt-5 mb-2">
                                    <div>
                                        <MDBCardText className="mb-1 h5">{Object.keys(complaints).length}</MDBCardText>
                                        <MDBCardText className="small text-muted mb-0">Количество рекламаций</MDBCardText>
                                    </div>
                                    <div className="px-3">
                                        <MDBCardText className="mb-1 h5">{Object.keys(cars).length}</MDBCardText>
                                        <MDBCardText className="small text-muted mb-0">Подсчет арсенала</MDBCardText>
                                    </div>
                                    <div>
                                        <MDBCardText className="mb-1 h5">{Object.keys(typeto).length}</MDBCardText>
                                        <MDBCardText className="small text-muted mb-0">Количество ремонтов и/или техосмотров </MDBCardText>
                                    </div>
                                </div>

                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </div>
    );
};
