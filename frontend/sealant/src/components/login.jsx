import React, { useState } from 'react';

import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";

import RGB1 from '../images/RGB1.jpg';


export default function Login() {
    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    });

    let history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://127.0.0.1:8000/api/v1/login/', credentials);
            const { token = response.data["access"], refreshToken = response.data["refresh"] } = response.data;

            // Store the tokens in localStorage or secure cookie for later use
            localStorage.setItem('token', token);
            localStorage.setItem('refreshToken', refreshToken);

            // Redirect or perform other actions upon successful login
            console.log('Successful login');

        } catch (error) {
            // Handle login error
            console.log('Error login: ' + error)

            alert('Учетные данные не верны')
        }
    };

    var container = {
        position: 'relative',
    };

    var topRight = {
        position: 'absolute',
        top: '0',
        right: '0',
        width: '150px',
    };

    return (
        <Container>
            <Row className="vh-100 d-flex justify-content-center align-items-center">
                <Col md={8} lg={6} xs={12}>
                    <div className="border-3 border-primary"></div>
                    <Card className="shadow">
                        <Card.Body>
                            <div className="mb-3 mt-4" style={container}>
                                <h2 className="fw-bold mb-2 text-uppercase">Силант</h2>
                                <p className=" mb-5">Пожалуйста, введите логин и пароль!</p>
                                <img style={topRight} src={RGB1} alt="Силант" />
                                <Form className="mb-3" onSubmit={handleSubmit}>

                                    <Form.Group className="mb-3" controlId="formBasicUsername">
                                        <Form.Label className="text-center">
                                            Имя пользователя
                                        </Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Введите имя пользователя"
                                            onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Пароль</Form.Label>
                                        <Form.Control
                                            type="password"
                                            placeholder="Введите пароль"
                                            onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                                        />
                                    </Form.Group>

                                    <div className="d-grid">
                                        <Button
                                            variant="primary"
                                            type="submit"
                                            onClick={() => {
                                                history.push('/profile')
                                            }}>
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
    );
};
