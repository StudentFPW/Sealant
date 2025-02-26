import { useState, useEffect } from 'react';

import secureLocalStorage from "react-secure-storage";
import { useHistory } from 'react-router-dom';
import { axiosInstance } from '../config/http';
import {
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
    MDBTypography
} from 'mdb-react-ui-kit';
import { InfoSquare } from 'react-bootstrap-icons';
import { Button } from "react-bootstrap";

import { main } from '../urls';
import RGB from './images/RGB1.jpg';
import './styles/profile.css';


export default function Profile() {
    const [user, setUser] = useState([]);
    const [cars, setCars] = useState([]);
    const [to, setTo] = useState([]);
    const [complaints, setComplaints] = useState([]);
    const [status, setStatus] = useState([]);
    let history = useHistory();

    if (!secureLocalStorage.getItem('token')) {
        history.push('/login');
    } else {
        /* eslint-disable-next-line react-hooks/rules-of-hooks */
        useEffect(() => {
            fetchUser();
            fetchCars();
            fetchTo();
            fetchComplaints();
        }, []);
    };

    const fetchUser = async () => {
        await axiosInstance.request({
            headers: {
                Authorization: `Bearer ${secureLocalStorage.getItem('token')}`,
            },
            method: "GET",
            url: `${main}/api/v1/user/`
        }).then(response => {
            setUser(response.data["results"][0]);
            let client = response.data["results"][0]['is_client'];
            let manager = response.data["results"][0]['is_manager'];
            let service = response.data["results"][0]['is_service'];
            if (client) {
                setStatus('Статус клиента')
            };
            if (service) {
                setStatus('Статус сервисной компании')
            };
            if (manager) {
                setStatus('Статус менеджера')
            };
            if (client && manager && service) {
                setStatus('Статус администратора')
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
            history.push('/dash');
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
            history.push('/dash');
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
            history.push('/dash');
        });
    };

    return (
        <div className="vh-100 bg-img">
            <MDBContainer className="container py-5 h-100">
                <MDBRow className="d-flex justify-content-center align-items-center h-100">
                    <MDBCol md="12" xl="4">
                        <MDBCard style={{ borderRadius: '6px' }} className="shadow">
                            <MDBCardBody className="text-center">

                                <ul className="navbar-nav flex-row">
                                    <p title="
                                    Нашли ошибки в ваших данных ?
                                    Обратитесь в техподдержку !
                                    "><InfoSquare size={20} color="#163E6C" />
                                    </p>
                                </ul>

                                <div className="mt-3 mb-4">
                                    <MDBCardImage src={user.foto !== null ? user.foto : RGB}
                                        className="rounded-circle" fluid style={{ width: '100px' }} />
                                </div>

                                <MDBTypography tag="h4">
                                    Фио - {user.first_name} {user.last_name ? user.last_name : ''}
                                </MDBTypography>

                                <MDBCardText className="text-muted mb-4">
                                    {status}
                                </MDBCardText>

                                <MDBCardText className="text-muted mb-4" title="Имя пользователя и email">
                                    @{user.username} <span className="mx-2">|</span> {user.email}
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
                                        <MDBCardText className="mb-1 h5">{Object.keys(to).length}</MDBCardText>
                                        <MDBCardText className="small text-muted mb-0">Количество ремонтов и/или техосмотров </MDBCardText>
                                    </div>
                                </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                                <div className="d-grid">
                                    <Button type="submit" onClick={() => { history.push('/dash') }} style={{ WebkitTextFillColor: "white", backgroundColor: '#163E6C' }}>
                                        Вернуться
                                    </Button>
                                </div>

                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </div>
    );
};
