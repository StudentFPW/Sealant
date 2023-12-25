import React from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Login() {
    return (
        <React.Fragment>
            <Form className="main-3">
                <Form.Group className="mb-3" controlId="formBasicUsername">
                    <Form.Label>Enter username</Form.Label>
                    <Form.Control type="text" placeholder="Username" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Enter password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Button variant="success" type="submit">
                    Login
                </Button>
            </Form>
        </React.Fragment>
    );
};