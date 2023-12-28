import React, { useState, useEffect } from 'react';

import axios from 'axios';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography } from 'mdb-react-ui-kit';

import RGB1 from '../images/RGB1.jpg';


export default function Profile() {
    const [user, setUser] = useState([])
    const [cars, setCarsCount] = useState([])
    const [typeto, setTypeTo] = useState([])
    const [complaints, setComplaints] = useState([])

    const fetchUser = async () => {
        axios.request({
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            },
            method: "GET",
            url: `http://127.0.0.1:8000/api/v1/user/`
        }).then(response => {
            setUser(response.data["results"][0]);
        });
    };

    const fetchCars = async () => {
        axios.request({
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            },
            method: "GET",
            url: `http://127.0.0.1:8000/api/v1/cars/`
        }).then(response => {
            setCarsCount(response.data);
        });
    };

    const fetchTypeTo = async () => {
        axios.request({
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            },
            method: "GET",
            url: `http://127.0.0.1:8000/api/v1/typeto/`
        }).then(response => {
            setTypeTo(response.data);
        });
    };

    const fetchComplaints = async () => {
        axios.request({
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            },
            method: "GET",
            url: `http://127.0.0.1:8000/api/v1/compl/`
        }).then(response => {
            setComplaints(response.data);
        });
    };

    useEffect(() => {
        fetchUser();
        fetchCars();
        fetchTypeTo();
        fetchComplaints();
    }, []);

    return (
        <div className="vh-100">
            <MDBContainer className="container py-5 h-100">
                <MDBRow className="d-flex justify-content-center align-items-center h-100">
                    <MDBCol md="12" xl="4">
                        <MDBCard style={{ borderRadius: '6px' }} className="shadow">
                            <MDBCardBody className="text-center">

                                <div className="mt-3 mb-4">
                                    <MDBCardImage src={user.foto ? user.foto : RGB1}
                                        className="rounded-circle" fluid style={{ width: '100px' }} />
                                </div>

                                <MDBTypography tag="h4">{user.first_name}</MDBTypography>

                                <MDBCardText className="text-muted mb-4">
                                    @{user.username} <span className="mx-2">|</span> <a href="#!">{user.email}</a>
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
