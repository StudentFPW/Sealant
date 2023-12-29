import React from "react";

import secureLocalStorage from "react-secure-storage";
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";

import { main } from './urls';

import '../styles/login.css';


export default function Login() {
    let history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                `${main}/api/v1/login/`,
                {
                    username: secureLocalStorage.getItem("username"),
                    password: secureLocalStorage.getItem("password"),
                });

            // Store the tokens in localStorage or secure cookie for later use
            secureLocalStorage.setItem("token", response.data["access"]);
            secureLocalStorage.setItem("refreshToken", response.data["refresh"]);

            // Redirect or perform other actions upon successful login
            console.log('Successful login');

            history.push('/profile')
        } catch (error) {
            // Handle login error
            console.log('Error login: ' + error)

            alert('Учетные данные не верны')
        };
    };

    return (
        <React.Fragment>
            <div className="bg-img">
                <Container>
                    <Row className="vh-100 d-flex justify-content-center align-items-center">
                        <Col md={8} lg={6} xs={12}>
                            <div className="border-3 border-primary"></div>
                            <Card className="shadow">
                                <Card.Body>
                                    <div className="mb-3 mt-4">
                                        <h2 className="fw-bold mb-2 text-uppercase">СИЛАНТ — российский бренд надежной техники</h2>
                                        <p className=" mb-5">Пожалуйста, введите логин и пароль!</p>
                                        <Form className="mb-3" onSubmit={handleSubmit}>

                                            <Form.Group className="mb-3" controlId="formBasicUsername">
                                                <Form.Label className="text-center">
                                                    Имя пользователя
                                                </Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Введите имя пользователя"
                                                    onChange={(e) => secureLocalStorage.setItem("username", e.target.value)}
                                                    required
                                                />
                                            </Form.Group>

                                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                                <Form.Label>Пароль</Form.Label>
                                                <Form.Control
                                                    type="password"
                                                    placeholder="Введите пароль"
                                                    onChange={(e) => secureLocalStorage.setItem("password", e.target.value)}
                                                    required
                                                />
                                            </Form.Group>

                                            <div className="d-grid">
                                                <Button variant="danger" type="submit">
                                                    Авторизоваться
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
