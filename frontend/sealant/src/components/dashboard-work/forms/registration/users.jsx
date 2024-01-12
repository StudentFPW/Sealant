import React, { useState } from "react";

import { useHistory } from 'react-router-dom';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardBody } from 'mdb-react-ui-kit';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import '../styles/forms.css';


export default function Registration() {
    const [validated, setValidated] = useState(false);
    let history = useHistory();

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        };
        setValidated(true);
    };

    return (
        <React.Fragment>
            <div className="vh-100 bg-img">
                <MDBContainer className="container py-5 h-100">
                    <MDBRow className="d-flex justify-content-center align-items-center h-100">
                        <MDBCol md="12" xl="10">
                            <MDBCard style={{ borderRadius: '6px' }} className="shadow">
                                <MDBCardBody className="text-center">
                                    <Form noValidate validated={validated} onSubmit={handleSubmit}>

                                        <Form.Label>Выберите тип пользователя</Form.Label>
                                        <Form.Select id="user-type" required>
                                            <option></option>
                                            <option value='1'>Клиент</option>
                                            <option value='2'>Сервисная компания</option>
                                            <option value='3'>Менеджер</option>
                                        </Form.Select>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                                        <div class="row mb-4">
                                            <div class="col">
                                                <div data-mdb-input-init class="form-outline">
                                                    <label class="form-label" for="form1">Имя</label>
                                                    <input type="text" id="form1" class="form-control" required />
                                                </div>
                                            </div>
                                            <div class="col">
                                                <div data-mdb-input-init class="form-outline">
                                                    <label class="form-label" for="form2">Фамилия</label>
                                                    <input type="text" id="form2" class="form-control" />
                                                </div>
                                            </div>
                                        </div>

                                        <div class="row mb-4">
                                            <div class="col">
                                                <div data-mdb-input-init class="form-outline">
                                                    <label class="form-label" for="form3">Имя пользователя</label>
                                                    <input type="username" id="form3" class="form-control" required />
                                                </div>
                                            </div>
                                            <div class="col">
                                                <div data-mdb-input-init class="form-outline">
                                                    <label class="form-label" for="form4">Почта</label>
                                                    <input type="email" id="form4" class="form-control" required />
                                                </div>
                                            </div>
                                        </div>

                                        <div data-mdb-input-init class="form-outline mb-4">
                                            <label class="form-label" for="form5">Пароль 1</label>
                                            <input type="password" id="form5" class="form-control" required />
                                        </div>

                                        <div data-mdb-input-init class="form-outline mb-4">
                                            <label class="form-label" for="form6">Пароль 2</label>
                                            <input type="password" id="form6" class="form-control" required />
                                        </div>

                                        <div data-mdb-input-init class="form-outline mb-4">
                                            <label class="form-label" for="form7">Наименование компании</label>
                                            <input type="text" id="form7" class="form-control" required />
                                        </div>

                                        <div data-mdb-input-init class="form-outline mb-4">
                                            <label class="form-label" for="form8">Веб сайт</label>
                                            <input type="url" id="form8" class="form-control" />
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
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </div>
        </React.Fragment>
    );
};
