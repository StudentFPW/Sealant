import React from "react";

import { InfoSquare } from 'react-bootstrap-icons';


export default function Navbar(props) {
    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-lg navbar-light"
                style={{ backgroundColor: "#EBE6D6" }}>
                <div className="container-fluid justify-content-between">
                    <div className="d-flex">
                        {props.staff === 'allow' ? <button
                            type="button"
                            className="btn btn-danger"
                            style={{ WebkitTextFillColor: "black", backgroundColor: '#D20A11' }}
                            data-mdb-ripple-init>
                            Зафиксировать технику
                        </button> : ""
                        }&nbsp;&nbsp;

                        <button
                            type="button"
                            className="btn btn-danger"
                            style={{ WebkitTextFillColor: "black", backgroundColor: '#D20A11' }}
                            data-mdb-ripple-init>
                            Зафиксировать ТО
                        </button>&nbsp;&nbsp;

                        {props.client === 'disallow' ? "" :
                            <button
                                type="button"
                                className="btn btn-danger"
                                style={{ WebkitTextFillColor: "black", backgroundColor: '#D20A11' }}
                                data-mdb-ripple-init>
                                Зафиксировать рекламацию
                            </button>
                        }
                    </div>

                    <ul className="navbar-nav flex-row d-none d-md-flex">
                        <li className="nav-item me-3 me-lg-1 active">
                            <h5>
                                Информация о комплектации и технических характеристиках вашей техники
                            </h5>
                        </li>
                    </ul>

                    <ul className="navbar-nav flex-row">
                        <p title="
                        1. Наведите курсор на интересующий вас элемент (В частности предложения с 3 точками!).
                        2. При нажатии на (заводской номер) машины, отображается полная информация определенный машины.
                        3. При нажатии на какую либо из моделей комплектующих машины, отображается полная информация (запчасти).
                        "><InfoSquare size={20} color="#163E6C" /></p>
                    </ul>
                </div>
            </nav>
        </React.Fragment>
    );
};
