import React from "react";


export default function Navbar(props) {
    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-lg navbar-light"
                style={{ backgroundColor: "#ebe5d6" }}>
                <div className="container-fluid justify-content-between">
                    <div className="d-flex">
                        {props.staff === 'allow' ? <button
                            type="button"
                            className="btn btn-danger"
                            style={{ WebkitTextFillColor: "black" }}
                            data-mdb-ripple-init>
                            Зафиксировать технику
                        </button> : ""
                        }&nbsp;&nbsp;

                        <button
                            type="button"
                            className="btn btn-danger"
                            style={{ WebkitTextFillColor: "black" }}
                            data-mdb-ripple-init>
                            Зафиксировать ТО
                        </button>&nbsp;&nbsp;

                        {props.client === 'allow' ? "" :
                            <button
                                type="button"
                                className="btn btn-danger"
                                style={{ WebkitTextFillColor: "black" }}
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
                        <p title="Наведите курсор на интересующий вас элемент">❗</p>
                    </ul>
                </div>
            </nav>
        </React.Fragment>
    );
};