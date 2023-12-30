import React from "react";

import { Telegram } from 'react-bootstrap-icons';

import RGB1 from '../images/RGB1.png';

export default function DashboardHome() {

    return (
        <React.Fragment>
            <header className="navbar navbar-expand-lg navbar-light bg-body-tertiary">
                <div className="container-fluid">

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <a className="navbar-brand mt-2 mt-lg-0" href="/home">
                            <img src={RGB1} height="90" alt="СИЛАНТ logo" loading="lazy" />
                        </a>
                        <a href="tel:+7-8352-20-12-09">
                            <div className="w-auto p-3 translucent-bg">+7-8352-20-12-09</div>
                        </a>
                        &nbsp;&nbsp;&nbsp;
                        <a href="https://t.me/LEON_JOFE" target="_blank" rel="noopener noreferrer">
                            <div className="w-auto p-3 translucent-bg"><Telegram size={30} /></div>
                        </a>
                    </div>

                    <div className="w-auto p-3 translucent-bg">Электронная сервисная книжка СИЛАНТ</div>
                    &nbsp;&nbsp;
                    <a href="/login" target="_blank" rel="noopener noreferrer">
                        <button type="button" className="btn btn-danger" data-mdb-ripple-init>Войти</button>
                    </a>

                </div>
            </header>

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
