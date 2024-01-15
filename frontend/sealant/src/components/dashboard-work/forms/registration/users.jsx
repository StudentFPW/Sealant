import React, { useState } from "react";

import validator from 'validator';
import secureLocalStorage from "react-secure-storage";
import { axiosInstance } from '../../../config/http';
import { useHistory } from 'react-router-dom';
import { InfoSquare } from 'react-bootstrap-icons';
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";

import { main } from "../../../urls";
import '../styles/forms.css';


export default function Registration() {
    const [errorMessage, setErrorMessage] = useState('');
    const [errorPassword, setErrorPassword] = useState('');
    const [errorUsername, setErrorUsername] = useState('');
    let history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        let type = document.getElementById('user-type').value
        if (type === '1') {
            regClient();
        };
        if (type === '2') {
            regService();
        };
        if (type === '3') {
            regManager();
        };
    };

    const regClient = async () => {
        await axiosInstance.request({
            headers: {
                Authorization: `Bearer ${secureLocalStorage.getItem('token')}`,
            },
            method: "POST",
            url: `${main}/api/v1/reg/client/`,
            data: getFormData()
        }).then(() => {
            alert('Регистрация прошла успешно !');
            history.push('/dash');
        }).catch((error) => {
            console.log("Request error: " + error);
            alert('Что-то пошло не так, попробуйте попозже !');
            history.push('/dash');
        });
    };

    const regService = async () => {
        await axiosInstance.request({
            headers: {
                Authorization: `Bearer ${secureLocalStorage.getItem('token')}`,
            },
            method: "POST",
            url: `${main}/api/v1/reg/service/`,
            data: getFormData()
        }).then(() => {
            alert('Регистрация прошла успешно !');
            history.push('/dash');
        }).catch((error) => {
            console.log("Request error: " + error);
            alert('Что-то пошло не так, попробуйте попозже !');
            history.push('/dash');
        });
    };

    const regManager = async () => {
        await axiosInstance.request({
            headers: {
                Authorization: `Bearer ${secureLocalStorage.getItem('token')}`,
            },
            method: "POST",
            url: `${main}/api/v1/reg/manager/`,
            data: getFormData()
        }).then(() => {
            alert('Регистрация прошла успешно !');
            history.push('/dash');
        }).catch((error) => {
            console.log("Request error: " + error);
            alert('Что-то пошло не так, попробуйте попозже !');
            history.push('/dash');
        });
    };

    const getFormData = () => {
        let data = {
            first_name: document.getElementById('form1').value,
            last_name: document.getElementById('form2').value,
            username: document.getElementById('form3').value,
            email: document.getElementById('form4').value,
            password1: document.getElementById('form5').value,
            password2: document.getElementById('form6').value,
            company: document.getElementById('form7').value,
            website: document.getElementById('form8').value,
        };
        return data;
    };

    const validateUsername = (value) => {
        const blacklist = ["admin", "root", "service", "sealant"];
        if (value.length <= 6 || blacklist.includes(value)) {
            setErrorUsername('Недостаточно соответствующий !');
        } else {
            setErrorUsername('Соответствует !');
        };
    };

    const validate = (value) => {
        if (validator.isStrongPassword(value, {
            minLength: 8, minLowercase: 1,
            minUppercase: 1, minNumbers: 1, minSymbols: 1
        })) {
            setErrorMessage('Сложный!');
            secureLocalStorage.setItem('reg-password', value);
        } else {
            setErrorMessage('Недостаточно сложной!');
        };
    };

    const checkPassword = (password) => {
        if (password === secureLocalStorage.getItem('reg-password')) {
            setErrorPassword('Отлично!');
        } else {
            setErrorPassword('Не совпадают!');
        };
    };

    return (
        <React.Fragment>
            <div className="bg-img">
                <Container>
                    <Row className="d-flex justify-content-center align-items-center">
                        <Col md={8} lg={10} xs={10}>
                            <Card className="shadow">
                                <Card.Body>
                                    <div className="mb-3 mt-4">

                                        <ul className="navbar-nav flex-row">
                                            <p title="
                                                1. Выберите тип пользователя.
                                                2. Длина пароля 8 знаков, (Минимум) → Одна срочная + одна заглавная буква, Одна цифра и знак.
                                                3. Имя пользователя не может начинаться на админ, суппорт, сервис или название сервиса.
                                            "><InfoSquare size={20} color="#163E6C" /></p>
                                        </ul>

                                        <Form onSubmit={handleSubmit}>
                                            <Form.Label>Выберите тип пользователя</Form.Label>
                                            <Form.Select id="user-type" required>
                                                <option></option>
                                                <option value='1'>Клиент</option>
                                                <option value='2'>Сервисная компания</option>
                                                <option value='3'>Менеджер</option>
                                            </Form.Select>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                                            <div className="row mb-4">
                                                <div className="col">
                                                    <div data-mdb-input-init className="form-outline">
                                                        <label className="form-label" htmlFor="form1">Имя</label>
                                                        <input type="text" id="form1" className="form-control" required />
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div data-mdb-input-init className="form-outline">
                                                        <label className="form-label" htmlFor="form2">Фамилия</label>
                                                        <input type="text" id="form2" className="form-control" required />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row mb-4">
                                                <div className="col">
                                                    <div data-mdb-input-init className="form-outline">
                                                        <label className="form-label" htmlFor="form3">Имя пользователя</label>
                                                        <input onChange={(e) => validateUsername(e.target.value)} type="text" id="form3" className="form-control" required />
                                                        <br />{errorUsername === '' ? null : <span style={{ color: '#D20A11' }}>{errorUsername}</span>}
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div data-mdb-input-init className="form-outline">
                                                        <label className="form-label" htmlFor="form4">Почта</label>
                                                        <input type="email" id="form4" className="form-control" required />
                                                    </div>
                                                </div>
                                            </div>

                                            <div data-mdb-input-init className="form-outline mb-4">
                                                <label className="form-label" htmlFor="form5">Пароль 1</label>
                                                <input onChange={(e) => validate(e.target.value)} type="password" id="form5" className="form-control" required />
                                                <br />{errorMessage === '' ? null : <span style={{ color: '#D20A11' }}>{errorMessage}</span>}
                                            </div>

                                            <div data-mdb-input-init className="form-outline mb-4">
                                                <label className="form-label" htmlFor="form6">Пароль 2</label>
                                                <input onChange={(e) => checkPassword(e.target.value)} type="password" id="form6" className="form-control" required />
                                                <br />{errorPassword === '' ? null : <span style={{ color: '#D20A11' }}>{errorPassword}</span>}
                                            </div>

                                            <div data-mdb-input-init className="form-outline mb-4">
                                                <label className="form-label" htmlFor="form7">Наименование компании</label>
                                                <input type="text" id="form7" className="form-control" required />
                                            </div>

                                            <div data-mdb-input-init className="form-outline mb-4">
                                                <label className="form-label" htmlFor="form8">Веб сайт</label>
                                                <input type="url" id="form8" className="form-control" required />
                                            </div>

                                            <div className="d-grid">
                                                <Button
                                                    variant="danger"
                                                    type="submit"
                                                    style={{ WebkitTextFillColor: "black", backgroundColor: '#D20A11' }}>
                                                    Зарегистрировать пользователя
                                                </Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            </div>

                                            <div className="d-grid">
                                                <Button variant="primary"
                                                    type="submit"
                                                    onClick={() => { history.push('/') }}
                                                    style={{ WebkitTextFillColor: "white", backgroundColor: '#163E6C' }}>
                                                    Вернуться
                                                </Button>
                                            </div>
                                        </Form >

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
