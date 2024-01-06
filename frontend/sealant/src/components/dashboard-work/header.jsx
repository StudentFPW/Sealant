import React from "react";

import secureLocalStorage from "react-secure-storage";
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { Telegram } from 'react-bootstrap-icons';

import { main } from '../urls';
import RGB1 from './images/RGB1.png';


export default function Header() {
    let history = useHistory();

    const handleLogout = async () => {
        await axios.request({
            headers: {
                Authorization: `Bearer ${secureLocalStorage.getItem('token')}`,
            },
            method: "POST",
            url: `${main}/api/v1/logout/`
        }).then(() => {
            secureLocalStorage.removeItem('token');
            secureLocalStorage.removeItem('refreshToken');
            history.push('/');
        });
    };

    return (
        <React.Fragment>
            <header className="navbar navbar-expand-lg navbar-light"
                style={{ backgroundColor: "#ebe5d6" }}>
                <div className="container-fluid">

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <a className="navbar-brand mt-2 mt-lg-0"
                            href="https://silant.com/"
                            target="_blank"
                            rel="noopener noreferrer">
                            <img src={RGB1} height="90" alt="СИЛАНТ logo" loading="lazy" />
                        </a>

                        <a className="text-body" href="tel:+7-8352-20-12-09">
                            +7-8352-20-12-09
                        </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                        <a className="text-body"
                            href="https://t.me/LEON_JOFE"
                            target="_blank"
                            rel="noopener noreferrer">
                            <Telegram size={20} />
                        </a>
                    </div>

                    <div className="w-auto p-3 translucent-bg">
                        Электронная сервисная книжка СИЛАНТ
                    </div>&nbsp;&nbsp;

                    <button
                        onClick={handleLogout}
                        type="button"
                        className="btn btn-danger"
                        style={{ WebkitTextFillColor: "black" }}
                        data-mdb-ripple-init>
                        Выйти
                    </button>&nbsp;&nbsp;

                    <button
                        onClick={() => { history.push('/profile') }}
                        type="button"
                        className="btn btn-danger"
                        style={{ WebkitTextFillColor: "black" }}
                        data-mdb-ripple-init>
                        Профиль
                    </button>

                </div>
            </header>
        </React.Fragment>
    );
};
