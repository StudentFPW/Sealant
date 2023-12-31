import React from "react";

import { Telegram } from 'react-bootstrap-icons';
import { Search } from 'react-bootstrap-icons';

import RGB1 from '../images/RGB1.png';

export default function DashboardHome() {


    return (
        <React.Fragment>
            <header className="navbar navbar-expand-lg navbar-light bg-body-tertiary">
                <div className="container-fluid">

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <a className="navbar-brand mt-2 mt-lg-0" href="#">
                            <img src={RGB1} height="90" alt="СИЛАНТ logo" loading="lazy" />
                        </a>
                        <a className="text-body" href="tel:+7-8352-20-12-09">
                            +7-8352-20-12-09
                        </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <a className="text-body" href="https://t.me/LEON_JOFE" target="_blank" rel="noopener noreferrer">
                            <Telegram size={20} />
                        </a>
                    </div>

                    <div className="w-auto p-3 translucent-bg">Электронная сервисная книжка СИЛАНТ</div>
                    &nbsp;&nbsp;
                    <a href="/login" target="_blank" rel="noopener noreferrer">
                        <button type="button" className="btn btn-danger" data-mdb-ripple-init>Войти</button>
                    </a>

                </div>
            </header>

            <nav className="navbar navbar-expand-lg bg-body">
                <div className="container-fluid">
                    <div className="input-group">
                        <div className="form-outline" data-mdb-input-init>
                            <input type="search" placeholder='Заводской номер' className="form-control" />
                        </div>
                        <button type="button" className="btn btn-danger" data-mdb-ripple-init>
                            <Search size={20} />
                        </button>
                    </div>
                </div>
            </nav>

            <table className="table align-middle mb-0 bg-white">

                <thead className="bg-light">
                    <tr>
                        <th>Name</th>
                        <th>Title</th>
                        <th>Status</th>
                        <th>Position</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>
                            <div className="d-flex align-items-center">
                                <img
                                    src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                                    alt=""
                                    style={{ width: 45, height: 45 }}
                                    className="rounded-circle"
                                />
                                <div className="ms-3">
                                    <p className="fw-bold mb-1">John Doe</p>
                                    <p className="text-muted mb-0">john.doe@gmail.com</p>
                                </div>
                            </div>
                        </td>
                        <td>
                            <p className="fw-normal mb-1">Software engineer</p>
                            <p className="text-muted mb-0">IT department</p>
                        </td>
                        <td>
                            <span className="badge badge-success rounded-pill d-inline">Active</span>
                        </td>
                        <td>Senior</td>
                        <td>
                            <button type="button" className="btn btn-link btn-sm btn-rounded">
                                Edit
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="d-flex align-items-center">
                                <img
                                    src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                                    alt=""
                                    style={{ width: 45, height: 45 }}
                                    className="rounded-circle"
                                />
                                <div className="ms-3">
                                    <p className="fw-bold mb-1">John Doe</p>
                                    <p className="text-muted mb-0">john.doe@gmail.com</p>
                                </div>
                            </div>
                        </td>
                        <td>
                            <p className="fw-normal mb-1">Software engineer</p>
                            <p className="text-muted mb-0">IT department</p>
                        </td>
                        <td>
                            <span className="badge badge-success rounded-pill d-inline">Active</span>
                        </td>
                        <td>Senior</td>
                        <td>
                            <button type="button" className="btn btn-link btn-sm btn-rounded">
                                Edit
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="d-flex align-items-center">
                                <img
                                    src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                                    alt=""
                                    style={{ width: 45, height: 45 }}
                                    className="rounded-circle"
                                />
                                <div className="ms-3">
                                    <p className="fw-bold mb-1">John Doe</p>
                                    <p className="text-muted mb-0">john.doe@gmail.com</p>
                                </div>
                            </div>
                        </td>
                        <td>
                            <p className="fw-normal mb-1">Software engineer</p>
                            <p className="text-muted mb-0">IT department</p>
                        </td>
                        <td>
                            <span className="badge badge-success rounded-pill d-inline">Active</span>
                        </td>
                        <td>Senior</td>
                        <td>
                            <button type="button" className="btn btn-link btn-sm btn-rounded">
                                Edit
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="d-flex align-items-center">
                                <img
                                    src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                                    alt=""
                                    style={{ width: 45, height: 45 }}
                                    className="rounded-circle"
                                />
                                <div className="ms-3">
                                    <p className="fw-bold mb-1">John Doe</p>
                                    <p className="text-muted mb-0">john.doe@gmail.com</p>
                                </div>
                            </div>
                        </td>
                        <td>
                            <p className="fw-normal mb-1">Software engineer</p>
                            <p className="text-muted mb-0">IT department</p>
                        </td>
                        <td>
                            <span className="badge badge-success rounded-pill d-inline">Active</span>
                        </td>
                        <td>Senior</td>
                        <td>
                            <button type="button" className="btn btn-link btn-sm btn-rounded">
                                Edit
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="d-flex align-items-center">
                                <img
                                    src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                                    alt=""
                                    style={{ width: 45, height: 45 }}
                                    className="rounded-circle"
                                />
                                <div className="ms-3">
                                    <p className="fw-bold mb-1">John Doe</p>
                                    <p className="text-muted mb-0">john.doe@gmail.com</p>
                                </div>
                            </div>
                        </td>
                        <td>
                            <p className="fw-normal mb-1">Software engineer</p>
                            <p className="text-muted mb-0">IT department</p>
                        </td>
                        <td>
                            <span className="badge badge-success rounded-pill d-inline">Active</span>
                        </td>
                        <td>Senior</td>
                        <td>
                            <button type="button" className="btn btn-link btn-sm btn-rounded">
                                Edit
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="d-flex align-items-center">
                                <img
                                    src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                                    alt=""
                                    style={{ width: 45, height: 45 }}
                                    className="rounded-circle"
                                />
                                <div className="ms-3">
                                    <p className="fw-bold mb-1">John Doe</p>
                                    <p className="text-muted mb-0">john.doe@gmail.com</p>
                                </div>
                            </div>
                        </td>
                        <td>
                            <p className="fw-normal mb-1">Software engineer</p>
                            <p className="text-muted mb-0">IT department</p>
                        </td>
                        <td>
                            <span className="badge badge-success rounded-pill d-inline">Active</span>
                        </td>
                        <td>Senior</td>
                        <td>
                            <button type="button" className="btn btn-link btn-sm btn-rounded">
                                Edit
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="d-flex align-items-center">
                                <img
                                    src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                                    alt=""
                                    style={{ width: 45, height: 45 }}
                                    className="rounded-circle"
                                />
                                <div className="ms-3">
                                    <p className="fw-bold mb-1">John Doe</p>
                                    <p className="text-muted mb-0">john.doe@gmail.com</p>
                                </div>
                            </div>
                        </td>
                        <td>
                            <p className="fw-normal mb-1">Software engineer</p>
                            <p className="text-muted mb-0">IT department</p>
                        </td>
                        <td>
                            <span className="badge badge-success rounded-pill d-inline">Active</span>
                        </td>
                        <td>Senior</td>
                        <td>
                            <button type="button" className="btn btn-link btn-sm btn-rounded">
                                Edit
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="d-flex align-items-center">
                                <img
                                    src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                                    alt=""
                                    style={{ width: 45, height: 45 }}
                                    className="rounded-circle"
                                />
                                <div className="ms-3">
                                    <p className="fw-bold mb-1">John Doe</p>
                                    <p className="text-muted mb-0">john.doe@gmail.com</p>
                                </div>
                            </div>
                        </td>
                        <td>
                            <p className="fw-normal mb-1">Software engineer</p>
                            <p className="text-muted mb-0">IT department</p>
                        </td>
                        <td>
                            <span className="badge badge-success rounded-pill d-inline">Active</span>
                        </td>
                        <td>Senior</td>
                        <td>
                            <button type="button" className="btn btn-link btn-sm btn-rounded">
                                Edit
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="d-flex align-items-center">
                                <img
                                    src="https://mdbootstrap.com/img/new/avatars/6.jpg"
                                    className="rounded-circle"
                                    alt=""
                                    style={{ width: 45, height: 45 }}
                                />
                                <div className="ms-3">
                                    <p className="fw-bold mb-1">Alex Ray</p>
                                    <p className="text-muted mb-0">alex.ray@gmail.com</p>
                                </div>
                            </div>
                        </td>
                        <td>
                            <p className="fw-normal mb-1">Consultant</p>
                            <p className="text-muted mb-0">Finance</p>
                        </td>
                        <td>
                            <span className="badge badge-primary rounded-pill d-inline"
                            >Onboarding</span
                            >
                        </td>
                        <td>Junior</td>
                        <td>
                            <button
                                type="button"
                                className="btn btn-link btn-rounded btn-sm fw-bold"
                                data-mdb-ripple-color="dark"
                            >
                                Edit
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="d-flex align-items-center">
                                <img
                                    src="https://mdbootstrap.com/img/new/avatars/7.jpg"
                                    className="rounded-circle"
                                    alt=""
                                    style={{ width: 45, height: 45 }}
                                />
                                <div className="ms-3">
                                    <p className="fw-bold mb-1">Kate Hunington</p>
                                    <p className="text-muted mb-0">kate.hunington@gmail.com</p>
                                </div>
                            </div>
                        </td>
                        <td>
                            <p className="fw-normal mb-1">Designer</p>
                            <p className="text-muted mb-0">UI/UX</p>
                        </td>
                        <td>
                            <span className="badge badge-warning rounded-pill d-inline">Awaiting</span>
                        </td>
                        <td>Senior</td>
                        <td>
                            <button
                                type="button"
                                className="btn btn-link btn-rounded btn-sm fw-bold"
                                data-mdb-ripple-color="dark"
                            >
                                Edit
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>

            <footer className="bg-body-tertiary text-center text-lg-start">
                <div className="text-center p-3">
                    © 2024 Copyright&nbsp;:&nbsp;
                    <a className="text-body" href="https://silant.com/">
                        Silant.com
                    </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <a className="text-body" href="tel:+7-8352-20-12-09">
                        +7-8352-20-12-09
                    </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <a className="text-body" href="https://t.me/LEON_JOFE" target="_blank" rel="noopener noreferrer">
                        <Telegram size={20} />
                    </a>
                </div>
            </footer>
        </React.Fragment >
    );
};
