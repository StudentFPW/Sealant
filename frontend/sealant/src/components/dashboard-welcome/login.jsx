import React from "react";

import secureLocalStorage from "react-secure-storage";
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";

import { main } from '../urls';
import './styles/login.css';


export default function Login() {
    let history = useHistory();

    if (secureLocalStorage.getItem('token')) {
        history.push('/dash');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                `${main}/api/v1/login/`,
                {
                    username: secureLocalStorage.getItem("username"),
                    password: secureLocalStorage.getItem("password"),
                });
            secureLocalStorage.setItem("token", response.data["access"]);
            secureLocalStorage.setItem("refreshToken", response.data["refresh"]);
            history.push('/dash');
        } catch (error) {
            console.log("Request error: " + error);
            alert('Учетные данные не верны');
        };
    };

    return (
        <React.Fragment>
            <div className="vh-100 bg-img">
                <Container>
                    <Row className="vh-100 d-flex justify-content-center align-items-center">
                        <Col md={8} lg={6} xs={12}>
                            <Card className="shadow">
                                <Card.Body>
                                    <div className="mb-3 mt-4">

                                        <h2 className="fw-bold mb-2 text-uppercase">
                                            ООО “ЧЕБОКСАРСКИЙ ЗАВОД СИЛОВЫХ АГРЕГАТОВ”
                                        </h2>

                                        <p className=" mb-5">
                                            Пожалуйста, введите логин и пароль!
                                        </p>

                                        <Form className="mb-3" onSubmit={handleSubmit}>

                                            <Form.Group className="mb-3" controlId="formBasicUsername">
                                                <Form.Label className="text-center">
                                                    Имя пользователя
                                                </Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Введите имя пользователя"
                                                    onChange={(e) => secureLocalStorage.setItem("username", e.target.value)}
                                                    required />
                                            </Form.Group>

                                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                                <Form.Label>Пароль</Form.Label>
                                                <Form.Control
                                                    type="password"
                                                    placeholder="Введите пароль"
                                                    onChange={(e) => secureLocalStorage.setItem("password", e.target.value)}
                                                    required />
                                            </Form.Group>

                                            <div className="d-grid">
                                                <Button variant="danger"
                                                    type="submit"
                                                    style={{ WebkitTextFillColor: "black", backgroundColor: '#D20A11' }}>
                                                    Авторизоваться
                                                </Button>
                                            </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                                            <div className="d-grid">
                                                <Button variant="primary"
                                                    type="submit"
                                                    onClick={() => { history.push('/') }}
                                                    style={{ WebkitTextFillColor: "white", backgroundColor: '#163E6C' }}>
                                                    Вернуться
                                                </Button>
                                            </div>

                                        </Form>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
};
